const Dject = require('dject/class/utilities/Dject');

class vscode1 {
    public static '@singleton' = true;
    public static '@dependencies' = [
        'vscode'
    ];

    public static build(dependencies: any[]) {
        console.log('Building how many dependencies?: ', dependencies.length);
        return Dject.build(vscode1, dependencies);
    }
}

export default Dject.prepareExport(vscode1);