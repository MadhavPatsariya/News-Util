import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import {fetchTopHeadlines} from "../services/fetchNews";
import { TOP_HEADLINE_URL } from '../utils/constants';
export default function Home() {
  // const [loading, setLoading] = useState(false);
   const [articles, setArticles] = useState([]);

  useEffect(() => {
      const loadHeadlines = async () => {
        const headlines = await fetchTopHeadlines();
        //console.log("Headlines: " + headlines);
        // headlines.forEach((headline, index) => {
        //   console.log(`Article ${index + 1}:`, headline);
        // });
        setArticles(headlines);
        // articles.forEach((headline, index) => {
        //     console.log(`Article ${index + 1}: Title-------`, headline.title);
        //     console.log(`Article ${index + 1}: Description-------`, headline.description);
        //  })
      } 
      loadHeadlines();
    }, []
  );
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


  return (
    <div className="container mt-5">
      <div className="row">
        {articles.map((element) => (
          element.title != null && element.description!= null && element.url != null ?
          <div className="col-lg-4 mt-4" key={element.url}>
            <NewsItem
              title={element.title}
              description={element.description}
              imageUrl={element.urlToImage  }
              newsUrl={element.url}
            />
          </div> : null
        ))}
      </div>
    </div>
  );
}
