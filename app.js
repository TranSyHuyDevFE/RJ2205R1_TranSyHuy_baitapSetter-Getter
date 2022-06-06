class Person {
  constructor(name) {
    this.name = name;
  }
  get walkPerson() {
    console.log(`${this.name} is walking...`);
  }
  set walkPerson(name) {
    this.name = name;
  }
}
class Programmer extends Person {
  constructor(name, language) {
    super(name);
    this.language = language;
  }
  get languageProprammer() {
    console.log(`${this.name}'s language framework is ${this.language}`);
  }
  set languageProprammer(name) {
    this.name = name;
  }
}

const Per1 = new Person("Huy").walkPerson;
const Per2 = new Programmer("Huy", "ReactJS").languageProprammer;
