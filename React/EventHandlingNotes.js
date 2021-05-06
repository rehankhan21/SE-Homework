/*
    Event Handling in React

    In react you pass event handlers as a call back function

    // This binding is necessary to make "this" work in the callback
    this.handleClick = this.handleClick.bind(this);

    onClick={this.handleClick}

    isToggleOn: !state.isToggleOn

    this.setState(state => ({
        isToggleOn: !state.isToggleOn
    }))
*/