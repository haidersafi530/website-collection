const image = document.getElementById("hover-img");

    image.addEventListener("mousemove", (e) => {
      const bounds = image.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;

      const rotateX = -(y - centerY) / 20; // vertical tilt
      const rotateY = (x - centerX) / 20;  // horizontal tilt

      image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      image.style.boxShadow = `${-rotateY * 4}px ${rotateX * 4}px 50px rgba(0, 0, 0, 0.4)`;
    });

    image.addEventListener("mouseleave", () => {
      image.style.transform = "rotateX(50px) rotateY(50px) scale(1)";
      image.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
    });