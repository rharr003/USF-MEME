const form = document.querySelector("form");
const memeSection = document.querySelector("#meme-section");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  createMeme(form.imageurl.value, form.toptext.value, form.bottomtext.value);
});

function createMeme(url, toptext, bottomtext) {
  const html = `
  <div class="meme">
    <img
      src="${url}"
    />
    <h2 class="toptext">${toptext}</h2>
    <h3 class="bottomtext">${bottomtext}</h3>
  </div>`;
  memeSection.insertAdjacentHTML("beforeend", html);
  form.imageurl.value = "";
  form.toptext.value = "";
  form.bottomtext.value = "";
}
