import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import FeaturedProduct from "./components/FeaturedProduct/FeaturedProduct";
import Product from "./components/Product/Product";

import Products from "./components/Products/Products";


function App() {
  return (
    <div className="App">
      <Header/>
      <FeaturedProduct/>
      <Categories/>
      <Product/>
      <Products/>
    </div>
  );
}

export default App;
