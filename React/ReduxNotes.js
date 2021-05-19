/*
    React Redux Notes

    Lifts up the states from your indiviual components.
    Turns it into a global state, and becomes accesible to the entire app

    *Provider
    wrap our entire app in a provider component, pass the entire app as a child 
    componenet, then the provider can access any state in any component

    Store- Object that holds the entire state of our applicaton, global state

    Reducer- Plain js function that handles all the logic when it comes to changing states

    Action- Javascript object that describes the type of change we want to make

    Dispatch- responsible for sending an action to the reducer to update state
    kind of like setState

    Provider- component that makes the redux store avaiable to all other components

    npm install redux react-redux

    *index.js
    import{ createStore } from 'redux'
    import{ Provider } from 'react-redux'

    import reducer from './reducer'

    const storeRedux = createStore(reducer)

    ReactDOM.render(
        <Provider store={storeRedux}>
            <App/>
        </Provider>
    )


    *reducer.js

    export const initialState = {
        groceries: [
            {
                item: bana
                units: 1
                isPurchased: false
                id: 0
            
            },
            {
                item: apple
                id:1
            }
        ]
    }

    // Action is an object
    action = {
        type: "",
        payload: ""
    }
    // giving state an initial value
    export defualt function reducer(state = initialState, action) {
        //type of action
        switch(action.type) {

            case 'ADD_ITEM':
                // some logic
                // alert("reached the reducer")
                return { groceries [...state.groceries, action.payload]}
            
            case 'TOGGLE_PURCHASE':

                return state

            // this is the else of a switch statement
            defualt:
                return state
        }
    }

    How to acess the store in class compoenents??

    we need to import a connect fucntion at the top, this allows us to dispatch
    import { connect } from 'react-redux'

    and at the bottom we need to export using the connect method

    // we are creating our own props that are mapped to data in our redux store
    // this prop is mapped to our initial state we made in the reducer
    // we can access this by using this.props.groceries
    const mapStateToProps = state => {
        return(
            groceries: state.groceries
            state:state
        )
    }

    export defualt connect(mapStateToProps)(Groceries); <--- higher order fucntion

    *Dispatch is like new setState, but now for the redux store
    this.props.dispatch({

        type: 'ADD_ITEM',
        payload: item.id

    })

    **How to use redux with functional compoenents

    for functional components we use more Hooks,
    import { useDispatch, useSelector } from 'react-redux'

    const dispatch = useDispatch()

    not a dispatch prop, instead dispatch is just in a variable

    const groceries = useSelector(state => state.groceries)
    //console.log(groceries)
    this is like mapStateToProp

    Redux Dev Tools

    npm install redux-devtools-extension

    index.js

    import { composeWithDevTools } from 'redux-devtools-extension'

    const store = createStore(reducer, composeWithDevTools( ))
*/