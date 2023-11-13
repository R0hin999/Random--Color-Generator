let color = "";
const hexCodes = [
  "1",
  "2",
  "3",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
const bgColor = document.getElementsByTagName("p")[0];
const btn = document
  .getElementsByTagName("button")[0]
  .addEventListener("click", () => {

    color = "#";
    for (i = 0; i <= 5; i++) {
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    document.body.style.backgroundColor = color;
    var ColorCode = document.getElementById("colorCode");
    ColorCode.innerHTML = color;
    ColorCode.style.color = color;
  });

function CopyCode() {
  if (color === "") {
    alert("Please Generate a Color");
  } else {
    navigator.clipboard.writeText(color);
  }
}
