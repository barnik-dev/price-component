const toogle = document.querySelector(".toggle-bar");
const cardOnePrice = document.querySelector(".price-1");
const cardTwoPrice = document.querySelector(".price-2");
const cardThreePrice = document.querySelector(".price-3");

const removeActive = () => {
  toogle.classList.remove("active");
  toogle.classList.add("inactive");
};

const addActive = () => {
  toogle.classList.remove("inactive");
  toogle.classList.add("active");
};

const changePrice = (el, price) => {
  el.innerHTML = `&dollar;${price}`;
};

toogle.addEventListener("click", () => {
  if (toogle.classList.contains("inactive")) {
    addActive();

    changePrice(cardOnePrice, 199.99);
    changePrice(cardTwoPrice, 249.99);
    changePrice(cardThreePrice, 399.99);
  } else {
    removeActive();

    changePrice(cardOnePrice, 19.99);
    changePrice(cardTwoPrice, 24.99);
    changePrice(cardThreePrice, 39.99);
  }
});
