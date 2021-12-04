import React, {useState, useEffect} from 'react';
import {Chart} from "../components/Chart";
import {getProductsService} from "../services/product";

export const Report = () => {
    const [products, setProducts] = useState([]);
    const url = 'http://localhost:3001/api/products';
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async() => {
        const resp = await fetch(url);
        const data = await resp.json();

        const productSimple = data?.map((item) => {
            return {
                id: item.id,
                isActive: item.isActive,
                price: item.price,
                stock: item.stock,
                picture: 'http://localhost:3001' + item.picture,
                name: item.name,
                about: item.about,
                tags: item.tags,
            };
        });
        setProducts(productSimple);
    };

    return (
        <section id='report'>
            <div className='report-container'>
                <h1>Unidades en inventario</h1>
                <Chart data={products}/>
            </div>
        </section>
    );
};
