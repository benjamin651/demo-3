class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: var(--primary-dark);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          border-bottom: 3px solid var(--secondary);
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .logo {
          font-size: 1.4rem;
          font-weight: 700;
          color: #facc15;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: all 0.3s;
        }

        .nav-links a:hover {
          color: var(--secondary);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary);
          transition: width 0.3s;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .phone-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--secondary);
          font-weight: 600;
          text-decoration: none;
        }

        .quote-btn {
          background-color: var(--secondary);
          color: var(--primary-dark);
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 600;
          transition: all 0.3s;
          text-decoration: none;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .quote-btn:hover {
          background-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        /* Hamburger */
        .mobile-menu-btn {
          display: none;
          width: 44px;
          height: 44px;
          border: none;
          background: transparent;
          border-radius: 10px;
          cursor: pointer;
        }

        .hamburger {
          width: 22px;
          height: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hamburger span {
          height: 2px;
          width: 100%;
          background: white;
          border-radius: 999px;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .mobile-menu-btn.open .hamburger span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .mobile-menu-btn.open .hamburger span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-btn.open .hamburger span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile menu */
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--primary-dark);
          padding: 1rem;
          display: none;
          box-shadow: 0 10px 20px rgba(0,0,0,0.25);
        }

        .mobile-menu.open {
          display: block;
        }

        .mobile-link {
          display: block;
          padding: 0.75rem 0;
          color: white;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          text-decoration: none;
          font-weight: 500;
        }

        .mobile-link:hover {
          color: var(--secondary);
        }

        .mobile-cta {
          margin-top: 1rem;
          display: block;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .nav-links,
          .cta-buttons {
            display: none;
          }

          .mobile-menu-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          nav {
            padding: 1rem;
          }
        }
      </style>

      <nav>
        <a href="/" class="logo">
          John's Lawn Care
        </a>

        <div class="nav-links">
          <a href="/index.html">Home</a>
          <a href="services.html">Services</a>
          <a href="gallery.html">Gallery</a>
          <a href="about.html">About</a>
        </div>

        <div class="cta-buttons">
          <a href="tel:+15145551234" class="phone-link">
            <i data-feather="phone"></i>
          </a>
          <a href="quotes.html" class="quote-btn">Free Quote</a>
        </div>

        <button class="mobile-menu-btn" aria-label="Toggle menu">
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div class="mobile-menu">
          <a href="/index.html" class="mobile-link">Home</a>
          <a href="services.html" class="mobile-link">Services</a>
          <a href="gallery.html" class="mobile-link">Gallery</a>
          <a href="about.html" class="mobile-link">About</a>
          <a href="quotes.html" class="quote-btn mobile-cta">Free Quote</a>
        </div>
      </nav>
    `;

    if (window.feather) feather.replace();

    const btn = this.shadowRoot.querySelector(".mobile-menu-btn");
    const menu = this.shadowRoot.querySelector(".mobile-menu");

    const closeMenu = () => {
      menu.classList.remove("open");
      btn.classList.remove("open");
    };

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("open");
      btn.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!this.contains(e.target)) closeMenu();
    });

    this.shadowRoot.querySelectorAll(".mobile-menu a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });
  }
}

customElements.define("custom-navbar", CustomNavbar);
