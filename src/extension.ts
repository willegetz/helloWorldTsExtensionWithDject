import * as vscode from 'vscode';
import container from './container';

class ExtensionActivation {
	constructor(){
		console.log('In the constructor of ExtensionActivation');
	}

	getActivateEvent = function () {
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

	getDeactivationEvent = function () {
		return function () {

		}
	}

}

const extensionActivation = new ExtensionActivation();
export function activate(context: vscode.ExtensionContext) {
	extensionActivation.getActivateEvent()(context);
}

export function deactivate() {
	extensionActivation.getDeactivationEvent()();
}

