/*
    React

    React - reacts to state changes. Considered a view library.

    MVC Model View Control

    View is the front end
    Controller is the logic JS
    Model is the database

    Important Terms
    -Components
    -Virtual DOM, is a tree of components, aka React DOM 
        like how the normal DOM is a tree of nodes

        -Virtual DOM is a light weight representation of the Real DOM,
        when you change the virtual DOM it will automatically change the
        Real DOM.

        -React Element is the Root of the DOM, when you create the react app, the index.html
        contains the root element. This root element we have to acess in the virtual DOM.
    -JSX
    -Babel
    -

    React Tips

    INDEX.JS
    -When you export from a component, you need to import in your index.js
    -You need to import you React DOM, in you index.js
    -ReactDOM.render(
        in the ReactDOM you are calling the App component that you made in the
        app.js
    )
    -Close react elements like you close HTML elements

    -Index.js is getting the root element from Index.html, then turning it into
    a ReactDOM / Virtual DOM

    APP.js

    -Is the root that imports / takes all your components, then Index.js imports app.js
    and renders it in the virutual DOM
*/