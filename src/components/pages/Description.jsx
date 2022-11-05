import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


    
import styles from "../style/FilmDescription.module.scss";



function Description (props) {

    return(
        <div className="wrap__content_main">
            <div className={styles.films__about}>
                <Link to="/"><button className={styles.films__about_btn}> Back</button></Link>
                <div className={styles.about__content}>
                    <div className={styles.about__poster}>
                        <img className={styles.about__poster_img} src={props.location.state.imgUrl} alt="Poster"/>
                    </div>
                    <div className={styles.about__films}>
                        <h2 className={styles.about__title}>{props.location.state.title}</h2>
                        <div className={styles.about__rating}>{props.location.state.rating} 
                        <Box
                        sx={{
                            '& > legend': { mt: 0 },
                        }}
                        >
                        <Rating name="customized-10" defaultValue={props.location.state.rating} max={10} />
                        </Box></div>
                        <div className={styles.about__colums}>
                            <div className={styles.about__colums_headdyng}>
                                <p className={styles.about__colums_headdyng_content}>Language: </p>
                                <p className={styles.about__colums_headdyng_content}>Genre: </p>
                                <p className={styles.about__colums_headdyng_content}>Year: </p>
                                <p className={styles.about__colums_headdyng_content}>Running time: </p>
                            </div>
                            <div className={styles.about__colums_description}>
                                <p className={styles.about__colums_description_content}>{props.location.state.language}</p>  
                                <p className={styles.about__colums_description_content}>{props.location.state.genres}</p>
                                <p className={styles.about__colums_description_content}>{props.location.state.year}</p>
                                <p className={styles.about__colums_description_content}>{props.location.state.runtime} minuts</p>
                            </div>
                        </div>
                        <p className={styles.about__description}>{props.location.state.description_full}</p>
                    </div>
                </div>
    </div></div>
        
        
    )
}


export default Description