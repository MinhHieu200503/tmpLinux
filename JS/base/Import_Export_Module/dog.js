import Animal from "./animal/index.js";
import {TYPE_CAT,TYPE_DOG} from "./type_Animal/typeAnimal.js"
let dog1 = new Animal("Pen",23,TYPE_DOG)
dog1.setName("Ari")
dog1.setAge(23)
console.log(dog1)