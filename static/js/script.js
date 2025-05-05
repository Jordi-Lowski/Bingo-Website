function toggleCheck(cell) {
    cell.classList.toggle("checked");
    checkBingo();
  }
  
  function checkBingo() {
    const cells = document.querySelectorAll(".bingo-cell");
    const allChecked = Array.from(cells).every((cell) =>
      cell.classList.contains("checked")
    );
  
    if (allChecked) {
      document.getElementById("bingo-message").style.display = "block";
      showConfetti();
      setTimeout(resetGame, 10000);
    }
  }
  
  function resetGame() {
    const cells = document.querySelectorAll(".bingo-cell");
    cells.forEach((cell) => {
      cell.classList.remove("checked");
    });
    document.getElementById("bingo-message").style.display = "none";
  }
  
  function showConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }