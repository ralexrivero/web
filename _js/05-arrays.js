#!/usr/bin/env node
/* arrays */

const languages = ["C", "Python", "JavaScript", "C++", "C#", "Ruby"]
languages.push("R")

console.log(languages.join(" | "))

/* for (i in languages) {
    console.log(languages[i])
};
 */

languages.push(languages.shift())

console.log(languages.join(" | "))

console.log(languages.indexOf("JavaScript"))
    
languages.unshift(languages.pop())

console.log(languages.join(" | "))


const courses = [
    {name: "Web development", field: "Frontend"},
    {name: "Python development", field: "Backend"}
]

console.log(courses[1].field)

courses.push({name: "Machine Learning", field: "Data Science"}, {name: "React.js", field: "Full"})

console.log(courses)

courses[3].field = "Frontend"

console.log(courses)