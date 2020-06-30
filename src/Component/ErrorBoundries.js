import React from 'react';



class ErrorBoundries extends React.Component {
    constructor() {
        super();
        this.state = {
            gotIssue: false
        }
    }
    componentDidCatch() {
        this.setSate({gotIssue: true})
    }
    render() {
        return this.state.gotIssue ? <h1>Opps Something went wrong</h1> : this.props.children;
    }
}

export default ErrorBoundries;