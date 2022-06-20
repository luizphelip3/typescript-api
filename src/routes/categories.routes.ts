import { Router } from 'express';
import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository

categoriesRoutes.post("/", (req, res) => {

    const { name, description } = req.body

   const result =  categoriesRepository.create({name, description})

    return res.status(201).send(result)
})

export { categoriesRoutes };

