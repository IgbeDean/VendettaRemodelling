const toggle = document.querySelector("#toggle")
const links = document.querySelector("#links")

toggle.addEventListener('click', () => {
   toggle.classList.toggle("active")
   links.classList.toggle("active")
})

document.querySelectorAll(".nav-links").forEach(item => item.addEventListener('click', () => {
   toggle.classList.remove("active")
   links.classList.remove("active")
}))