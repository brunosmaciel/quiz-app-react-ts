import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game } from './pages/Game';
import { Result } from './pages/Result';
import { Home } from './pages/Home';
import { Container, GlobalStyles } from './theme/GlobalStyles';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/result" element={<Result />} />
            <Route path="/game" element={<Game />} />
          </Routes>
          <GlobalStyles />
          <ToastContainer
            autoClose={1000}
            position="top-center"
            className="toast-container"
            theme="dark"
          />
        </Container>
      </Provider>
    </BrowserRouter>
  );
};
