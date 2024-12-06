import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './Components/MyNavbar'
import MyCard from './Components/MyCard'

function App() {
  return (
    <div className="App">
      <header>
       <MyNavbar/>
       </header>
       <main>
        <MyCard/>
       </main>
    </div>
  );
}


export default App;
