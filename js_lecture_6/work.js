document.querySelector('#panel').addEventListener('mouseenter', (e) => {
    e.target.classList.add('opened');
});

document.querySelector('#panel').addEventListener('mouseleave', (e) => {
    //now i need to remove the opened class
    setTimeout(() => {
        e.target.classList.remove("opened");
    }, 1000);
});