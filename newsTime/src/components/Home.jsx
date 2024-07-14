import React from 'react'
import Card from './Card'

const Home = ({news}) => {
  return (
   <>
   <div>
    {
      news && news.map((e)=>{
        return(
          <Card key={e.url}
              title={e.title}
              content={e.content}
              author={e.author}
              publishedAt={e.publishedAt}
              url={e.url}
              urlToImage={e.urlToImage}
              altImage={"./bbc.png"}
          />
        )
      })
    }

   </div>
   </>
  )
}

export default Home