import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer ';
import Roads from './components/Roads';

const App = () => {
  return( 
    <Router>
      <Header />
      <Roads />
      <Footer />
    </Router>
  )
}

export default App;
