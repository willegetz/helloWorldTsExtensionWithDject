import container from '../../container';
import { describe, it, beforeEach } from 'mocha';
import * as sinon from 'sinon';
import { assert } from 'chai';

describe('With BDD - Sample class', function () {
    console.log('BDD registered modules: ', container.getRegisteredModules());
    let sample;
    let runSpy;
    let vscodeUri;

    beforeEach(function () {
        sample = container.build('sample');
        runSpy = sinon.spy(sample, "run");

        vscodeUri = container.build('vscodeFactory').getUri();
    })

    describe('BDD Run', () => {
        it('BDD writes to console when called', () => {
            sample.run();
            const wasCalledOnce = runSpy.calledOnce;

            assert.equal(true, wasCalledOnce);
        });

        it('BDD resolves the file path uri', function () {
            const filePath = 'c:/some/folder/path.txt';

            const actualUri = vscodeUri.parse(filePath);
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