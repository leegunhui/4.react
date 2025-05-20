import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Address from './api/Address'
import MultipleButtons from './MultiButtons';
import MovieApi from './api/Movie';
import MapContainer from './api/Map';

function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MultipleButtons />} />
          <Route path="/address" element={<Address />} />
          <Route path="/about" element={<MultipleButtons />} />
          <Route path="/address" element={<MultipleButtons />} />
          <Route path="/movie" element={<MovieApi />} />
          <Route path="/map" element={<MapContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;