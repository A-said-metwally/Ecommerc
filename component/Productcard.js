import Link from'next/link'

export default function Productcard({width , height , name , image , description , brand , price}){
    return (
        <div className="card" style={{"width":`${width}` , "height":`${height}px` }}>
            <div className='card-header'>
                <h1>{name}</h1> 
                <span>{brand}</span>
            </div>
            <Link href={`/product/${name}`}>
                <a aria-label="tst" >
                    <img src={image} alt={name}/>
                </a>
            </Link>
            <div>
                 <span>{description}</span>
            </div>
            <hr/>
            <b>Total Price : {price} $</b>
            
            
        </div>
    )
}