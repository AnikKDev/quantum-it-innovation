import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header/Header'
import SubHeader from './pages/Header/SubHeader';
import Home from './pages/Home/Home'
function App() {
  return (
    <div>
      <SubHeader />
      <Header />
      <Home />
    </div>
  );
}

export default App;
