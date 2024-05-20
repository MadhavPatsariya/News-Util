import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { fetchTopHeadlines } from "../services/fetchNews";
import { TOP_HEADLINE_URL } from "../utils/constants";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);  
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1000);

  useEffect(() => {
    loadHeadlines(page);
  }, []);

  const loadHeadlines = async (pageNumber) => {
    setLoading(true);
    const headlines = await fetchTopHeadlines(pageNumber);
    setTotalResults(headlines[1]);
    timeout(5000);
    setArticles(headlines[0]);
    setLoading(false);
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=17feb39d31984ef284b9421cf6d76958"
  //   );
  //     const jsonData = await result.json();
  //     console.log(jsonData);
  //    // setArticles(jsonData.articles);
  //   };
  //   fetchData();
  // }, []);

  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=17feb39d31984ef284b9421cf6d76958")
  //     .then(response => response.json())
  //     .then(json =>
  //       console.log(json.articles))
  //     .catch(error => console.error(error));
  // }, []);

  // const [loading, setLoading] = useState(true);
  // const [articles, setArticles] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
   // spinner-border text-success
  //       console.log("Fetching data from:", TOP_HEADLINE_URL); // Debugging output
  //       const response = await fetch(TOP_HEADLINE_URL);
  //       console.log("Fetch response status:", response.status); // Debugging output
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const jsonData = await response.json();
  //       console.log("Fetched JSON data:", jsonData); // Debugging output
  //       setArticles(jsonData.articles); // Assuming jsonData.articles is the correct path
  //     } catch (error) {
  //       setError(error.message);
  //       console.error("Error fetching data:", error); // Debugging output
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const timeout = (delay) => {
    return new Promise( res => setTimeout(res, delay) );
  }
  const increasePage = async () => {
    if(page + 1 > Math.ceil(totalResults/10)){
      return;
    }
    var current = page
    setPage(current + 1);
    loadHeadlines(page);
    console.log("Page Increased : " + page);
  }

  const decreasePage = async () => {
    if(page == 1){
      return;
    }
    var current = page
    setPage(current - 1);
    loadHeadlines(page);
    console.log("Page Decreased : " + page);
  }

  return (
    <div className="container mt-5">
      <h2>Top Headlines for today</h2>
      {
        loading == true ? (<div className="d-flex justify-content-center">
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
                          />
                        </div>
                      ) : console.log(JSON.stringify(element))
                    )}
                  </div>
                  <div style={{display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '3em'}}>
                  <button type="button" className="btn btn-outline-dark" disabled={page==1} onClick={decreasePage}> &larr; Previous</button>
                  <button type="button" className="btn btn-outline-dark" onClick={increasePage}>Next &rarr;</button>
                  </div>
                  </> )
      }
    </div>
  );
}
