import * as vscode from 'vscode';

const showModalMessage = function(message){
    vscode.window.showInformationMessage(
        message,
        {modal: true}
    );
}

export {
    showModalMessage
}