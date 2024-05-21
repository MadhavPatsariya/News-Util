import genericNewsImage from '../utils/generic-news.jpg';
export const fetchTopHeadlines = async(pageNumber, category) => {
    try{
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=17feb39d31984ef284b9421cf6d76958&page=${pageNumber}&pageSize=5`);
        const data = await response.json();
        const validatedNewsArticles = await validateImageUrls(data.articles);
        console.log("Articles: " + validatedNewsArticles)
        console.log("Total Results : " + data.totalResults);
        console.log("Size: " + validatedNewsArticles.length);
        return [validatedNewsArticles, data.totalResults];
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
      return response.status === 404 ? false : true;
    } catch {
      return false;
    }
  };

