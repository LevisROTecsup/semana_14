import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as utils from "../utils";
import { HomeView, AboutView, ContactView, PokemonView, PokemonListView } from "../views";
import { NavbarLayout } from "../layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavbarLayout />}>
          <Route path={utils.HOME} element={<HomeView />} />
          <Route path={utils.ABOUT} element={<AboutView />} />
          <Route path={utils.CONTACT} element={<ContactView />} />
          <Route path={utils.POKEMON_LIST} element={<PokemonListView />} />
          <Route path={utils.POKEMON_DETAIL} element={<PokemonView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
