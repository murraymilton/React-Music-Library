import React, {Component} from 'react';


class NewSongForm extends Component{


    constructor(props){
    super(props);
    this.state = {
        SongTitle:'',
        SongArtist:'',
        SongAlbum:'',
        SongReleaseDate:'',
    }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
      }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log (event.target.value)
      }


    handleSubmit = (event) => {
        event.preventDefault();
        const song = {         
            title: this.state.SongTitle,
            artist: this.state.SongArtist,
            album: this.state.SongAlbum,
            release_date: this.state.SongReleaseDate,
           
        }
        console.log(song)
        this.props.addSong(song);
            this.setState({               
                newSongTitle: this.state.newSongTitle,
                newSongArtist: this.state.newSongArtist,
                newSongAlbum: this.state.newSongAlbum,
                newSongReleaseDate: this.state.newSongReleaseDate,
            },
            console.log(this)
            );
    }

    render() {
        return(
            <React.Fragment>
            <div className="d-flex justify-content-center">
                <form className="row g-3
                " onSubmit={(event) => this.handleSubmit(event)}>
                    <h3 className="text-center" >Add New Song</h3>
                    <div className="col-md-6">
                        <div>
                            <label for="title">Song Title</label>
                            <input type="text"class="form-control"name="SongTitle"placeholder="Title"onChange={this.handleChange}value={this.state.title}/>
                        </div>
                    </div>
                    <div className=" col-md-6">
                        <div>
                            <label for="artist">Artist</label>
                            <input  type="text"class="form-control"name="SongArtist"placeholder="Artist"onChange={this.handleChange}value={this.state.artist} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label for="album">Album</label>
                        <input type="text"class="form-control"name="SongAlbum"placeholder="Album"onChange={this.handleChange}value={this.state.album} />
                    </div>
                    <div className="col-md-6">
                        <label for="release_date">Release Date</label>
                        <input  type="datetime-local"class="form-control"name="SongReleaseDate"placeholder="Release Date"onChange={this.handleChange}value={this.state.release_date} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary w-md-25">Submit</button>
                    </div>
                </form>
            </div>
            </React.Fragment>
        );
    }
}

export default NewSongForm;




