const dependencies = [
    '__container',
    'vscodeFactory'
]

class SampleTwo {
    private vscodeFactory;

    constructor(...injectedDependencies){
        const [container] = injectedDependencies;
        const {
            vscodeFactory
        } = container.buildDependencyMap(dependencies, injectedDependencies);

        this.vscodeFactory = vscodeFactory;

        console.log('In the constructor of Sample Two');
    }

    logOutData(){
        console.log('Sample Two is logging out data');

        const uri = this.vscodeFactory.getUri()
        const uriPath = uri.parse('d:/another/path/exists.txt');

        console.log('SampleTwo logs out the following URI: ', uriPath)
    }
}

SampleTwo['@instantiable'] = true;
SampleTwo['@dependencies'] = dependencies;

export default{
    name: 'sampleTwo',
    value: SampleTwo
}