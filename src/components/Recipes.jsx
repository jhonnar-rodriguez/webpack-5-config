import { useState } from 'react';

const Recipes = () => {
  const mainRecipe = {
    ironIngot: 1,
    leatherStrips: 2,
    refinedMoonstone: 4,
  };

  const gauntletRecipe = {
    ...mainRecipe,
    leather: 1,
    refinedMoonstone: 4,
  }

  const [recipes, setRecipe] = useState({});

  return (
    <div>
      <h3>Current Receipt</h3>

      <button
        type='button'
        onClick={() => setRecipe(mainRecipe)}
      >
        Normal Recipe
      </button>

      <button
        type='button'
        onClick={() => setRecipe(gauntletRecipe)}
      >
        Gauntlet Recipe
      </button>

      <ul>
        {
          Object
            .keys(recipes)
            .map((material) => (
              <li key={material} >
                { material}: {recipes[material]}
              </li>
            ))
        }
      </ul>
    </div >
  );
};

export default Recipes;
