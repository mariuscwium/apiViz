import React from 'react';
import Api from './Api.jsx';
import { Loader, Grid } from '../ui';
import CharacterView from './characterView.jsx';
import withPromises from './withPromises.jsx';

class Characters extends React.Component {
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <h1 style={{ textAlign: 'center' }}>Select a character</h1>

                {this.props.loading && <Loader text="Loading characters" />}

                <Grid show={!this.props.loading}>
                    {this.props.selectedFilm.characters &&
                        this.props.selectedFilm.characters.map(character => (
                            <Api endpoint={character} key={character} addPromise={this.props.addPromise}>
                                {data => {
                                    return (
                                        <CharacterView
                                            selectCharacter={this.props.selectCharacter}
                                            {...data}
                                            {...this.props}
                                        />
                                    );
                                }}
                            </Api>
                        ))}
                </Grid>
            </div>
        );
    }
}

export default withPromises(Characters);
