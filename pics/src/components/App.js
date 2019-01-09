import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash.js';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async term => {
        if (!term) {
            return;
        }

        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });

        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
