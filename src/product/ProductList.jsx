import { useRef } from "react";
import { useState } from "react";
import Product from "./Product";
import { useEffect } from "react";

export default function ProductList(){
    const [products, setProducts] = useState([]);
    const loaded = useRef(false);


    useEffect(() => {
        if(loaded.current == false){
            fetch("/products.json")
                .then((response) => response.json())
                .then((data) => setProducts(data))
                .then(() => loaded.current = true);
        }

        // Effect clean up
        return () => {
            console.info('Product List component unmounted')
        }
    })

    return(
        <>
            <h1>Product List</h1>
            {products.map(item => {
                return <Product key={item.id} product={item} />
            })}
        </>
    )
}