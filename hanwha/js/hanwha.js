const sections = document.querySelectorAll("section");
      window.addEventListener("scroll", () => {
        sections.forEach((sec) => {
          const rect = sec.getBoundingClientRect().top;
          if (rect < window.innerHeight - 150) {
            sec.classList.add("visible");
          }
        });
      });