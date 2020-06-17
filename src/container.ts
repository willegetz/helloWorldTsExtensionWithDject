import module0 from '../src/modules/Sample';


const dject = require('dject');
const container = dject.new({});


container.copyProps(module0.value, module0);
container.register(module0.value, module0.name);


export default container;