import './App.css';
import LandingPage from './pages/LandingPage';
import { AppProvider } from './store/cart';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <LandingPage />
      </AppProvider>
      
    </div>
  );
}

export default App;
