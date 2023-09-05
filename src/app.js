
//console.log("Hello World")

let pron = ['the','our', 'le'];

let adj = ['great', 'big', 'magnificent'];

let noun = ['jogger','racoon', 'mastodont'];

for (let pronoun of pron) {
  for (let adjective of adj) {
    for (let nou of noun) {
      console.log(pronoun+adjective+nou+".com")

    }
  }
}