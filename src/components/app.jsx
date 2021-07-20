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

    async deleteSong(song) {
        try{
            let res = await axios.delete(`http://127.0.0.1:8000/music_library/${song}/`);
            if(res.status === 200){
                alert(`${this.state.song.title} by ${this.state.song.artist} deleted from your database.`);
                let tempSongs = axios.get(`http://127.0.0.1:8000/music_library/`);
                this.setState({
                    songs: tempSongs.data
                });
            }
        }
        catch(ex){
            alert('Error in request: Unable to delete song')
        }
    }


    render() {
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <NewSongForm songs={this.state.songs} addSong={this.addSong} />
                    <DisplayMusic songs={this.state.songs} deleteSong={this.deleteSong} />
                </div>
            </React.Fragment>
        )
    }
}
export default App;