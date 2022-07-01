import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/implementations/ISpecificationsRepository";

interface IRequest{
    name: string;
    description: string;
}


class CreateSpecificationsService{
    constructor(private specificationsRepository: ISpecificationsRepository){}
    execute({name, description}: IRequest): Specification{
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);
        if (specificationAlreadyExists){
            throw new Error("This specification name is already being used!")
        }
        return this.specificationsRepository.create({
            name, description
        });
    }
}

export { CreateSpecificationsService };
