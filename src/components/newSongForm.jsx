import React, {Component} from 'react';


class NewSongForm extends Component{


    constructor(props){
        super(props);
        this.state = {
            title: '',
            artist: '',
            album: '',
            release_date: '',
            errors: {
                title: '',
                artist: '',
                album: '',
                release_date:''
            }
            
        } 
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);      
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newSong = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            release_date: this.state.release_date
        }
        this.props.addSong(newSong);
        this.setState({
            title: '',
            artist: '',
            album: '',
            release_date: ''
        });
        alert(`newSongTitle: ${this.state.title}
            newSongArtist: ${this.state.artist}
            newSongAlbum: ${this.state.album}
            newSongRealeaseDate: ${this.state.realease_date}`)    
    };
        
    render(){
        return(
            <React.Fragment>
            <div className="d-flex justify-content-center">
                <form className="row jumbotron w-75" onSubmit={(event) => this.handleSubmit(event)}>
                    <h3 className="text-center" >Add New Song</h3>
                    <div className="form-group col-sm-3">
                        <div>
                            <label for="title">Song Title</label>
                            <input type="text" className="form-control" name="title" onChange={this.handleChange} value={this.state.title} />
                        </div>
                        <div>
                            {this.state.errors.title ? <p className="text-danger">{this.state.errors.title}</p> : ''}
                        </div>
                    </div>
                    <div className="form-group col-sm-3">
                        <div>
                            <label for="artist">Artist</label>
                            <input type="text" className="form-control" name="artist" onChange={this.handleChange} value={this.state.artist} />
                        </div>
                        <div>
                            {this.state.errors.artist ? <p className="text-danger">{this.state.errors.artist}</p> : ''}
                        </div>
                    </div>
                    <div className="form-group col-sm-3">
                        <label for="album">Album</label>
                        <input type="text" className="form-control" name="album" onChange={this.handleChange} value={this.state.album} />
                    </div>
                    <div className="form-group col-sm-3">
                        <label for="release_date">Release Date</label>
                        <input type="date" className="form-control" name="release_date" onChange={this.handleChange} value={this.state.release_date} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary w-md-25">Submit New Song</button>
                    </div>
                </form>
            </div>
            </React.Fragment>
        )
    }
}

export default NewSongForm;