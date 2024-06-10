import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Store from './pages/Store';
import BookDetails from './pages/BookDetails';
import Header from './components/Header';
import { useState } from 'react';
import ContactPage from './pages/ContactPage';

function App() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [authpage, setAuthpage] = useState(false);

  return (
    <div className="App">
      <Header 
        login={login} 
        setLogin={setLogin} 
        signup={signup} 
        setSignup={setSignup} 
        authpage={authpage} 
        setAuthpage={setAuthpage} 
      />
      <Routes>
        <Route 
          path='/' 
          element={<Home login={login} setLogin={setLogin} signup={signup} setSignup={setSignup} authpage={authpage} setAuthpage={setAuthpage} />}
        />
        <Route path='/store' element={<Store />} />
        <Route path='/details/:id' element={<BookDetails />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
