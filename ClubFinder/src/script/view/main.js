import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("#searchElement");
  const buttonSearchElement = document.querySelector("#searchButtonElement");
  const clubListElement = document.querySelector("#clubList");

  const onButtonSearchClicked = async () => {
    // using Promise
    // DataSource.searchClub(searchElement.value)
    //   .then(renderResult)
    //   .catch(fallbackResult);

    // using Async/Await
    try {
      const search = await DataSource.searchClub(searchElement.value);
      renderResult(search);
    } catch (rejectMessage) {
      fallbackResult(rejectMessage);
    }
  };

  const renderResult = (results) => {
    clubListElement.innerHTML = "";
    results.forEach((club) => {
      const name = club.name;
      const fanArt = club.fanArt;
      const description = club.description;

      const clubElement = document.createElement("div");
      clubElement.setAttribute("class", "club");

      clubElement.innerHTML = `
        <img class="fan-art-club" src="${fanArt}" alt="Fan Art" />
        <div class="club-info">
          <h2>${name}</h2>
          <p>${description}</p>
        </div>
      `;
      clubListElement.appendChild(clubElement);
    });
  };

  const fallbackResult = (message) => {
    clubListElement.innerHTML = "";
    clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};

export default main;
