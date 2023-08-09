function redirectToOtherPage() {
    window.location.href = "video-to-my-girl.html";
  }
  
  function moveButton() {
    const button = document.querySelector(".moving-button");
    const container = document.querySelector(".container");
    
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    const maxX = containerWidth - buttonWidth;
    const maxY = containerHeight - buttonHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  }
  