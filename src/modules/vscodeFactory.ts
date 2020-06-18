// import * as vscode from 'vscode';

class VscodeFactory {
    localVscode;

    constructor(
        vscode
    ) {
        this.localVscode = vscode.Uri;
    }

    getUri() {
        console.log('Trying to get vscode.Uri');
        return this.localVscode;

    }
}

VscodeFactory['@instantiable'] = true;

export default {
    name: 'vscodeFactory',
    value: VscodeFactory
}