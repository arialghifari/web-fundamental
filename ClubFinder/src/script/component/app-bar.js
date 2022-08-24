class AppBar extends HTMLElement {
  connectedCallback(title) {
    this._title = title;
    this.render();
  }

  render() {
    this.innerHTML = `<h2>${this.title}</h2>`;
  }
}

customElements.define("app-bar", AppBar);
