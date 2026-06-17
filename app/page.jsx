export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="logo">⚡ Curcuitly</div>
      </nav>

      <section className="hero">
        <h1>Find Your Perfect Tech Setup</h1>
        <p className="slogan">Smarter Choices. Powered by AI.</p>
        <p>
          Curcuitly helps you discover the best tech products based on your
          needs, budget, and goals.
        </p>
        <button>Coming Soon</button>
      </section>

      <section className="features">
        <div className="card">
          <h3>AI Recommendations</h3>
          <p>Personalized suggestions in seconds.</p>
        </div>
        <div className="card">
          <h3>Budget Aware</h3>
          <p>Find the best value for your money.</p>
        </div>
        <div className="card">
          <h3>Unbiased Results</h3>
          <p>Recommendations based on performance and fit.</p>
        </div>
      </section>
    </main>
  );
}
