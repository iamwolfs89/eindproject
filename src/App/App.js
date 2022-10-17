import Pages from "../pages/Pages";
import './App.css';
import TopMenu from "../components/TopMenu/TopMenu";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <TopMenu/>
            <Pages/>
        </BrowserRouter>
    );
}

export default App;
