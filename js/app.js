const div = document.querySelector(".cat__facts");
const img = document.querySelector(".cat__picture");

fetch("https://cat-fact.herokuapp.com/facts")
  .then((response) => response.json())
  .then((data) => {
    let facts = data.all;

    return facts.map((fact) => {
      let factDiv = createNode("div");
      factDiv.classList.add("cat__text");
      factDiv.innerHTML = `${fact.text}`;
      append(div, factDiv);
    });
  });

fetch("https://aws.random.cat/meow")
  .then((response) => response.json())
  .then((data) => {
    img.style.background = `url('${data.file}') no-repeat center`;
  });

createNode = (element) => {
  return document.createElement(element);
};

append = (parent, el) => {
  return parent.appendChild(el);
};
