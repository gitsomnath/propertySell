// import logo from './logo.svg';
// import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components

import Home from './components/Home';
import PostPage from './components/post';
import LoginPage from './components/login';
import Header from './common/Header';

function App() {
  return (
   
    <Router>
      <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} /> {/* Route for "/post" */}
          <Route path="/login" element={<LoginPage/>} /> {/* Route for "/post" */}
          <Route path="/post" element={<PostPage/>} /> {/* Route for "/post" */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
