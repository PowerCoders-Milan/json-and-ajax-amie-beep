var object = {id:1,"title": "this is a note",content: "This is the amazing content of the note!"}
object.header = "today is tuesday";
console.log(object);

let newobject =JSON.stringify(object);
const object1 = JSON.parse(newobject);
console.log(object1);
for (const property in object1) {
    console.log (object1 [property])
};