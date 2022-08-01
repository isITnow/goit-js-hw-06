const ulElem = document.querySelector('#categories');

const numberOfcategories = ulElem.children.length;
console.log(`Number of categories: ${numberOfcategories}`);

const ulItem = ulElem.children;

[...ulItem].forEach(elem =>
    console.log(
        `Category: ${elem.firstElementChild.textContent}\nElements: ${elem.lastElementChild.children.length}`,
    ),
);
