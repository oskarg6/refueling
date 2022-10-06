import { GetAllUserUseCase } from '../../Application/UseCase/GetAllUser/GetAllUserUseCase';
import { UserRepository } from '../Repository/UserRepository';
import { Request, Response } from 'express';

export class GetAllUserController
{
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }
 
    public async execute(request: Request, response: Response) {

        const getAllUserUseCase = new GetAllUserUseCase(
            this.userRepository
        );

        const userList = getAllUserUseCase.execute();

        response.send((await userList));
    }
}
