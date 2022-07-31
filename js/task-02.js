const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const createIngredietsListItems = ingredients => {
    return ingredients.map(item => {
        const ulItem = document.createElement('li');
        ulItem.classList.add('item');
        ulItem.textContent = [item];
        return ulItem;
    });
};

const ingredietsItems = createIngredietsListItems(ingredients);

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...ingredietsItems);
