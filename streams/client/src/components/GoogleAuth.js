import React from 'react';

class GoogleAuth extends React.Component {
    auth = null;
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId:
                        '950707017666-olbjhch9pbsc988flg063ornv72n8q84.apps.googleusercontent.com',
                    scope: 'profile email'
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignInClick = () => {
        if (this.auth === null) {
            return false;
        }

        this.auth.signIn();
    };

    onSignOutClick = () => {
        if (this.auth === null) {
            return false;
        }

        this.auth.signOut();
    };

    renderAuthButton() {
        if (!this.state.isSignedIn || this.state.isSignedIn === null) {
            return (
                <button
                    className="ui red google button"
                    onClick={this.onSignInClick}
                >
                    <i className="google icon" /> Sign In with Google
                </button>
            );
        }

        return (
            <button
                className="ui red google button"
                onClick={this.onSignOutClick}
            >
                Sign Out
            </button>
        );
    }

    render() {
        return this.renderAuthButton();
    }
}

export default GoogleAuth;
