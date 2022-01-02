import './App.css';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/About-Us/About-Us';
import ContactUs from './pages/Contact-Us/Contact-Us';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about-us' element={<AboutUs/>} />
        <Route exact path='/contact-us' element={<ContactUs/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
