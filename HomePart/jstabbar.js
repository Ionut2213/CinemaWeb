const listItems = document.querySelectorAll(".navigation ul li");
const indicator = document.querySelector(".indicator");

listItems.forEach((item, index) =>{
    item.addEventListener("click", function(){
        listItems.forEach(li => li.classList.remove("active"));

        item.classList.add("active");

        indicator.style.left = '${index * 70}px';
    })
})