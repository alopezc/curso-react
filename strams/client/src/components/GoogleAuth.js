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

    handleLogin() {
        if (this.auth === null) {
            return false;
        }

        try {
            window.gapi.auth2.getAuthInstance().signIn();
        } catch (e) {
            console.log(e);
        }
    }

    handleLogout() {
        if (this.auth === null) {
            return false;
        }

        try {
            window.gapi.auth2.getAuthInstance().signOut();
        } catch (e) {
            console.log(e);
        }
    }

    renderAuthButton() {
        if (!this.state.isSignedIn || this.state.isSignedIn === null) {
            return (
                <button
                    onClick={() => {
                        this.handleLogin();
                    }}
                >
                    Login
                </button>
            );
        }

        return (
            <button
                onClick={() => {
                    this.handleLogout();
                }}
            >
                Logout
            </button>
        );
    }

    render() {
        return this.renderAuthButton();
    }
}

export default GoogleAuth;
