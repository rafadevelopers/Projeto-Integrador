import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import Header from './components/template/Header/Header'
import Footer from './components/template/Footer/Footer'
import ScrollToTop from '../src/withRouter'


function App() {

  return (
    <>
    <Router>
      <ScrollToTop>
      <Header/>
        <Routes/>
        <Footer/>
      </ScrollToTop>
      </Router>
      
    </>
  );

}

export default App;