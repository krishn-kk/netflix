import "./App.css";
import Row from "./components/Row";
import requests from "./request";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
    return (
        <div className="App">
            {/* NavBar */}
            {/* Banner */}
            <NavBar />
            <Banner />

            <Row
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
                isLargeRow
            />
            <Row
                title="NETFLIX ORIGINAL"
                fetchUrl={requests.fetchNetflixOriginal}
            />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <Footer />
        </div>
    );
}

export default App;
