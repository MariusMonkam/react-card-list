import React from 'react';
import SinglePage from './src/SinglePage'
import {Link} from 'react-router-dom'
  const posts = [
    {
      "header":"header1",
      "cardtitle":"card-tiltes1",
      "cardtext":"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      "header":"header2",
      "cardtitle":"card-tiltes2",
      "cardtext":"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      "header":"header3",
      "cardtitle":"card-tiltes3",
      "cardtext":"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      "header":"header4",
      "cardtitle":"card-tiltes4",
      "cardtext":"Some quick example text to build on the card title and make up the bulk of the card's content."
    }
  ]

const PageList = ({header})=>{

    return(
      <>
      //maping our post , remember to add the key 
      {posts.map((post,key)=>(
   // the first key help us link to unique post 
      <Link to={`/${post.header}`} key={key}> 
      //the second key is for the post on the PageList
      <div className="container col-6 text-center" key={key}>
      //our card deck component start here
          <div className="card border-dark mb-3  " >
            <div className="card-header bg-dark text-white">{post.header}</div>
            <div className="card-body text-dark">
              <h5 className="card-title">{post.cardtitle}</h5>
              //here we add a short text of the cardtext 
              //read the hole text the user will just click //on the card
           <p> {post.cardtext.substring(0,32)}...<span className="badge bg-dark text-white">Read more</span></p>
            </div>
          </div>    
      </div>
      </Link>
     
      ))}
     </>
     
    )
}
export default PageList;