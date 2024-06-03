import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'
import { fetchTopHeadlines } from "../services/fetchNews";

export default function Home(props) {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);  
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1000);
  const [nextDisabled, setNextDisabled] = useState(false);
  const buttonClass = `btn btn-${props.mode === 'light' ? 'dark' : 'light'}`;

  useEffect(() => {
    loadHeadlines(page, props.category);
    if(page + 1 >= Math.ceil(totalResults/5)){
      setNextDisabled(true);
    }
    document.title = `News-Util - ${props.category.toString().toUpperCase().slice(0,1).concat(props.category.slice(1))}`;
  }, [page, props.category, props.mode]);

  const loadHeadlines = async (pageNumber, category) => {
    console.log("Category: " + category);
    setLoading(true);
    const headlines = await fetchTopHeadlines(pageNumber, category);
    setTotalResults(headlines[1]);
    timeout(5000);
    setArticles(headlines[0]);
    setLoading(false);
  };

  const timeout = (delay) => {
    return new Promise( res => setTimeout(res, delay) );
  }

  const increasePage = async () => {
    if(page + 1 >= Math.ceil(totalResults/5)) return;
    await loadHeadlines(page + 1, props.category);
    setPage(page + 1);
  }

  const decreasePage = async () => {
    await loadHeadlines(page - 1, props.category);
    setPage(page - 1);
  }

  return (
    <div className="container mt-5">
      <h2 style={{marginTop: '7rem'}}>Top Headlines for today</h2>
      {
        loading === true ? (<div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        </div>) : 
                 ( <> 
                  <div className="row">
                    {articles.map((element, index) =>
                      element.title != null &&
                      element.description != null &&
                      element.url != null ? (
                        <div className="col-lg-4 mt-4" key={element.url + index}>
                          <NewsItem
                            title={element.title}
                            description={element.description}
                            imageUrl={element.urlToImage}
                            newsUrl={element.url}
                            mode = {props.mode}
                            author = {element.author}
                            publishedAt = {element.publishedAt}
                            source = {element.source.name}
                          />
                        </div>
                      ) : console.log(JSON.stringify(element))
                    )}
                  </div>
                  <div style={{display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '3rem', marginBottom: '3rem'}}>
                  <button type="button" className={buttonClass} disabled={page===1} onClick={decreasePage}> &larr; Previous</button>
                  <button type="button" className={buttonClass} disabled={nextDisabled} onClick={increasePage}>Next &rarr;</button>
                  </div>
                  </> )
      }
    </div>
  );
}


Home.propTypes = {
  category: PropTypes.string,
}

Home.defaultProps = {
  category: "general"
}