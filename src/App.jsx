import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import ListScreen from './components/ListScreen';
import DetailScreen from './components/DetailScreen';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ListScreen />} />
          <Route path="/pokemon/:id" element={<DetailScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App