import { Link } from 'react-router-dom';
                <Link to={{
                pathname: `/movi/${id}`,
                state: { 
                  id, 
                  title, 
                  poster,
                  year,
                  rating,
                  runtime,
                  genres, 
                  description_full, 
                  language,
                  imgUrl
                },
                }}>
                </Link> 
            <Link to={{
                pathname: `/movi/${id}`,
                state: { 
                  id, 
                  title, 
                  poster,
                  year,
                  rating,
                  runtime,
                  genres, 
                  description_full, 
                  language,
                  imgUrl  
                },
                }}>
            </Link>
