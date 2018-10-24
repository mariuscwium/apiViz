import React from 'react';
export default class Api extends React.Component {
    state = {
        loading: true
    };
    componentDidMount() {
        this.props.addPromise(
            fetch(this.props.endpoint)
                .then(function(response) {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return Promise.reject('Unable to fetch data');
                    }
                })

                .then(body => {
                    this.setState({ data: body, loading: false });
                })
        );
    }

    render() {
        return this.props.children({
            ...this.state
        });
    }
}

Api.defaultProps = {
    addPromise: () => {}
};
