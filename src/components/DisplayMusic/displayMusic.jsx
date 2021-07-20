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
                        <div key = {id}>
                            <tbody>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                            </tbody>
                            <div className="d-flex justify-content-center">
                            <button className="btn btn-primary w-md-25"onClick={() => props.deleteSong(song.id)}>Delete Song</button>
                        </div>
                        </div>
                    );
                })}
            </table>
        </React.Fragment>
    );
}

export default DisplayMusic;