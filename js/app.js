const div = document.querySelector(".cat__facts");
const randomFact = document.querySelector(".random__fact");
const img = document.querySelector(".cat__picture");

fetch("https://cat-fact.herokuapp.com/facts")
  .then((response) => response.json())
  .then((data) => {
    let facts = data.all;
    randomFact.innerHTML = `${facts[generateRandom(facts.length - 1, 0)].text}`;
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

generateRandom = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
createNode = (element) => {
  return document.createElement(element);
};

append = (parent, el) => {
  return parent.appendChild(el);
};
