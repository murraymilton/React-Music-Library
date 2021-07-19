import React from "react";


const DisplayMusic = (props) => {
    return(
        <React.Fragment>
            <table>
                <thead>
                    <span><tr>Song Title</tr></span>
                    <span><tr>Artist</tr></span>
                    <span><tr>Album</tr></span>
                    <span><tr>Release Date</tr></span>       
                </thead>
                {props.songs.map((song, {id}) => {
                    return (
                        // console.log(song)
                        <div key = {id}>
                            <tbody>
                                <td>{song.Title}</td>
                                <td>{song.Artist}</td>
                                <td>{song.Album}</td>
                                <td>{song.RealeaseDate}</td>
                            </tbody>
                        </div>
                    );
                })}
            </table>
        </React.Fragment>
    );
}

export default DisplayMusic;