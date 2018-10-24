import React from 'react';
import { Loader, GridItem } from '../ui';
import styled from 'styled-components';

export default class StarshipView extends React.Component {
    starship() {
        return <GridItem>{this.props.data.name}</GridItem>;
    }
    error() {
        return 'There was an error loading data from API.';
    }
    render() {
        if (this.props.data) {
            return this.starship();
        } else {
            return null;
        }
    }
}
