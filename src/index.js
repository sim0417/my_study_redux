import { createStore } from "redux";

const ACTION_ADD = "ADD";
const ACTION_MINUS = "MINUS";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ACTION_ADD:
      return count++;
    case ACTION_MINUS:
      return count++;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

plus.addEventListener("click", () => countStore.dispatch({ type: ACTION_ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: ACTION_MINUS }));
