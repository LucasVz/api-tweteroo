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
    if(user.username !== '' && user.avatar !== ''){
        avatar = user.avatar;
        username = user.username;
        users.push(user);
        res.status(201).send("OK");
    }
    else{
        res.status(400).send("Todos os campos são obrigatórios!");
    }
});

server.post('/tweets', (req, res) => {
    const tweet = req.body;
    const username = req.headers.user;
    if(username !== '' && tweet.tweet !== ''){
        const tweetWithUser = { ...tweet, avatar, username };
        tweets.push(tweetWithUser);
        res.status(201).send("OK");
    }
    else{
        res.status(400).send("Todos os campos são obrigatórios!");
    }
});

server.get('/tweets', (req, res) => {
    const page = parseInt(req.query.page);
    if (page < 1) {
        res.status(400).send("Todos os campos são obrigatórios!");
    } 
    else {
        res.send(tweets.slice((page * 10)- 10, (page * 10)));
    }
});

server.listen(5000, () =>{
    console.log("rodando em localhost:5000");
});