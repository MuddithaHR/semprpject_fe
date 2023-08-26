import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/home';
import LoginScreen from '../components/login';
import ChatScreen from '../components/chatscree';

const screens = {
  LoginScreen: {
    screen: LoginScreen,
  },
  Home: {
    screen: Home,
  },
  ChatScreen: {
    screen: ChatScreen,
  },
};

// home stack navigator screens
const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);