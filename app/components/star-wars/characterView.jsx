import React from 'react';
import styled, { css } from 'styled-components';
import { GridItem } from '../ui';

export default class CharacterView extends React.Component {
    character() {
        return (
            <GridItem
                active={this.props.data.url == this.props.selectedCharacter.url}
                onClick={() => this.props.selectCharacter(this.props.data)}
            >
                {this.props.data.name}
            </GridItem>
        );
    }
    error() {
        return 'There was an error loading data from API.';
    }
    render() {
        if (this.props.data) {
            return this.character();
        } else {
            return null;
        }
    }
}
