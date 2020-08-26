import module0 from '../src/mixedModules/otherSamples/SampleThree';
import module1 from '../src/modules/Sample';
import module2 from '../src/modules/SampleTwo';
import module3 from '../src/modules/vscodeFactory';


const dject = require('dject');
const container = dject.new({});


container.copyProps(module0.value, module0);
container.register(module0.value, module0.name);

container.copyProps(module1.value, module1);
container.register(module1.value, module1.name);

container.copyProps(module2.value, module2);
container.register(module2.value, module2.name);

container.copyProps(module3.value, module3);
container.register(module3.value, module3.name);


export default container;