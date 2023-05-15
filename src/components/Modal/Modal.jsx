import React from "react";
import conversion from "../../functions/genreconvertion";

const Modal = ({ data, action }) => {
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

    let genre1 = conversion(parseInt(genre[0], 10));
    let genre2 = conversion(parseInt(genre[1], 10));

    return (
        <>
            <div id="modal1" className="modal is-active">
                <div
                    className="modal-background"
                    onClick={() => action()}
                ></div>
                <div className="modal-card" onClick={() => action()}>
                    <header className="modal-card-head">
                        <p className="modal-card-title">{`${title} (${release_date})`}</p>
                        <button
                            className="delete"
                            aria-label="close"
                            onClick={() => action()}
                        ></button>
                    </header>
                    <section className="modal-card-body">
                        {/* <figure className="image is-4by3">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                                alt="Placeholder image"
                            />
                        </figure> */}
                        <figure className="image is-16by9">
                            <iframe
                                className="has-ratio"
                                width={640}
                                height={360}
                                src="https://www.youtube.com/embed/51S4llUG5QM"
                                allowFullScreen
                            />
                        </figure>

                        <br></br>
                        <p className="subtitle is-6">{`Genres: ${genre1}, ${
                            genre2 ? genre2 : ""
                        }`}</p>
                        <div className="content">{`${overview}`}</div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Modal;
