import React, {Component} from'react';
import DisplayMusic from './DisplayMusic/displayMusic';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            songs:[]
        }
    }
    

    render() {
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <DisplayMusic  songs={this.state.songs} />
                </div>
            </React.Fragment>
        )
    }
}
export default App;