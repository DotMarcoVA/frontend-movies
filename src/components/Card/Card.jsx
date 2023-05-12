import React from "react";
import conversion from "../../functions/genreconvertion";

const Card = ({ data, getData }) => {
    let {
        _id,
        title,
        overview,
        genre,
        poster_path,
        trailer_path,
        votes,
        release_date,
    } = data;

    let cardData = data;

    let genre1 = conversion(parseInt(genre[0], 10));
    let genre2 = conversion(parseInt(genre[1], 10));

    let cutOverview = overview.slice(0, 120) + "...";

    return (
        <>
            <div className="column is-3">
                <div className="card" onClick={() => getData(cardData)}>
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                                alt="Placeholder image"
                            />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{title}</p>
                                <p className="subtitle is-6">{`${genre1}, ${genre2}`}</p>
                            </div>
                        </div>
                        <div className="content">{cutOverview}</div>
                        <div id={`like_${_id}`} className="button is-success">
                            ❤ {votes}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
