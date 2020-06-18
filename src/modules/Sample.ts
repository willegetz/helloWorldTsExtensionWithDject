class Sample {
    private second;

    constructor(
        sampleTwo,
    ) {
        console.log('In the constructor of Sample');
        this.second = sampleTwo;
    }

    run() {
        this.second.logOutData();
        console.log('Run Sample');
    }
}

Sample['@instantiable'] = true;

export default {
    name: 'sample',
    value: Sample
}