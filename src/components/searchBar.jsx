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
        
    }
}