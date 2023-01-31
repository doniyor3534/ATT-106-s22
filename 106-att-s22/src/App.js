import './App.css';
import './Component/Style.css';
import {useSelector} from 'react-redux'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Home } from './Component/Home';
import { Navbar } from './Component/Navbar';
import { Footer } from './Component/Footer';

function App() {
  const count = useSelector((state) => state.counter.value)
  console.log(count);
  return (
    <div className="App">
       <Router>
        <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
          </Routes>
          <Footer/>
       </Router>
    </div>
  );
}

export default App;
