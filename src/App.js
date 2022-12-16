import React from "react";
import Tmdb from "./tmdb";
import './App.css';
import MovieRow from "./components/MovieRow"
import FeatureMovie from "./components/FeatureMovie";
import Header from "./components/Header";

export default () => {

  const [movieList, setMovieList] = React.useState([]);
  const [featureData, setFeatureData] = React.useState(null);
  const [blackHeader, setBlackHeader] = React.useState(false);

  React.useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista dos filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      
      //Pegando o Feature(Filme em destaque)
      let originals = list.filter(i => i.slug === "originals");
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeatureData(chosenInfo);
    }
 
    loadAll();
  }, []);

  React.useEffect(() => {

    const scrollListener = () => {
      if(window.scrollY > 10) {
          setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    }

  }, [])

  return (
    <div className="page"> 
    <Header  black={blackHeader} />
      {  featureData && <FeatureMovie item={featureData} />}
        <section className="lists">
            {movieList.map((item, key) => (
              <div>
                <MovieRow key={key} title={item.title} items={item.items} />
              </div>
            ))}
        </section>

        <footer>
          Clone Netflix <span role="img" aria-label="coração"> ❤ </span> desenvolvido pelo Bruno Bandeira
        </footer>
    </div>
  );
}

// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material

