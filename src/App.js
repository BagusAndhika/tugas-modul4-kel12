import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Hooks from './Hooks/Hooks'

export default function App () {
  return(
    <BrowserRouter>
      <header>
        <div className="title">
          <p>TUGAS MODUL 4 KELOMPOK 12</p>
        </div>
        <nav>
          <Link className="text" to="/">
            Hooks
          </Link>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Hooks} />
      </Switch>
    </BrowserRouter>
  );
}