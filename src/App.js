import './App.css';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import LandingPage from './Pages/LandingPage';
import LatestArticles from './Pages/LatestArticles';

const App = () => {
  return (
    <div className="App">
      <LandingPage/>
      <AboutUs/>
      <LatestArticles/>
      <Contact/>
    </div>
  );
}

export default App;
