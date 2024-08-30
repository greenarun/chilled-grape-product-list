import React, { useState, useEffect } from 'react';
import classes from './ProductList.module.scss'
import constant from '../../assets/constant';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products')
            .then(function (response) {
                setProducts(response.data[0])
            })
            .catch(function (error) {
                console.log(error);
            })

    }, [])

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };

    const visibleProducts = products.slice(0, visibleCount);

    return (
        <div className={classes.products}>
            {products && products.length !== 0 ?
                <ul className={classes.list_container}>
                    {visibleProducts.map((item, index) =>
                        <li key={item.id + index} className={classes.list}>
                            <div className={classes.image}>
                                <img src={item.image} alt={item.product_name} key={'img' + index} />
                            </div>
                            <div className={classes.product_name}>
                                {item.product_name}
                            </div>
                            <div className={classes.price}>
                                {constant.ProductList.currency}{item.price}
                            </div>
                        </li>
                    )}
                </ul> :
                <div>No data found</div>}
            {visibleCount < products.length && (
                <nav onClick={handleLoadMore} className={classes.loadMore}>Load More</nav>
            )}
        </div>
    )
}

export default ProductList