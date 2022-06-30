import Link from'next/link'

export default function Card({width , height , category , image , itemCount}){
    return (
        <div className="card" style={{"width":`${width}%` , "height":`${height}px` }}>
            <h1>{category}</h1> 
            <Link href={`/categories/${category}`}>
                <a aria-label={category}>
                    <img src={image} alt={category}/>
                </a>
            </Link>
            {{itemCount}>0 && <span>Available Quantty : {itemCount}</span>}
            
        </div>
    )
}