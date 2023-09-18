function convert() {
  const str = document.getElementById("tx").value;
  const arr = str.split(" ");
  const count = arr.length;
  const result = document.getElementById("result");
  result.innerHTML = "Totally " + count + " words";
}
