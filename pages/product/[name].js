import { useState } from "react"
import { DataCtx } from "../../context/context"
import inventory from "../../data/inventory"

export default function ProductDetails({product}){
    const Item = product[0]

    const [qty , setQty] = useState(1)

    return (
        <DataCtx.Consumer>
            {({Change})=>{
                
                    const AddProduct = ()=>{
                        const P = {
                            name:Item.name,
                            image:Item.image,
                            Qty:qty,
                            price:Item.price,
                            total:qty * Item.price
                          }
                          Change(P)
                        }

                        
                return (
                    <div className='container'>                        
                    <div className="product-details">
                        <div className="left-details">
                            <img src={Item.image} alt={Item.name}/>
                        </div>
                        <div className="right-details">
                            <h1>{Item.name}</h1>
                            <p>{Item.description}</p>
                            <h3>Price : {Item.price} $</h3>
                            <div className="quantity">
                                <b>Qty</b> 
                                <div className="qty-controls">
                                    <button onClick={()=>setQty(qty+1)}>+</button>
                                    <span>{qty}</span>
                                    <button onClick={qty >1 ? ()=>setQty(qty-1): null}>-</button>
                                </div>
                            </div>
                            <button className="confirm" onClick={AddProduct}>Confirm Transaction</button>
                        </div>
                    </div>
                </div>
                )
            }}
        </DataCtx.Consumer>
        
    )
}

export async function getServerSideProps(context){
    // const response = await fetch("http://localhost:4000/inventory")
    const data = inventory
    // const data = await response.json()
    const {params} = context
    const product = data.filter((p)=>p.name === params.name)

    return {
        props:{
            product
        }
    }
}

