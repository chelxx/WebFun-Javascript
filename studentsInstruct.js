//Students and Instructors Assignment

//Part I
function callNames () {
    var students = [
        {first_name : "Michael", last_name : "Jordan"},
        {first_name : "John", last_name : "Rosales"},
        {first_name : "Mark", last_name : "Guillen"},
        {first_name : "KB", last_name : "Tonel"}
    ]
    for (var i = 0; i < students.length; i++) {
        console.log (students[i].first_name + " " + students[i].last_name);
    }
}
callNames ();

//Part II
// function groupies () {
//     var users = {
//         'Students': [ 
//             {first_name:  'Michael', last_name : 'Jordan'},
//             {first_name : 'John', last_name : 'Rosales'},
//             {first_name : 'Mark', last_name : 'Guillen'},
//             {first_name : 'KB', last_name : 'Tonel'}
//          ],
//         'Instructors': [
//             {first_name : 'Michael', last_name : 'Choi'},
//             {first_name : 'Martin', last_name : 'Puryear'}
//          ]
//         }

//     for (var i = 0; i < users['Students'].length; i++){
//         console.log ((i+1) + " - " + users['Students'][i].first_name + " " + users['Students'][i].last_name + " - ");
//     }
// }
// groupies ();