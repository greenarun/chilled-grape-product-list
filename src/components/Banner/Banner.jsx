import React from "react";
import Button from "../Button/Button";
import Classes from './Banner.module.scss'

const Banner = (props) => {
    const { title, btnText, href } = props
    return (
        <section className={Classes.bannerSection}>
            <h1 className={Classes.title}>
                {title}
            </h1>
            <div className={Classes.ReadMore}>
                <Button text={btnText} href={href} variant="semibold" size="22" />
            </div>
            
        </section>
    )
}

export default Banner