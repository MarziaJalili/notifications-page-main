const notification = document.querySelector(".notifications-number")
const dots = document.querySelectorAll(".dot")
const lis = document.querySelectorAll('li')



document.querySelector(".mark-all-as-read")
    .addEventListener("click", () => {
        notification.innerHTML = 0;
        dots.forEach(dot => dot.style.display = "none");
        lis.forEach(li => li.style.backgroundColor = "white")
    })