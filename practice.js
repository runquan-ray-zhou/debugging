const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA"
    },
    contact: {
      email: "john.doe@example.com",
      phone: {
        mobile: "555-1234",
        home: "555-5678"
      }
    },
    hobbies: ["Reading", "Traveling"],
    education: {
      degree: "Bachelor's",
      major: "Computer Science",
      university: {
        name: "Tech University",
        location: "Cityville"
      }
    },
    isStudent: false,
    friends: [
      { name: "Alice", age: 28 },
      { name: "Bob", age: 32 }
    ]
  };
  
  
  function getEducationHistory(person) {
    let { education } = person;
  
    let degree = education.degree;
    let major = education.major;
    let university = education.university.name;
  
    return `My name is ${person.firstName}, and I graduated from ${university} with a ${degree} in ${major}`
  }

  console.log(getEducationHistory(person))
  //SyntaxError: Unexpected token '}' --->remove period at end of line 41
  

  function logAllFriendsNamesAndAges(person) {
    let { friends } = person;
  
    for (let friend of friends) {
      console.log(friend.name + " " + friend.age);
    }
  }


  
  function addAreaCodeToPhoneNums(person, areaCode) {
    let { contact } = person;
  
    for (let key in contact.phone) {
//Unexpected identifier 'areaCode' ----> missing plus sign "+" before areaCode
      debugger;
      contact.phone[key] = "(" + areaCode + ") " + contact.phone[key];
    }
    return contact.phone;
  }

console.log(addAreaCodeToPhoneNums(person, "415"))
  
  function logFullAddress(person) {
    const  { address } = person;
    let singleAddressStr = "";
    
    for (let key in address) {
      singleAddressStr += address[key] + (key === "country" ? "" : ", ");
    }
    console.log(singleAddressStr);
  }
  logFullAddress(person)
  
  function logIfCanDrive(person) {
    if (person.age >= 18) {
      console.log("This person is of the legal age to drive.");
    } else {
  //Unexpected token '{' ----> delete "if" keyword
      console.log("This person cannot legally drive.")
    }
  }
  
  function addHeightProperty(person, height) {
    person["height"] = height;
    return person;
  }


  function ageUpPerson1Year(person) {

    person.age ++

    return person
  }


  //SyntaxError: Invalid left-hand side in assignment ---> remove plus sign and replace with greater than operator

