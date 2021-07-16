import React from "react";


const DisplayMusic = (props) => {
    return(
        <div>
            <table>
                <tr>Song Title</tr>
                <tr>Artist</tr>
                <tr>Album</tr>
                <tr>Release Date</tr>
                {props.songs.map((song, index) =>{
                    return(
                        <div key = {index}>
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
        </div>
    )
}

export default DisplayMusic;