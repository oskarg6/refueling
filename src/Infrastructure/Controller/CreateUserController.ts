import { CreateUserUseCase } from '../../Application/UseCase/CreateUser/CreateUserUseCase';
import { UserRepository } from '../Repository/UserRepository';
import { RandomUUIDService } from '../Service/RandomUUIDService';
import { Request, Response } from 'express';

export class CreateUserController
{
    private randomUUIDService: RandomUUIDService;
    private userRepository: UserRepository;

    constructor(randomUUIDService: RandomUUIDService, userRepository: UserRepository) {
        this.randomUUIDService = randomUUIDService;
        this.userRepository = userRepository;
    }
 
    public execute(request: Request, response: Response) {

        const createUserUseCase = new CreateUserUseCase(
            this.userRepository,
            this.randomUUIDService
        );

        createUserUseCase.execute(request.body.name);
    }
}
