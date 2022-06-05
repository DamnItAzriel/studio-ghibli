import './App.css';
import logo from './Studio_Ghibli_Logo.svg_.png';
import Setup from './UseEffectFetchData';
function App() {
  return (
    <div>
      <div className='container'>
        {/* <h1>Studio Ghibli</h1> */}
        <img className='logo' src={logo} alt='an animal cartoon'/>
        <h1>Films</h1>
        <Setup/>
      </div>
    </div>
  );
}

export default App;
