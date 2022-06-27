import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationsService } from "../modules/cars/service/CreateSpecification.service";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    
    const createSpecificationsService = new CreateSpecificationsService(
        specificationsRepository
    );

    const result = createSpecificationsService.execute({ name, description });

    return res.status(201).send(result);
});

export { specificationsRoutes };
