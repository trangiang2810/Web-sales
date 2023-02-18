import { useContext } from 'react';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import { ProductContext } from './components/ProductsContextProvider';
import Routers from './routers/Routers';

function App() {
  const {id} = useContext(ProductContext)
  return (
    <div className="app">
        <Header />
            <Routers />
        <Footer />
        
    </div>
  );
}

export default App;
