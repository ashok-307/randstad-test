import React from "react";

const StarShipList = (props: any) => {
    const { data } = props;
    return (
        <div className="star-ship-list">
            <figure>
                <img src={data.image_url} alt="star-ship" width="100%" />
            </figure>
            <div className="lists">
                <div className="list">
                    <div className="list-label">Ship Name</div>
                    <div className="list-text">{data.name}</div>
                </div>
                <div className="list">
                    <div className="list-label">Model</div>
                    <div className="list-text">{data.model}</div>
                </div>
                <div className="list">
                    <div className="list-label">No. of Films</div>
                    <div className={'list-text list-film-count' + (data.max_filmed ? ' text-success' : '')}>{data.films.length} {data.max_filmed && (<span> - Max Filmed</span>)}</div>
                </div>
                <div className="list">
                    <div className="list-label">Crew</div>
                    <div className="list-text">{data.crew}</div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(StarShipList);
