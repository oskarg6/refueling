import express, {Router, Request, Response} from 'express';
import { CreateUserController } from '../Controller/CreateUserController'; 
import { GetAllUserController } from '../Controller/GetAllUserController';
import { randomUUIDService, userRepository } from '../DependencyInjection/container';

const router: Router = express.Router();

router.put('/', (request: Request, response: Response) => {
    const createUserController = new CreateUserController(randomUUIDService, userRepository);
    createUserController.execute(request, response);
});

router.get('/', (request: Request, response: Response) => {
    const getAllUserController = new GetAllUserController(userRepository);
    getAllUserController.execute(request, response);
});

export default router;