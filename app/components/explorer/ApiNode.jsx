import React from 'react';
import Api from './Api.jsx';
import { Loader, Grid, GridItem } from '../ui';

import withPromises from './withPromises.jsx';

class ApiNode extends React.Component {
    render() {
        const { endpoint } = this.props;
        return (
            <div>
                {this.props.loading && <Loader text="Loading data" />}

                <Api endpoint={endpoint} key={endpoint} addPromise={this.props.addPromise}>
                    {({ loading, data }) => {
                        if (!data) {
                            return null;
                        } else {
                            return (
                                <Grid show={!loading}>
                                    {Object.keys(data.results).map(key => (
                                        <GridItem key={key}>
                                            <h3>{data.results[key].name}</h3>
                                            <Grid show={!loading}>
                                                {Object.keys(data.results[key]).map(key => (
                                                    <GridItem key={key}>{key}</GridItem>
                                                ))}
                                            </Grid>
                                        </GridItem>
                                    ))}
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
