import * as vscode from 'vscode';
import container from './container';

import * as nonDjectSample from './mixedModules/NonDjectSample';

export function activate(context: vscode.ExtensionContext) {

	const sample = container.build('sample');
	sample.run();

	const sampleTwo = container.build('sampleTwo');
	sampleTwo.logOutData();

	const sampleThree = container.build('sampleThree');
	sampleThree.logOutData();

	const localVscode = container.build('vscodeFactory').getVsCode();
	const webUrl = 'https://github.com/cmstead/dject';

	const djectLink = localVscode.Uri.parse(webUrl);
	console.log(djectLink);

	console.log('Congratulations, your extension "helloworld" is now active!');

	let helloWorld = vscode.commands.registerCommand(
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

	let showModal = vscode.commands.registerCommand(
		'helloworld.showModal',
		() => {
			nonDjectSample.showModalMessage('Hello out there!');
		}
	)

		const otherWebUrl = 'https://github.com/cmstead';
	let openLink = vscode.commands.registerCommand(
		'helloworld.openToSite',
		() => {
			sampleThree.navigateToSite(otherWebUrl);
		}
	);

	context.subscriptions.push(helloWorld);
	context.subscriptions.push(showModal);
	context.subscriptions.push(openLink);
}

export function deactivate() { }