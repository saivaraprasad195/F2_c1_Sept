const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for(let i=0;i<data.length;i++)
  {
    if(data[i].profession === "developer") 
    console.log(data[i]);
  }
}

// 2. Add Data
function addData() {

  let name = prompt("Enter your Name")
  let age = prompt("Enter Your Age")
  let profession = prompt("Eneter Your Profession")
  let data_to_push = {name: name, age: age, profession: profession};
  data.push(data_to_push);
  console.log(data_to_push.profession+" "+data_to_push.name+" data is added")
}

// 3. Remove Admins
function removeAdmin() {
  for(let i=0;i<data.length; i++)
  {
    if(data[i].profession === "admin") 
    {
      data.pop(data[i]);
    }

    console.log("Removed All Admins")
}
}

// 4. Concatenate Array
function concatenateArray() {
  const dummy = [
    { name: "sai", age: 24, profession: "developer" },
    { name: "vara", age: 23, profession: "admin" },
    { name: "prasad", age: 25, profession: "developer" },];
    
    for(let i=0;i<dummy.length;i++)
    {
      data.push(dummy[i])
    }
    console.log("data Concatenated Seccessfully")

}

// 5. Average Age
function averageAge() {

  let sumAge =0;
  for(let i=0;i<data.length;i++)
  {
    sumAge =sumAge+data[i].age;
  }
  avgAge=sumAge/data.length;

  console.log(avgAge);
}

// 6. Age Check
function checkAgeAbove25() {
  for(let i=0;i<data.length;i++)
  {
    if(data[i].age > 25)
    {
      console.log("Age Above 25 is present")
      break;
    }
  }

}

// 7. Unique Professions
function uniqueProfessions() {}

// 8. Sort by Age
function sortByAge() {}

// 9. Update Profession
function updateJohnsProfession() {}

// 10. Profession Count
function getTotalProfessions() {}
