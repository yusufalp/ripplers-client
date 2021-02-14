import React from 'react';
require('dotenv').config()

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        client_id: process.env.REACT_APP_CLIENT_ID,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.state.isSignedIn) {
      return <button>Sign Out</button>;
    } else {
      return <button>Sign In</button>;
    }
  };

  render() {
    return (
      <div>
        <p>Google Auth</p>
        <div>{this.renderAuthButton()}</div>
      </div>
    );
  }
}

export default GoogleAuth;