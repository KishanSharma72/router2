import React ,{useState,useEffect} from "react";
import "./App.css";
import { BrowserRouter ,Routes , Route} from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import Contact from "./Contact";
import Error from "./Error";
import AddItems from "./Additems";
import Product from "./Product";
import List from "./ListItem/List";

function App(){
  const [listValue, setlistValue] = useState([])
  useEffect(() =>{
    setlistValue(List)
  },[])


  const addToCart = (item)=>{
    listValue.map((ListItem)=>{
      if(ListItem.id === item.id){
        ListItem["addToCart"]=true;
        console.log(listValue)
      }
    })
    // setElement("GoToCard")
  
  }




  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Main/>} >
          <Route path="/home/" element={<Home/>}/>
          <Route path="/product/" element={<Product listValue={listValue} addToCart={addToCart}/>}/>
          <Route path="/contact/" element={<Contact/>}/>
          <Route path="/additems/" element={<AddItems listValue={listValue} />}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;