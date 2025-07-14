import logo from './logo.svg';
import './App.css';
import ViewNews from './components/ViewNews';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element= { <ViewNews/> }/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
