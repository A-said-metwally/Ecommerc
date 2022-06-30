import Head from "next/dist/shared/lib/head"
import Card from "../../component/card"
import inventory from "../../data/inventory"


 function Product({pageCategories , name}){
    console.log(name)

    return (
        <div className="container">
            <Head>
                <title>categories page</title>
                <meta name="description" content="furniture categories"/>
            </Head>
            <div>
                <h1 className="page-adress">categories</h1>
            <div className="section">
                {pageCategories.map((page , index)=>{
                return (
                <Card
                    width="32"
                    height="420" 
                    category={page.category} 
                    image={page.image} 
                    key={index}
              /> 
            )
          })}
        </div>
            </div>
        </div>
    )
}

export default Product


export async function getStaticProps(){
    // const response = await fetch("http://localhost:4000/inventory")
    const data = inventory
    // const data = await response.json()

   const pageCategories = data.reduce((acc , current)=>{
        current.categories.forEach((c)=>{
            const index = acc.findIndex((e)=>e.category === c)
            if(index === -1){
                const item ={
                    category : c,
                    image : current.image,
                }
                acc.push(item)
            }
        })
        return acc
    },[])

    return {
        props:{
            pageCategories
        }
    }
}