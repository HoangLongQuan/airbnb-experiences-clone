import './App.css';
import Header from './components/Header/Header';
import UpperHalf from './components/UpperHalf/UpperHalf';
import Card from './components/Card/Card';
import Data from './components/Data/Data';

function App() {
  const Cards = Data.map(item =>{
    return(
      <Card 
      key={item.id}
      item={item}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <UpperHalf />
      <section className='cards-list'>
        {Cards}
      </section>
      
      
    </div>
  );
}

export default App;
