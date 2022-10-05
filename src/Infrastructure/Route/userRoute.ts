import express, {Router, Request, Response} from 'express';
import { CreateUserController } from '../Controller/CreateUserController'; 
import { randomUUIDService, userRepository } from '../DependencyInjection/container';

const router: Router = express.Router();

router.put('/', (request: Request, response: Response) => {
    const createUserController = new CreateUserController(randomUUIDService, userRepository);
    createUserController.execute(request, response);

    response.send('creating a new user');
});

export default router;