import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Reports from './pages/Reports';
import Products from './pages/Products.jsx';
import UserForm from './form/UserForm';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <div>
            <Route path='/' exact component={Home} />
            <Route path='/reports' component={UserForm} />
            <Route path='/products' component={Products} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
