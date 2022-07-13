import React, { memo } from 'react';

import VideoGame from '../../images/pages/about-us/undraw_video_game_night.svg';
import TeamWork from '../../images/pages/about-us/undraw_team_work.svg';
import Business from '../../images/pages/about-us/undraw_business.svg';
import WorkingLate from '../../images/pages/about-us/undraw_working_late.svg';
import Thiago from '../../images/pages/about-us/group/thiago.webp';
import GithubLogo from '../../images/pages/about-us/github-logo.svg';
import Vinicius from '../../images//pages/about-us/group/vinicius.webp';
import Vitor from '../../images//pages/about-us/group/vitor.webp';

export function About() {
  return (
    <React.Fragment>
      <main className="about--us--main">
        <div className="aboutus--wrapper">
          <section className="aboutus--section--left">
            <img src={VideoGame} alt="" className="aboutus--section--left--image--logo" />
          </section>
          <section className="aboutus--section--right">
            <svg className="aboutus--section--right--image--logo" width="699" height="204" viewBox="0 0 699 204" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M91.91 100.21L20.8 20.13L20.93 98H14.69V3.75H15.08L86.19 84.48L86.06 5.7H92.17V100.21H91.91ZM121.585 5.7H178.525V11.81H127.955V48.47H173.455V54.58H127.955V91.89H180.345V98H121.585V5.7ZM198.762 51.98C198.762 45.48 199.975 39.4133 202.402 33.78C204.829 28.06 208.209 23.0333 212.542 18.7C216.875 14.28 221.859 10.8567 227.492 8.43C233.212 5.91666 239.322 4.65999 245.822 4.65999C252.322 4.65999 258.432 5.91666 264.152 8.43C269.872 10.8567 274.899 14.28 279.232 18.7C283.565 23.0333 286.945 28.06 289.372 33.78C291.885 39.4133 293.142 45.48 293.142 51.98C293.142 58.48 291.885 64.59 289.372 70.31C286.945 75.9433 283.565 80.9267 279.232 85.26C274.899 89.5933 269.872 92.9733 264.152 95.4C258.432 97.8267 252.322 99.04 245.822 99.04C239.322 99.04 233.212 97.87 227.492 95.53C221.859 93.19 216.875 89.8967 212.542 85.65C208.209 81.4033 204.829 76.42 202.402 70.7C199.975 64.98 198.762 58.74 198.762 51.98ZM205.262 52.11C205.262 57.7433 206.302 63.03 208.382 67.97C210.462 72.91 213.365 77.2433 217.092 80.97C220.819 84.6967 225.109 87.6433 229.962 89.81C234.902 91.89 240.145 92.93 245.692 92.93C251.412 92.93 256.742 91.89 261.682 89.81C266.622 87.6433 270.955 84.6967 274.682 80.97C278.409 77.2433 281.312 72.91 283.392 67.97C285.559 63.03 286.642 57.7 286.642 51.98C286.642 46.3467 285.559 41.06 283.392 36.12C281.312 31.0933 278.409 26.7167 274.682 22.99C270.955 19.1767 266.622 16.1867 261.682 14.02C256.742 11.8533 251.455 10.77 245.822 10.77C240.102 10.77 234.772 11.8967 229.832 14.15C224.892 16.3167 220.559 19.3067 216.832 23.12C213.192 26.9333 210.332 31.3533 208.252 36.38C206.259 41.32 205.262 46.5633 205.262 52.11Z"
                fill="white"
              />
              <path
                d="M97.75 182.7V197H38.13V120H96.32V134.3H55.84V151.02H91.59V164.88H55.84V182.7H97.75ZM238.716 120C245.536 120 251.439 121.137 256.426 123.41C261.486 125.683 265.373 128.91 268.086 133.09C270.799 137.27 272.156 142.22 272.156 147.94C272.156 153.587 270.799 158.537 268.086 162.79C265.373 166.97 261.486 170.197 256.426 172.47C251.439 174.67 245.536 175.77 238.716 175.77H223.206V197H205.386V120H238.716ZM237.726 161.25C243.079 161.25 247.149 160.113 249.936 157.84C252.723 155.493 254.116 152.193 254.116 147.94C254.116 143.613 252.723 140.313 249.936 138.04C247.149 135.693 243.079 134.52 237.726 134.52H223.206V161.25H237.726ZM344.498 182.7V197H284.878V120H343.068V134.3H302.588V151.02H338.338V164.88H302.588V182.7H344.498ZM429.297 120V197H414.667L376.277 150.25V197H358.677V120H373.417L411.697 166.75V120H429.297ZM472.815 198.32C466.728 198.32 460.825 197.513 455.105 195.9C449.458 194.213 444.911 192.05 441.465 189.41L447.515 175.99C450.815 178.41 454.738 180.353 459.285 181.82C463.831 183.287 468.378 184.02 472.925 184.02C477.985 184.02 481.725 183.287 484.145 181.82C486.565 180.28 487.775 178.263 487.775 175.77C487.775 173.937 487.041 172.433 485.575 171.26C484.181 170.013 482.348 169.023 480.075 168.29C477.875 167.557 474.868 166.75 471.055 165.87C465.188 164.477 460.385 163.083 456.645 161.69C452.905 160.297 449.678 158.06 446.965 154.98C444.325 151.9 443.005 147.793 443.005 142.66C443.005 138.187 444.215 134.153 446.635 130.56C449.055 126.893 452.685 123.997 457.525 121.87C462.438 119.743 468.415 118.68 475.455 118.68C480.368 118.68 485.171 119.267 489.865 120.44C494.558 121.613 498.665 123.3 502.185 125.5L496.685 139.03C489.571 134.997 482.458 132.98 475.345 132.98C470.358 132.98 466.655 133.787 464.235 135.4C461.888 137.013 460.715 139.14 460.715 141.78C460.715 144.42 462.071 146.4 464.785 147.72C467.571 148.967 471.788 150.213 477.435 151.46C483.301 152.853 488.105 154.247 491.845 155.64C495.585 157.033 498.775 159.233 501.415 162.24C504.128 165.247 505.485 169.317 505.485 174.45C505.485 178.85 504.238 182.883 501.745 186.55C499.325 190.143 495.658 193.003 490.745 195.13C485.831 197.257 479.855 198.32 472.815 198.32ZM517.661 120H535.481V197H517.661V120ZM627.355 120L594.025 197H576.425L543.205 120H562.455L585.885 175L609.645 120H627.355ZM693.404 182.7V197H633.784V120H691.974V134.3H651.494V151.02H687.244V164.88H651.494V182.7H693.404Z"
                fill="white"
              />
              <path
                d="M178.709 152.739L193.571 137.211C195.476 135.22 195.476 131.963 193.571 129.972L179.714 115.493C177.809 113.502 174.691 113.502 172.786 115.493L157.924 131.021C157.474 131.492 157.196 132.144 157.231 132.831V150.929C157.231 152.377 158.305 153.499 159.691 153.499H177.012C177.636 153.499 178.224 153.246 178.709 152.739ZM146.076 131.021L131.214 115.493C129.309 113.502 126.191 113.502 124.286 115.493L110.429 129.972C108.524 131.963 108.524 135.22 110.429 137.211L125.291 152.739C125.741 153.21 126.364 153.499 127.023 153.463H144.344C145.73 153.463 146.804 152.341 146.804 150.893V132.795C146.804 132.144 146.561 131.528 146.076 131.021ZM125.291 165.118L110.429 180.647C108.524 182.638 108.524 185.895 110.429 187.886L124.286 202.365C126.191 204.356 129.309 204.356 131.214 202.365L146.076 186.837C146.526 186.366 146.804 185.714 146.769 185.027V166.928C146.769 165.48 145.695 164.358 144.309 164.358H126.988C126.364 164.358 125.776 164.612 125.291 165.118ZM176.943 164.358H159.621C158.236 164.358 157.162 165.48 157.162 166.928V185.027C157.162 185.678 157.404 186.366 157.855 186.837L172.751 202.401C174.656 204.392 177.774 204.392 179.679 202.401L193.536 187.922C195.442 185.932 195.442 182.674 193.536 180.683L178.675 165.155C178.224 164.612 177.636 164.358 176.943 164.358Z"
                fill="#8B46A3"
              />
            </svg>
            <p className="aboutus--section--paragraph">
              A Neo Expertise foi criada para satisfazer suas necessidades e lhe entregar produtos de <span className="aboutus--section--span">Hardware</span>, <span className="aboutus--section--span">Consoles</span> e <span className="aboutus--section--span">Jogos</span> com o comprometimento de
              oferecê-los com a <span className="aboutus--section--span">maior qualidade possível.</span>
            </p>
          </section>
        </div>

        <div className="aboutus--section--divider--wrapper">
          <hr className="aboutus--section--divider" />
        </div>

        <div className="aboutus--wrapper">
          <section className="aboutus--section--left">
            <h2 className="aboutus--section--h2">Sobre Nós</h2>
            <p className="aboutus--section--paragraph">
              Fomos criados com a intenção de <span className="aboutus--section--span">competirmos no mercado contra os maiores e-commerces</span> relacionados a Hardware no Brasil.
            </p>
            <h1 className="aboutus--section--h1">A sua loja de hardware e jogos está aqui!</h1>
          </section>
          <section className="aboutus--section--right">
            <img src={TeamWork} alt="" className="aboutus--section--right--image--logo" />
          </section>
        </div>

        <div className="aboutus--section--divider--wrapper">
          <hr className="aboutus--section--divider" />
        </div>

        <div className="aboutus--wrapper">
          <section className="aboutus--section--left">
            <img src={Business} alt="" className="aboutus--section--right--image--logo" />
          </section>
          <section className="aboutus--section--right">
            <h2 className="aboutus--section--h2">Valores</h2>
            <p className="aboutus--section--paragraph">
              Prezamos por nossas maiores virtudes e nos comprometeremos em todos <span className="aboutus--section--span">pequenos detalhes</span>, que não só constituirão um site deslumbrante mas uma <span className="aboutus--section--span">experiência magnifíca.</span>
            </p>
          </section>
        </div>

        <div className="aboutus--section--divider--wrapper">
          <hr className="aboutus--section--divider" />
        </div>

        <div className="aboutus--wrapper">
          <section className="aboutus--section--left">
            <h2 className="aboutus--section--h2">O Que Fazemos</h2>
            <p className="aboutus--section--paragraph">
              Nós como um grupo nos empenhamos em um site que transmitisse <span className="aboutus--section--span">profissionalidade e simplicidade</span> e sempre estaremos dispostos em <span className="aboutus--section--span">melhorá-lo continuamente.</span>
            </p>
          </section>
          <section className="aboutus--section--right">
            <img src={WorkingLate} alt="" className="aboutus--section--right--image--logo" />
          </section>
        </div>

        <div className="aboutus--section--divider--wrapper">
          <hr className="aboutus--section--divider" />
        </div>

        <div className="aboutus--section--center">
          <h2 className="aboutus--section--center--h2">Desenvolvedores</h2>

          <div className="aboutus--section--profile--wrapper">
            <div className="aboutus--section--profile">
              <img src={Thiago} alt="" className="aboutus--section--profile--image" />
              <p className="aboutus--section--profile--paragraph">Thiago Lisboa</p>
              <p className="aboutus--section--profile--function">Front-End E Design</p>
              <a data-reset href="https://github.com/AtomicFeasT" className="aboutus--section--profile--link">
                <img src={GithubLogo} alt="" className="aboutus--section--profile--link--image" />
              </a>
            </div>

            <div className="aboutus--section--profile">
              <img src={Vinicius} alt="" className="aboutus--section--profile--image" />
              <p className="aboutus--section--profile--paragraph">Vinicius Aquino</p>
              <p className="aboutus--section--profile--function">Designer</p>
              <a data-reset href="https://github.com/Espalmer" className="aboutus--section--profile--link">
                <img src={GithubLogo} alt="" className="aboutus--section--profile--link--image" />
              </a>
            </div>

            <div className="aboutus--section--profile">
              <img src={Vitor} alt="" className="aboutus--section--profile--image" />
              <p className="aboutus--section--profile--paragraph">Vitor Neves</p>
              <p className="aboutus--section--profile--function">Full Stack</p>
              <a data-reset href="https://github.com/VitorGouveia" className="aboutus--section--profile--link">
                <img src={GithubLogo} alt="" className="aboutus--section--profile--link--image" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <section className="footer--aboutus">
          <h2 className="footer--title">Sobre Nós</h2>

          <p className="footer--paragraph">A Neo Expertise, empresa de venda dos mais diversos hardwares foi criada para satisfazer suas necessidades e lhe entregar produtos com o comprometimento de oferecê-los com a maior qualidade possível.</p>

          <div className="footer--social--icons">
            <a href="https://www.facebook.com/neo-expertise-102995498833851/" aria-label="Facebook">
              <svg className="footer--social--svg" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 43.75C35.3553 43.75 43.75 35.3553 43.75 25C43.75 14.6447 35.3553 6.25 25 6.25C14.6447 6.25 6.25 14.6447 6.25 25C6.25 35.3553 14.6447 43.75 25 43.75Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32.8125 17.1877H29.6875C28.4443 17.1877 27.252 17.6816 26.3729 18.5607C25.4939 19.4398 25 20.632 25 21.8752V43.7502" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.75 28.1252H31.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a href="https://www.instagram.com/neo_expensive/" aria-label="Instagram">
              <svg className="footer--social--svg" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 32.8125C29.3147 32.8125 32.8125 29.3147 32.8125 25C32.8125 20.6853 29.3147 17.1875 25 17.1875C20.6853 17.1875 17.1875 20.6853 17.1875 25C17.1875 29.3147 20.6853 32.8125 25 32.8125Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                <path
                  d="M33.5938 7.03125H16.4062C11.2286 7.03125 7.03125 11.2286 7.03125 16.4062V33.5938C7.03125 38.7714 11.2286 42.9688 16.4062 42.9688H33.5938C38.7714 42.9688 42.9688 38.7714 42.9688 33.5938V16.4062C42.9688 11.2286 38.7714 7.03125 33.5938 7.03125Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="https://twitter.com/ExpensiveNeo" aria-label="Twitter">
              <svg className="footer--social--svg" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.37502 39.0625C9.37502 39.0625 17.1875 37.5 18.75 32.8125C18.75 32.8125 6.25002 28.125 9.37502 10.9375C9.37502 10.9375 15.625 18.75 25 20.3125V17.1881C25.0002 15.3931 25.6184 13.6529 26.7506 12.26C27.8829 10.8672 29.4602 9.90661 31.2173 9.53985C32.9744 9.17309 34.8043 9.42249 36.3991 10.2461C37.994 11.0697 39.2567 12.4174 39.9749 14.0624L46.875 14.0625L40.625 20.3125C40.625 31.25 32.8125 42.1875 18.75 42.1875C12.5 42.1875 9.37502 39.0625 9.37502 39.0625Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </section>

        <section className="footer--contact-us">
          <h2 className="footer--title">Contato</h2>

          <ul className="footer--contact-list">
            <li>
              <a href="https://github.com/VitorGouveia" rel="noopener" target="_blank">
                Vitor Gouveia
              </a>
              <br />
            </li>
            <li>
              <a href="https://github.com/Espalmer" rel="noopener" target="_blank">
                Vinicius Aquino
              </a>
              <br />
            </li>
            <li>
              <a href="https://github.com/AtomicFeasT" rel="noopener" target="_blank">
                Thiago Lisboa
              </a>
            </li>
          </ul>
        </section>

        <section className="footer--quicklinks">
          <h2 className="footer--title">Links Úteis</h2>

          <ul className="footer--links-list">
            <li>
              <a href="#">Dúvidas Frequentes</a>
            </li>

            <li>
              <a href="#">Termos de Uso</a>
            </li>

            <li>
              <a href="#">Ajuda</a>
            </li>
          </ul>
        </section>

        <div className="footer--logo">
          <a className="footer--logo-anchor" href="#" aria-label="NeoLogo">
            <svg className="footer--logo--svg" width="307" height="94" viewBox="0 0 307 94" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                className="xPensive"
                d="M81.1674 71.6726L87.386 64.9473C88.1833 64.0851 88.1833 62.6742 87.386 61.812L81.5878 55.5413C80.7905 54.6791 79.4859 54.6791 78.6886 55.5413L72.47 62.2666C72.2815 62.4704 72.1656 62.7526 72.1801 63.0505L72.1801 70.8888C72.1801 71.5159 72.6294 72.0018 73.2093 72.0018L80.4571 72.0018C80.718 72.0018 80.9645 71.8921 81.1674 71.6726V71.6726ZM67.5124 62.2666L61.2938 55.5413C60.4965 54.6791 59.1919 54.6791 58.3947 55.5413L52.5964 61.812C51.7991 62.6742 51.7991 64.0851 52.5964 64.9473L58.815 71.6726C59.0035 71.8764 59.2644 72.0018 59.5398 71.9862L66.7877 71.9862C67.3675 71.9862 67.8169 71.5002 67.8169 70.8731L67.8169 63.0348C67.8169 62.7526 67.7154 62.4861 67.5124 62.2666ZM58.815 77.034L52.5964 83.7593C51.7991 84.6215 51.7991 86.0324 52.5964 86.8947L58.3947 93.1653C59.1919 94.0275 60.4965 94.0275 61.2938 93.1653L67.5124 86.44C67.7009 86.2362 67.8169 85.9541 67.8024 85.6562L67.8024 77.8179C67.8024 77.1908 67.353 76.7048 66.7732 76.7048L59.5253 76.7048C59.2644 76.7048 59.018 76.8146 58.815 77.034ZM80.4281 76.7048H73.1803C72.6004 76.7048 72.1511 77.1908 72.1511 77.8179L72.1511 85.6562C72.1511 85.9384 72.2525 86.2362 72.441 86.44L78.6741 93.181C79.4714 94.0432 80.776 94.0432 81.5733 93.181L87.3716 86.9103C88.1688 86.0481 88.1688 84.6372 87.3716 83.775L81.1529 77.0497C80.9645 76.8146 80.718 76.7048 80.4281 76.7048V76.7048Z"
                fill="#8B46A3"
              />
              <path
                d="M47 83.76V90H20.984V56.4H46.376V62.64H28.712V69.936H44.312V75.984H28.712V83.76H47ZM108.512 56.4C111.488 56.4 114.064 56.896 116.24 57.888C118.448 58.88 120.144 60.288 121.328 62.112C122.512 63.936 123.104 66.096 123.104 68.592C123.104 71.056 122.512 73.216 121.328 75.072C120.144 76.896 118.448 78.304 116.24 79.296C114.064 80.256 111.488 80.736 108.512 80.736H101.744V90H93.9684V56.4H108.512ZM108.08 74.4C110.416 74.4 112.192 73.904 113.408 72.912C114.624 71.888 115.232 70.448 115.232 68.592C115.232 66.704 114.624 65.264 113.408 64.272C112.192 63.248 110.416 62.736 108.08 62.736H101.744V74.4H108.08ZM154.672 83.76V90H128.656V56.4H154.048V62.64H136.384V69.936H151.984V75.984H136.384V83.76H154.672ZM191.675 56.4V90H185.291L168.539 69.6V90H160.859V56.4H167.291L183.995 76.8V56.4H191.675ZM210.665 90.576C208.009 90.576 205.433 90.224 202.937 89.52C200.473 88.784 198.489 87.84 196.985 86.688L199.625 80.832C201.065 81.888 202.777 82.736 204.761 83.376C206.745 84.016 208.729 84.336 210.713 84.336C212.921 84.336 214.553 84.016 215.609 83.376C216.665 82.704 217.193 81.824 217.193 80.736C217.193 79.936 216.873 79.28 216.233 78.768C215.625 78.224 214.825 77.792 213.833 77.472C212.873 77.152 211.561 76.8 209.897 76.416C207.337 75.808 205.241 75.2 203.609 74.592C201.977 73.984 200.569 73.008 199.385 71.664C198.233 70.32 197.657 68.528 197.657 66.288C197.657 64.336 198.185 62.576 199.241 61.008C200.297 59.408 201.881 58.144 203.993 57.216C206.137 56.288 208.745 55.824 211.817 55.824C213.961 55.824 216.057 56.08 218.105 56.592C220.153 57.104 221.945 57.84 223.481 58.8L221.081 64.704C217.977 62.944 214.873 62.064 211.769 62.064C209.593 62.064 207.977 62.416 206.921 63.12C205.897 63.824 205.385 64.752 205.385 65.904C205.385 67.056 205.977 67.92 207.161 68.496C208.377 69.04 210.217 69.584 212.681 70.128C215.241 70.736 217.337 71.344 218.969 71.952C220.601 72.56 221.993 73.52 223.145 74.832C224.329 76.144 224.921 77.92 224.921 80.16C224.921 82.08 224.377 83.84 223.289 85.44C222.233 87.008 220.633 88.256 218.489 89.184C216.345 90.112 213.737 90.576 210.665 90.576ZM230.234 56.4H238.01V90H230.234V56.4ZM278.101 56.4L263.557 90H255.877L241.38 56.4H249.781L260.005 80.4L270.373 56.4H278.101ZM306.922 83.76V90H280.906V56.4H306.298V62.64H288.634V69.936H304.234V75.984H288.634V83.76H306.922Z"
                fill="white"
              />
              <path
                d="M38.955 49.105L3.4 9.065L3.465 48H0.345V0.874998H0.54L36.095 41.24L36.03 1.85H39.085V49.105H38.955ZM53.7923 1.85H82.2623V4.905H56.9773V23.235H79.7273V26.29H56.9773V44.945H83.1723V48H53.7923V1.85ZM92.3809 24.99C92.3809 21.74 92.9876 18.7067 94.2009 15.89C95.4143 13.03 97.1043 10.5167 99.2709 8.35C101.438 6.14 103.929 4.42833 106.746 3.215C109.606 1.95833 112.661 1.33 115.911 1.33C119.161 1.33 122.216 1.95833 125.076 3.215C127.936 4.42833 130.449 6.14 132.616 8.35C134.783 10.5167 136.473 13.03 137.686 15.89C138.943 18.7067 139.571 21.74 139.571 24.99C139.571 28.24 138.943 31.295 137.686 34.155C136.473 36.9717 134.783 39.4633 132.616 41.63C130.449 43.7967 127.936 45.4867 125.076 46.7C122.216 47.9133 119.161 48.52 115.911 48.52C112.661 48.52 109.606 47.935 106.746 46.765C103.929 45.595 101.438 43.9483 99.2709 41.825C97.1043 39.7017 95.4143 37.21 94.2009 34.35C92.9876 31.49 92.3809 28.37 92.3809 24.99ZM95.6309 25.055C95.6309 27.8717 96.1509 30.515 97.1909 32.985C98.2309 35.455 99.6826 37.6217 101.546 39.485C103.409 41.3483 105.554 42.8217 107.981 43.905C110.451 44.945 113.073 45.465 115.846 45.465C118.706 45.465 121.371 44.945 123.841 43.905C126.311 42.8217 128.478 41.3483 130.341 39.485C132.204 37.6217 133.656 35.455 134.696 32.985C135.779 30.515 136.321 27.85 136.321 24.99C136.321 22.1733 135.779 19.53 134.696 17.06C133.656 14.5467 132.204 12.3583 130.341 10.495C128.478 8.58833 126.311 7.09333 123.841 6.01C121.371 4.92667 118.728 4.385 115.911 4.385C113.051 4.385 110.386 4.94833 107.916 6.075C105.446 7.15833 103.279 8.65333 101.416 10.56C99.5959 12.4667 98.1659 14.6767 97.1259 17.19C96.1293 19.66 95.6309 22.2817 95.6309 25.055Z"
                fill="white"
              />
            </svg>
          </a>
        </div>

        <div className="footer--copyright">
          <p className="footer--copyright--text">Copyright © 2021 NeoExpertise All Rights Reserved™</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default memo(About);