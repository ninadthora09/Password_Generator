let inputSlider= document.getElementById("inputSlider")
let sliderValue= document.getElementById("sliderValue")
let passbox= document.getElementById("passBox")
let lowercase= document.getElementById("lowercase")
let uppercase= document.getElementById("uppercase")
let number= document.getElementById("number")
let symbol= document.getElementById("symbol")
let gnbtn= document.getElementById("gp")
let copyIcon= document.getElementById("copy_icon")


sliderValue.textContent= inputSlider.value;

inputSlider.addEventListener('input',()=>{
    sliderValue.textContent= inputSlider.value;
})

gnbtn.addEventListener('click',()=>{
    passbox.value=genratepassword();
})


let lowerChar="abcdefghijklmnopqrstuvwxyz"
let upperChar= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let allnumbers="0123456789";
let allsymbols="~!@#$%^&*()";

function genratepassword(){
    let genPass="";
    let allchar="";
    allchar+=lowercase.checked ? lowerChar : ""
    allchar+=uppercase.checked ? upperChar : ""
    allchar+=number.checked ? allnumbers : ""
    allchar+=symbol.checked ? allsymbols : ""

    if(allchar== ""|| allchar.length==0){
        return genPass;
    }


    let i=1;
    while(i<=inputSlider.value){
        genPass+=allchar.charAt(Math.floor(Math.random()* allchar.length));
        i++;
    }
    return genPass;
}

copyIcon.addEventListener('click',()=>{
    if(passbox.value!="" || passbox.length>=1){
        navigator.clipboard.writeText(passbox.value);
        copyIcon.innerHTML=" 👍 ";
        copyIcon.title= "Copied";

        setTimeout(() => {
            copyIcon.innerHTML="content_copy"
            copyIcon.title="";
        }, 3000);
    }
   
})


