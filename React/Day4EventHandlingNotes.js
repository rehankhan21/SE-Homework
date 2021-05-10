/*
    Day 4 React

    Event Handling in React

    In react you pass event handlers as a call back function

    // This binding is necessary to make "this" work in the callback
    this.handleClick = this.handleClick.bind(this);

    onClick={this.handleClick}

    isToggleOn: !state.isToggleOn

    this.setState(state => ({
        isToggleOn: !state.isToggleOn
    }))

    Forms in React

    While the user is filing the form you want those changes to be stored locally
    that is an event, onChange event occurs which is handled by React locally
    so that the page doesnt have to reload.
*/