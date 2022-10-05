"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUserUseCase_1 = require("../../Application/UseCase/CreateUser/CreateUserUseCase");
class CreateUserController {
    constructor(randomUUIDService, userRepository) {
        this.randomUUIDService = randomUUIDService;
        this.userRepository = userRepository;
    }
    execute(request, response) {
        const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(this.userRepository, this.randomUUIDService);
        createUserUseCase.execute(request.body.name);
    }
}
exports.CreateUserController = CreateUserController;
