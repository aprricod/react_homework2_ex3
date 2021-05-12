import "./App.css";

function count() {
  let n = Number.parseInt(document.getElementById("num").value);
  let sum = (n * (n + 1)) / 2;
  console.log("Сумма: " + sum);
}

function App() {
  return (
    <div>
      <input type="number" id="num" name="num" />
      <button onClick={count}>Результат</button>
    </div>
  );
}

export default App;
