class Sample {
    private second;

    constructor(
        sampleTwo
    ) {
        this.second = sampleTwo;
        console.log('In the constructor of Sample');
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