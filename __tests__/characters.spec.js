import React from 'react';
import Characters from '../app/components/explorer/characters.jsx';
import renderer from 'react-test-renderer';

describe('Testing Characters component', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Displays when mounted', async () => {
        fetch.mockResponseOnce(JSON.stringify({ name: 'Luke Skywalker', url: 'test' }));

        const selectedFilm = {
            characters: [test]
        };

        let promise;
        const addPromise = newPromise => {
            promise = newPromise;
        };

        const component = renderer.create(
            <Characters selectedFilm={selectedFilm} selectedCharacter={false} addPromise={addPromise}>
                {state => {
                    if (state.data) {
                        return <div>{state.data.name}</div>;
                    } else {
                        return null;
                    }
                }}
            </Characters>
        );
        await promise;
        const instance = component.getInstance();
        instance.setState({ loading: false });

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
