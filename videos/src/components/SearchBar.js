import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    onInputChange = e => {
        this.setState({ term: e.target.value });
    };

    onSubmitForm = e => {
        e.preventDefault();
        this.props.onSearchBarSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onSubmitForm}>
                    <div className="field">
                        <label>Buscar</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
