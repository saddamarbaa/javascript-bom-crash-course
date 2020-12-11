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


/*   Lecture #03 -  Window Methods - Alert, Prompt, Confirm   */


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


/*    
   Lecture #04 - Window Methods - setTimeout  
    setTimeout(function(), Milliseconds, param1, param2, param3)
    clearTimeout(Id Or Number Of setTimeout)
 */


setTimeout(function() {
        window.console.log("Hello After 3 seconds")
    }, 3000) // call the function after 3 seconds

function writeMeassge() {
    console.log("Hello After 5 seconds")
}

// call writeMeassge() function After 5 seconds
// setTimeout(writeMeassge, 5000)

let myTime = setTimeout(writeMeassge, 5000)
let myButton = document.getElementById('click')

// console.log(myTime)
// console.log(myButton)

// function to clear the timing out(Stop the setTimeout)
myButton.onclick = function() {
    clearTimeout(myTime)
}


/*   
   Lecture #05 - Window Methods - setInterval
    setInterval(function(), Milliseconds, param1, param2, param3)
    clearInterval(Id Or Number Of setInterval)
*/


let button = window.document.querySelector('button')
let stopSetInterval = window.document.getElementById('secondClick')
let countDownButton = window.document.getElementById('countDown')

button.style.padding = '10px'
countDownButton.style.padding = '10px'
countDownButton.style.border = '1px solid lightBlue'
countDownButton.style.width = '90px'
stopSetInterval.style.padding = '10px'


// call the function forever every one second(loop)
let counterTime = setInterval(countDown, 1000)

// counter function 

function countDown() {
    //Termination case
    if (countDownButton.textContent <= 0) {
        countDownButton.textContent = "Done"
        countDownButton.style.background = 'red'

        // clearInterval(top the loop)
        clearInterval(counterTime)

    } else {
        // decrement by one
        countDownButton.textContent -= 1
    }
}

function writeNewMeassge() {
    console.log("Hello Every one seconds")
}

// call the function forever every one second(loop)
// let loopCallTime = setInterval(writeNewMeassge, 1000)

// function to clearInterval (Stop Interval Loop)
// stopSetInterval.onclick = function() {
//     clearInterval(loopCallTime)
// }



/*   
   Lecture #06 - Window Methods - Open
    window.open(URL, Name Or Attribute, Specification, History Replace)
*/


let openLink = window.document.getElementById('open')

openLink.style.padding = '10px'
openLink.style.border = '1px solid skyBlue'
openLink.style.width = '90px'

// onlick open new window
openLink.onclick = function() {
    // open -blank page
    // window.open("", "", "", "")

    // open google in new window
    window.open("https://www.google.com")
}


/*   
   Lecture #07 - Window Methods - scrollBy, scrollTo
   window.scrollBy(X,Y) // Numbers only in pixels
   window.scrollTo(X,Y) // Numbers only in pixels
*/

/*   Lecture #08 - Window Methods - Stop, Close, Focus  */

/*   Lecture #09 - Window Properties - innerHeight, innerWidth  */

console.log("innerHeight : " + window.innerHeight)
console.log("innerWidth  : " + window.innerWidth)
console.log("outerHeight : " + window.outerHeight)
console.log("outerWidth  : " + window.outerWidth)

/*   Lecture #10 - Window Properties - pageXOffset, pageYOffset  */

console.log(window.pageXOffset)
console.log(window.pageYOffset)
console.log(window.scrollX)
console.log(window.scrollY)

/*   
    Lecture  #11 - Window Location Properties - href 
    - Absolute URL
    - Page Within The Current Web Page 
    - Hash Id Within The Current Web Page
    - Prottocal [ FTP, Mail, File ]
*/

console.log(window.location.href)
console.log(location.href)


/*  Lecture #12 - Location Properties - Host, Hash  */

console.log(location.host)
console.log(location.hash)

/*  
    Lecture #13 - Location Properties - Protocol, Search, Pathname 
    - HTTP   = HyperText Transfer Protocol
    - HTTPs  = HyperText Transfer Protocol Secured
    -File
    FTP  = File Transfer Protocol
    MailTo
*/

console.log(location.protocol)
console.log(location.search)
console.log(location.pathname)

// wil give us full link
console.log(location.hostname + location.pathname + location.search)


/*  Lecture #14 - Location Methods - Reload, Replace, Assign  */

/*  Lecture  #15 - History Methods - Back, Forward, Go  */

console.log(history.length)

/*  Lecture #16-  Window Navigator Properties */

console.log(navigator.appName)
console.log(navigator.appCodeName)
console.log(navigator.appVersion)
console.log(navigator.platform)
console.log(navigator.cookieEnabled)
console.log(navigator.language)
console.log(navigator.onLine)
console.log(navigator.product)