import React, {Component} from 'react';
import axios from 'axios';

class CreateMusic extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            artist: '',
            album: '',
            release_date: '',
            like: 0,
            errors: {
                title: '',
                artist: ''
            }
        }       
    }
    componentDidMount(){
        this.postNewSong();
    }

    handleChange = (event) => {
        let errors = this.state.errors;
        switch(event.target.name){
            case 'title':
                errors.title = event.target.value.length < 2 ? 'Title must be at least two characters.' : null;
                break;
            case 'artist':
                errors.artist = event.target.value.length < 2 ? 'Artist must be at least two characters.' : null;
                break;
            default:
        }

        this.setState({
            [event.target.name]: event.target.value,
            errors: errors
        })
    }

    async postNewSong(){
        let newSong = Object.assign({},this.state);
        newSong.errors = '';
        try{
            let response = await axios.post('http://127.0.0.1:8000/music_library/', newSong);
            console.log(response)
            if (response.status === 201){
                alert(`"${this.state.title}" by ${this.state.artist} added to database!`)
                this.props.refreshTable();
                this.setState({
                    title: '',
                    artist: '',
                    album: '',
                    release_date: '',
                    like: 0
                })
            }
        }
        catch(ex){
            alert('Error in API call! Song not added.');
        }
    }

    isInvalid(){
        if (this.state.errors.title || this.state.errors.artist || !this.state.album || !this.state.release_date){
            return true;
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.isInvalid()){
            alert('Please make sure all fields have been completed.');
            return
        }
        this.postNewSong();
    }

    render(){
        return(
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
        )
    }
}

export default CreateMusic;