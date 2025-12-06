import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar"
import PageNotFound from "./Components/PageNotFound";
import Products from "./Components/Products";
import Shirt from "./Components/Shirt";
import Jeans from "./Components/Jeans";
import Users from "./Components/Dynamic/Users";
import UserDetails from "./Components/Dynamic/UserDetails";
import Admin from "./Components/Dynamic/Admin";
import Search from "./Components/Search";
import FormValidation from "./Components/FormValidation/FormValidation";

function App() {
  const navigate = useNavigate();
  const navigateTo = (url) =>{
    navigate(url)
  }

  {/* Conditon Based Navigation */}
  // const navigateToWhere = () =>{
  //   const name = 'Rohan'
  //   if(name=='Rohaan'){
  //     navigate('/about')
  //   }
  //   else{
  //     navigate('/contact')
  //   }
  // }



  return (
    <div>
      {/* <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}>
          <Route index element={<Jeans/>}/>
          <Route path="shirt" element={<Shirt/>}/>
          <Route path="jeans" element={<Jeans/>}/>
        </Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/users/:id" element={<UserDetails/>}/> */}
        {/* <Route path="/users/1" element={<UserDetails/>}/>
        <Route path="/users/2" element={<UserDetails/>}/>
        <Route path="/users/3" element={<UserDetails/>}/> */}
        {/* <Route path="/search" element={<Search/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes> */}

      <FormValidation/>











      {/* using useNavigate hook in buttons */}
      {/* <h1>Using useNavigate hook in buttons</h1>
      <button onClick={()=>{navigate('/')}}>Home</button>
      <button onClick={()=>{navigate('/about')}}>About</button>
      <button onClick={()=>{navigate('/contact')}}>Contact</button>
      <br/><br/> */}
{/* Using navigation inside an Event handler for multiple pages using url as props */}
      {/* <h1>Using navigation inside an Event handler for multiple pages using url as props</h1>
      <button onClick={()=>{navigateTo('/about')}}>About</button>
      <button onClick={()=>{navigateTo('/contact')}}>Contact</button>
      <br/><br/> */}
    {/* Conditon Based Navigation */}
    {/* <h1>Conditon Based Navigation</h1>
    <button onClick={()=>{navigateToWhere()}}>Click Me</button>


    <button onClick={()=>navigate(-1)}>Go Back</button> */}
    </div>
  );
}

export default App;
