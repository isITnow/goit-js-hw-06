const ulElem = document.querySelector('#categories');

const numberOfcategories = ulElem.querySelectorAll('.item').length;
console.log(`Number of categories: ${numberOfcategories}`);

const ulItem = ulElem.children;

[...ulItem].forEach(elem =>
    console.log(
        `Category: ${elem.querySelector('h2').textContent}\nElements: ${
            elem.querySelectorAll('li').length
        }`,
    ),
);
