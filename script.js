const inputs = document.querySelectorAll("input");
const placeholders = document.querySelectorAll(".box__placeholder");

let check_email = (email) => {
  let rx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
  return rx.test(email); // Checks the mail format.
};

const checkInput = (item) => {
  if (item.currentTarget.type == "email") {
    if (
      !check_email(placeholders[2].textContent) &&
      item.currentTarget.value.length > 0
    ) {
      console.log("wrong");
      placeholders[2].classList.add("positionUp");
      item.currentTarget.classList.add("wrong");
    } else {
      console.log("right!");
      placeholders[2].classList.remove("positionUp");
      item.currentTarget.classList.remove("wrong");
    }
  }
};

inputs.forEach((item) => {
  item.addEventListener("input", function (item) {
    checkInput(item);
  });
});
