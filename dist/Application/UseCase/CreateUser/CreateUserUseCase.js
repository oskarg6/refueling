"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const User_1 = require("../../../Domain/Entity/User");
class CreateUserUseCase {
    constructor(userRepository, randomUUIDService) {
        this.userRepository = userRepository;
        this.randomUUIDService = randomUUIDService;
    }
    execute(name) {
        const uid = this.randomUUIDService.createUUID();
        const user = new User_1.User(uid, name);
        this.userRepository.save(user);
        return user;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
