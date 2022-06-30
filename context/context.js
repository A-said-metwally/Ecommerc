import React,{createContext , useState} from "react";
import getCategories from "../data/navBarData"
import inventory from "../data/inventory";



export const DataCtx = createContext(0);

const DataContextProvider = (props)=>{
  const [Counter , setCounter] = useState(1);
  const [Qty , setQty] = useState(0);
    
    const Categories = inventory.reduce((acc , current)=>{
        current.categories.map((c)=>{
          if(acc.includes(c)) return
          acc.push(c)
        })
        return acc
      },[])
    
    
      const PageData = inventory.reduce((acc , current)=>{
        const categories = current.categories
        categories.forEach((c)=>{
          const index = acc.findIndex(item =>item.category === c)
          if(index === -1){
            const item = {
             category : c,
             image:current.image,
             itemCount:1
            }
            acc.push(item)
          }else{
            const item = acc[index]
            item.itemCount +=1
          }
        })
         return acc
       },[])
     
        const [CartItems , setCartItems] = useState([{}])
        
       function Change(x){
          setCartItems([...CartItems , x])
          setQty(CartItems.length)
        }

        function RemoveItem(x){
          setCartItems(CartItems.filter((c)=>c.name != x))
          setQty(Qty >=1 ? Qty - 1 : 0)
        }
    const value = {Qty , Categories ,PageData , Change ,CartItems , RemoveItem}
    
    return (
        <DataCtx.Provider value={value}>
            {props.children}
        </DataCtx.Provider>
    )
}

export default DataContextProvider


