import React, { Component } from "react";
import axios from 'axios';


class DisplayMusic extends Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            songs: []
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
            console.log('Error API call! Cannot');
        }
    }

    render() {
        return(
            <React.Fragment>
                <table>
                    <thead>
                        <span><tr>Song Title</tr></span>
                        <span><tr>Artist</tr></span>
                        <span><tr>Album</tr></span>
                        <span><tr>Release Date</tr></span>       
                    </thead>
                    {this.state.songs.map((song, index) => {
                        return (
                            // console.log(song)
                            <div key = {index}>
                                <tbody>
                                    <td>{song.Title}</td>
                                    <td>{song.Artist}</td>
                                    <td>{song.Album}</td>
                                    <td>{song.RealeaseDate}</td>
                                </tbody>
                            </div>
                        );
                    })}
                </table>
            </React.Fragment>
        );
    }
}

export default DisplayMusic;