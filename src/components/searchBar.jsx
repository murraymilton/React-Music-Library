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
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <h3 className="text-center mt-5">Filter Database</h3>
                    <p className="text-center">Enter title, artist, album, or release date.</p>
                    <div className="form-group d-flex justify-content-center">
                        <div>
                            <input type="text" className="form-control" name="searchTerm" onChange={this.handleChange} value={this.state.searchTerm} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}


export default SearchBar;