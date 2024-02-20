import './App.css';
import Header from './BaiTapThucHanhLayout/Header';
import Banner from './BaiTapThucHanhLayout/Banner';
import Item from './BaiTapThucHanhLayout/Item';
import Footer from './BaiTapThucHanhLayout/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className='body'>
        <Banner />
        <Item />
      </div>
      <Footer />
    </div>
  );
}

export default App;
