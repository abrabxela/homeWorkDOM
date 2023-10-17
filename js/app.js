//1
const noCar = document.querySelector('ul');
noCar.removeChild(noCar.querySelectorAll('li')[2]);
noCar.removeChild(noCar.querySelectorAll('li')[3]);
//2
const allLi = document.querySelectorAll('li');
for(let li of allLi){
    li.setAttribute('class', 'listItem');
};
const ul = document.querySelector('ul');
ul.setAttribute('class', 'list');
//3
const newFirst = document.createElement('li');
newFirst.innerText = 'Bugatti';
ul.insertBefore(newFirst, document.querySelector('li'));
//4
const newLast = document.createElement('li');
newLast.innerText = 'Ford';
ul.appendChild(newLast);
//5
const firstName = document.createElement('input');
const lastName = document.createElement('input');
const passwd = document.createElement('input');
passwd.setAttribute('type', 'password');
const passwdAcs = document.createElement('input');
passwdAcs.setAttribute('type', 'password');
document.querySelector('form').appendChild(firstName);
document.querySelector('form').appendChild(lastName);
document.querySelector('form').appendChild(passwd);
document.querySelector('form').appendChild(passwdAcs);
//6
const image = document.createElement('img');
image.src = 'https://i.gifer.com/J3Tm.gif';
document.querySelector('body').insertBefore(image, document.querySelector('p'));
//7.1
const p = document.querySelector('p');
p.setAttribute('class', 'bold');
//7.2
p.removeAttribute('class', 'red italic');
//8
const h1 = document.createElement('h1');
h1.innerText = ('this is h1 tag');
document.querySelector('div').appendChild(h1);
//9
h1.style.color = 'blue';
h1.style.fontSize = '40px';