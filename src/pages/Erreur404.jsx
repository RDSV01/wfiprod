import "../styles/Erreur404.css";

const Erreur404 = () => {
  return (
    <div>
      <section class="error_section">
        <p class="error_section_subtitle">Oups, cette page n'existe pas.</p>
        <h1 class="error_title">
          <p>404</p>
          404
        </h1>
        <a href="/" class="btn">
          Revenir à l'accueil
        </a>
      </section>
    </div>
  );
};

export default Erreur404;
