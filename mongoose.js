 const mongoose=require("mongoose")
 const Person=require("./models.js")
//   import mongoose from "mongoose" 
//   import Person from "./models/user.js"
      mongoose.connect(process.env.MONGO_URI).then(console.log("database connected")) 
       //newPerson.save().then(console.log("lof")) 
      //  Person.create([{     name:"ibrahim",     age:21,     favoritefoods:["mlawi"] },{     name:"ibrahim",     age:21,     favoritefoods:["mlawi"] }])/     Person.find().then((data)=>console.log(data))
// //create a person 
// Person.insertMany([{
   
//       name: "John Doe",
//       age: 25,
//       favoriteFoods: ['burritos', 'Sushi']
//      },
//      {
//       name: "Mary Cris",
//       age: 20,
//       favoriteFoods: ['Mlewi', 'Sushi']
//      },
//      {
//       name: "Patrik Doe",
//       age: 35,
//       favoriteFoods: ['Pasta', 'Sushi']
//      }]
//      );
     
//      newPerson.save().then(() => {
//       console.log('New person added to the database');
//      });
//Use model.find() to Search Your Database

//Person.find({name: 'John Doe'}).then(res=>console.log(res))
//    //Use model.findOne() to Return a Single Matching Document from Your Database
  //let food = 'Sushi';
  //Person.findOne({favoriteFoods: food}).then(res=>console.log(res))
//    //Use model.findById() to Search Your Database By _id
//let personId = '65a8f791b846a0428974bb34';
//Person.findById(_id=personId).then(res=>console.log(res))
//    //Perform Classic Updates by Running Find, Edit, then Save
 //Person.findById(_id="65a8303255f066aecc50ea0a").then(res=>console.log(res))
let personId = '65a8303255f066aecc50ea0a';
// const updatefood=async()=>{
//       const result=await Person.findById(personId)
//       result.favoriteFoods.push("Suchi")
//       result.save()
//   }
//   updatefood();

  //Perform New Updates on a Document Using model.findOneAndUpdate()
//Person.findOneAndUpdate({ _id:personId }, {age: 19, name : "Mariem"}, {new: true}).then(res=>console.log(res))
//    //Delete One Document Using model.findByIdAndRemove
//Person.deleteMany({ _id:personId }).then(res => console.log(res)).catch(err => console.log(err));  
 //MongoDB and Mongoose - Delete Many Documents with model.remove()
Person.deleteOne({name :"John Doe"}).then(res=>console.log(res))
//    //Chain Search Query Helpers to Narrow Search Results
// Person.find({favoriteFoods: 'burritos'})
//         .sort({name: 1})
//         .limit(2)
//         .select({name: 1, favoriteFoods: 1})
//         .exec().then((err,data)=>{
//             if (err){console.log('err')}
//             else{console.log(data)}});   