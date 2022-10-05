"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_dependency_injection_1 = require("node-dependency-injection");
const container = new node_dependency_injection_1.ContainerBuilder();
let loader = new node_dependency_injection_1.YamlFileLoader(container);
// await loader.load('./Infrastructure/services.yaml');
exports.default = container;
