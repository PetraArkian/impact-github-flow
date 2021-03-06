
console.log(peopleInSpace)

const numberOfAstrosInSpace = (data) => {
  return data.number

  //return the number of astronauts in space right now, using the data
}
console.log("number of people in space: ", numberOfAstrosInSpace(peopleInSpace))


const astroNames = (data) => {
  let people = data.people
  let nameArr = people.map((person) => {
    return person.name
  })
  return nameArr
  // return an array containing the name strings of the astronauts in space
}
console.log("names of people in space: ", astroNames(peopleInSpace))


const allInSameCraft = (data) => {
  let craft = data.people[0].craft
  for(i=0; i<data.people.length; i++){
    if(data.people[i].craft != craft){
      return false
    }
  }
  return true
  // return a boolean that specifies whether all astronauts are in the same space craft
}
console.log("same craft? ", allInSameCraft(peopleInSpace))


const successfulResponse = (data) => {
  return data.message == "success"
  // return a boolean that specifies whether the response from the Open Notify API was successful
}
console.log("successful response? ", successfulResponse(peopleInSpace))


const wheresJoe = (data) => {
  people = astroNames(data)
  if(people.includes("Joe Acaba")){
    return "in space!"
  }
  return "dunno."
  // return "in space!" if Joe Acaba is in space right now. Otherwise, return "dunno."
}
console.log("where's Joe? ", wheresJoe(peopleInSpace))

// BONUS
// Using your astroNames function, dynamically render each of the astronauts' names to the DOM in an unordered list when the page loads.
