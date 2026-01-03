class CustomImages extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    const images = JSON.parse(this.getAttribute('data-images') || '[]');
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
          margin: 1rem 0;
        }
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          aspect-ratio: 4/3;
        }
        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .gallery-item:hover .gallery-image {
          transform: scale(1.05);
        }
        .gallery-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 0.5rem;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }
        .gallery-item:hover .gallery-caption {
          transform: translateY(0);
        }
      </style>
      <div class="gallery">
        ${images.map(img => `
          <div class="gallery-item">
            <img src="${img.src}" alt="${img.alt || ''}" class="gallery-image">
            ${img.caption ? `<div class="gallery-caption">${img.caption}</div>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }
}

customElements.define('custom-images', CustomImages);