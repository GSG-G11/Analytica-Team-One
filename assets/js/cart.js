let deleteBtn = document.querySelectorAll(".delete-btn");

if(deleteBtn){
    deleteBtn.forEach((ele)=>{
        ele.addEventListener("click", (e)=>{
            e.target.parentElement.parentElement.remove();
        });
    });
}