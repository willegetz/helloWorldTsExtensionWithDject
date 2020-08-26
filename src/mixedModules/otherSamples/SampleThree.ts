class SampleThree {
    vscode;

    constructor(
        vscodeFactory
    ) {
        this.vscode = vscodeFactory.getVsCode();
        console.log('In the constructor of Sample 3');
    }

    logOutData() {
        console.log('Sample Three is logging out data');
    }

    navigateToSite(url) {
        console.log('Third Sample URL: ', url);
        
        const uri = this.vscode.Uri.parse(url);

        console.log('URI: ', uri);

        this.vscode.env.openExternal(
            uri
        );
    }

}

SampleThree['@instantiable'] = true;

export default {
    name: 'sampleThree',
    value: SampleThree
}