import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./Layout";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import PopularMovie from "./pages/movie/Popular";
import TopRatedMovie from "./pages/movie/TopRated";
import theme from "./components/utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";
import Detail from "./pages/movie/Detail";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/create" element={<CreateMovie />} />
            <Route path="/movie/popular" element={<PopularMovie />} />
            <Route path="/movie/now" element={<NowPlayingMovie />} />
            <Route path="/movie/top" element={<TopRatedMovie />} />
            <Route path="movie/:id" element={<Detail />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
