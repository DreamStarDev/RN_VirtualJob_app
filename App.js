import React from 'react';
import Splash from './src/Splash';
import Navigation from './src/Navigation';
import Dash from './src/Dash';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AppNavigator = createStackNavigator(  
  {  
    Navigation: { 
      screen: Navigation,
      navigationOptions: {
      headerShown: false,
      }
    },

    Dash: { 
      screen: Dash,
      navigationOptions: {
      headerShown: false,
      }
    }, 
  },  
  {  
      initialRouteName: "Navigation"  
  }  
);  

const AppContainer = createAppContainer(AppNavigator);  


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timePassed: false
    };
    
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({timePassed: true});
    }, 3000);
  }
 
  render() {
    if (!this.state.timePassed) {
      return <Splash/>;
    } else {
      return <AppContainer />; 
      // return <Dash />;
    }
  }
}