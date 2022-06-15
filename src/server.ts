import express, { Request, Response } from "express";

const app = express();

app.get('/', (req: Request, res: Response) => {
    console.log('Tá rodando')
    return res.send({ message: 'Tá rodando, mlk!' })
})

app.listen(3333, () => console.log('Server is running at port 3333!'))