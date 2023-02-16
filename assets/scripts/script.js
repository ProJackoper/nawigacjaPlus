const navItems = document.querySelectorAll('.nav-items-item')

navItems.forEach((item) => {
  const subListContent = item.querySelector(".dropdown")
    item.addEventListener('click', () => {
      subListContent.classList.toggle("display-none")
    }, false)
    item.addEventListener("mouseout", (event) => {
      event.stopPropagation()
      subListContent.classList.add("display-none")
    })
})
