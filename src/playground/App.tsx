import "./assets/App.scss";
import {PiechartPlayground} from "./piechart/PiechartPlayground.tsx";
import {BarchartPlayground} from "./barchart/BarchartPlayground.tsx";

export const App: React.FC = () => {


    return (
        <main>
            <PiechartPlayground/>
            <BarchartPlayground/>
        </main>
    )
}

