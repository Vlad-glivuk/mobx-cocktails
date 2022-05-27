import { FC, FormEvent, useState } from "react";
//store
import CocktailsStore from "../../store/CocktailsStore";
//styles
import styles from "./Header.module.scss";

const Header: FC = () => {
  const [cocktailNameValue, setCocktailNameValue] =
    useState<string>("margarita");

  const onChangeCocktailNameHandler = (e: FormEvent<HTMLSelectElement>) =>
    setCocktailNameValue(e.currentTarget.value);

  const getCocktailByName = () =>
    CocktailsStore.getCocktailByName(cocktailNameValue);

  return (
    <div className={styles.wrapper}>
      <select value={cocktailNameValue} onChange={onChangeCocktailNameHandler} className={styles.select}>
        <option value="margarita">Margarita</option>
        <option value="negroni">Negroni</option>
        <option value="vodka">Vodka</option>
        <option value="mojito">Mojito</option>
        <option value="daiquiri">Daiquiri</option>
      </select>

      <button onClick={getCocktailByName} className={styles.button}>Click here to get cocktail</button>
    </div>
  );
};

export default Header;
