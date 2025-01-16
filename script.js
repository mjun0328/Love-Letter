window.addEventListener("scroll", () => {
  const body = document.querySelector("body");
  const percent = Math.min(
    (window.scrollY / (body.scrollHeight - window.innerHeight)) * 100,
    100
  );
  document.getElementById("scrollbar").style.width = `${percent}%`;

  const boy = document.getElementById("boy");
  const girl = document.getElementById("girl");
  if (percent === 100) {
    boy.hidden = true;
    girl.src = "./asset/together.svg";
    girl.style.height = "4rem";
  } else {
    boy.hidden = false;
    girl.src = "./asset/girl.svg";
    girl.style.height = "2rem";
  }
});
