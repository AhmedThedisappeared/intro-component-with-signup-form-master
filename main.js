const submitBtn = document.querySelector(".submit-btn");
const inputFiled =document.querySelectorAll('form input');

submitBtn.addEventListener('click' ,(e)=>{
    inputFiled.forEach((input , index) => {
        console.log(input.getAttribute('id'));
        if (input.value === "") {
            e.preventDefault();
            inputFiled[index].classList.add("error");
        }  else {
            inputFiled[index].classList.remove("error");
            if (input.getAttribute("id") === "email") {
                const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
                if(regex.test(input.value)){
                    inputFiled[index].classList.remove("error");
                } else {
                    inputFiled[index].classList.add("error");
                    e.preventDefault();
                }
            }
        }       
    });
})
