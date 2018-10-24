import React from 'react';
import styled, { css } from 'styled-components';
import { Loader, Grid, GridItem } from '../ui';
import { sortBy } from 'lodash';

export default class FilmsView extends React.Component {
    loading() {
        return <Loader text="Loading films" />;
    }

    error() {
        return <div>There was an error loading data from API.</div>;
    }

    films() {
        const format_date = date_string => {
            return new Date(date_string).getFullYear();
        };
        const films = sortBy(this.props.data.results, o => {
            return o.episode_id;
        });
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Select a film</h1>
                <Grid show={true}>
                    {films.map(film => (
                        <GridItem
                            onClick={() => this.props.selectFilm(film)}
                            key={film.episode_id}
                            active={film.episode_id == this.props.selectedFilm.episode_id}
                        >
                            <h3>
                                {film.title}
                                <br />
                                <small>({format_date(film.release_date)})</small>
                            </h3>
                            <small>Directed by: {film.director}</small>
                        </GridItem>
                    ))}
                </Grid>
            </div>
        );
    }

    render() {
        if (this.props.loading) {
            return this.loading();
        } else if (this.props.data) {
            return this.films();
        } else {
            return this.error();
        }
    }
}
