# Bingo Website

A simple, interactive Bingo game web application built with **Flask**, **HTML/CSS**, and **JavaScript**. Users click on the cells of a 4×4 Bingo grid. Once all cells are checked, an animated “BINGO!” message appears with a confetti effect, and the game resets automatically.

## 📂 Project Structure

```plaintext
Bingo-Website/
│
├── app.py                # Flask backend
│
├── templates/
│   └── index.html        # HTML template for the homepage
│
└── static/
    ├── css/
    │   └── style.css     # Styles and animations
    └── js/
        └── script.js     # Game logic and confetti effect



🚀 Features

- 4×4 Bingo grid with clickable cells

- Visual marking: Clicked cells are highlighted

- Bingo notification: Large “BINGO!” display when all cells are active

- Confetti animation via [canvas-confetti]

- Automatic reset 10 seconds after Bingo

- Responsive design and animated background gradient



🛠️ Requirements

- Python 3.x

- Pip (or another Python package manager)



📥 Installation

1. Clone the repository

    git clone https://github.com/Jordi-Lowski/Bingo-Website.git
    cd Bingo-Website


2. Create a virtual environment (recommended)

    python -m venv venv
    source venv/bin/activate   # Linux/macOS
    venv\\Scripts\\activate  # Windows

3. Install dependencies

    pip install flask


▶️ Running the Application

    python app.py

Then open on your browser.



🎨 Customization & Extension

Change grid size: Adjust HTML and CSS grid settings in index.html and style.css

Add multiplayer mode or random number generation

Customize design: Use a different color palette or fonts