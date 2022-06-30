import Link from "next/link";

export default function Cart(props){
    return (
        <div className="cart">
            <Link href='/cart'><a aria-label="cart"> {props.qty}</a></Link>
        </div>
    )
}