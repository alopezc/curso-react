import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { term: '' };

    onSearchBarSubmit = term => {
        console.log(term);
    };

    render() {
        return (
            <div className="video-app ui container">
                <SearchBar onSearchBarChange={this.onSearchBarSubmit} />
            </div>
        );
    }
}

export default App;
