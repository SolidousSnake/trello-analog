import {HashRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import BoardPage from "./pages/Board";
import NotFoundPage from "./pages/NotFound";
import Header from "./layout/header";
import Content from "./layout/content";
import Footer from "./layout/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/card.css';

function App() {
    return (
        <Router>
            <Header />
            <Content>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/board" element={<BoardPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Content>
            <Footer />
        </Router>
    );
}


export default App;
