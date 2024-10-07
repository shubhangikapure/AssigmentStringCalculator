import React, { useState } from "react";

function StringCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const add = (numbers) => {
    if (numbers === "") return 0; // Return 0 for empty input

    let delimiter = /,|\n/; // Default delimiters: comma or newline

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n", 2); // Split into delimiter and numbers
      delimiter = new RegExp(parts[0].substring(2)); // Extract the custom delimiter
      numbers = parts[1]; // Get the numbers section
    }

    // Split the numbers string based on the delimiter
    const numArray = numbers.split(delimiter);
    const negatives = [];
    const sum = numArray.reduce((total, num) => {
      const value = parseInt(num, 10);
      if (isNaN(value)) return total; // Ignore non-numeric values
      if (value < 0) negatives.push(value); // Collect negative numbers
      return total + value;
    }, 0);

    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return sum;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const sum = add(input); // Call add function
      setResult(sum); // Set the result
      setError(null); // Clear errors
    } catch (err) {
      setError(err.message); // Display error message
      setResult(null); // Clear result if there's an error
    }
  };

  return (
    <div className="App">
      <h1>String Calculator</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your numbers"
          rows="4"
          cols="50"
        ></textarea>
        <br />
        <button type="submit">Calculate</button>
      </form>
      {result !== null && <h2>Result: {result}</h2>}
      {error && <h3 className="error">{error}</h3>}
    </div>
  );
}

export default StringCalculator;
