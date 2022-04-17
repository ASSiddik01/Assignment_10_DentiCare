import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Main/Home/Home';
import Services from './Pages/Main/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/services' element={<Services></Services>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
