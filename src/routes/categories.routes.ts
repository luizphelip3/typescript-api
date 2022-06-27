import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/service/CreateCategory.service';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository

categoriesRoutes.post("/", (req, res) => {

    const { name, description } = req.body

    const createCategoryService = new CreateCategoryService(categoriesRepository);

    const result = createCategoryService.execute({name, description})
    
    return res.status(201).send()
})

categoriesRoutes.get('/', (req, res) => {
    const result = categoriesRepository.list()

    return res.status(201).json({ result })
})

export { categoriesRoutes };

