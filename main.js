/* Javascript Dom Crash Course (JS BOM) */

/*   Lecture -1 BOM Introduction
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
    Lecture -2  Window
    Window
    - Window Object Is The Browser Window
    - Window Object Suported By All Broswer
    - Window IS The Default Object Of Browser 
    - All Global Js Object Are Memeber Of Window Object
*/

// alert('Test')
// window.alert('Test')

console.log(document.title)
console.log(window.document.title)
window.document.title = "new title"
console.log(window.document.title)
document.title = "JavaScript DOM "
console.log(window.document.title)
console.log(document.getElementById('firstH2').textContent)
console.log(window.document.getElementById('firstH2').textContent)

// console.log(window.print())