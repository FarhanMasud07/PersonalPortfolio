import MyportfolioDefault from './components/portfolio/myportfolioDefault'
import './App.css'
import Nav from './components/shared/nav'
import Resume from './components/Resume/Resume'
import {AnimatePresence} from 'framer-motion'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
function App(props) {
  // let className = props.isDarkMode? 'primary': 'notprimary'
  return (
    <>
    <Router>
      <Nav/>
      <AnimatePresence>
        <Switch>
          <Route path='/' exact component = {MyportfolioDefault}/>
          <Route path='/Resume' component = {Resume}/>
        </Switch>
      </AnimatePresence>
    </Router>
    </>
  );
}

export default App;
