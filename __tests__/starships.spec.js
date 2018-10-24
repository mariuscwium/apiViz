import React from 'react';
import Starships from '../app/components/explorer/starships.jsx';
import renderer from 'react-test-renderer';

describe('Testing Starships component', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Displays when mounted', async () => {
        fetch.mockResponseOnce(JSON.stringify({ name: 'Imperial shuttle' }));

        const selectedCharacter = {
            starships: [test]
        };

        let promise;
        const addPromise = newPromise => {
            promise = newPromise;
        };

        const component = renderer.create(
            <Starships selectedCharacter={selectedCharacter} addPromise={addPromise}>
                {state => {
                    if (state.data) {
                        return <div>{state.data.name}</div>;
                    } else {
                        return null;
                    }
                }}
            </Starships>
        );
        await promise;
        const instance = component.getInstance();
        instance.setState({ loading: false });

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
