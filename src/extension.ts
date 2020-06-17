import * as vscode from 'vscode';
import container from './container';

module ExtensionActivation {

	// constructor(functionName: string){
	// 	console.log('In the constructor of ExtensionActivation for ' + functionName);
	// }

	export function getActivateEvent() {
		return function (context: vscode.ExtensionContext) {

			// const sample = container.build('sample')();
			// sample.run();

			// Activating extension 'spike.helloworld' failed: Unable to parse arguments from function or expression: Sample.
			// Command 'Hello World' resulted in an error (command 'helloworld.helloWorld' not found)

			console.log('Congratulations, your extension "helloworld" is now active!');

			let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
				vscode.window.showInformationMessage('Hello World from helloworld!');
			});

			context.subscriptions.push(disposable);
		}
	}

	export function getDeactivationEvent(){
		return function(){
			
		}
	}

}


export function activate(context: vscode.ExtensionContext){
	ExtensionActivation.getActivateEvent()(context);
}

export function deactivate(){
	ExtensionActivation.getDeactivationEvent()();
}

