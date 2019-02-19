import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
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
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
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
        if (!this.props.isSignedIn || this.props.isSignedIn === null) {
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

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
    mapStateToProps,
    { signIn, signOut }
)(GoogleAuth);
