import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Header from './compenents/Header';
import NavPages from './compenents/NavPages';


function App() {



  return (

    <BrowserRouter className="App">
    
      <Header />
      <NavPages />

    </BrowserRouter>

  );
}

export default App;

// activeClassName="active"
// activeClassName="active"