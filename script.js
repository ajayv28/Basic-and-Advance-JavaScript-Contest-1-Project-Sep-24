/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(employee => {
    if(employee.profession === "developer")
      console.log(employee);
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(employee =>{
    if(employee.profession === "developer")
      console.log(employee);
  })
}

function addData() {
  //Write your code here, just console.log
  const employee = {id:4, name:"susan", age:"20", profession:"intern"};
  arr.push(employee);
  console.log(employee);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(employee => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 5, name: "ajay", age: "21", profession: "engineer" },
    { id: 6, name: "ram", age: "22", profession: "doctor" },
    { id: 7, name: "sam", age: "23", profession: "accountant" },
  ];
  
  const combinedArray = arr.concat(newArray);
  console.log(combinedArray);
}
