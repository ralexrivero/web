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
