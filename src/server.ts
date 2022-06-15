import express, { Request, Response } from "express";

const app = express();

app.use(express.json())


app.listen(3333, () => console.log('Server is running at port 3333!'))