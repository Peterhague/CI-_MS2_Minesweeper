let flagContainers = document.getElementsByClassName("flagContainers");
let randomFlags = [];
while (randomFlags.length < 10) {
    let flag = Math.floor(Math.random()*193);
    if (randomFlags.includes(flag) === false) {
        randomFlags.push(flag);
    }
}
console.log(randomFlags);
for (let i = 0; i < 10; i++) {
    flagContainers[i].innerHTML = `<img style="width: 96px;" src="https://www.countryflags.io/${flagObjects[randomFlags[i]].code}/flat/64.png"></img>`;
}
