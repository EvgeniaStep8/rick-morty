import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Cards from '../Cards/Cards';
import Character from '../Character/Character';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='characters/:id' element={<Character />}  />
      </Routes>
    </div>
  );
}

export default App;
