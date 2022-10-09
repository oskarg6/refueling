import { CreateUserUseCase } from '../../Application/UseCase/CreateUser/CreateUserUseCase';
import { UserRepository } from '../Repository/UserRepository';
import { RandomUUIDService } from '../Service/RandomUUIDService';
import { Request, Response } from 'express';
import { UserAggregateFactory } from '../../Domain/Aggregate/Factory/UserAggregateFactory';

export class CreateUserController
{
    private randomUUIDService: RandomUUIDService;
    private userRepository: UserRepository;
    private userAggregateFactory: UserAggregateFactory;

    constructor(randomUUIDService: RandomUUIDService, userRepository: UserRepository, userAggreagateFactory: UserAggregateFactory) {
        this.randomUUIDService = randomUUIDService;
        this.userRepository = userRepository;
        this.userAggregateFactory = userAggreagateFactory;
    }
 
    public execute(request: Request, response: Response) {

        const createUserUseCase = new CreateUserUseCase(
            this.userRepository,
            this.randomUUIDService,
            this.userAggregateFactory,
        );

        createUserUseCase.execute(request.body.name);

        response.status(201);
    }
}
