import { Specification } from "../../model/Specification";
import { ICreateSpecificationsDTO, ISpecificationsRepository } from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository{
    private specifications: Specification[];

    constructor(){
        this.specifications = []
    }

    create({ name, description }: ICreateSpecificationsDTO): Specification {
        const specification = new Specification();
       Object.assign(specification, {
        name, description, created_at: new Date(),
       });
       this.specifications.push(specification) 
       return specification
    }

    findByName(name: string): Specification {
       const specification = this.specifications.find(specification => specification.name === name);
       return specification;
    }

}

export { SpecificationsRepository };
