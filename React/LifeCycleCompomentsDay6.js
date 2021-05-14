/*
    React Day 6

    Life Cycle of Compoenents

    Components are created(mounted on the DOM), grow by updating, and then die (unmount on DOM)
    This is a component life cycle.

    Different life cycle methods that React provides at different pahses of a components life.

    **Lifecycle Methods

    A components lifecycle is classifed into four parts:

    !. initialization
    2. mounting
    3. updating, and
    4. unmounting

    Initialization Method

    class Initialize extends React.Component {

        constructor(props) {
            super(props);

            // initialization process
            this.state = {
                date : new Date(),
                clickedStatus: false
            };
        }
    }

    Mounting

    This is when our React component mounts on the DOM, Before it renders the first time, 
    componentWillMount() happens first. Protected method name.

    ComponentDidMoutn excutes right after initial rendering

    compenentWillReceieceProps(nextProps) When compoenment receives new props, this also gets the props

    shouldComponentUpdate(nextProps, nextState) Before rendering again, after receiveing new props or , return true
    return false to prevent rendering
    Event Handling took place

    componentWillUpdate(nextProps, nextState)

    componentDidUpdate(prevProps, prevState)

    componentWillUnmount() 

    https://cdn-media-1.freecodecamp.org/images/NpWCjYyzfnJkn7rXwDmyWwK2DqInFJu6-g1O
*/