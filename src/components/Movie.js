import React from 'react';

const Movie = ({ title, opening_crawl, director, episode_id }) => (
<div className='movie'>
    <img src={`./images/episode${episode_id}.jpg`} alt={title} />
    <div className='movie-info'>
        <h3>Director: </h3>
        <span>{director}</span>
    </div>
    <div className='movie-overview'>
        <h2>Overview</h2>
        <p>{opening_crawl}</p>
    </div>
</div>
);

export default Movie;