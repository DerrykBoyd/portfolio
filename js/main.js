// Typewriter on home page
const greetings = ['Hi there 🙂', 'Salut!  😎', 'Hello  👋', 'Bonjour  👋'];
const typewriter = document.querySelector('.typewriter');
let greetingNum = 1;

setInterval(() => {
  typewriter.classList.remove('typewriter');
  void typewriter.offsetWidth;
  typewriter.classList.add('typewriter');
  typewriter.innerHTML = greetings[greetingNum % greetings.length];
  greetingNum ++;
}, 4000);