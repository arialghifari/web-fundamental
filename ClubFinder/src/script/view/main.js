import '../component/search-bar.js';
import '../component/club-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const clubListElement = document.querySelector('club-list');

  const onButtonSearchClicked = async () => {
    try {
      const search = await DataSource.searchClub(searchElement.value);
      renderResult(search);
    } catch (rejectMessage) {
      fallbackResult(rejectMessage);
    }
  };

  const renderResult = (results) => {
    clubListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
