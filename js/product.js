const productSingle = document.querySelector(".product__single");
const notFound = document.querySelector(".not__found");
const loadingg = document.querySelector(".loadingg");
const API_URL = "https://fakestoreapi.com/users";

async function fetchData(api) {
  let path = new URLSearchParams(window.location.search);
  let id = path.get("id");
  let getData = await fetch(`${api}/${id}`);
  getData
    .json()
    .then((res) => createSingle(res))
    .catch((err) => (notFound.style.display = "flex"))
    .finally(() => (loadingg.style.display = "none"));
}
fetchData(API_URL);

function createSingle(data) {
  productSingle.innerHTML = `
        <div class="product__image">
         </div>
        <div class="product__content">
            <div class="prodact_name">
                <h2>${data.name.firstname}</h2>
                <h2>${data.name.lastname}</h2>
            </div>
            <div class="prodact_email">
                <h2><span>Username:</span>${data.username}</h2> 
                <h2><span>Email:</span>${data.email}</h2>
                <h2><span>Password:</span>${data.password}</h2>
            </div>
            <h2><span>Phone:</span>${data.phone}</h2>
            <div class="prodact_adress">
                <h2> <span>City:</span> ${data.address.city}</h2>
                <h2><span>Street:</span>${data.address.street}</h2>
                <h2><span>Number:</span> ${data.address.number}</h2>
            </div>
        </div>
    `;
}
