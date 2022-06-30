import { DataCtx } from "../context/context";

export default function Cart(){
    return(
        <DataCtx.Consumer>
            {({CartItems , RemoveItem})=>{
                return(
                    <div className="container">
                        <h2>Cart List</h2>
                        <h3>{CartItems.length === 1 && "No Items Has been Selected"}</h3>
                        
                        {CartItems.slice(1,500).map((c)=>{
                            return (
                                <>
                                    <div className="cart-items">
                                        <img src={c.image}/>
                                        <span>{c.name}</span>
                                        <span>QTY : {c.Qty}</span>
                                        <span>Price : {c.price}</span>
                                        <span>Total : {c.total}</span>
                                        <button onClick={()=>RemoveItem(c.name)}>X</button>
                                    </div>
                                    <hr/>
                                </>
                            )
                        })}
                    </div>
                )
            }}
        </DataCtx.Consumer>
    )
}