const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.onclick = function() {
    let isError = (input.value != "Abc123");
    let isAnimation = (btn.style.animation != "");

    if (isError)
    {
        btn.classList.add("error-btn");

        if (!isAnimation)
        {
            btn.style.animation = "shake 1s forwards";
            isAnimation = true;
        }
    }

    else
    {
        btn.classList.add("success-btn");
        btn.style.animation = "boom 1s forwards";
        setTimeout(() => {
            btn.style.animation = "";
        }, 1000);
    }  
}

input.oninput = function() {
    btn.classList.remove("error-btn");
    btn.classList.remove("success-btn");
}