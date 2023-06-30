import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);




  const updateNews = async () => {
    props.setprogress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setprogress(50);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalArticles(parsedData.totalResults);
    setLoading(false);
    props.setprogress(100);
  }

  useEffect(() => {
    updateNews()
  }, [])




  const fetchMore = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalArticles(parsedData.totalResults)
  }


  return (
    <div className='container my-3'>
      <h1 style={{ marginTop: 100 }}>DZL NEWS - Top headlines!</h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMore}
        hasMore={articles.length !== totalArticles}
        loader={<Spinner />}
        style={{ overflow: "hidden" }}>

        <div className="row">
          {articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem date={element.publishedAt ? element.publishedAt : ""} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgURL={element.urlToImage ? element.urlToImage : null} url={element.url ? element.url : ""} />
            </div>
          })}
        </div>
      </InfiniteScroll>
    </div>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
