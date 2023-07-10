import { useState } from "react";
import Modal from "./modal/Modal";
import Card from "./card/Card";
import styles from "./App.module.css"
const categories = ["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"];
function App() {
  const [showJoke, setShowJoke] = useState(false);
  const [category, setCategory] = useState("");

  function onClickShow(category) {
    setShowJoke(true);
    setCategory(category);
  }
  function closeModal() {
    setShowJoke(false);
    setCategory("");
  }

  return (
    <>
      <h1 className={styles.main}>Chuck Norries</h1>
      <div className={styles.App}>
        {categories.map((title) => <Card click={onClickShow} title={title} />)}
        {showJoke && <Modal close={closeModal} category={category} />}
      </div>
    </>
  );
}
//Modal react code
export default App;
