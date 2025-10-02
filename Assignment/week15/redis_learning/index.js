import client from "./redisClient.js";

// Topics Covered in Redis examples:
// Strings → get, set, expire
// Lists → lpush, lrange, rpop
// Sets → sadd, smembers, sismember
// Hashes → hset, hget, hgetall
// Counters → incr, incrby
// Sorted Sets → zadd, zrevrange

async function init() {
    // ---------- Strings ----------
    console.log("=== Strings Example ===");
    await client.set("user:3", "mane");
    await client.expire("user:3", 4);

    let res = await client.get("user:3");
    console.log("Initial:", res);

    setTimeout(async () => {
        res = await client.get("user:3");
        console.log("After expiry:", res);
    }, 4401);

    // ---------- Lists ----------
    console.log("\n=== Lists Example ===");
    let unreadMessages = "messages:unread";
    await client.del(unreadMessages); // reset before pushing
    await client.lpush(unreadMessages, [
        "hii how are you",
        "what are you doing",
        "tell me about yourself"
    ]);

    let resList = await client.lrange(unreadMessages, 0, -1);
    console.log("Unread messages:", resList);

    // Pop from list
    let popped = await client.rpop(unreadMessages);
    console.log("Popped last message:", popped);

    // ---------- Sets ----------
    console.log("\n=== Sets Example ===");
    let onlineUsers = "users:online";
    await client.del(onlineUsers);
    await client.sadd(onlineUsers, "gaurav", "rohit", "maria");
    await client.sadd(onlineUsers, "gaurav"); // duplicate ignored

    let users = await client.smembers(onlineUsers);
    console.log("Online users:", users);

    let isMember = await client.sismember(onlineUsers, "rohit");
    console.log("Is rohit online?", isMember);

    // ---------- Hashes ----------
    console.log("\n=== Hashes Example ===");
    let userProfile = "user:100";
    await client.del(userProfile);
    await client.hset(userProfile, {
        name: "Gaurav",
        age: 21,
        city: "Mumbai"
    });

    let profile = await client.hgetall(userProfile);
    console.log("User profile:", profile);

    let userAge = await client.hget(userProfile, "age");
    console.log("User age:", userAge);

    // ---------- Counters ----------
    console.log("\n=== Counters Example ===");
    let pageViews = "page:home:views";
    await client.del(pageViews);
    await client.incr(pageViews);
    await client.incr(pageViews);
    await client.incrby(pageViews, 5);

    let count = await client.get(pageViews);
    console.log("Page views:", count);

    // ---------- Sorted Sets ----------
    console.log("\n=== Sorted Sets Example ===");
    let leaderboard = "game:leaderboard";
    await client.del(leaderboard);
    await client.zadd(leaderboard, [
        { score: 100, value: "player1" },
        { score: 200, value: "player2" },
        { score: 150, value: "player3" }
    ]);

    let topPlayers = await client.zrevrange(leaderboard, 0, -1, { WITHSCORES: true });
    console.log("Leaderboard:", topPlayers);

    return;
}

init();