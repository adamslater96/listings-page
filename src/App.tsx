import  Header  from './components/Header'
import  Footer  from './components/Footer'
import  Main  from './components/Main'
import Menu from './components/menu/Menu';

//As previously mentioned fetching all data here at the start just once whilst looping through my static search list to enable all data ready to use right from the start of the app loading would be a fun avenue to investigate!

function App() {

  return (
    <div className="App flex flex-col justify-between h-[100vh] overflow-hidden">
      <Menu />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;