document.getElementById("cards").onmousemove = e => {
    all_cards = document.querySelectorAll('.githubcard,.card');
    for(const card of all_cards) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }