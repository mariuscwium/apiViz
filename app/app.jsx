import React from 'react';
// import SWAPI from './components/explorer/Api.jsx';
import ApiNode from './components/explorer/ApiNode.jsx';
// import FilmsView from './components/explorer/filmsView.jsx';
import Characters from './components/explorer/characters.jsx';
import Starships from './components/explorer/starships.jsx';

export default class StarWarsApp extends React.Component {
    state = {
        selectedFilm: false,
        selectedCharacter: false
    };

    selectFilm = film => {
        this.setState({ selectedFilm: film });
    };
    selectCharacter = character => {
        this.setState({ selectedCharacter: character });
    };

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, padding: '0 1em' }}>
                    <ApiNode endpoint="https://swapi.co/api/people/" />
                </div>
                {this.state.selectedFilm && (
                    <div style={{ flex: 1, padding: '0 1em' }}>
                        <Characters selectCharacter={this.selectCharacter} {...this.state} />
                    </div>
                )}
                {this.state.selectedCharacter && (
                    <div style={{ flex: 1, padding: '0 1em' }}>
                        <Starships {...this.state} />
                    </div>
                )}
            </div>
        );
    }
}
