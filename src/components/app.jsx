import React, {Component} from'react';
import axios from 'axios';
import NewSongForm from './newSongForm';
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
        }
        catch(ex){
            console.log('Error in API call!');
        }
    }

    addSong = (newSong) => {
        let newSongObject = {
          title: newSong.title,
          artist: newSong.artist,
          album: newSong.album,
          release_date: newSong.release_date
        }
        let tempSongs = this.state.songs;
        tempSongs.push(newSongObject);
        this.setState({
          songs: tempSongs
        });
    }

    // async postNewSong(song) {
    //     await axios.post(`http://127.0.0.1:8000/music_library/${song}/`);
    //     console.log(song);
    // }

    async deleteSong(song, songs) {
        let tempSongs = `${this.state.songs}`
        tempSongs.pop(song);
        this.setState({
            songs: tempSongs
        });
        await axios.delete(`http://127.0.0.1:8000/music_library/${song}/`);
        console.log(song)
    }


    render() {
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <NewSongForm songs={this.state.songs} addSong={this.addSong} postNewSong={this.postNewSong}/>
                    <DisplayMusic songs={this.state.songs} deleteSong={this.deleteSong} />
                </div>
            </React.Fragment>
        )
    }
}
export default App;