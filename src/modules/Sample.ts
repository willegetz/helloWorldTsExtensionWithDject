class Sample {
    private second;
    private vscodeFactory;

    constructor(
        sampleTwo,
        vscodeFactory
    ) {
        console.log('In the constructor of Sample');
        this.second = sampleTwo;
        this.vscodeFactory = vscodeFactory;
    }

    run() {
        this.second.logOutData();
        console.log('Run Sample');
        const uri = this.vscodeFactory.getUri();
        const parsedContent = uri.parse('c:/some/location.txt');

        console.log('Run from Sample: ', parsedContent);
    }
}

Sample['@instantiable'] = true;

export default {
    name: 'sample',
    value: Sample
}