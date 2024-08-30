import React from 'react' 
import Constant from '../assets/constant';
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner';
import Article from '../components/Article/Article';
import ProductList from '../components/ProductList/ProductList';
import classes from './Product.module.scss';
import Footer from '../components/Footer/Footer';

const Product = () => {
    return (
        <div className={classes.container}>
            <Header />
            <Banner title={Constant.Banner.title} btnText={Constant.Banner.btnText} href={Constant.Article.btnLink}/>
            <Article title={Constant.Article.title} description={Constant.Article.description} btnText={Constant.Article.btnText} href={Constant.Article.btnLink}/>
            <ProductList />
            <Footer /> 
        </div>
    )
}

export default Product