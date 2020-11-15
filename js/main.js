// import your packages here
import { fetchData } from "./components/TheDataMiner.js";

(() => {
  // stub * just a place for non-component-specific stuff
  console.log('loaded');

  function popErrorBox(message) {
    alert("Something has gone horribly, horribly wrong");
  }

  function handleDataSet(data) {
    let userSection = document.querySelector('.user-section'),
      userTemplate = document.querySelector('#user-template').content;

    for (let user in data) {
      let currentUser = userTemplate.cloneNode(true),
        currentUserText = currentUser.querySelector('.user').children;

      currentUserText[1].src = `images/${data[user].Avatar}`;
      //currentUserText[2].textContent = data[user].Name;
      //currentUserText[3].textContent = data[user].Role;
      //currentUserText[4].textContent = data[user].Nickname;

      // add this new user to the view
      userSection.appendChild(currentUser);
    }
  }


  fetchData("./includes/functions.php").then(data => handleDataSet(data)).catch(err => console.log(err));
})();