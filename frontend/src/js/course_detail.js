function coursesSidePanelCollaps(CSSBreakPoint) {    
    const sideCloseBtn = document.getElementById('side-close-btn');    
    const headerSideOpenBtn = document.getElementById('header-side-open-btn');
    const headerSideCloseBtn = document.getElementById('header-side-close-btn');
    const btnRotate = sideCloseBtn.firstElementChild;
    const btnNotification = sideCloseBtn.lastElementChild;
    const sidePanel = document.getElementById('side-panel');
    const innerPanel = document.getElementById('inner-panel');
    const sidePanelButton = document.getElementById('side-panel-button');

    if (CSSBreakPoint.matches){ // If => media query matches, open side panel in XL break-point.
        sidePanel.classList.add('side-panel-collaps');
        innerPanel.classList.add('side-panel-collaps');
        innerPanel.classList.add('overflow-y-scroll');
        btnNotification.classList.add('hide');
    }// end if
    else { // else => don't media query matches, close side panel in SM MD LG break-point.
        sidePanelButton.classList.remove('sticky');
        sidePanelButton.classList.add('fixed');
        sidePanelButton.classList.remove('right-full');
        innerPanel.classList.toggle('overflow-y-scroll');
        btnRotate.classList.toggle('rotate');
    }// end else if

    function toggleSidePanel(btn){
        btn.addEventListener('click', ()=> {
            sidePanel.classList.toggle('side-panel-collaps');
            innerPanel.classList.toggle('side-panel-collaps');
            sidePanelButton.classList.toggle('sticky');
            sidePanelButton.classList.toggle('fixed');
            sidePanelButton.classList.toggle('right-full');
            sideCloseBtn.firstElementChild.classList.toggle('rotate');
            btnNotification.classList.toggle('hide');            
        }); // end eventListener
    } // end function toggleSidePanel
    toggleSidePanel(sideCloseBtn);
    toggleSidePanel(headerSideOpenBtn);
    toggleSidePanel(headerSideCloseBtn);
} // end function coursesSidePanelCollaps

let CSSBreakPoint1280 = window.matchMedia("(min-width: 1280px)");
coursesSidePanelCollaps(CSSBreakPoint1280);

// close course_detail notifier
let closeBtnSidePanelNotifier = document.getElementById("close-side-panel-notifier");
closeBtnSidePanelNotifier.addEventListener("click", (e)=>{
    e.preventDefault();
    closeBtnSidePanelNotifier.parentElement.classList.add('hidden');
});

// tab
const about = document.querySelector('.about');
const tabBtns = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');

about.addEventListener('click', function(e) {
 const id = e.target.dataset.id;
 
if (id) {
 const element = document.getElementById(id);
 tabBtns.forEach(function(btn) {
  btn.classList.remove('active');
 });
 e.target.classList.add('active');
 
 content.forEach(function(item) {
  item.classList.remove('active');
 });
 element.classList.add('active');
}
});