import './style.css';

function Telainicial() {
  return (
    <div className="container">
      <header className="topo">
        <img className="logo" src="../src/imagens/logo.png" alt="Logo" />
        <input
          className="buscar"
          type="text"
          placeholder="Buscar produtos..."
        />
        <h1 className="user">Olá, Usuário!</h1>
      </header>

      
      <nav className="links-nav">
        <a href="#">Tênis</a>
        <a href="#">Moletons</a>
        <a href="#">Chinelos</a>
        <a href="#">Panelas</a>
      </nav>

      
      <section className="produtos">
        <img className="produto" src="../src/imagens/img1.jpg" alt="Produto 1" />
        <img className="produto" src="../src/imagens/img4.jpg" alt="Produto 2" />
        <img className="produto" src="../src/imagens/img3.jpg" alt="Produto 3" />
      </section>
    </div>
  );
}

export default Telainicial;
