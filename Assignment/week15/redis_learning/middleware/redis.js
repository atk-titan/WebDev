import Redis from "ioredis";

const redis = new Redis();

const rateLimiter = ({ limit = 20, TTL = 60 } = {}) => async (req, res, next) => {
    try {
        // Get client IP (works behind proxies)
        const clientIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
        const key = `rate:${clientIP}`;

        // Increment request count
        const requestCount = await redis.incr(key);

        // If first request, set TTL
        if (requestCount === 1) {
            await redis.expire(key, TTL);
        }

        // Remaining time for the key
        const remainingTime = await redis.ttl(key);

        if (requestCount > limit) {
            return res.status(429).json({
                success: false,
                message: `Rate limit exceeded. Try again in ${remainingTime} seconds.`
            });
        }

        // Allow the request
        next();
    } catch (err) {
        console.error("Rate limiter error:", err);
        // Fail open: allow request if Redis fails
        next();
    }
};

export default rateLimiter;