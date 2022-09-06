

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
// css breakpoint
function sidePanelCollaps(CSSBreakPoint) {
    const sideButton = document.getElementById('side-button');
    const openSide = sideButton.firstElementChild;
    const closeSide = sideButton.lastElementChild;
    const sidePanel = document.getElementById('side-panel');
    const innerPanel = sidePanel.firstElementChild;
    const sidePanelButton = document.getElementById('side-panel-button');
  if (CSSBreakPoint.matches) { // If => media query matches open side panel in XL break-point.
    sidePanel.classList.add('side-panel-collaps');
    innerPanel.classList.add('side-panel-collaps');
    closeSide.classList.remove('hide');
    openSide.classList.add('hide');
    sideButton.addEventListener("click", (e)=>{
        e.preventDefault();
        sidePanel.classList.toggle('side-panel-collaps');
        innerPanel.classList.toggle('side-panel-collaps');
        sidePanelButton.classList.toggle('side-panel-button');
        openSide.classList.toggle('hide');
        closeSide.classList.toggle('hide');
    })
  } else { // else => don't media query matches close side panel in SM MD LG break-point.
    sidePanelButton.classList.remove('side-panel-button');
    sideButton.addEventListener("click", (e)=>{
        e.preventDefault();
        sidePanel.classList.toggle('side-panel-collaps');
        innerPanel.classList.toggle('side-panel-collaps');
        sidePanelButton.classList.toggle('side-panel-button');
        openSide.classList.toggle('hide');
        closeSide.classList.toggle('hide');
    })
  }
}
let CSSBreakPoint1280 = window.matchMedia("(min-width: 1280px)");
sidePanelCollaps(CSSBreakPoint1280);
// const sideButton = document.getElementById('side-button');
// const openSide = sideButton.firstElementChild;
// const closeSide = sideButton.lastElementChild;
// const sidePanel = document.getElementById('side-panel');
// const innerPanel = sidePanel.firstElementChild;
// const sidePanelButton = document.getElementById('side-panel-button');
// sideButton.addEventListener("click", (e)=>{
//     e.preventDefault();
//     sidePanel.classList.toggle('side-panel-collaps');
//     innerPanel.classList.toggle('side-panel-collaps');
//     sidePanelButton.classList.toggle('side-panel-button');
//     openSide.classList.toggle('hide');
//     closeSide.classList.toggle('hide');
    
// })
