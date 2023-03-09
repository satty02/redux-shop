import Products from './components/Products';
import Cart from './components/Cart';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="bg-grey-100">
      <NavBar/>
      <div className='my-0 mx-auto p-4 max-w-[140rem] md:p-12'>
      <Products/>
     
    </div>
    <Cart/>
    </div>
  );
}

export default App;
