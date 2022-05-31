// console.log(h1_id.innerText);

// document.write(h3_id.innerText +'my dom app');

// var team = document.getElementsByClassName('my_team');
// console.log(team);

// console.log(team[1]);

// console.log(my_team.innerText);

// var names = document.getElementsByClassName('p_class');
// console.log(names)

// function getFromuser(){
//     var inputType = prompt();
//     document.body.textContent = "<input type =" + inputType + "/>";
// }

// function numberAndcolor(color,num){
//     for(var i=0;i<num;i++){
//         document.write("<span>" + color +"</span>") ;
//     } 
// }
// numberAndcolor('red',prompt('enter a number'));

// function textFromUser(text){
//     document.write("<h1>"+text+"</h1>");
// }
// textFromUser(prompt('enter text'));

// function someFunc(){
//    var user = prompt();
//     document.write("<input type =" +user+"/>") 
// }
// someFunc();

//שאלה 11
// function pickAtype(className,text) {
//     var elementArray = document.getElementsByClassName(className);
//     for(var i=0; i<elementArray.length; i++){
//         elementArray[i].innerText = text;
//     }
// }

// function printTextInP(){
//   var tagArray = document.getElementsByTagName('p')
//   for(var i=0; i<tagArray.length; i++){
//       tagArray[i].innerHTML = "<span>" + "royalty" + "</span>"
//   } 
// }
// printTextInP();
// 
// function getUserDetails(){
//    var user = {}
//    user.firstname = prompt('enter firstname');
//    user.lastname = prompt('enter lastname');
//    user.age = prompt('enter age');
//    document.write(user.firstname+user.lastname+user.age);
//    if(user.age>18){
//     document.write("<br><input type ="+ 'number' +"/> <br>")
//    }
// }
// getUserDetails();

// function printMovie(){
//     var movie = {
//         name: prompt('enter movie name'),
//         numberofviews: +prompt('enter movie views'),
//         Year: +prompt('enter year number'),
//         photo: prompt('enter link photo')
//     }
//     document.write(movie.name+movie.numberofviews+movie.Year+"<img src ="+movie.photo+">");
// }
// printMovie();

// var employee = {
//     firstname: prompt('enter a firstname'),
//     lastname: prompt('enter last name'),
//     email: prompt('enter email'),
//     area: prompt('enter area')
// }
// document.write('<h1>'+employee.firstname+'</h1>'+'<h3>'+employee.lastname+'</h3>'+'<span>'+employee.email+'</span>'+'<p>'+employee.area+'</p>');

// function printBuilding(){
//     var userNum = prompt('enter number');
//     for(var i=0; i<userNum;i++){
//         var building ={
//             contractorName: prompt('enter a name'),
//             companyName: prompt('enter a company name'),
//             numberoffloors: +prompt('enter number of floors'),
//             numofAppartmentsInFloor: +prompt('enter number of Appartments In Floor')
//         }    
//         document.write('<p>'+building.contractorName+'</p>'+'<h1>'+building.companyName+'</h1>'+'<h3>'+building.numberoffloors+'</h3>'+'<span>'+building.numofAppartmentsInFloor+'</span>')
//     }
// }
// printBuilding();

// function printStore(){
//     var userNumber = prompt('enter a number');
//     for(var i=0; i<userNumber;i++){
//         var store = {}
//         store.name = prompt('enter name');
//         store.address = prompt('enter address');
//         store.numofdepartment = +prompt('enter number of departments');
//         store.numofworkers = +prompt('enter number of employees');
//         if(store.numofworkers>10){
//             document.write('<h1>'+store.name+store.address+store.numofdepartment +store.numofworkers+'</h1>');
//         }
//     }
// }
// printStore()

// function logElements(){
//     var h1 = document.getElementsByTagName('h1');
//     var counter = 0;
//     for(var i=0; i<h1.length;i++){
//         counter++ ;
//     }   
//     console.log(counter);
// }
// logElements();

// function connactionList(){
//     var userNumber = prompt('enter a number');
//     for(var i=0; i<userNumber; i++){
//         var connect = {
//             fullname: prompt('enter fullname'),
//             company: prompt('enter company name'),
//             cellphons: prompt('enter cellphone'),
//             email: prompt('enter email')
//         };
//         var list = document.getElementById("oll");
//         list.innerHTML+= "<li>"+connect.fullname+"</li>";
//     };
// };
// connactionList();