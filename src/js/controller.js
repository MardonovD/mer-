// serverga murojat bu obyect qaytaradi..
import * as model from './model.js';
//ung tomondagi natija.
import recipeView from './views/recipeView.js';
//search
import searchView from './views/searchView.js';
// chap tomondagi search bolimi..
import resultsView from './views/resultsView.js';
// npm core-js
import 'core-js/stable';
// promise uchun npm package
import 'regenerator-runtime/runtime';

import paginationView from './views/paginationView.js';
import { async } from 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// }

// bu control recipe uchun ...
const constrolRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner(); //  spinner svg
    await model.loadRecipe(id); // server api biln ishlash

    //2. render qilamiz
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const constrolSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();

    if (!query) return;

    await model.loadSearchResults(query);

    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());
  } catch (err) {
    console.log(arr);
  }
};

const init = function () {
  recipeView.addHandlerRender(constrolRecipes);
  searchView.addHandlerSearch(constrolSearchResults);
};
init();
