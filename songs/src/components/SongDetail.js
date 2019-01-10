import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Seleciona una canción</div>;
    }

    return (
        <div>
            <h3>Detalles:</h3>
            <p>Título: {song.title}</p>
            <p>Duración: {song.duration}</p>
        </div>
    );
};

const mapStateToProps = state => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
