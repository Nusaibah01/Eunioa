let container = document.querySelector('[ourStore]')
let searchProduct = document.querySelector('[searchProduct]')
let sortingByAmount = document.querySelector('[sorting]')
let products = JSON.parse(
    localStorage.getItem('products')
)

// items/ products


















// Retrieve data that is on the local storage
try{
    let products = JSON.parse(
        localStorage.getItem('products')
    )
    let container = document.querySelector('[ourStore]')
    products.forEach(product => {
        container.innerHTML +=
    })
   
} catch (e) {
    container.textContent = 
}
