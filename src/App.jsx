import React from 'react';
import './App.css';

function App() {

  return (

    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">

        {/*icone*/}
        <a className="navbar-brand" href="#"><ion-icon name="storefront-outline"></ion-icon>Loja ON</a>

        {/* Este botão foi pego do bootstrap, usei "collapse" para ao clicar o menu se abrir */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMainToggler" aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <section className="collapse navbar-collapse" id="navbarMainToggler">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">Home</a>
            <a className="nav-item nav-link" href="#">Home</a>
            <a className="nav-item nav-link" href="#">Home</a>
          </div>

          <form className="form-inline">
          <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">@</span>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
  <button type="button" className="btn btn-outline-success">Entrar</button>

</div>
          </form>
        </section>
      </nav>

        {/*produtos da vitrine*/}
      <section className="card">
  <img src="https://m.media-amazon.com/images/I/71ZkBNvhwvL._AC_SX679_.jpg" className="fone"/>
  <div className="card-body">
    <h5 className="card-title">Fone Bluetooth</h5>
    <p>Conforto e compatibilidade com todos os dispositivos</p>
    <a href="#" className="btn btn-primary">COMPRAR</a>
  </div>
</section>


<section className="card">
  <img src="https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_SY450_.jpg" className="alexia"/>
  <div className="card-body">
    <h5 className="card-title">Echo Dot 5ª geração</h5>
    <p>Som de alta e pronta para deixar sua casa mais inteligente</p>
    <a href="#" className="btn btn-primary">COMPRAR</a>
  </div>
</section>


<section className="card">
  <img src="https://m.media-amazon.com/images/I/71V-W1ItTqL._AC_SX569_.jpg" className="teclado"/>
  <div className="card-body">
    <h5 className="card-title">Teclado Sem Fio Dobravel</h5>
    <p>Compativel com celulares e notebooks</p>
    <a href="#" className="btn btn-primary">COMPRAR</a>
  </div>
</section>


<section className="card">
  <img src="https://m.media-amazon.com/images/I/31XT96SfbkL._AC_.jpg" className="caneca"/>
  <div className="card-body">
    <h5 className="card-title">Caneca DEV</h5>
    <p>Caneca de porcelana para apaixonados por códigos</p>
    <a href="#" className="btn btn-primary">COMPRAR</a>
  </div>
</section>


<footer className="footer">
  <ion-icon name="logo-whatsapp"></ion-icon> 
  <ion-icon name="logo-instagram"></ion-icon>
  <ion-icon name="logo-linkedin"></ion-icon>
</footer>
    </div>


  )
}

export default App
