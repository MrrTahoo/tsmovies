import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner'


function App() {
  return (


    <div className="App">
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}
        islargeRow />
      <Row title="Trending Now Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
