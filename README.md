# 🏛️ Roman Numeral Converter

A simple, interactive web application that converts decimal numbers (1–3999) to Roman numerals. Built using HTML, CSS, and JavaScript with a clean and responsive design.

---

## 🔧 Features

- ✅ Converts numbers from 1 to 3999 to Roman numerals

- 🚫 Handles invalid input gracefully (empty, non-numeric, out of range)

- 🎨 Clean and responsive UI with subtle styling

- 🖱️ Button and keyboard (Enter key) input support

- 🌐 Uses Font Awesome icons and Google Fonts

---

## 📂 Project Structure

```css
roman-numeral-converter/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       └── roman-numerals.png
```

---

## 🚀 How to Use

1. **Clone or download** this repository:

```bash
git clone https://github.com/your-username/roman-numeral-converter.git
```

2. **Open index.html** in your browser.

3. **Enter a number** (1–3999) in the input field and click **Convert** or **press E**

---

## 🛠️ Technologies Used

- HTML5

- CSS3 (with custom variables and media queries)

- JavaScript (vanilla)

- Font Awesome (CDN)

- Google Fonts (Montserrat)

---

## 🧠 How It Works

- The input is validated to ensure it's a number between 1 and 3999.

- The decimalToRoman() function converts the number using a standard greedy algorithm.

- The result is displayed dynamically without reloading the page.

## 📏 Limitations

- Only supports integers in the range 1–3999

- No support for fractional or negative numbers

## 🤝 Contributing

Contributions, bug reports, and feature suggestions are welcome!
Feel free to fork the project and submit a pull request.
