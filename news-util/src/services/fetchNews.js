import { TOP_HEADLINE_URL } from '../utils/constants';

import genericNewsImage from '../utils/generic-news.jpg';
export const fetchTopHeadlines = async() => {
    try{
        console.log("in the fetchNews.js, next step fetch")
        const response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=17feb39d31984ef284b9421cf6d76958");
        const data = await response.json();
        const validatedNewsArticles = await validateImageUrls(data.articles);
        return validatedNewsArticles;
    }
    catch (error) {
        console.error('Error fetching top headlines:', error);
        throw error;
      }
}

const validateImageUrls = async(articles) => {
    const validateArticles = await Promise.all(
        articles.map(async (article) => {
            const isValid = await isImageUrl(article.urlToImage);
            const newArticle = {
                ...article,
                urlToImage: isValid ? article.urlToImage : genericNewsImage
            }
            return newArticle;
        }
        )
    );
    return validateArticles;
}

const isImageUrl = async (url) => {
    if (!url) return false;
    try {
      const response = await fetch(url, {method: 'GET', mode: 'no-cors'});
      console.log(response);
      return response.status === 404 ? false : true;
    } catch {
      return false;
    }
  };