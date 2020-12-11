/* Javascript Dom Crash Course (JS BOM) */

/*   
   Lecture #01 - BOM Introduction
   What IS BOM
   - Broweser Object Model

   What Can I Do With Dom
   - Js Bom Talks To The Broswe
   - Doing Action Not Related To Page
   --- Change Url 
   --- BackGround Request
   --- Alert, Confirm, Prompt
   --- Window Move, Window Open, Window Close 
   --- Change Text In The State Bar

   Bom Information
   - ALL Modern Browsers Implement Similar Boms
   --- Window
   --- Screen
   --- Location
   --- History
   --- Navigation
   --- Timing
   --- Cookies

   - Colection Of Objects Control The Broswer
   - Default Object Of Browser IS Window
*/


/*   
    Lecture #02 -  Window
    Window
    - Window Object Is The Browser Window
    - Window Object Suported By All Broswer
    - Window IS The Default Object Of Browser 
    - All Global Js Object Are Memeber Of Window Object
*/

// alert('Test')
// window.alert('Test')
window.console.log("ok")
console.log(document.title)
console.log(window.document.title)
window.document.title = "new title"
console.log(window.document.title)
document.title = "JavaScript DOM "
console.log(window.document.title)
console.log(document.getElementById('firstH2').textContent)
console.log(window.document.getElementById('firstH2').textContent)

// console.log(window.print())


/*
   Lecture #03 -  Window Methods - Alert, Prompt, Confirm
*/

// alert('hi\n nice \n to meet \n You')
// Boolean Yes or Not
// console.log(confirm("Are You Sure"))
// console.log(confirm("Are You Sure"))
// console.log(window.confirm("Are You Ok"))

// let ask = window.confirm("Are You My Friend Ali?")
// console.log(ask)

// if (ask) {
//     console.log("Yes that is ALI for sure")
// } else {
//     console.log("I know Your are not my friend")
// }


// let firstName = prompt("First Name :", "First Name : ")
// let secondName = prompt("Second Name : ", "Second Name : ")
// let fullName = firstName + " " + secondName
// console.log("Your First Name is :  " + firstName)
// console.log("Your Second Name is :  " + secondName)
// console.log("Your Full Name is :  " + fullName)