import * as assert from 'assert';
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

import container from '../../container';

suite('Extension Test Suite', () => {
	const testContainer = container.new();
	const sample = testContainer.build('sample');
	
	vscode.window.showInformationMessage('Start all tests.');
	
	test('Sample test', () => {
		sample.run();

		assert.equal(-1, [1, 2, 3].indexOf(5));
		assert.equal(-1, [1, 2, 3].indexOf(0));
	});
});
