// Styles
import './assets/styles/style.scss';
import './App.css';
// React router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
