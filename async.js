async function getProductsData() {
    const response = await fetch('https://dummyjson.com/products')
    const { products } = await response.json();
    console.log(products)

    return products;
}

getProductsData();

async function getProductCategories() {
    const response = await fetch('https://dummyjson.com/products/categories');
    const categories = await response.json();
    console.log(categories);
    return categories;
}



// Tee UI button elemente samapalju kui on kategooriaid

async function createCategoryButtons() {
    const categories = await getProductCategories();
    
    const categoryList = document.querySelector('.category-list');

    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('category-button');
        button.innerText = category;
        categoryList.append(button);
    });
    
}

createCategoryButtons();

async function  showProductList() {
    // näita tootelisti kategooria nuppude all.
    const products = await getProductsData();

    const productTablebodyElement = document.querySelector('.table-body');

    products.forEach((product) => {
        const tableRow = 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        
    })
}