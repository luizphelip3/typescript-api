import express, { Request, Response } from "express";

const app = express();

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    return res.send({ message: 'Tá rodando, mlk!' })
})

app.post("/courses", (req, res) => {
    const { name } = req.body;

    
    return res.json({name})
})

app.listen(3333, () => console.log('Server is running at port 3333!'))