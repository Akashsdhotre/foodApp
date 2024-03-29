import { createStackNavigator, createAppContainer } from 'react-navigation';
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


const RootStack = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      },
    },
    Registration: {
      screen: Registration,
      navigationOptions: {
        header: null,
      },
    },
    DashBoard: {
      screen: Dashboard,
      navigationOptions: {
        header: null
      },
    }
  });

const App = createAppContainer(RootStack);

export default App;