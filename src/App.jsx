
function App() {

  return (
    
    <div className="container-fluid">
<nav className="navbar navbar-expand-md navbar-dark bg-dark">

 {/*icone*/}
<a className="navbar-brand" href="#"><ion-icon name="storefront-outline"></ion-icon>Loja ON</a>

<section className="collapse navbar-collapse" id="navbarMainToggler">
<div className="navbar-nav">
<a className="nav-item nav-link" href="#">Home</a>
<a className="nav-item nav-link" href="#">Home</a>
<a className="nav-item nav-link" href="#">Home</a>
</div>
</section>


 {/* Este botão foi pego do bootstrap, usei "collapse" para ao clicar o menu se abrir */}

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMainToggler" aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
</button>

</nav>
    </div>

  )
}

export default App
