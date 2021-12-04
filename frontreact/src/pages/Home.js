import React, {useEffect, useState} from 'react';
import {Card} from "../components/Card";
import {FormattedMessage} from "react-intl";

export const Home = ({searchKey}) => {

    const [products, setProducts] = useState([]);
    const url = 'http://localhost:3001/api/products?q=' + searchKey;
    useEffect(() => {
        fetchProducts();
        console.log(`Home searchKeyState.searchKeyN ${searchKey}`);
    }, [searchKey]);

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
        <section id='home'>
            <div className='home-container'>
                <h1>
                    <FormattedMessage id="gallery"/>
                </h1>
                <div className='home-card'>
                    {products?.map((element) => (
                        <Card className='card'
                              key={element.id}
                              name={element.name}
                              picture={element.picture}
                              price={element.price}
                              isActive={element.isActive}
                        ></Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
