
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Home/Home'
import Home from "./components/Home/Home"
import Favorates from "./components/Favorates/Favorates"
import Search from "./components/Search/Search";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Aboutus from "./components/About us/Aboutus"
function App() {
  //IMPORTANT create .env file and make it on the same level as package.json
  let serverURL = process.env.REACT_APP_SERVER_URL;

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>

          <Route exact path='/' element={<Home/>}>
          </Route>

          <Route exact path='/Favorates' element={<Favorates/>}>
          </Route>

          <Route exact path='/Search' element={<Search/>}>
          </Route>

          <Route exact path='/AboutUs' element={<Aboutus/>}>
          </Route>

        </Routes>
        <Footer/>

         </div>
    </Router>
  );
}

export default App;

