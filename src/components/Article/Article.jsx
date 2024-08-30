import React from "react";
import Button from "../Button/Button";
import VectorSVG from "../VectorSVG/VectorSVG";
import Classes from './Article.module.scss'
import potTree from '../../assets/images/pngwing.png'

const Article = (props) => {
    const { title, btnText, description, href } = props
    return (
        <section className={Classes.ArticleSection}>
            <article>
                <h3 className={Classes.title}>
                    {title}
                </h3>
                <div className={Classes.description}>
                    {description}
                </div>

                <div className={Classes.ReadMore}>
                    <Button text={btnText} href={href} variant="semibold" />
                </div>

            </article>
            <figure>
                <img src={potTree} alt="pngwing" />
                <VectorSVG width="567" height="517" positionWithSize="floatingHexagon" />

            </figure>
        </section>
    )
}

export default Article