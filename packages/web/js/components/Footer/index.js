import { getLink } from '../../utils/getLink.js';

class Footer extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(this.styles());

    const footer = this.createFooter();
    const copyright = this.createCopy();
    const body = this.createBody();

    footer.appendChild(body);
    footer.appendChild(copyright);

    shadow.appendChild(footer);
  }

  createFooter() {
    const footer = document.createElement('footer');

    return footer;
  }

  redirect(route) {
    return getLink(route);
  }

  createBody() {
    const body = document.createElement('section');

    body.id = 'footer-body';

    body.innerHTML = `
      <section class="base-section about-us">
        <h2>Sobre Nós</h2>

        <p>
          A Neo Expensive, empresa de venda dos mais diversos hardwares foi criada para satisfazer suas necessidades e lhe
          entregar produtos com o comprometimento de oferecê-los com a maior qualidade possível.
        </p>

        <div class="icons">
          <ul id="social-media-footer">
            <li>
              <a href="#facebook" aria-label="Facebook">
                <svg id="facebook" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25 43.75C35.3553 43.75 43.75 35.3553 43.75 25C43.75 14.6447 35.3553 6.25 25 6.25C14.6447 6.25 6.25 14.6447 6.25 25C6.25 35.3553 14.6447 43.75 25 43.75Z"
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M32.8125 17.1877H29.6875C28.4443 17.1877 27.252 17.6816 26.3729 18.5607C25.4939 19.4398 25 20.632 25 21.8752V43.7502"
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M18.75 28.1252H31.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </li>
          
            <li>
              <a href="#instagram" aria-label="Instagram">
                <svg id="gradient" width="0" height="0">
                  <radialGradient id="rgb" r="150%" cx="30%" cy="107%">
                    <stop stop-color="#fdf497" offset="0" />
                    <stop stop-color="#fdf497" offset="0.05" />
                    <stop stop-color="#fd5949" offset="0.45" />
                    <stop stop-color="#d6249f" offset="0.6" />
                    <stop stop-color="#285AEB" offset="0.9" />
                  </radialGradient>
                </svg>
                <svg id="instagram" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25 32.8125C29.3147 32.8125 32.8125 29.3147 32.8125 25C32.8125 20.6853 29.3147 17.1875 25 17.1875C20.6853 17.1875 17.1875 20.6853 17.1875 25C17.1875 29.3147 20.6853 32.8125 25 32.8125Z"
                    stroke="white" stroke-width="2" stroke-miterlimit="10" />
                  <path
                    d="M33.5938 7.03125H16.4062C11.2286 7.03125 7.03125 11.2286 7.03125 16.4062V33.5938C7.03125 38.7714 11.2286 42.9688 16.4062 42.9688H33.5938C38.7714 42.9688 42.9688 38.7714 42.9688 33.5938V16.4062C42.9688 11.2286 38.7714 7.03125 33.5938 7.03125Z"
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </li>
          
            <li>
              <a href="#twitter" aria-label="Twitter">
                <svg id="twitter" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.37502 39.0625C9.37502 39.0625 17.1875 37.5 18.75 32.8125C18.75 32.8125 6.25002 28.125 9.37502 10.9375C9.37502 10.9375 15.625 18.75 25 20.3125V17.1881C25.0002 15.3931 25.6184 13.6529 26.7506 12.26C27.8829 10.8672 29.4602 9.90661 31.2173 9.53985C32.9744 9.17309 34.8043 9.42249 36.3991 10.2461C37.994 11.0697 39.2567 12.4174 39.9749 14.0624L46.875 14.0625L40.625 20.3125C40.625 31.25 32.8125 42.1875 18.75 42.1875C12.5 42.1875 9.37502 39.0625 9.37502 39.0625Z"
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </li>
          
          </ul>
        </div>
      </section>

      <section class="base-section contact">
        <h2>Contato</h2>

        <ul class="info">
          <li><span><a href="https://github.com/VitorGouveia" rel="noopener" target="_blank">Vitor Gouveia</a><br></span></li>
          <li><span><a href="https://github.com/Espalmer" rel="noopener" target="_blank">Vinicius Aquino</a><br></span></li>
          <li><span><a href="https://github.com/AtomicFeasT" rel="noopener" target="_blank">Thiago Lisboa</a></span></li>
        </ul>
      </section>

      <section id="quick-links">
        <h2>Links Úteis</h2>

        <ul>
          <li>
            <a href=${this.redirect('/Support/index.html#jump-to-faq')}>
            Dúvidas Frequentes
            </a>
          </li>

          <li>
            <a href=${this.redirect('/Support/index.html#jump-to-terms')}>
              Termos de Uso
            </a>
          </li>

          <li>
            <a href=${this.redirect('/Support/index.html#jump-to-help')}>
              Ajuda
            </a>
          </li>
        </ul>
      </section>

      <div class="logo">
        <a href="#" aria-label="NeoLogo">
          <svg width="307" height="94" viewBox="0 0 307 94" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="x" d="M81.1674 71.6726L87.386 64.9473C88.1833 64.0851 88.1833 62.6742 87.386 61.812L81.5878 55.5413C80.7905 54.6791 79.4859 54.6791 78.6886 55.5413L72.47 62.2666C72.2815 62.4704 72.1656 62.7526 72.1801 63.0505L72.1801 70.8888C72.1801 71.5159 72.6294 72.0018 73.2093 72.0018L80.4571 72.0018C80.718 72.0018 80.9645 71.8921 81.1674 71.6726V71.6726ZM67.5124 62.2666L61.2938 55.5413C60.4965 54.6791 59.1919 54.6791 58.3947 55.5413L52.5964 61.812C51.7991 62.6742 51.7991 64.0851 52.5964 64.9473L58.815 71.6726C59.0035 71.8764 59.2644 72.0018 59.5398 71.9862L66.7877 71.9862C67.3675 71.9862 67.8169 71.5002 67.8169 70.8731L67.8169 63.0348C67.8169 62.7526 67.7154 62.4861 67.5124 62.2666ZM58.815 77.034L52.5964 83.7593C51.7991 84.6215 51.7991 86.0324 52.5964 86.8947L58.3947 93.1653C59.1919 94.0275 60.4965 94.0275 61.2938 93.1653L67.5124 86.44C67.7009 86.2362 67.8169 85.9541 67.8024 85.6562L67.8024 77.8179C67.8024 77.1908 67.353 76.7048 66.7732 76.7048L59.5253 76.7048C59.2644 76.7048 59.018 76.8146 58.815 77.034ZM80.4281 76.7048H73.1803C72.6004 76.7048 72.1511 77.1908 72.1511 77.8179L72.1511 85.6562C72.1511 85.9384 72.2525 86.2362 72.441 86.44L78.6741 93.181C79.4714 94.0432 80.776 94.0432 81.5733 93.181L87.3716 86.9103C88.1688 86.0481 88.1688 84.6372 87.3716 83.775L81.1529 77.0497C80.9645 76.8146 80.718 76.7048 80.4281 76.7048V76.7048Z" fill="#8B46A3"/><path d="M47 83.76V90H20.984V56.4H46.376V62.64H28.712V69.936H44.312V75.984H28.712V83.76H47ZM108.512 56.4C111.488 56.4 114.064 56.896 116.24 57.888C118.448 58.88 120.144 60.288 121.328 62.112C122.512 63.936 123.104 66.096 123.104 68.592C123.104 71.056 122.512 73.216 121.328 75.072C120.144 76.896 118.448 78.304 116.24 79.296C114.064 80.256 111.488 80.736 108.512 80.736H101.744V90H93.9684V56.4H108.512ZM108.08 74.4C110.416 74.4 112.192 73.904 113.408 72.912C114.624 71.888 115.232 70.448 115.232 68.592C115.232 66.704 114.624 65.264 113.408 64.272C112.192 63.248 110.416 62.736 108.08 62.736H101.744V74.4H108.08ZM154.672 83.76V90H128.656V56.4H154.048V62.64H136.384V69.936H151.984V75.984H136.384V83.76H154.672ZM191.675 56.4V90H185.291L168.539 69.6V90H160.859V56.4H167.291L183.995 76.8V56.4H191.675ZM210.665 90.576C208.009 90.576 205.433 90.224 202.937 89.52C200.473 88.784 198.489 87.84 196.985 86.688L199.625 80.832C201.065 81.888 202.777 82.736 204.761 83.376C206.745 84.016 208.729 84.336 210.713 84.336C212.921 84.336 214.553 84.016 215.609 83.376C216.665 82.704 217.193 81.824 217.193 80.736C217.193 79.936 216.873 79.28 216.233 78.768C215.625 78.224 214.825 77.792 213.833 77.472C212.873 77.152 211.561 76.8 209.897 76.416C207.337 75.808 205.241 75.2 203.609 74.592C201.977 73.984 200.569 73.008 199.385 71.664C198.233 70.32 197.657 68.528 197.657 66.288C197.657 64.336 198.185 62.576 199.241 61.008C200.297 59.408 201.881 58.144 203.993 57.216C206.137 56.288 208.745 55.824 211.817 55.824C213.961 55.824 216.057 56.08 218.105 56.592C220.153 57.104 221.945 57.84 223.481 58.8L221.081 64.704C217.977 62.944 214.873 62.064 211.769 62.064C209.593 62.064 207.977 62.416 206.921 63.12C205.897 63.824 205.385 64.752 205.385 65.904C205.385 67.056 205.977 67.92 207.161 68.496C208.377 69.04 210.217 69.584 212.681 70.128C215.241 70.736 217.337 71.344 218.969 71.952C220.601 72.56 221.993 73.52 223.145 74.832C224.329 76.144 224.921 77.92 224.921 80.16C224.921 82.08 224.377 83.84 223.289 85.44C222.233 87.008 220.633 88.256 218.489 89.184C216.345 90.112 213.737 90.576 210.665 90.576ZM230.234 56.4H238.01V90H230.234V56.4ZM278.101 56.4L263.557 90H255.877L241.38 56.4H249.781L260.005 80.4L270.373 56.4H278.101ZM306.922 83.76V90H280.906V56.4H306.298V62.64H288.634V69.936H304.234V75.984H288.634V83.76H306.922Z" fill="white"/><path d="M38.955 49.105L3.4 9.065L3.465 48H0.345V0.874998H0.54L36.095 41.24L36.03 1.85H39.085V49.105H38.955ZM53.7923 1.85H82.2623V4.905H56.9773V23.235H79.7273V26.29H56.9773V44.945H83.1723V48H53.7923V1.85ZM92.3809 24.99C92.3809 21.74 92.9876 18.7067 94.2009 15.89C95.4143 13.03 97.1043 10.5167 99.2709 8.35C101.438 6.14 103.929 4.42833 106.746 3.215C109.606 1.95833 112.661 1.33 115.911 1.33C119.161 1.33 122.216 1.95833 125.076 3.215C127.936 4.42833 130.449 6.14 132.616 8.35C134.783 10.5167 136.473 13.03 137.686 15.89C138.943 18.7067 139.571 21.74 139.571 24.99C139.571 28.24 138.943 31.295 137.686 34.155C136.473 36.9717 134.783 39.4633 132.616 41.63C130.449 43.7967 127.936 45.4867 125.076 46.7C122.216 47.9133 119.161 48.52 115.911 48.52C112.661 48.52 109.606 47.935 106.746 46.765C103.929 45.595 101.438 43.9483 99.2709 41.825C97.1043 39.7017 95.4143 37.21 94.2009 34.35C92.9876 31.49 92.3809 28.37 92.3809 24.99ZM95.6309 25.055C95.6309 27.8717 96.1509 30.515 97.1909 32.985C98.2309 35.455 99.6826 37.6217 101.546 39.485C103.409 41.3483 105.554 42.8217 107.981 43.905C110.451 44.945 113.073 45.465 115.846 45.465C118.706 45.465 121.371 44.945 123.841 43.905C126.311 42.8217 128.478 41.3483 130.341 39.485C132.204 37.6217 133.656 35.455 134.696 32.985C135.779 30.515 136.321 27.85 136.321 24.99C136.321 22.1733 135.779 19.53 134.696 17.06C133.656 14.5467 132.204 12.3583 130.341 10.495C128.478 8.58833 126.311 7.09333 123.841 6.01C121.371 4.92667 118.728 4.385 115.911 4.385C113.051 4.385 110.386 4.94833 107.916 6.075C105.446 7.15833 103.279 8.65333 101.416 10.56C99.5959 12.4667 98.1659 14.6767 97.1259 17.19C96.1293 19.66 95.6309 22.2817 95.6309 25.055Z" fill="white"/>
          </svg>
        </a>
      </div>
    `;

    return body;
  }

  createCopy() {
    const copy = document.createElement('div');

    copy.id = 'copyright';

    copy.innerHTML = `
      <p>
        Copyright &copy; 2021 NeoExpensove All Rights Reserved&trade;
      </p>
    `;

    return copy;
  }

  styles() {
    const style = document.createElement('style');

    style.textContent = `
      ul {
        list-style: none;
      }

      a {
        text-decoration: none;
      }
      
      svg {
        width: 3.125rem;
        height: 3.125rem;
        transition: .2s all;
      }

      svg#gradient {
        position: absolute;
      }
      
      footer {
        width: 100%;
        position: relative;
        
        background: var(--footer-bg);
        
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        
        border-top: 5px solid var(--accent);
        transition: var(--transition);
      }
      
      .base-section h2 {
        color: blue;
      }
      #footer-body {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 1rem 2rem;

        font-weight: 300;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.2rem;
      }

      #footer-body .logo {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .logo svg {
        width: 15rem;
        height: 7rem;
      }

      #footer-body section:not(.icons) {
        padding: 1rem 5rem;
      }

      .about-us p {
        max-width: 30rem;
        line-height: 1.6rem;
        text-overflow: clip;
        transition: var(--transition);
      }

      #footer-body h2 {
        position: relative;
        color: blue;
        color: var(--accent);
        font-weight: 500;
        font-size: 2rem;
        margin-bottom: 15px;
        transition: var(--transition);
      }

      #footer-body h2:before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 50px;
        height: 2px;
        background: var(--accent);
      }

      #social-media-footer {
        display: flex;
        padding: 1.2rem 0;
      }

      #social-media-footer li:nth-child(2) {
        margin: 0 0.5rem;
      }

      #social-media-footer li a:hover svg path,
      #social-media-footer li a:focus svg path {
        stroke: var(--accent);
      }

      #footer-body .contact {
        line-height: 2.5rem;
      }

      .contact ul li a {
        color: var(--link);
        text-decoration: none;

        transition: var(--transition);
      }

      .contact ul li:hover a,
      .contact ul li:focus-within a {
        color: var(--accent);
      }

      section ul {
        padding: 0;
      }

      .contact .info {
        position: relative;
      }

      .contact .info li {
        display: flex;

        flex-direction: column;
      }

      #quick-links {
        position: relative;
        line-height: 2.5rem;
      }

      #quick-links ul li a {
        color: var(--link);
        text-decoration: none;

        transition: var(--transition);
      }

      #quick-links ul li:hover a,
      #quick-links ul li:focus-within a {
        color: var(--accent);
      }

      #copyright {
        border-top: 1px solid #fff;
        margin-top: 1rem;
        padding-top: 1rem;
        width: 100%;
        background-color: black;
        color: rgb(255, 255, 255);
      
        padding: 0.5rem 0;
      
        text-align: center;
        font-weight: 400;
        font-size: 1rem;
        font-family: 'Josefin Sans', sans-serif;
      }

      @media (max-width: 400px) {
        footer #footer-body {
          justify-content: space-between; 
          align-items: start;
        }
      }

      @container (max-width: 1900px) {
        flex-direction: column;
      }
    `;

    return style;
  }
}

customElements.define('page-footer', Footer);
