import './App.css'
import ProductCatg from './productviews/ProductCatg'
import ProductList from './productviews/ProductList'
import ProductForm from './productviews/ProductForm'
import ShowProduct from './productviews/ShowProduct'
import ShowProductCatg from './productviews/ShowProductCatg'
import CityForm from './statecityviews/CityForm'
import ShowCities from './statecityviews/ShowCities'
import ShowStates from './statecityviews/ShowStates'
import StateForm from './statecityviews/StateForm'

function App() {

  return (
    <>
    {/* <h1>States</h1>
      <StateForm />
      <ShowStates />
      <hr /> */}
      {/* <h1>City</h1>
      <CityForm />
      <ShowCities /> 
      <hr /> */}
      {/* <h1>Product Category</h1>
      <ProductCatg />
      <ShowProductCatg />
      <hr /> */}
      <h1>Product</h1>
      <ProductForm/>
      <ShowProduct/>
      <hr />
      <ProductList/>
    </>
  )
}

export default App