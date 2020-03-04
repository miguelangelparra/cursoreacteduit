import React, { Component } from 'react'

const Imagen = (props) => {
    const { largeImageURL, previewURL, likes, views, tags } = props.imagen
    return (
        <div className=" container col-3 text-center">
            <h6>{tags}</h6>
            <a
                href={largeImageURL}
                target="_blank"> <img
                    src={previewURL}
                    alt={tags} />
                <p className="text-warning">
                    Vista: <span className="text-success"> {views}</span>
                    Likes: <span className="text-success">{likes}</span>
                </p>
            </a>

        </div>
    )
}


export default Imagen