// Create Products and store it on the local storage




let wrapper = document.querySelector('[recentProducts]')

let products= JSON.parse(localStorage.getItem('products')) ? JSON.parse
(localStorage.getItem('products')) : localStorage.setItem(
    'products',
JSON.stringify(
    [
{
    id: 1,
    productName:"Dell-Latitude",
    category: "Laptop",
    description: "Dell Latitude E5450 i3 5th GEN 1 for business. RAM: 8GB, HDD: 1TB",
    amount: 200000.89,
    img_url: "https://nusaibah01.github.io/all-images/images/dell-latitude.jpg"
},
{
    id: 2,
    productName:"Huawei MateBook X Pro",
    category: "Laptop",
    description: "Huawei MateBook X Pro 2022 14.2-inch 16GB i7-12th Gen Core 1TB Space Gray",
    amount: 12000.89,
    img_url: "https://nusaibah01.github.io/all-images/matebook.jpg"
},
{
    id: 3,
    productName:"Acer Nitro-5",
    category: "Laptop",
    description: "Reign over the game world with the combined power of an AMD Ryzen™ 6000 Series processor1 and up to NVIDIA® GeForce RTX™ 3070 Ti graphics",
    amount: 25000.89,
    img_url: "https://nusaibah01.github.io/all-images/images/Acer-nitro.png"
},
{
    id: 4,
    productName:"Lenovo-Thinkpad",
    category: "Laptop",
    description: "t470 intel i5, 6th gen laptop with 16gb ram + 512gb ssd",
    amount: 150000.89,
    img_url: "https://nusaibah01.github.io/all-images/images/lenovo.jpg"
},
{
    id: 5,
    productName:"Macbook",
    category: "Laptop",
    description: "MacBook Pro 13-inch | Apple M3",
    amount: 230000.00,
    img_url: "https://nusaibah01.github.io/all-images/images/macbook-2048px-232020.jpg"
},

]
   )
)

// Display recent Products 
function recentProducts() {
try{
    let arrSize = products.length
    let latestProducts = products.reverse().slice(0, arrSize >> 1 )
latestProducts.forEach(product => {
    wrapper.innerHTML += `
    <div class="card">
  <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading="lazy">
  <div class="card-body">
    <h5 class="card-title"> ${product.productName}</h5>
    <p class="card-text">${product.description}</p>
    <a href="#" class="btn btn-primary">Add to Cart<i class="bi bi-cart"></i></a>
  </div>
</div>`
})
}
catch (e){
      wrapper.textContent = "Please contact our administrator"
      setTimeout(() => {
        location.reload()
      }, 
      2000
    )
}
}
   
recentProducts()
