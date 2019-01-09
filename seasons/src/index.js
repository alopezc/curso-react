import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err =>
                this.setState({
                    errorMessage: err.message || 'Position Unavialable'
                })
        );
    }

    renderContent() {
        if (!this.state.errorMessage && !this.state.lat) {
            return <Spinner text="Por favor acepta la peticion de ubicacion" />;
        }

        if (this.state.errorMessage && !this.state.lat) {
            return <Spinner text={this.state.errorMessage} />;
        }

        return <SeasonDisplay lat={this.state.lat} />;
    }

    render() {
        return <div className="content">{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
