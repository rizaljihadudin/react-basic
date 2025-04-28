import { useState } from "react";
import Product from "./Product";
import { useEffect } from "react";

export default function ProductList(){
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    function handleClick(){
        setLoad(true)
    }

    //jika ingin useEffect di panggil sekali saja maka bisa menggunakan empty array []
    useEffect(() => {
        console.log('call use effect with empty array')
    }, [])


    //use effect dependency
    // use effect tidak bisa langsung menggunakan async await
    // useEffect(() => {
    //     //load ini hanya di panggil jika data dari array [load] berubah, kalo tidak tidak akan di panggil
    //     if(load){

    //         //promise
    //         fetch("/products.json")
    //             .then((response) => response.json())
    //             .then((data) => setProducts(data));
    //     }

    //     // Effect clean up
    //     return () => {
    //         console.info('Product List component unmounted')
    //     }
    // }, [load])

    //useEffect with async function

    useEffect(() => {

        async function fetchProducts(){
            const response = await fetch("/products.json");
            const data = await response.json();
            setProducts(data);
        }

        if(load){
            fetchProducts();
        }

    }, [load])

    return(
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Products</button>
            {products.map(item => {
                return <Product key={item.id} product={item} />
            })}
        </>
    )
}