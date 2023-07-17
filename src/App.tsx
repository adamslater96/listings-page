import  Header  from './components/Header'
import  Footer  from './components/Footer'
import  Main  from './components/Main'
import Menu from './components/menu/Menu';

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