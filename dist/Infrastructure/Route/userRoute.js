"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CreateUserController_1 = require("../Controller/CreateUserController");
const container_1 = require("../DependencyInjection/container");
const router = express_1.default.Router();
router.put('/', (request, response) => {
    const createUserController = new CreateUserController_1.CreateUserController(container_1.randomUUIDService, container_1.userRepository);
    createUserController.execute(request, response);
    response.send('creating a new user');
});
exports.default = router;
