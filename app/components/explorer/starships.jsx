import React from 'react';
import SWAPI from './Api.jsx';
import { Loader, Grid } from '../ui';
import StarshipView from './starshipView.jsx';
import withPromises from './withPromises.jsx';

class Starships extends React.Component {
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <h1 style={{ textAlign: 'center' }}>Character starships</h1>

                {this.props.selectedCharacter.starships.length === 0 && (
                    <p style={{ textAlign: 'center' }}>No starships found for this character</p>
                )}
                {this.props.loading &&
                    this.props.selectedCharacter.starships.length !== 0 && <Loader text="Loading starships" />}
                <Grid show={!this.props.loading}>
                    {this.props.selectedCharacter.starships &&
                        this.props.selectedCharacter.starships.length > 0 &&
                        this.props.selectedCharacter.starships.map(starship => (
                            <SWAPI endpoint={starship} key={starship} addPromise={this.props.addPromise}>
                                {data => {
                                    return <StarshipView {...data} />;
                                }}
                            </SWAPI>
                        ))}
                </Grid>
            </div>
        );
    }
}

export default withPromises(Starships);
