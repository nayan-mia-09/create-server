const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hi, I’m Nayan Mia, a passionate learner diving into full-stack web development with the MERN stack'MongoDB, Express.js, React, Node.js'.  Currently exploring how to build dynamic and responsive web applications using modern JavaScript technologies. I’m eager to learn and develop my skills in both frontend and backend development to create seamless, user-friendly experiences. My goal is to build powerful, scalable web applications and continuously improve my coding knowledge.\n");
});

server.listen(9090, "127.0.0.1" , () => {
    console.log("Server running Successfully.");
});