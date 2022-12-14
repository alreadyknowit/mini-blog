import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound"
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/create/*" element={<Create/>}/>
                    <Route path="/blogs/:id" element={<BlogDetails/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>


            </BrowserRouter>
        </div>
    );
}

export default App;
