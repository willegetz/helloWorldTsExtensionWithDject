import container from '../../container';
import { describe, it, beforeEach } from 'mocha';
import * as sinon from 'sinon';
import { assert } from 'chai';

describe('With BDD - Sample class', function () {
    let sample;
    let runSpy;
    let vscode;


    beforeEach(function () {
        sample = container.build('sample');
        runSpy = sinon.spy(sample, "run");

        vscode = container.build('vscodeFactory').getVsCode();
    })

    describe('BDD Run', () => {
        it('BDD writes to console when called', () => {
            sample.run();
            const wasCalledOnce = runSpy.calledOnce;

            assert.equal(true, wasCalledOnce);
        });

        it('BDD resolves the file path uri', function () {
            const filePath = 'c:/some/folder/path.txt';

            const actualUri = vscode.Uri.parse(filePath);
            const expectedUri = {
                "_formatted": null,
                "_fsPath": null,
                "authority": "",
                "fragment": "",
                "path": "/some/folder/path.txt",
                "query": "",
                "scheme": "c"
            };

            assert.deepEqual(expectedUri, actualUri);
        })
    });
});