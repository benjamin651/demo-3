class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: var(--primary-dark);
                    color: white;
                    padding: 3rem 1rem;
                    border-top: 4px solid var(--secondary);
                }
.footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                    margin-bottom: 1rem;
                    display: inline-block;
                }
                
                .footer-description {
                    color: #b3b3b3;
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                .social-link {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: var(--primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s;
                }
                .social-link:hover {
                    background-color: var(--secondary);
                    transform: translateY(-3px);
}
                
                .footer-heading {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    position: relative;
                    padding-bottom: 0.5rem;
                }
                .footer-heading::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 50px;
                    height: 3px;
                    background-color: var(--secondary);
}
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .footer-links li {
                    margin-bottom: 0.75rem;
                }
                
                .footer-links a {
                    color: #b3b3b3;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                
                .footer-links a:hover {
                    color: white;
                }
                
                .contact-info {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .contact-info li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                }
                
                .contact-info i {
                    margin-top: 2px;
                }
                
                .copyright {
                    text-align: center;
                    margin-top: 3rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid #333;
                    color: #b3b3b3;
                    font-size: 0.875rem;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <div class="footer-container">
                <div>
                    <a href="/" class="footer-logo">John's Lawn Care</a>
                    <p class="footer-description">
                        Professional lawn care and landscaping services in the neighboring communities and areas.
</p>
                    <div class="social-links">
                        <a href="#" class="social-link">
                            <i data-feather="facebook"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="instagram"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="twitter"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="quotes.html">Free Quote</a></li>
                        <li><a href="contact.html">Contact</a></li>
</ul>
                </div>
                
                <div>
                    <h3 class="footer-heading">Services</h3>
                    <ul class="footer-links">
                        <li><a href="services.html#lawn-maintenance">Lawn Maintenance</a></li>
                        <li><a href="services.html#landscaping">Landscaping</a></li>
                        <li><a href="services.html#seasonal-cleanup">Seasonal Cleanup</a></li>
                        <li><a href="services.html#hedge-trimming">Hedge Trimming</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="footer-heading">Contact Us</h3>
                    <ul class="contact-info">
                        <li>
                            <i data-feather="phone"></i>
                            <span>(514) 555-1234</span>
                        </li>
                        <li>
                            <i data-feather="mail"></i>
                            <span>info@johnlawncare.ca</span>
</li>
<li>
                            <i data-feather="clock"></i>
                            <span>Mon-Fri: 8am - 6pm<br>Sat: 9am - 3pm</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                &copy; ${new Date().getFullYear()} John's Lawn Care. All rights reserved.
</div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);