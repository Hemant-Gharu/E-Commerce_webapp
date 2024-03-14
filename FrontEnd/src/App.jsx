import './App.css'
import ProductCatg from './productviews/ProductCatg'
import ProductForm from './productviews/ProductForm'
import ShowProductCatg from './productviews/ShowProductCatg'
import CityForm from './statecityviews/CityForm'
import ShowCities from './statecityviews/ShowCities'
import ShowStates from './statecityviews/ShowStates'
import StateForm from './statecityviews/StateForm'

function App() {

  return (
    <>
      <StateForm />
      <ShowStates />
      <hr />
      <CityForm />
      <ShowCities />
      <hr />
      <ProductCatg />
      <ShowProductCatg />
      <ProductForm/>
    </>
  )
}

export default App
