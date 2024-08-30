import React from 'react'
import classes from "./Button.module.scss";

const Button = (props) => {
    const {text,size, href} = props
    return (
        <a className={`${classes.Button} ${classes[`size${size}`]}`} href={href}> {text}</a> 
    )
}

export default Button