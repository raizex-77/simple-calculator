import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

const handleInput = (value) => {
  setInput((prev) => {
    if (["+", "-", "*", "/"].includes(prev.slice(-1)) && ["+", "-", "*", "/"].includes(value)) {
      return prev; 
    }
    return prev + value;
  });
};


  const clearInput = () => {
    setInput("");
    setResult(null);
  };

  const calculateResult = () => {
    try {
      setResult(Function(`return ${input}`)());
    } catch {
      setResult("Ошибка!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Калькулятор</h1>
        <div style={styles.container}>
          <div style={styles.display}>
            <p>{input || "0"}</p>
            <p>{result !== null ? `= ${result}` : ""}</p>
          </div>
          <div style={styles.buttons}>
            {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
              <button
                key={char}
                onClick={() => (char === "=" ? calculateResult() : handleInput(char))}
                style={styles.button}
              >
                {char}
              </button>
            ))}
            <button onClick={clearInput} style={{ ...styles.button, ...styles.clearButton }}>C</button>
          </div>
        </div>
      </header>
    </div>
  );
}

const styles = {
  container: { 
    textAlign: "center", 
    maxWidth: "400px", 
    margin: "20px auto", 
    padding: "10px", 
    border: "2px solid #333", 
    backgroundColor: "#008000" 
  },
  display: { 
    background: "#333", 
    color: "white", 
    padding: "10px", 
    minHeight: "40px", 
    fontSize: "20px", 
    textAlign: "right" 
  },
  buttons: { 
    display: "grid", 
    gridTemplateColumns: "repeat(4, 1fr)", 
    gap: "5px", 
    marginTop: "10px" 
  },
  button: { 
    backgroundColor: "#333", 
    color: "white", 
    fontSize: "20px", 
    border: "1px solid #444", 
    padding: "15px", 
    cursor: "pointer", 
    transition: "background-color 0.3s"
  },
  buttonHover: { 
    backgroundColor: "#555" 
  },
  clearButton: { 
    gridColumn: "span 4", 
    background: "red", 
    color: "white" 
  },
};

export default App;
