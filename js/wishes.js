const wrapper = document.querySelector(".wrapper");
const loading = document.querySelector(".loading");

async function fetchData() {
  let likedProducts = JSON.parse(localStorage.getItem("wishes"));

  createCard(likedProducts);
}
fetchData();

function createCard(data) {
  while (wrapper.firstChild) {
    wrapper.firstChild.remove();
  }
  let fragment = document.createDocumentFragment();
  data.forEach((prodact) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div data-id=${prodact.id}>
        <div class="card__image" name="product-img">
        </div>
         <div class="card_name">
            <h3 class="card__title">${prodact.name.firstname}</h3>
            <h3 class="card__title">${prodact.name.lastname}</h3>
        </div>
        <div class="card__email">
        <p class="card__desc">${prodact.username}</p> |
            <p class="card__desc">${prodact.email}</p>
            </div>
        <div class="card__number">
            <p>Phone Number :</p>
            <p>${prodact.phone}</p>
        </div>
        <div class="card__adress">
        <p>City: <span>${prodact.address.city}</span></p>
        <p>Street: <span> ${prodact.address.street}</span></p>
        </div>
    
    <button class="like__btn" name="prodact-wish">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32px"
        height="32px"
        viewBox="0 0 48 48"
        >
        <path
        fill="red"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"
          />
          </svg>
          </button
    </div>
          `;
    fragment.appendChild(card);
    // console.log(card);
  });
  wrapper.appendChild(fragment);
}

const removeWish = (id) => {
  let wishes = JSON.parse(localStorage.getItem("wishes"));
  let newWishes = wishes.filter((item) => item.id != +id);

  localStorage.setItem("wishes", JSON.stringify(newWishes));
  createCard(newWishes);
};

const singleRoute = (id) => {
  window.open(`/pages/product.html?id=${id}`, "_self");
};

wrapper.addEventListener("click", (e) => {
  let name = e.target.getAttribute("name");
  if (name === "product-img") {
    let id = e.target.closest("[data-id]").dataset.id;
    singleRoute(id);
  } else if (name === "prodact-wish") {
    let id = e.target.closest("[data-id]").dataset.id;
    removeWish(id);
  }
});
