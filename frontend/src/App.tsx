
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="navbar">
        <a className="brand" href="#">
          <span className="brand-mark">T</span>
          <span>tabifolio</span>
        </a>

        <nav>
          <a href="#places">Places</a>
          <a href="#journal">Journal</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="journal">
          <div className="hero-copy">
            <p className="eyebrow">YOUR PERSONAL TRAVEL ARCHIVE</p>
            <h1>
              Every place
              <br />
              has a <em>story.</em>
            </h1>
            <p className="intro">
              A personal atlas of journeys, photographs, and
              the little moments worth remembering.
            </p>
            <a className="primary-link" href="#places">
              Explore your journal <span>↗</span>
            </a>
          </div>

          <div className="hero-art" aria-label="Japan travel journal illustration">
            <div className="sun" />
            <div className="art-label">
              <span>旅の記録</span>
              <span>JAPAN · 01</span>
            </div>
            <div className="art-title">
              <span>A journey</span>
              <span>through Japan.</span>
            </div>
            <div className="art-caption">PLACES · PEOPLE · MEMORIES</div>
          </div>
        </section>

        <section className="places-section" id="places">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE ARCHIVE</p>
              <h2>Your journey, <em>your map.</em></h2>
            </div>
            <p className="section-note">
              One place at a time. One memory at a time.
            </p>
          </div>

          <div className="archive-panel">
            <div className="archive-number">01</div>
            <div>
              <p className="eyebrow">FIRST COLLECTION</p>
              <h3>Japan, prefecture by prefecture.</h3>
              <p>
                Your photos and stories will find their place
                on an interactive map of Japan.
              </p>
            </div>
            <span className="archive-symbol">↗</span>
          </div>
        </section>
      </main>

      <footer>
        <span>tabifolio © 2026</span>
        <span>A travel journal in progress.</span>
      </footer>
    </div>
  )
}

export default App