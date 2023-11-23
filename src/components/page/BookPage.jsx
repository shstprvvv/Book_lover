import React from 'react';

export default function BookPage({ oneBook }) {
  return (
    <div className="row g-0">
      <div className="col-md-4">
        <img src={oneBook.img} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h3 className="card-title">{oneBook.nameBook}</h3>
          <p className="card-text">{`Writer: ${oneBook.writer}`}</p>
          <p className="card-text">{`Description: ${oneBook.owner_comment}`}</p>
          {/* <p className="card-text"><small className="text-muted">{`Rating count: ${film.imDbRatingCount}`}</small></p> */}
        </div>
      </div>
    </div>
  );
}
