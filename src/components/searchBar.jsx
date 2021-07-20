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
            if (searchMatch){
                return true;
            }
        })
        return filteredSongs;
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let filteredSongs = this.filterSongs();
        this.props.isFiltered(filteredSongs);
    }
    render(){
        let filteredSongs = this.props.searchSong.filter(
            (searchSong) =>{
                return searchSong.song.indexOf(this.state.searchSong) !== -1
            }
        );
        return(
            <React.Fragment>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <h3>Search</h3>
                </form>
            </React.Fragment>
        )
    }
}