let button = document.querySelector('#submit')
let radioForm = document.querySelectorAll('.radio-form')
let formDiv = document.querySelector('.form-group-one')

console.log(radioForm.length)
for(let i = 0;i < radioForm.length ;i++){
	radioForm[i].addEventListener("click",()=>{
      radioForm[i].style.background = "#7C8798";
	  radioForm[i].style.color="#fff";
	})
}
// radioForm.addEventListener('click',()=>{
// 	for(let i = 0;i < radioForm.length;i++){
// 		radioForm[i].style.background = "#7C8798";
// 		radioForm[i].style.color="#fff";
// 	}
// })