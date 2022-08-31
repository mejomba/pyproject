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