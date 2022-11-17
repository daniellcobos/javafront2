import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Header from './components/header';
import Info from './pages/info'

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
    <Route exact path='/' element={<Info/>}/>
    </Routes>
    
    
  </div>
  );
}

export default App;
