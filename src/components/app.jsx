import React, {Component} from'react';
import axios from 'axios';
import CreateMusic from './createMusic';
import DisplayMusic from './DisplayMusic/displayMusic';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            songs:[]
        }
    }
    componentDidMount(){
        this.makeGetRequest();
    }
    async makeGetRequest(){
        try{
            let response =await axios.get('http://127.0.0.1:8000/music_library/')
            this.setState({
                songs:response.data
            });
            console.log(response);
        }
        catch(ex){
            console.log('Error API call! Cannot');
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