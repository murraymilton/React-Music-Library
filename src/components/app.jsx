import React, {Component} from'react';
import axios from 'axios';
import NewSongForm from './newSongForm';
import DisplayMusic from './DisplayMusic/displayMusic';
import SearchBar from './searchBar';

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
        console.log("*** State-songs : ",this.state.songs)
        let tempSongs = this.state.songs;
        tempSongs.push(newSongObject);
        this.setState({
          songs: tempSongs
        });
        
      }
      async addSong(song){
        console.log(song)
        try{
            let response = await axios.post('http://127.0.0.1:8000/music_library/', song);
            // console.log(response.data)
            // alert('Song Added!')
            this.setState({
                song:response.data
            });
            this.getAllSongs()
        }
        catch(e){
            console.log(e.message)
        }
    
    }


    render() {
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <NewSongForm songs={this.state.songs} addSong={this.addSong} />
                    <SearchBar songs={this.state.songs} />
                    <DisplayMusic songs={this.state.songs} />
                    
                </div>
            </React.Fragment>
        )
    }
}
export default App;