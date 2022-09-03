// couse_info.html courses_section collapse
const btns = document.querySelectorAll('.collapse');
    btns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const answer = e.currentTarget.previousElementSibling;
            console.log(answer);
            if (answer.style.height) {
                console.log(answer.style.height);
                answer.style.height = null;
            } else {
                answer.style.height = answer.scrollHeight + 'px';
            }
        })
    })

// open close profile side panel
const sideButton = document.getElementById('side-button');
const openSide = sideButton.firstElementChild;
const closeSide = sideButton.lastElementChild;
const sidePanel = document.getElementById('side-panel');
const profileMain = document.getElementById('profile-main');

sideButton.addEventListener("click", (e)=>{
    e.preventDefault();
    sidePanel.classList.toggle('side-panel-collaps');
    // profileMain.classList.toggle('w-[80%]');
    openSide.classList.toggle('hide');
    closeSide.classList.toggle('hide');
    
})
closeSide.addEventListener("click", ()=>{})
