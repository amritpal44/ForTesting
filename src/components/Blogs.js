import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";


function Blogs(){

  //CONSUMPTION
  const {loading} = useContext(AppContext);
  const {posts} = useContext(AppContext);


  return(
    <div>
      { loading ? <Spinner/> : (

        posts.length === 0 ? (
          <div>
            <p>No Post Found</p>
          </div>
        ) : 
        (
          posts.map( (post) => (

            <div key={post.id}>
              <p>{post.title}</p>
              <p>
                By <span>{post.author}</span>
              </p>
              <p>
                Posted on <span>{post.date}</span>
              </p>
              <p>
                {post.content}
              </p>
              <p>
                {post.tags.map( (tag, index) => {
                  return <span key={index}>{`#${tag}`}</span>
                })}
              </p>
            </div>
          ))

        )

      )}
    </div>
  )
}

export default Blogs;