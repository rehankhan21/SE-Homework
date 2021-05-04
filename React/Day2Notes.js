/*
    Day 2 React 

    React functions return and pass properties as arguments, or PROPS.

    Props is a KEYWORD, props is an object which has values and
    properties.

    Pass properties when you use the compoenent in App.js
    <Hello fname="rehan" lname="khan" />
        This passes fname and lname to hello component as a props
    {props.fname}

    Functional Components vs Class Components

    - No data to manage in the components then we use functional, else we use class 
    component

    import React, {Component } from 'react'

    Super class is Component from react library

    when using props and getting props values/properties, in classes, we must use this
    keyword.
    ex. this.props.name, anytime we have a class we intianite a new object, we have a new object,
     React makes an object of the class on its own, which is why we use this operator. This keyword
     is how we refer to the object.

    class Greeting extends Component {

    }

    React State

    -State is also an object, this.state.message,

    -State is a way of storing private data for that object. States are private data
    related to the component.

    -For states we need constructors, we use the super keyword to get state from 
    component library. Assign state with Objects

    constructor() {
        super()
        this.state = {
            message : 'welcome'
        }
    }
    
    this.setState({
        message : "hi"
    })

    onClick = {() => this.changeMessage()}
*/