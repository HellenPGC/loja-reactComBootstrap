
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
    </div>

  )
}

export default App
