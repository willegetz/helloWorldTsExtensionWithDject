const dependencies = [
    '__container'
]

class SampleTwo {
    constructor(...injectedDependencies) {
        const [container] = injectedDependencies;
        const { } = container.buildDependencyMap(dependencies, injectedDependencies);

        console.log('In the constructor of Sample Two');
    }

    logOutData() {
        console.log('Sample Two is logging out data');
    }
}

SampleTwo['@instantiable'] = true;
SampleTwo['@dependencies'] = dependencies;

export default {
    name: 'sampleTwo',
    value: SampleTwo
}