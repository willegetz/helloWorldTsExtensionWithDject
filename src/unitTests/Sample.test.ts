import container from '../container';
import * as vscode from 'vscode';
import { describe, it, beforeEach } from 'mocha';
import * as sinon from 'sinon';
import { assert } from 'chai';

describe('Sample class', function () {
    let sample;
    let runSpy;

    beforeEach(function () {
        sample = container.build('sample');
        runSpy = sinon.spy(sample, "run");
    })

    describe('Run', () => {
        it('writes to console when called', () => {
            sample.run();
            const wasCalledOnce = runSpy.calledOnce;

            assert.equal(true, wasCalledOnce);
        });

        it('resolves the file path uri', function () {
            sinon.replace(vscode.Uri, 'parse', function(path){
                return 'Boo!'
            });
            
            const filePath = 'c:/some/folder/path.txt';
            const fileUri = vscode.Uri.parse(filePath);

            assert.equal('', fileUri)
        })
    });
});