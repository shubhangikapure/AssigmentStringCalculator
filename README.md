
How the component works:
Input Handling:
Users can input numbers, which can be separated by commas, newlines, or a custom delimiter (e.g., //;\n1;2).
Add Function:
The add function processes the string input, calculates the sum, and handles errors such as negative numbers.
Form Submission:
On form submission, it calls add(), handles exceptions, and updates the UI with the result or an error message.
Custom Delimiters:
Supports custom delimiters by specifying //[delimiter]\n[numbers].


Handling Input:

The user can input numbers in the textarea.
Comma or newline characters separate the numbers.
Users can specify a custom delimiter by starting the input with //[delimiter]\n.
Handling Negative Numbers:

If a negative number is detected, the function throws an error.
The error message lists all negative numbers entered.
Functionality of add method:

Handles both default delimiters (comma, newline) and custom delimiters.
Ignores non-number characters (if any).
Calculates and returns the sum of numbers.
Throws errors for negative numbers.
