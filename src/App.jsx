
import './App.css'
import logo from './assets/netflix.png';
import Section from './assets/Section';
import data from './assets/data.json';

function App() { 
  return (
    <>
      <header>
         <div class="container"> 
            <img class="logo "src={logo}/> 
         </div>
      </header>
      <main>

      <Section movieList={data} />   

      </main>
      <footer></footer> 
    </>
  )
}

export default App
