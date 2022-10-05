import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';

const container:ContainerBuilder  = new ContainerBuilder();
let loader:YamlFileLoader = new YamlFileLoader(container);

// await loader.load('./Infrastructure/services.yaml');


export default container;