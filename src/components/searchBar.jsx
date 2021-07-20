import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            songLookUp: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value
        })
        this.props.filter(event.target.value);
    };

    render(){
        return(
            <form onSubmit={(event)=> this.handleSubmit(event, this.props)}>
                <div>
                    <label>Search by Song:</label>
                    <input type="text" name="searchText" onChange={this.handleChange} value={this.state.searchText}/>
                    <label>Search by Album:</label>
                    <input type="text" name="searchText" onChange={this.handleChange} value={this.state.searchText}/>
                    <label>Search by Artist:</label>
                    <input type="text" name="searchText" onChange={this.handleChange} value={this.state.searchText}/>
                    <label>Search by Realease Date:</label>
                    <input type="text" name="searchText" onChange={this.handleChange} value={this.state.searchText}/>
                </div>
            </form>
        );
    }
}

export default SearchBar;
  
   
  