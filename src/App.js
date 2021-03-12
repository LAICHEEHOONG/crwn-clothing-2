import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.compoent';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';




class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log('Component did mount');

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {

          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });

      }

      this.setState({ currentUser: userAuth }, () => console.log(this.state));



    })

  }

  componentWillUnmount() {

    console.log('component will unmount');

    this.unsubscribeFromAuth();
  }


  render() {

    console.log('Render');

    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>

          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>




      </div>
    );
  }

}

export default App;
