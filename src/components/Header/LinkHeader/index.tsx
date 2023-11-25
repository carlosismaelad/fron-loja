import { NavLink } from "react-router-dom";
import styles from "./styles.module.css"
import propTypes from "prop-types"

interface LinkHeaderprops {
    text: string;
    to: string;
}

export default function LinkHeader(props : LinkHeaderprops){
    return(
            <NavLink 
                to={props.to}
                className={styles.wrapper}
            >
                {props.text}
            </NavLink> 
        
    )
}

LinkHeader.propTypes = {
    text: propTypes.string.isRequired,
    to: propTypes.string.isRequired
}