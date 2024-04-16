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
import CustomerReg from './customerviews/CustomerReg'
import CustomerLogin from './customerviews/CustomerLogin'
import CustomerHome from './customerviews/CustomerHome'
import VenderReg from './venderviews/VenderReg'
import VenderLogin from './venderviews/VenderLogin'
import VenderHome from './venderviews/VenderHome'

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
      <ShowProductCatg /> */}
      {/* <hr />
         <h1>Product</h1>
      <ProductForm/>
      <ShowProduct/>
      <ProductList/> */}
         {/* <hr /> */}
         {/* <CustomerReg/> */}
         <CustomerLogin />
         <hr />
         {/* <VenderReg/> */}
         {/* <VenderLogin/> */}
         {/* <VenderHome/> */}
      </>
   )
}
export default App