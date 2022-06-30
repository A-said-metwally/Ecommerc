import Head from "next/head"
import Card from "../component/card"
import inventory from "../data/inventory"

// export default function Home() { 
export default function Home({pageData , state }) { 

  return (
          <div className="container">
          <Head>
            <title>Home Page</title>
            <meta name="descrption" content="categories main page"/>
          </Head>
           <div className="section">
              {pageData.slice(0,2).map((page , index)=>{
                return (
                  <Card
                    width="49"
                    height="380" 
                    category={page.category} 
                    image={page.image} 
                    itemCount={page.itemCount} 
                    key={index}
                  /> 
                )
              })} 
            </div>
    
            <div className="section">
              {pageData.slice(2,5).map((page , index)=>{
                return (
                  <Card
                    width="33"
                    height="380" 
                    category={page.category} 
                    image={page.image} 
                    itemCount={page.itemCount} 
                    key={index}
                  /> 
                )
              })}
            </div>

            <div className="section">
              {pageData.slice(3,5).map((page , index)=>{
                return (
                  <Card
                    width="49"
                    height="380" 
                    category={page.category} 
                    image={page.image} 
                    itemCount={page.itemCount} 
                    key={index}
                  /> 
                )
              })} 
            </div>

        </div>
  )
}



export async function getStaticProps(){

  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD


  // const api = "http://localhost:4000/inventory"

  // const response = await fetch(api) 
  // const data = await response.json()
  const data = inventory
  // const state = response.status

  const categories = data.reduce((acc , current)=>{
    current.categories.map((c)=>{
      if(acc.includes(c)) return
      acc.push(c)
    })
    return acc
  },[])
  
  const pageData = data.reduce((acc , current)=>{
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

  return {
    props :{
      categories,
      pageData,
      user,
      password
      
    }
    ,revalidate : 1
  }
}
