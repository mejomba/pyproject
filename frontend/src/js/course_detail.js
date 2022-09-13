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

// conversation hashtag
// const conversationHashtag = document.getElementById('conversation-hashtag');
// const inputHashtag = document.getElementById('input-hashtag');


// function addHashtag(){
//     inputHashtag.addEventListener('keypress', (e)=> {
//         const hashtags = getActiveHashtags()
//         console.log("hashtags nodelist: ", hashtags);
//         let hashtags_length = 0;
//         if (hashtags){
//             hashtags_length = getActiveHashtags().length;
//         }// end if
                
//         console.log("hashtags start event listener ",hashtags_length);
//         if(hashtags_length === 3){
//             alert('حداکثر تعداد هشتگ ها ۳ مورد است.')
//         }// end if
//         const inputHashtagValue = inputHashtag.value
//         const hashtag_value = document.createTextNode(inputHashtagValue);
//         if(e.key==='Enter' && inputHashtagValue && !(inputHashtagValue === null || inputHashtagValue.match(/^ *$/) !== null) && hashtags_length<3){
//             e.preventDefault();
//             // hashtags++;
//             const node = document.createElement('span');
//             const innerNode = document.createElement('div');
//             const innerNodeText = document.createTextNode('\327');
//             innerNode.dataset.idx = hashtags;
//             innerNode.appendChild(innerNodeText);
//             node.appendChild(innerNode);
//             node.appendChild(hashtag_value);
//             innerNode.classList.add('absolute', 'top-0', 'left-0', 'text-xl', 'rounded-tl', 'rounded-bl','bg-red-200', 'hover:text-red-500', 'remove-hashtag');
//             node.classList.add('badge', 'bg-gray-200', 'mx-1', 'text-center', 'relative', 'pl-4');
//             conversationHashtag.appendChild(node);
//             inputHashtag.value = '';
//             console.log("hashtags to removeHashtag",hashtags_length);
//             removeHashtag();
//         }// end if
//         // console.log("addHashtag lenght: ", hashtags.length, hashtags);
         
//         // console.log("addHashtag update lenght: ", hashtags.length, hashtags);

//     });// end event    
// }// end fun


// function removeHashtag(){
//     const btnsClose = document.querySelectorAll('.remove-hashtag');
//     if (btnsClose){
//         btnsClose.forEach((btnClose)=>{
//             btnClose.addEventListener('click', ()=> {
//                 btnClose.parentElement.classList.add('hidden');
//             }); // end event
//         }); // end forEach
//     }// end if    
// }// end fun

// function getActiveHashtags(){
//     const btnsClose = document.querySelectorAll('.remove-hashtag');
//     Array.from(btnsClose).filter(btn=>{
//         let x = btn.classList.contains('hidden');
//         console.log('X: ', x);
//         return x
//     });
    
//     // return x;
// }// end fun
// addHashtag();


// ****** select items **********

// const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("input-hashtag");
const submitBtn = document.querySelector(".submit-btn");
// const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** event listeners **********

// submit form
// form.addEventListener("submit", addItem);
submitBtn.addEventListener('click', addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
// window.addEventListener("DOMContentLoaded", setupItems);

// ****** functions **********

// add item
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  const hashtag_count = list.childNodes.length;
  console.log(list.childNodes.length);
  if (value !== "" && !editFlag && hashtag_count<3) {
    clearBtn.classList.remove('hidden');
    const element = document.createElement("span");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `<span class="font-semibold">${value}</span>
            <span class="btn-container">
              <!-- edit btn -->
              <span class="edit-btn bg-blue-400 cursor-pointer mx-1 text-white text-center text-xs rounded p-1 hover:bg-blue-500 transition duration-300">
                ویرایش
              </span>
              <!-- delete btn -->
              <span class="delete-btn bg-red-400 cursor-pointer mx-1 text-white text-center text-xs rounded p-1 hover:bg-red-500 transition duration-300">
                حذف
              </span>
            </span>
          `;
    // add event listeners to both buttons;
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    // append child
    list.appendChild(element);
    // display alert
    displayAlert("هشتگ اضافه شد.", "green-200");
    // show container
    // container.classList.add("show-container");
    // set local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value !== "" && editFlag) {
    editElement.innerHTML = value;
    displayAlert("ویرایش شد.", "green-200");

    // edit  local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else if (hashtag_count===3){
    displayAlert("حداکثر ۳ هشتگ مجاز است.", "gray-200");
  } 
  else {
    displayAlert("یک مقدار وارد کنید.", "yellow-200");
  }
}
// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`bg-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`bg-${action}`);
  }, 1500);
}

// // clear items
function clearItems(e) {
    e.preventDefault();
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
    clearBtn.classList.add('hidden');
  }
//   container.classList.remove("show-container");
  displayAlert("هشتگ پاک شد.", "red-200");
  setBackToDefault();
  localStorage.removeItem("list");
}

// // delete item

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);

  if (list.children.length === 0) {
    // container.classList.remove("show-container");
    clearBtn.classList.add('hidden');
    displayAlert("خالی شد.", "red-200");
  }
  displayAlert("هشتگ پاک شد.", "red-200");

  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}
// edit item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  //
  submitBtn.textContent = "ویرایش";
}
// // set backt to defaults
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "ثبت";
}

// // ****** local storage **********

// // add to local storage
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });

  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// // SETUP LOCALSTORAGE.REMOVEITEM('LIST');

// // ****** setup items **********

function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    // container.classList.add("show-container");
  }
}

function createListItem(id, value) {
  const element = document.createElement("span");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("grocery-item");
  element.innerHTML = `<span class="title">${value}</span>
            <span class="btn-container">
              <!-- edit btn -->
              <span class="edit-btn bg-blue-400 cursor-pointer mx-1 text-white text-center text-xs rounded p-1 hover:bg-blue-500 transition duration-300">
                ویرایش
              </span>
              <!-- delete btn -->
              <span class="delete-btn bg-red-400 cursor-pointer mx-1 text-white text-center text-xs rounded p-1 hover:bg-red-500 transition duration-300">
                حذف
              </span>
            </span>
          `;
  // add event listeners to both buttons;
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);

  // append child
  list.appendChild(element);
}