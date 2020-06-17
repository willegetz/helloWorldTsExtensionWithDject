import { describe, it, beforeEach } from 'mocha';
import container from '../container';

describe('Sample class', () => {
    const testContainer = container.new()

    describe('Run', () => {
        it('writes to console when called', () => {
            const depencencyTree = testContainer.getDependencyTree('sample');
            console.log(depencencyTree);
            const sample = testContainer.build('sample');
            sample.run();
        });
    });
});

describe('SampleTwo class', function () {
    const testContainerTwo = container.new();

    describe('Log out data', function () {
        it('writes data to the console when called', function () {
            const depencencyTree = testContainerTwo.getDependencyTree('sampleTwo');
            console.log(depencencyTree);
            const sample = testContainerTwo.build('sampleTwo');
            sample.logOutData();
        });
    });
});