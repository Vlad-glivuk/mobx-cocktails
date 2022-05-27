export interface ICocktailsStore {
  allCocktails: AllCocktails;

  getCocktailByName: (name: string) => Promise<void>;
  deleteCocktail: (index: number) => void;
}

type AllCocktails = { records: Array<Cocktail>; total: number };

export type Cocktail = {
  idDrink: string;
  strDrink: string;
  strTags: null | string;
  strVideo: null | string;
  strCategory: string;
  strIBA: null | string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsDE: string;
  strInstructionsIT: null | string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: null | string;
  strIngredient5: null | string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: null | string;
  strMeasure5: null | string;
  strImageSource: null | string;
  strImageAttribution: null | string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
};
