import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  // State to store the fetched news articles
  const [news, setNews] = useState()

  // Function to fetch news based on a category or a default keyword search
  const filterNews = async (category) => {
    let everything = "https://newsapi.org/v2/everything?q=keyword&apiKey=f67deba8e00c4e09ae8aa79ed8c526c8"
    let link = ""

    // Check if a category is provided and is not the default 'everything' link
    if (category && category !== everything) {
      link = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=f67deba8e00c4e09ae8aa79ed8c526c8`
    } else {
      link = "https://newsapi.org/v2/everything?q=keyword&apiKey=f67deba8e00c4e09ae8aa79ed8c526c8"
    }

    // Fetch the news data from the API
    const { data } = await axios.get(link)
    // Update the state with the fetched news articles
    setNews(data.articles)
  }

  // useEffect to call filterNews once when the component mounts
  useEffect(() => {
    filterNews()
  }, [])

  return (
    <>
      {/* Navbar component with the filterNews function passed as a prop */}
      <Navbar filterNews={filterNews} />
      {/* Home component with the fetched news articles passed as a prop */}
      <Home news={news} />
      {/* Footer component */}
      <Footer />
    </>
  )
}

export default App
