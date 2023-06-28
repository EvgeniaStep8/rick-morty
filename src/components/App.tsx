import styles from "./App.module.css";
import Card from "./Card";
import characters from "../utils/constants";

interface iCard {
  id: string,
  name: string,
  image: string,
}

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.cards}>
        {characters?.map(({ id, name, image } : iCard) => (<Card name={name} image={image} key={id} />))}
      </div>
    </div>
  );
}

export default App;
