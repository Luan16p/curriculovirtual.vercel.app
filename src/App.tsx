import { BrowserRouter } from 'react-router-dom';
import Footer from './static/Footer';
import Header from './static/Header';
import SolidPage from './static/SolidPage';

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SolidPage />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

