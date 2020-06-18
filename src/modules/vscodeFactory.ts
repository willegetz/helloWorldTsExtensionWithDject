class VscodeFactory {
    preservedVscode;

    constructor(
        vscode
    ) {
        this.preservedVscode = vscode;
    }

    countKeys() {
        const keys = Object.keys(this.preservedVscode);
        console.log('Preserved Key count: ', keys.length);
    }

    getVsCode() {
        return this.preservedVscode;
    }
}

VscodeFactory['@instantiable'] = true;

export default {
    name: 'vscodeFactory',
    value: VscodeFactory
}