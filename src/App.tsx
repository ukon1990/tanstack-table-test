import './App.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import HomePage from './pages/HomePage'
import TanstackPage from './pages/TanstackPage';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import NativeTablePage from './pages/NativeTablePage';
import TanstackWrapperPage from './pages/wrapper/TanstackWrapperPage';
import TableWithPaginationPage from './pages/wrapper/TableWithPaginationPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />


            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="native">Native html + BS</Nav.Link>
                <Nav.Link as={Link} to="tanstack">Tanstack headless</Nav.Link>
                <NavDropdown title="Tanstack wrapper" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="tanstack/wrapper/base">
                    Base table
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="tanstack/wrapper/sorting">
                    Sorting
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="tanstack/wrapper/pagination">
                    Pagination
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/native" element={<NativeTablePage />} />
            <Route path="/tanstack" element={<TanstackPage />} />
            <Route path="/tanstack/wrapper/base" element={<TanstackWrapperPage />} />
            <Route path="/tanstack/wrapper/sorting" element={<TanstackWrapperPage />} />
            <Route path="/tanstack/wrapper/pagination" element={<TableWithPaginationPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
