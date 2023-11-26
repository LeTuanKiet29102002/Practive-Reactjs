import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/User/TableUsers';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <div className="app-container">
      <Header />
      <Container>
        <TableUsers />
      </Container>
    </div>
  );
}

export default App;
