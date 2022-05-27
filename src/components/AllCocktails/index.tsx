import { FC } from "react";
import { observer } from "mobx-react-lite";
//store
import CocktailsStore from "../../store/CocktailsStore";
//components
import Cocktail from "./Cocktail";
//styles
import styles from "./AllCocktails.module.scss";

const AllCocktails: FC = observer(() => {
  return (
    <div className={styles.wrapper}>
      {!!CocktailsStore.allCocktails.total && CocktailsStore.allCocktails?.records.map((cocktail, index) => (
        <Cocktail
          key={cocktail.idDrink + index}
          name={cocktail.strDrink}
          tags={cocktail.strTags}
          img={cocktail.strDrinkThumb}
          description={cocktail.strInstructions}
          date={cocktail.dateModified}
          deleteClickHandler={() => CocktailsStore.deleteCocktail(index)}
        />
      ))}
    </div>
  );
});

export default AllCocktails;
