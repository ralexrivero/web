const square_bkg = document.querySelector('.square');
square_bkg.style.backgroundColor = 'limegreen';

const changeList = document.querySelectorAll('.list');

for (let i = 0; i < changeList.length; i++) {
    const current = changeList[i];
    current.innerText = `Modified ${i}`;
}