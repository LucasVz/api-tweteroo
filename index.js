import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

 const users = [];
 const tweets = [];

 let username;
 let avatar;

server.post('/sign-up', (req,res) => {
    const user = req.body;
    avatar = user.avatar;
    username = user.username;
    users.push(user);
    res.send("OK");
});

server.listen(5000, () =>{
    console.log("rodando em localhost:5000");
});