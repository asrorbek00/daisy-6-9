import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { data } from "autoprefixer";

function Home() {
  const [url, setUrl] = useState("http://localhost:3000/articles");
  const { data: articles, isPending, error } = useFetch(url);
  return (
    <ul className="grid lg:grid-cols-3 px-12 gap-3 md:grid-cols-2 md:gap-2 my-12">
      {articles &&
        articles.map((article) => {
          const{id, title,image,author} = article
          return (
            <li key={article.id}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={image} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <h2>Author:{author}</h2>
                  
                  <div className="card-actions justify-end">
                    
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default Home;
