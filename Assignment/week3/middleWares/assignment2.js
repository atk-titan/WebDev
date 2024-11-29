const express = require('express');
const app = express();
const port = 6000;

users=[{
    userid : '511',
    start : 0,
    count : 0
},{
    userid : '512',
    start : 0,
    count : 0
},{
    userid : '513',
    start : 0,
    count : 0
}];

const rateLimiter = (req, res, next) => {
    const userId = req.headers['userid'];
    const user = users.find((ele) => ele.userid === userId);

    if (!user) {
        return res.status(404).json({ msg: 'User not found' }); // If user doesn't exist
    }

    const currentTime = Date.now();

    if (user.count === 0) {
        // First request: initialize count and start time
        user.count = 1;
        user.start = currentTime;
    } else if (user.count < 5 && currentTime - user.start < 1000) {
        // Within rate limit window
        user.count += 1;
    } else if (currentTime - user.start >= 1000) {
        // Reset after 5 seconds
        user.count = 1;
        user.start = currentTime;
    } else {
        // Rate limit exceeded
        return res.status(429).json({ msg: 'Rate limit exceeded. Please wait.' });
    }
    next(); // Proceed to the next middleware or route
};

app.use(rateLimiter);

app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
});
  
app.post('/user', function(req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});