import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string,
    description: string,
}

class CategoriesRepository {
    private categories: Category[] = [];

    constructor() {
        this.categories = []
    }

    create({ description, name }: ICreateCategoryDTO): Category {

        const category: Category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        });

        this.categories.push(category);
        return category;
    }
}

export { CategoriesRepository };
