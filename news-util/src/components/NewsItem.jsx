import React from 'react'

export default function NewsItem(props) {
  const lightColor = { backgroundColor: '#fffceb', minHeight: '15rem'};
  const darkColor = { backgroundColor: '#e1e2ea', minHeight: '15rem' };
  const buttonClass = `btn btn-${props.mode === 'light' ? 'dark' : 'light'}`;
  const darkbadgeStyle = {left: '90%', color: 'white'}
  const lightbadgeStyle = {left: '90%', color: 'black'}
  return (
    <div>
        <div className="card" style={props.mode === 'light' ? lightColor : darkColor}>
            <img src={props.imageUrl} style={{maxHeight: '10rem', objectFit: 'fill'}} className="card-img-top" alt="..." />
            <span class={`position-absolute top-0 translate-middle badge rounded-pill bg-${props.mode === 'light' ? 'dark' : 'light'}`}
            style={props.mode === 'light' ? darkbadgeStyle : lightbadgeStyle}
            >{props.source}</span>
            <div className="card-body">
              <h5 className="card-title">{ (props.title != null && props.title.length > 40 ? `${props.title.slice(0,40)}...` : props.title)
               || (props.title != null && props.title.length < 40 ? props.title.padEnd(40, ' ') : props.title) } </h5>
              <p className="card-text">
              {(props.description != null && props.description.length > 100 ? `${props.description.slice(0, 100)}...` : props.description)
                || (props.description != null && props.description.length < 100 ? props.description.padEnd(100, ' ') : props.description )
              }
              </p>
              <a href={props.newsUrl}  target="_blank" className={buttonClass}>
                Read Full News
              </a>
              <div>
              <div class="card-text" style={{marginTop: '0.5rem'}}><small class="text-body-secondary">By {props.author ? props.author : 
                "Unknown" }
              </small></div>
              <div class="card-text"><small class="text-body-secondary">Published on {props.publishedAt ? new Date(props.publishedAt).toUTCString() : 
                "Not Available" }
              </small></div>
              </div>
              
            </div>
        </div>
    </div>
  )
}
