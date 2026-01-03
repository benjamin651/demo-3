class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
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
                }
                .logo {
                    display: flex;
                    align-items: center;
                }
.logo {
    display: flex;
    align-items: center;
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
                    transition: all 0.3s;
                    position: relative;
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
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                
                @media (max-width: 1024px) {
                    .nav-links, .cta-buttons {
                        display: none;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                    
                    nav {
                        padding: 1rem;
                    }
                }
            </style>
            
            <nav>
                    <a href="/" class="logo text-yellow-400 font-bold text-xl">
                        <span class="font-extrabold">John's Lawn Care</span>
                    </a>
<div class="nav-links">
                    <a href="/index.html">Home</a>
                    <a href="services.html">Services</a>
                    <a href="gallery.html">Gallery</a>
                    <a href="about.html">About</a>
                    <a href="contact.html">Contact</a>
</div>
<div class="cta-buttons">
                    <a href="tel:+15145551234" class="phone-link">
                        <i data-feather="phone"></i>
                        
                    </a>
                    <a href="quotes.html" class="quote-btn">Free Quote</a>
</div>
                
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);