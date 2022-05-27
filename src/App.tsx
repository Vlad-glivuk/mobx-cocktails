import { observer } from "mobx-react-lite";
import { FC } from "react";
//store
import CocktailsStore from "./store/CocktailsStore";
//components
import AllCocktails from "./components/AllCocktails";
import Header from "./components/Header";
// styles
import styles from "./App.module.scss";

const App: FC = observer(() => {
  return (
    <div className={styles.wrapper}>
      <h1>Mobx</h1>
      <Header />
      {!!CocktailsStore.allCocktails?.total && <AllCocktails />}
    </div>
  );
});

export default App;
