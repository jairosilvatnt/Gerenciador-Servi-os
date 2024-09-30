import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <Container>
        <Link to="/">
          <img src="logo" alt="Aqui fica a logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/agenciaList">Lista de ATs</Link>
          </li>
          <li>
            <Link to="/cadastrarAgencia">Cadastro ATs</Link>
          </li>
          <li>
            <Link to="/updateAgencia">Atualizar ATs</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default NavBar;