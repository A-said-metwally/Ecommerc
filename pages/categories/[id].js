import Productcard from "../../component/Productcard"
import inventory from "../../data/inventory";

export default function Products({products , params , name}){
    console.log(`${name} -- ${params.id}`)

    let x = '49%';

    if(products.length >= 3){
         x = "33%"
    }
    return (
        <div className="container">
            <h1 className="page-adress">{params.id}</h1>
            <div className="section">
                {products.map((product , index)=>{
                return (
                <Productcard
                    width ={x}
                    height="600" 
                    name={product.name} 
                    image={product.image} 
                    description={product.description} 
                    brand={product.brand}
                    price={product.price}
                    key={index}
                /> 
                )
             })}
        </div>

        </div>
    )
        
}

export async function getServerSideProps(context){
    // const response = await fetch("http://localhost:4000/inventory")
    const data = inventory
    // const data = await response.json()
    const {params} = context
    const products = data.filter((p)=>p.categories.includes(params.id))
    
    return {
        props :{
            products,
            params

        }
    }
}