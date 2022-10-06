import { GetUserUseCase } from "../../Application/UseCase/GetUser/GetUserUseCase";
import { UserRepository } from "../Repository/UserRepository";
import { Request, Response } from 'express';

export class GetUserController
{
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async execute(request: Request, response: Response) {
        const getUserUseCase = new GetUserUseCase(
            this.userRepository
        );

        const user = getUserUseCase.execute(request.params.uid);

        response.send((await user));
    }
}