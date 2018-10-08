import React from 'react';
import SWAPI from './components/star-wars/SWAPI.jsx';
import FilmsView from './components/star-wars/filmsView.jsx';
import Characters from './components/star-wars/characters.jsx';
import Starships from './components/star-wars/starships.jsx';

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
                    <SWAPI endpoint="https://swapi.co/api/films">
                        {data => {
                            return <FilmsView selectFilm={this.selectFilm} {...data} {...this.state} />;
                        }}
                    </SWAPI>
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
