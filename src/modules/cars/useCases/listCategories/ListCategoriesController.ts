import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";



class ListCategoriesController{
  constructor(private listCateoriesUseCase: ListCategoriesUseCase){}
  handle(req: Request, res: Response): Response{
    const all = this.listCateoriesUseCase.execute();

    return res.json(all)
  }
}

export { ListCategoriesController };
