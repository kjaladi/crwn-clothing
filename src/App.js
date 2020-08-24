import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import setUserReducer from './redux/user/user.actions';
import {Redirect} from 'react-router-dom';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log("from app.js",this.props);
    const {setCurrentUser} = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {

          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();


  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInAndSignUp /> } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => {
  return {
      setCurrentUser: user => dispatch(setUserReducer(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
