import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository

categoriesRoutes.post("/", (req, res) => {

    const { name, description } = req.body

    const categoryAlreadyExists = categoriesRepository.findByName(name)
    if (categoryAlreadyExists) {
        return res.status(409).json({ error: 'This category already exists! ' })
    }

    const result = categoriesRepository.create({ name, description })

    return res.status(201).send(result)
})

categoriesRoutes.get('/', (req, res) => {
    const result = categoriesRepository.list()

    return res.status(201).json({ result })
})


export { categoriesRoutes };

