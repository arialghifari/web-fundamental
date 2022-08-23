class ImageFigure extends HTMLElement {
  connectedCallback() {
    this.src = this.getAttribute("src") || null;
    this.alt = this.getAttribute("alt") || null;
    this.caption = this.getAttribute("caption") || null;
    this.render();
  }

  render() {
    this.innerHTML = `
      <figure>
        <img src="${this.src}" alt="${this.alt}" />
        <figcaption>${this.caption}</figcaption>
      </figure>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // dynamic way to change property value based on the changed attribute
    this[name] = newValue;

    // re-render everytime attribute changes
    this.render();
  }

  // static getter that watch over attribute changes
  static get observedAttributes() {
    // attributes that will be watched and could also be multiple attribute
    // return ['caption', 'src', 'alt'];
    return ["caption"];
  }
}

customElements.define("image-figure", ImageFigure);
