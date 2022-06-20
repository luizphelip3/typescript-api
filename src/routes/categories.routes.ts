import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/", (req, res) => {

    const { name, description } = req.body;

    categories.push({ name, description, id: uuidv4() })

    return res.status(201).send(categories)
})

export { categoriesRoutes };

