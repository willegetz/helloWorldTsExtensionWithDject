import * as vscode from 'vscode';
import container from './container';

export function activate(context: vscode.ExtensionContext) {

	const sample = container.build('sample');
	sample.run();

	console.log('Congratulations, your extension "helloworld" is now active!');

	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from helloworld!');
	});

	context.subscriptions.push(disposable);
}


export function deactivate() { }