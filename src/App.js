import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './conpanets/Header/index';
import Popular from './conpanets/Popular';
import Home from './conpanets/Home';
import TopRated from './conpanets/TopRated/index';
import MovieDeatalis from './conpanets/MovieDetalis';
import ActerDetalist from './conpanets/ActerDetalict';
import Search from './conpanets/Search';

function App() {
  return (
    <div className="App">
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/topreted' element={<TopRated/>}/>
        <Route path='/movieDetalis/:id' element={<MovieDeatalis/>}/>
        <Route path='/acterdetalist/:id'element={<ActerDetalist/>}/>
        <Route path='/search/:movieName' element={<Search/>}/>
       </Routes>
    </div>

  );
}

export default App;
