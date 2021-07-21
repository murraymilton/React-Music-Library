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
        event.preventDefault();
        let resultsFiltered = this.props.search.filter(songs => 
        songs.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||songs.artist.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
        songs.album.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||songs.release_date.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
        songs.genre.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
        this.props.filterSongs(resultsFiltered)
    };
    render(){
        return(
            <React.Fragment>
                <form onSubmit= {this.handleSubmit}>
                    <h3 className="text-center mt-5">Filter Search</h3>
                    <p className="text-center">Search by title, artist, album, or release date.</p>
                    <div className="form-group d-flex justify-content-center">
                        <div>
                            <input type="text" className="form-control" name="searchTerm" onChange={this.handleChange} value={this.state.searchTerm} />
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <button type="submit" className="btn btn-primary btn-lg">Search</button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}


export default SearchBar;