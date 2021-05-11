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

    Controlled Compnents

    HTML elements such as input, textarea and select will maintain its own state
    and update it based on the user input by using states and setState
    React is the single source of truth.

    These components are taking control over traversing the DOM api, the component 
    does document.getElementById().value on its own and takes the value and stores 
    it locally in react states. Does events such as OnChange and OnSubmit.
*/