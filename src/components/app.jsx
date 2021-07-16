import React, {Component} from'react';
import axios from 'axios';
import DisplayMusic from './DisplayMusic/displayMusic';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            songs:[ 
            {title:''},
            {artist:''},
            {album:''},   
            {release_date:null},
            ]
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