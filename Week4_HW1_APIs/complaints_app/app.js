

//  var btn = document.getElementById("btn");

// btn.addEventListener(onclick, (function fetch_data($id) {
//     $.ajax({
//         url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?Borough=QUEENS&Agency=NYPD",
//         type: "GET",
//         data: {
//           "$limit" : 10,
//           "$$app_token" : "OYJfPjS2bbNL9CbTh72DlkOps"
//         } 
//     }).then(function(data) {
//       alert("Retrieved " + data.length + " records from the dataset!");
//       console.log(data);
//     }, function(data) {
//         alert("Failed to retrieve data")
//     });
// }))

// $(document).ready(function fetch_data($id) {
//     $.ajax({
//         url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?Borough=QUEENS&Agency=NYPD",
//         type: "GET",
//         data: {
//             "$limit": 10,
//             "$$app_token": "OYJfPjS2bbNL9CbTh72DlkOps"
//         }
//     }).then(function (data) {
//         alert("Retrieved " + data.length + " records from the dataset!");
//         console.log(data);

//         $.each(data, function (key, val) {
//             $("ajax_info").append(document.createTextNode(val.agency))
//             alert(key + " " + val.agency)
//         });
//     }, function (data) {
//         alert("Failed to retrieve data")
//     });
// })