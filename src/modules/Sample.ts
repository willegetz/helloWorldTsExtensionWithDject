class Sample {
    constructor(){
        console.log('Instantiating Sample');
    }

    run(){
        console.log('Run Sample');
    }
}

Sample['@instantiable'] = true;

export default {
    name: 'sample',
    value: Sample
}