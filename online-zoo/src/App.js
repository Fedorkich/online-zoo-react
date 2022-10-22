import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="containerSite">
          <div className="headerLogo">
            zoo online
          </div>
          <nav>
            <a href="#">About</a>
            <a href="#">Zoos</a>
            <a href="#">Map</a>
            <a href="#">Contact</a>
          </nav>
          <div className="headerContainerButton">
            Switch
          </div>
        </div>
      </header>
      <section className="section1Watch">
        <div className="containerSite">
          <div className="containerWatchOnline">  </div>
          <div className="containerSlider">  </div>
          <div className="containerSocialMedia"> </div>
        </div>
      </section>
      <section className="sectionHowItWorks">
        <div className="containerSite">
          <div className="titleHowItWorks">How it Works?</div>
          <p className="paragraphHowItWorks">
            As a voice for wildlife, we are devastated by the impact
            of the 2020 Australian bushfires on precious species and
            their habitat, and we are determined to assist in all aspects,
            including providing veterinary support and raising much-needed
            emergency funds. Zoo Online saves wildlife and inspires everyone
            to make conservation a priority in their lives. Animals have the
            right to a pain-free and happy life. They have equal claim to the
            resources of this planet, and deserve a life of dignity and compassion.
            As a voice for wildlife, we are devastated by the impact of the 2020
            Australian bushfires on precious species and their habitat.
          </p>
          <div className="imageHowItWorks"></div>
          <div className="sliderHowItWorks"></div>
          <div className="buttonHowItWorks"></div>
        </div>
      </section>
      <section className="sectionAboutUs">
        <div className="containerSite">
          <div className="containerItemAboutUs">
            <div className="itemAboutUs"></div>
            <div className="itemAboutUs"></div>
            <div className="itemAboutUs"></div>
          </div>
        </div>
      </section>
      <section className="sectionPetsZoo">
        <div className="containerSite">
          <div className="titlePetsZoo">Pets in Zoo</div>
          <div className="sliderPetsZoo"></div>
          <div className="buttonPetsZoo">
            <button>Choose your favorite</button>
          </div>
        </div>
      </section>
      <section className="sectionPayFeed">
        <div className="containerSite">
          <div className="titlePayFeed">Pay and feed</div>
          <div className="paragraphPayFeed">
            The opportunity to easily and naturally (but as often as possible) donate to the needs of animals that you like.
          </div>
          <div className="containerItems">
            <div className="itemPayFeed"></div>
            <div className="itemPayFeed"></div>
            <div className="itemPayFeed"></div>
          </div>
          <div className="buttonPayFeed">
            <button>Donate</button>
          </div>
        </div>
      </section>
      <section className="sectionTestimonials">
        <div className="containerSite">
          <div className="titleTestimonials">Testimonials</div>
          <div className="containerSliderTestimonials"></div>
          <div className="buttonTestimonials">Leave feedback</div>
        </div>
      </section>
      <section className="sectionMap">
        <div className="containerSite">
          <div className="buttonMap">
            <button>WatchOnline</button>
          </div>
        </div>
      </section>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
