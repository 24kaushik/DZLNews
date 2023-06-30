import React from 'react'

const NewsItem = (props) => {

  let { title, description, imgURL, url, date } = props;
  return (

    <div className="card my-3">
      {/* <img src={imgURL!=null? imgURL : "https://edu.ceskatelevize.cz/storage/video/placeholder.jpg"} className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description != null ? (description.length > 150 ? description.slice(0, 151) + "..." : description) : ""}</p>
        <p className="card-text"><small className="text-muted">{new Date(date).toGMTString()}</small></p>
        <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
      </div>
    </div>

  )
}

export default NewsItem

