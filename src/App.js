// create your App component here
import { Component } from "react";

class App extends Component {
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
    }
    render(){
        return(
            null
        )
    }
}

export default App