import * as vscode from 'vscode';
import container from './container';

export function activate(context: vscode.ExtensionContext) {

	const sample = container.build('sample');
	sample.run();

	const sampleTwo = container.build('sampleTwo');
	sampleTwo.logOutData();

	const localVscode = container.build('vscodeFactory').getVsCode();
	const webUrl = 'https://github.com/cmstead/dject';

	const djectLink = localVscode.Uri.parse(webUrl);
	console.log(djectLink);

	console.log('Congratulations, your extension "helloworld" is now active!');

	let disposable = vscode.commands.registerCommand(
		'helloworld.helloWorld',
		() => {
			vscode.window.showInformationMessage(
				'Hello World from helloworld!',
				{ modal: false },
				'Visit dject on GitHub'
			).then(function (selectedOption) {
				if (selectedOption !== undefined) {
					localVscode.env.openExternal(
						djectLink
					);
				}
			});
		});

	context.subscriptions.push(disposable);
}

export function deactivate() { }