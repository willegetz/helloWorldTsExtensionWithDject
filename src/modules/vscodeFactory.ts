// import * as vscode from 'vscode';

class VscodeFactory {
    localVscode;

    constructor(
        vscode
    ) {
        this.localVscode = vscode.Uri;
    }

    private vscodeProvider(callback){
        import('vscode').then(module => {
            console.log('We have the vscode');
            callback(module)
        });
    }

    private async getVsCode(){
        this.localVscode = await import('vscode');
    }

    async getAsync(){
        await this.getVsCode()
        return this.localVscode;
    }

    getUri() {
        // const callback = function(vscodeModule){
        //     this.localVsode = vscodeModule;
        // }

        // this.vscodeProvider(callback);
        console.log('Trying to get vscode.Uri');
        return this.localVscode;

    }
}

VscodeFactory['@instantiable'] = true;

export default {
    name: 'vscodeFactory',
    value: VscodeFactory
}