//
function Animal(name) {
  this.name = name;

  //   this.getName = () => {
  //     return this.name;
  //   };
  Animal.prototype.getName = function () {
    return this.name;
  };
}

const dog = new Animal("Dog");
console.log(dog.getName());
