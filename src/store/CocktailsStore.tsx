import { observable, configure, runInAction } from "mobx";
import remotedev from "mobx-remotedev";
import { AxiosResponse } from "axios";
//api
import { API } from "../core/API";
//type
import { Cocktail, ICocktailsStore } from "../core/types/store";

// strict mode
configure({ enforceActions: "always" });

const cocktailsObservable: ICocktailsStore = {
  allCocktails: { records: [], total: 0 },

  async getCocktailByName(name: string) {
    const currentDate = new Date();
    const response: AxiosResponse<Cocktail> = await API.get(`/${name}`);
    console.log("response", response);
    
    try {
      if (response.data) {
        runInAction(() => {
          this.allCocktails.records = [
            ...this.allCocktails.records,
            response?.data,
          ];
          const timeAfterResponse = new Date();
          console.log('delay', timeAfterResponse.getTime() - currentDate.getTime());
  
          this.allCocktails.total += 1;
          console.log(this.allCocktails);
        });
      
      
      } else alert("Server not found");
    } catch (error) {
      console.log(error);
    }
  },

  deleteCocktail(index: number) {
    this.allCocktails.records = this.allCocktails.records.filter(
      (_cocktail, cocktailIndex) => index !== cocktailIndex
    );

    this.allCocktails.total -= 1;
  },
};

const CocktailsStore: ICocktailsStore = observable(cocktailsObservable);

// remote dev uses for redux chrome extension
export default remotedev(CocktailsStore);
