import { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom';
//import cards_data from '../../assets/cards/Cards_data'


const TitleCards = ({title,category}) => {

    const [apiData,setApiData] = useState([]);

    const cardsRef = useRef();
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTYyMTU3ZTIwMzJiZWQzMjFkZjRmNDQyODk3MTA0YiIsIm5iZiI6MTc1MDUzOTUzNC4zNjIsInN1YiI6IjY4NTcxZDBlNzNmMmQ3OGE3OTdlNzlkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xiobfWnaiwo71Khsrdpdw7h0Yp_BUq_dlwu1Mazqz-0'
    }
    };


    const handleWheel = (event) =>{
        event.preventDefault; //not scroll the webpage vertically
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
        cardsRef.current.addEventListener('wheel',handleWheel);
    },)


    return (
        <div className='title-cards'>
            <h2>{title?title:"Popular on Netflix"}</h2> 
            <div className="card-list" ref={cardsRef}>
                {apiData.map((card,index) => {
                    return <Link to={`/player/${card.id}`} className="card" key = {index}>
                        <img src= {`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default TitleCards