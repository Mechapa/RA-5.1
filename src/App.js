import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card title='Google' text='Найдется всё' link='https://www.google.com/' >
        <image
          //  src="https://m.media-amazon.com/images/I/41-13-Uq4-L._AC_SY450_.jpg"
          class="card-img-top" alt="альтернативная картинка"></image>

      </Card>
      <Card title='Google' text='Найдется всё' link='https://www.google.com/' >


      </Card>
    </div>
  );
}

export default App;
