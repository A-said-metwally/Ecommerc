import { DataCtx } from '../context/context'
import Link from 'next/dist/client/link'
import Cart from './Cart'

export default function Header(){
return (
    <DataCtx.Consumer>
        {({Categories , Qty})=>{
            return (
                <div className="container">
                <div className="nav-bar">
                    <div className="logo">Logo</div>
                    <div className="links">
                        <Link href='/'>
                            <a aria-label="home">Home</a>
                        </Link>
                        {Categories.map((c , index)=>{
                            return (
                                    <Link href={`/categories/${c}`} key={index} ><a>{c}</a></Link>
                            )
                        }
                        )}
                        <Link href='/categories'>
                            <a aria-label="categories">All</a>
                        </Link>
                        <Cart qty={Qty}/>
                    </div>
                </div>
            </div>

            )
        }}
    </DataCtx.Consumer>
)
}


