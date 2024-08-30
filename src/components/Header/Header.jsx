import * as React from 'react';
import classes from "./Header.module.scss"; 
import constant from '../../assets/constant';
import Button from '../Button/Button';

const Header = () => { 
  return (
    <header className={classes.header}> 
        <h1 className={classes.logo}><a href="/#">{constant.Header.title}</a></h1>
        <ul className={classes.menulinks}>
           {constant.Header.links.map((element,index) => <li key={`${element.label}-${index}`} className={element.label}><a href={element.links}>{element.label}</a></li>)}
           <li className={classes.login}><Button text={constant.Header.Login.title} href={constant.Header.Login.link}/></li>
        </ul>
    </header>
  );
}

export default Header;