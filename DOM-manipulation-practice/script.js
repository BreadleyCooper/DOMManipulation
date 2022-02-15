const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const paragraph = document.createElement('p');
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I'm Red!";
paragraph.style.color = ("Red")
container.appendChild(paragraph);

const head3 = document.createElement('h3');
head3.classList.add("head3");
head3.textContent = "I'm a blue h3!";
head3.style.color = ("Blue");
container.appendChild(head3);

const newDiv = document.createElement('div');
newDiv.classList.add("newDiv");
newDiv.style.cssText = "border-style: solid; borderColor: black; background: pink";
const newHead1 = document.createElement('div');
newHead1.classList.add("newHead1");
newHead1.textContent = "I'm in a div!"
const newPara = document.createElement('p');
newPara.classList.add("newPara");
newPara.textContent = "ME TOO!";
newDiv.appendChild(newHead1)
newDiv.appendChild(newPara);
container.appendChild(newDiv);


