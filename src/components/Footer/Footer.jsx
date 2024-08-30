import React from "react";
import SocialIcons from "../../assets/SocialIcons";
import VectorSVG from "../VectorSVG/VectorSVG";
import constant from "../../assets/constant";
import classes from './Footer.module.scss'
 
const Footer = () => {
    return(
        <div className={classes.footerContainer}>
            <VectorSVG width="726" height="641"  positionWithSize="footerHexagon" />
            <div className={classes.leftFooter}> 
                <h5 className={classes.title}>{constant.Footer.title}</h5>
                <div className={classes.description}>{constant.Footer.description}</div>
            </div>

            <div className={classes.rightFooter}>
                <div className={classes.linkSet}>
                    <nav className={classes.footerLinkTitle}>{constant.Footer.Company.label}</nav>
                    <ul>
                    {constant.Footer.Company.links.map((element,index) => <li key={`${element.label}-${index}`} className={element.label}><a href={element.links}>{element.label}</a></li>)}
                    </ul>
                </div>

                <div className={classes.linkSet}>
                    <nav className={classes.footerLinkTitle}>{constant.Footer.Products.label}</nav>
                    <ul>
                    {constant.Footer.Products.links.map((element,index) => <li key={`${element.label}-${index}`} className={element.label}><a href={element.links}>{element.label}</a></li>)}
                    </ul>
                </div>

                <div className={classes.linkSet}>
                    <nav className={classes.footerLinkTitle}>{constant.Footer.FollowUs.label}</nav>
                    <ul className={classes.socialmedia}>    
                        {constant.Footer.FollowUs.links.map((element,index) => <li key={`${element.label}-${index}`}><a href={element.links} className={classes.IconButton}>{SocialIcons(element.label)}</a></li>)}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer