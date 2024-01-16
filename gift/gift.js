var musik = ''
var audio = document.querySelector('.audio')
if (musik)
{
    audio.src = musik
}

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};