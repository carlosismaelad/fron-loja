

import styles from "./styles.module.css"
import {motion} from "framer-motion"

import green from "../../assets/green-node.png"
import angular from "../../assets/angular.png"
import angular2 from "../../assets/angular-blue.png"


const images = [green, angular, angular2 ]


export default function ImageSlides(){

    return(
        <motion.div className={styles.carousel}
            whileTap={{cursor: "grabbing"}}
        
        >
            <motion.div className={styles.inner}
                drag="x"
            >
                {images.map((image) => (
                    <motion.div 
                        className={styles.item} 
                        key={image}>
                        <img src={image} alt="Carrosel" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
        
    )
}

