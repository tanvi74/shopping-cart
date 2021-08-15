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

/**
 * **GITHUB LINK:** https://github.com/tanvi74/shopping-cart
<br>
**RESUME LINK:** https://docs.google.com/document/d/11SqhTqz-9Odrt2Tvk2sdNHUPMMF1JKZc0dAsEQBXkw8/edit?usp=sharing

Initially it is loading the static JSON data![Initially it is loading the static JSON data][1]


When item is deleted or removed![][2]

When Quantity is increased, its price also gets calculated, along with its discount and type discount if any. ![enter image description here][3]


  [1]: https://he-s3.s3.amazonaws.com/media/uploads/dbd9e25.jpg
  [2]: https://he-s3.s3.amazonaws.com/media/uploads/f01bb3e.jpg
  [3]: https://he-s3.s3.amazonaws.com/media/uploads/c3c8438.jpg
 */