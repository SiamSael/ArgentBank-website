import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer ';
import Home from './pages/Home';
import Authentification from './pages/Authentification'
import User from './pages/User';

const App = () => {
  return( 
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in/" element={<Authentification />} />
        <Route path="/user/" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
