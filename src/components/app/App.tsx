import { Header } from "../header/header";
import { Main } from "../main/main";
import { Navbar } from "../navbar/navbar";
import styles from "./app.module.css";

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.content}>
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
