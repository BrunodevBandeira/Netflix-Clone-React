import React from "react";
import "./MovieRow.css"

export default({title, items}) => {
    return(
        <div className="movieRow">
           <h2> {title} </h2>
           <div className="movieRow--listarea">
                <div className="movieRow--list">
        {/* items.results.length > 0 => Se tiver algum filme pra mostrar
        items.results.map((item, key) => faz um map na lista 
        
        Isso é um loop dentro do loop das listas para mostrar os filmes
        */}
                    {items.results.length > 0 && items.results.map((item, key) => ( 
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                            alt={item.original_title}  />
                        </div>
                    ))}
                </div>
           </div>
        </div>
    )
}