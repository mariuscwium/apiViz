import React from 'react';
import Api from '../app/components/explorer/Api.jsx';
import renderer from 'react-test-renderer';

describe('Testing Api component', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Calls the add promise prop', () => {
        fetch.mockResponseOnce(JSON.stringify({ test }));
        const addPromise = jest.fn();
        renderer.create(
            <Api endpoint="test" addPromise={addPromise}>
                {state => {
                    return null;
                }}
            </Api>
        );
        expect(addPromise).toHaveBeenCalled();
    });

    test('Displays films when mounted', async () => {
        fetch.mockResponseOnce(JSON.stringify({ title: 'A New Hope' }));

        let promise;
        const addPromise = newPromise => {
            promise = newPromise;
        };

        const component = renderer.create(
            <Api endpoint="test" addPromise={addPromise}>
                {state => {
                    if (state.data) {
                        return <div>{state.data.title}</div>;
                    } else {
                        return null;
                    }
                }}
            </Api>
        );

        await promise;
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
