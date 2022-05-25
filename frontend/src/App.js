import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Restaurants from './components/restaurant/Restaurants';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/restaurant" exact element={<Restaurants />}></Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
