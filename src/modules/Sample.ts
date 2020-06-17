class Sample {
    constructor() {
        
    }

    run(){
        console.log('Instantiating Sample');
    }
}

Sample['@instantiable'] = true;

export default {
    name: 'sample',
    value: Sample
}