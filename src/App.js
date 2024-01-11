import Navbar from './component/navbar/Navbar';
import Header from './header/Header';
import Footer from './component/footer/Footer';
import Map from './component/map/Map';
import Cities from './component/cities/Cities';
import News from './component/news/News';
import Apps from './component/ourApps/Apps';
import EarnMoney from './component/earnMoney/EarnMoney';
import Services from './component/services/Services';

function App() {
  return (
    <div className="App">
       {/* <Navbar /> */}
      <Header />
      < EarnMoney />
      <Services />
      <Cities />
      <Map />
      <News />
      <Apps />
      <Footer />
    
    </div>
  );
}

export default App;
