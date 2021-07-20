import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            songLookUp: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        this.setState({
            songLookUp: event.target.value
        });
        console.log(event.target.value);
       
    };
    handleSubmit = (event) => {
        console.log(this.state.songLookUp)
        event.preventDefault();
        let resultsFiltered = this.props.search.filter(song => {
            if(song.artist.toLowerCase()===this.state.songLookUp.toLowerCase()){
                return song
            }
            if (song.title.toLowerCase()===this.state.songLookUp.toLowerCase()){
                return song
            }
            if (song.album.toLowerCase()===this.state.songLookUp.toLowerCase()){
                return song
            }
            if (song.genre.toLowerCase()===this.state.songLookUp.toLowerCase()){
                return song
            }
            if (song.release_date.toLowerCase()===this.state.songLookUp.toLowerCase()){
                return song
            }
        });
        this.state({
            songLookUp:""
        })
        this.props.filterSongs(resultsFiltered)
        
    }

    render(){
        return(
            <React.Fragment>
                <div className="text-center">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Please enter your search parameter" value={this.state.songLookUp}
                        onChange={this.handleChange}>
                        </input>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchBar;