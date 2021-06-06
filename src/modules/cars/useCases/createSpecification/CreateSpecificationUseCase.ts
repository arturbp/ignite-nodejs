import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private spacificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.spacificationsRepository.findByName(name);

    if (specificationAlreadyExists)
      throw new Error("Specification already exists.");

    this.spacificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
