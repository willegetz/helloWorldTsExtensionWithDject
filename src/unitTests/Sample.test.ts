import container from '../container';
import { describe, it, beforeEach } from 'mocha';
import * as sinon from 'sinon';
import { assert } from 'chai';

describe('Sample class', function () {
    const testContainer = container.new();
    console.log('Container: Registerd Modules: ', JSON.stringify(container.getRegisteredModules(), null, 4));
    console.log('TestContainer: Registerd Modules: ', JSON.stringify(testContainer.getRegisteredModules(), null, 4));


    let sample;
    let runSpy;
    let vscode;

    beforeEach(function () {
        sample = container.build('sample');
        runSpy = sinon.spy(sample, "run");
        
        vscode = testContainer.build('vscodeFactory');
    })

    describe('Run', () => {
        it('writes to console when called', () => {
            sample.run();
            const wasCalledOnce = runSpy.calledOnce;

            assert.equal(true, wasCalledOnce);
        });
    });
});