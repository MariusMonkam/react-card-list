import React from 'react';
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
const SinglePage = ({match})=>{
  //create url-parameter header
  const header = match.params.header
  const post = posts.find(post =>post.header === header)
  return(
   <div className="container text-center">
          <div className="card border-dark mb-3 " >
            <div className="card-header">{post.header}</div>
            <div className="card-body text-dark">
              <h5 className="card-title">{post.cardtitle}</h5>
              <p className="card-text">{post.cardtext}</p>
            </div>
          </div>    
      </div>

  )
}
export default SinglePage;