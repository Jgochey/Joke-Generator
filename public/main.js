// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Joke Generator</h1>
    <button class="btn btn-danger" id="click-me">Get a joke</button><br />
    <hr />
    <div id="text">Click the joke button!</div>
    <div id="delivery"> </div>
  `;

  document.querySelector('#click-me').addEventListener('click', () => {
    getRequest().then((response) => {
      console.warn(response.setup);
      console.warn(response.delivery);
      document.querySelector('#text').innerHTML = response.setup;
      document.querySelector('#app').innerHTML = `<h1>Joke Generator</h1>
    <button class="btn btn-danger" id="click-me-too">Get punchline</button><br />
    <hr />
    <div id="text">${response.setup}</div>
    <div id="delivery"> </div>`;

      document.querySelector('#click-me-too').addEventListener('click', () => {
        document.querySelector('#delivery').innerHTML = response.delivery;
        document.querySelector('#click-me-too').innerHTML = 'Get another joke';
      });
    });
  });

  // Everything works...'cept how do the Double-click thing without restarting from the beginning?

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
