import React, {Component} from'react';
<<<<<<< HEAD
=======
import axios from 'axios';
import CreateMusic from './createMusic';
>>>>>>> e5146a9ceb4191455ab61760430c62045110c19d
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
                    <CreateMusic refreshTable={this.state.songs} />
                </div>
            </React.Fragment>
        )
    }
}
export default App;