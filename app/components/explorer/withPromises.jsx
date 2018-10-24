import React from 'react';

const withPromises = Component => {
    class componentWithPromises extends React.Component {
        state = {
            loading: true,
            promises: []
        };

        addPromise = promise => {
            this.setState(previousState => ({
                loading: true,
                promises: [...previousState.promises, promise]
            }));
        };

        componentDidUpdate(prevProps, prevState) {
            if (this.state.promises !== prevState.promises) {
                Promise.all(this.state.promises).then(() => {
                    this.setState({ loading: false });
                });
            }
        }
        render() {
            return <Component addPromise={this.addPromise} {...this.props} {...this.state} />;
        }
    }
    return componentWithPromises;
};

export default withPromises;
