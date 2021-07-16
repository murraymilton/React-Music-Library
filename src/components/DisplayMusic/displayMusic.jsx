import React, { Component } from "react";
import axios from "axios";


class DisplayMusic extends Component{
    constructor(props){
        super(props);
        this.state={
            songs:[

            ]
        }
    }
    componentDidMount(){
        this.makeGetRequest();
    }
    async makeGetRequest(){
        try{
            let response =await axios.get('http://127.0.0.0.1:8000/music_library')
            this.setState({
                songs:response.data
            });
        }
        catch(ex){
            console.log('Error API call! Cannot');
        }
    }
    render(){
        return(
            <div>
                <table>
                    <tr>Song Title</tr>
                    <tr>Artist</tr>
                    <tr>Album</tr>
                    <tr>Release Date</tr>
                    {this.state.songs.map((song) =>{
                        return(
                            <div>
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
            </div>
        )
    }
}

export default DisplayMusic;