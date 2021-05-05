/*
    React Day 3

    class component
    -Has its own private data / states

    send the props to the super constructor

    props is an object
    
    states is also an object

    props get passed between components, but states cannot pass values between components
    is this why we use react context api / redux??????

    class needs a render() function to return the value back to root app

    cannot write this.state.count to change counts value but we can write
    this.state.message to get the value

    too change states value we have to setState() method
        ex.
        this.setState({
             count: this.state.count + 1 //this.state.count++ doesnt work here, not a noraml variable
        }, () => {
            console.log(' call back value ' + this.state.count);
        })

        //console.log(this.state.count)

    setState takes 2 arguments

    setState is asynchronous !!!!
    with async methods we have 2 parameters, first has the data and the second is a callback function,
    just like eventlistners which has ("onclick", callback function)

    <button onClick={() => this.function()}>

    When using onClicks in JSX we need brackets {} instead of qoutes
    and if we want the THIS keyword to hold its value, then we need to use 
    and arrouw function inside the brackets pointing towards the function
    we are trying to call.
    And the function ends with its parenthesis.

    If we just wrote this <button onClick={this.function()}>
    The this will continously call this fucntion so take off the parenthesis
    in this case to not call the function until we click the button.
*/