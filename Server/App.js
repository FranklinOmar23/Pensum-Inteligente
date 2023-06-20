import express from 'express';

const app = express();

app.get("/ping", (req, res) =>{
    res.json([])
});

export default app