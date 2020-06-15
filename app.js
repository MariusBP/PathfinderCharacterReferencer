class App {
  constructor() {
    this.data = JSON.parse(localStorage.getItem('storedData')) || []; //Grabs the stored data from local storage, or initializes an array if there are no data stored
    const button = document.createElement('button')
    button.textContent = "Click";
    document.body.appendChild(button);

    button.addEventListener('click', function() {
      console.log(this);
    })
  }
}

new App();
