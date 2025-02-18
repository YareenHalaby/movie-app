import logo from './logo.svg';
import './App.css';
import MovieList from './MoviesList';
import AddMovie from './AddMovie';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {PostsList} from './FetchPosts.js';
import NavBar from './NavBar.js';
function App() {
  return (
    <BrowserRouter>  {/* עוטף את כל האפליקציה ב-`BrowserRouter` */}
    <div className="App">
      <NavBar/>
  <Routes>
    <Route path="list" element={<MovieList />} />
    <Route path="add" element={<AddMovie />} />
    <Route path="posts" element={<PostsList />} />
    
  </Routes>
 
</div>
</BrowserRouter>
  );
}

export default App

