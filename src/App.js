import Pages from "./pages/Pages";
import './App.css';
import TopMenu from "./components/TopMenu/TopMenu";
import {BrowserRouter} from "react-router-dom";


const apiKey = '210573e058484ecda761969750261c0d';

const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`

function App() {

    return (
        <BrowserRouter>
            <TopMenu/>
            <Pages/>
        </BrowserRouter>
    );
}

export default App;
