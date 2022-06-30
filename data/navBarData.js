
async function getCategories(){

    const api = "http://localhost:4000/inventory"
    const response = await fetch(api) 
    const data = await response.json()
  
    const categories = data.reduce((acc , current)=>{
        current.categories.map((c)=>{
          if(acc.includes(c)) return
          acc.push(c)
        })
        return acc
      },[])
    return Promise.resolve(categories)
}

export default getCategories