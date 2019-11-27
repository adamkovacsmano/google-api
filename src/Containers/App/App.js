import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import EventsPage from "../EventsPage";
import Button from "../../Components/Button";
import Header from "../../Components/Header";

firebase.initializeApp({
  apiKey: "AIzaSyDnu41PGdsUYJ9Axg78J9amTagEf18iyOg",
  authDomain: "events-ffdd0.firebaseapp.com"
});

class App extends Component {
  state = { isSignedin: false };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedin: !!user });
      console.log(user);
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.isSignedin ? (
          <>
            <Button
              name={"Sign Out"}
              onClick={() => firebase.auth().signOut()}
            ></Button>
            <Header></Header>
            <EventsPage
              userName={firebase.auth().currentUser.displayName}
            ></EventsPage>
          </>
        ) : (
          <>
            <Header></Header>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
