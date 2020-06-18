import module0 from '../src/modules/sample';
import module1 from '../src/modules/SampleTwo';


const dject = require('dject');
const container = dject.new({});


container.copyProps(module0.value, module0);
container.register(module0.value, module0.name);

container.copyProps(module1.value, module1);
container.register(module1.value, module1.name);


export default container;