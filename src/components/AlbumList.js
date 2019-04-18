import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// only class based component use state
class AlbumList extends Component {
    // class level properties
    state = {
        albums: []
    };

    // direct excute when component been render
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => {
                // component level state (state change)
                this.setState({ albums: res.data });
            });
    }

    renderAlbums() {
        return this.state.albums.map(album =>{ 
            return <AlbumDetail key={album.title} album={album} />;
        });
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
};


export default AlbumList;