import React from 'react'

export default function NewsItem(props) {
  return (
    <div>
        <div className="card" style={{minHeight: '15rem'}}>
            <img src={props.imageUrl} style={{maxHeight: '10rem', objectFit: 'fill'}} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{ (props.title != null && props.title.length > 40 ? `${props.title.slice(0,40)}...` : props.title)
               || (props.title != null && props.title.length < 40 ? props.title.padEnd(40, ' ') : props.title) } </h5>
              <p className="card-text">
              {(props.description != null && props.description.length > 100 ? `${props.description.slice(0, 100)}...` : props.description)
                || (props.description != null && props.description.length < 100 ? props.description.padEnd(100, ' ') : props.description )
              }
              </p>
              <a href={props.newsUrl}  target="_blank" className="btn btn-primary">
                Read Full News
              </a>
            </div>
        </div>
    </div>
  )
}
