/*
    React Router

    what is it?

    Bring all your components in you root app.

    import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

    BrowseRouter has to have the alias of Router for Router to work, Router wraps the 
    root apps div tags

    Inside the root apps div tag we have the Switch component which helps us switch
    between the different Routes(components)

    HTTP request is handled in your form component, with your submit handler

    //exact component is used only for home page
    <Route path="/" exact component={Home} />
    <Route path="/" component={About} />

    Link

    import { Link } from "react-router-dom"

    
*/