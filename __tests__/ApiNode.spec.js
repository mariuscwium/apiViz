import React from 'react';
import ApiNode from '../app/components/explorer/ApiNode.jsx';
import renderer from 'react-test-renderer';

describe('Testing ApiNode component', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Displays response object keys ', async () => {
        let promise;
        const addPromise = newPromise => {
            promise = newPromise;
        };

        fetch.mockResponseOnce(JSON.stringify({ key1: 'value1', key2: 'value2' }));

        const component = renderer.create(<ApiNode addPromise={addPromise} endpoint="mockedEndpoint" />);
        await promise;
        console.log(component.toJSON().children[1].children);
    });
});
