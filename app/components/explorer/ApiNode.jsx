import React from 'react';
import Api from './Api.jsx';
import { Loader, Grid, GridItem } from '../ui';
import { isString, isPlainObject, isArray, isNumber, truncate } from 'lodash';
import validUrl from 'valid-url';

import withPromises from './withPromises.jsx';

class ApiNode extends React.Component {
    state = {
        openNodes: []
    };

    clickHandler = (key, e) => {
        e.stopPropagation();

        let openNodes = [];
        if (this.isOpen(key)) {
            openNodes = this.state.openNodes.filter(item => item !== key);
        } else {
            openNodes = [...this.state.openNodes, key];
        }
        this.setState({ openNodes });
    };

    isOpen = key => this.state.openNodes.indexOf(key) !== -1;

    nodeElement = (key, data) => {
        if (!data) return null;
        const isOpen = () => {
            return this.isOpen(key);
        };
        const isEndpoint = () => {
            return isString(data) && validUrl.isHttpsUri(data);
        };
        const isObjectNode = () => {
            return isPlainObject(data);
        };
        const isArrayNode = () => {
            return isArray(data);
        };
        return (
            <GridItem key={key} onClick={e => this.clickHandler(key, e)}>
                <h4>
                    {key} <small>{typeof data}</small>
                </h4>
                {(isString(data) || isNumber(data)) && truncate(data)} <br />
                {isOpen() && isEndpoint() && <ApiNode endpoint={data} />}
                {isOpen() &&
                    isObjectNode() && (
                        <Grid show={true}>{Object.keys(data).map(key => this.nodeElement(key, data[key]))}</Grid>
                    )}
                {isOpen() &&
                    isArrayNode() && <Grid show={true}>{data.map((item, i) => this.nodeElement(i, item))}</Grid>}
            </GridItem>
        );
    };

    render() {
        return (
            <div>
                {this.props.loading && <Loader text="Loading data" />}

                <Api endpoint={this.props.endpoint} key={this.props.endpoint} addPromise={this.props.addPromise}>
                    {({ loading, data }) => {
                        if (!data) {
                            return null;
                        } else {
                            return (
                                <Grid show={!loading}>
                                    {Object.keys(data).map(key => this.nodeElement(key, data[key]))}
                                </Grid>
                            );
                        }
                    }}
                </Api>
            </div>
        );
    }
}

export default withPromises(ApiNode);
