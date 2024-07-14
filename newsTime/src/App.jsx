import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  const [news,setNews] =useState()
  

  const filterNews=async(category)=>{
    let everything="https://newsapi.org/v2/everything?q=keyword&apiKey=f67deba8e00c4e09ae8aa79ed8c526c8"
    let link=""
    if(category && category!==everything){
      link= `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=f67deba8e00c4e09ae8aa79ed8c526c8`
    }else{
      link="https://newsapi.org/v2/everything?q=keyword&apiKey=f67deba8e00c4e09ae8aa79ed8c526c8"
    }
    const {data}= await axios.get(link)
    setNews(data.articles)
  }
  useEffect(()=>{
    filterNews()
  },[])
  

  return (
    <>
    <Navbar filterNews={filterNews}/>
    <Home news={news}  />
    <Footer/>
      
    </>
  )
}

export default App
