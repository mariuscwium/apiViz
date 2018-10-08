import React from 'react';
import SWAPI from '../app/components/star-wars/SWAPI.jsx';
import renderer from 'react-test-renderer';

describe('Testing SWAPI component', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Calls the add promise prop', () => {
        fetch.mockResponseOnce(JSON.stringify({ test }));
        const addPromise = jest.fn();
        const component = renderer.create(
            <SWAPI endpoint="test" addPromise={addPromise}>
                {state => {
                    return null;
                }}
            </SWAPI>
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
            <SWAPI endpoint="test" addPromise={addPromise}>
                {state => {
                    if (state.data) {
                        return <div>{state.data.title}</div>;
                    } else {
                        return null;
                    }
                }}
            </SWAPI>
        );

        await promise;
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
