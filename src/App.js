import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import ROwPost from './Components/RowPost/ROwPost';
import {originals} from './url'
import {action} from './url'
import {horror} from './url'
import {romance} from './url'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <ROwPost url={originals} title='Netflix Originals' />
      <ROwPost url={action} title='Action' isSmall/>
      <ROwPost url={horror} title='Horror' isSmall/>
      <ROwPost url={romance} title='Romance' isSmall/>
      
    </div>
  );
}

export default App;
