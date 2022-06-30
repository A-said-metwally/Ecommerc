import inventory from "./inventory";

async function fetchCategories(){
    const categories = inventory.reduce((acc , current)=>{
        current.categories.map((category)=>{
            if(acc.includes(category)) return
            acc.push(category)
        })
        return acc
    },[])
    return categories
    // return Promise.resolve(categories)
}

export default fetchCategories
