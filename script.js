let body = document.querySelector('body');

let getRandom = (min,max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(() => {
  let heart = document.createElement('div');
  heart.className = 'heart';

  heart.style.width = heart.style.height = `${getRandom(10,40)}px`;

  heart.style.top = `${getRandom(0,100)}%`;
  heart.style.left = `${getRandom(0,100)}%`;

  heart.style.filter = `hue-rotate(${getRandom(0,360)}deg)`;

  body.append(heart);
}, 500);
