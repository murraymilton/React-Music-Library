import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            searchSong: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    filterSongs(){
        let allSongs = this.props.allSongs.slice();
        let filteredSongs = allSongs.filter((song) => {
            let songsOfValues = Object.values(song);
            let searchMatch = false;
            for(let i = 0; i < songsOfValues.length; i++){
                if((typeof songsOfValues[i]) === 'string' && songsOfValues[i].toUpperCase() === this.state.searchSong.toUpperCase()){
                    searchMatch = true;
                }
            }