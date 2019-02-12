const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/goodquestion');

//const Cat = mongoose.model('Cat', { name: String, age:Number }); 
const Cat = require('./models/Cat.js'); //better practive to import from a different file

const kitty = new Cat({ name: 'MaybeMeow', age: 15, color:'beige' });
kitty.save().then(res=>{ //Save returns a promise 
    console.log(res)
});




Cat.find().sort({created:1}).skip(2).limit(3).then(res=>{
    console.log(res)
})


Cat
    .findByIdAndUpdate('5c6321fef8588adeff428c53', { $inc: { age:1} })
    .then(res=>{
        console.log('updated ',res)     
    }).catch(err=>{ throw err })

// Cat.findById('5c6321077bc378deba6d7655').then(res=>{
//     console.log('shoule be alice', res)
// })

// Cat.create({ name: 'Alice', password:"ironhack2018", job: 'Architect' })
//   .then(user => { console.log('The user is saved and its value is: ', user) })
//   .catch(err => { console.log('An error happened:', err) });

// Cat.find({}, (err, cats) => { //Qeuries the database for all the cats 
//     // cats is an array of Cat instances
//     cats.forEach((cat)=> {
      
//       console.log(' --> cat: ', cat.name);
//     });
//   });

// Cat.remove({name:'MaybeMeow'}).then(res=>{
//     console.log('here is maybe meow ',res, ' and she is   years old')
// })

//  Cat.remove({}).then(res=>{console.log('all gone')}) //.exec


// function addNewCat(catName) {
//     const kitty = new Cat({ name: catName });
//     kitty.save(function (err) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(`meow! ${catName} SAVED.`);
//       }
//     });
//   }
  
//   function showCats() {
//     console.log('All the CATS!');
//     Cat.find({}, (err, cats) => {
//       cats.forEach((cat)=> {
//         console.log(' --> cat: ', cat.name);
//       })
//     });
//   }
  
//   function addTenCats(){
//     for (let i=0; i<10; i++){
//       addNewCat(`Ironhacker ${i}`);
//     }
//   }
  
//   //addTenCats();
  
//   /* We have to wait for our cats to save before displaying them
//    Remember, it's async */
//   setTimeout(showCats, 1500);


// // When successfully connected
// mongoose.connection.on('connected', () => {  
//     console.log('Mongoose default connection open');
//   }); 
  
//   // If the connection throws an error
//   mongoose.connection.on('error', (err) => {  
//     console.log('Mongoose default connection error: ' + err);
//   }); 
  
//   // When the connection is disconnected
//   mongoose.connection.on('disconnected', () => {  
//     console.log('Mongoose default connection disconnected'); 
//   });
  
//   // If the Node process ends, close the Mongoose connection 
//   process.on('SIGINT', () => {  
//     mongoose.connection.close(() => { 
//       console.log('Mongoose default connection disconnected through app termination'); 
//       process.exit(0); 
//     }); 
//   }); 
  



// let Student = mongoose.model('Student', { firstname: String});
// let City = mongoose.model('City', { name: String });

// let promise1 = Student.insertMany([{ firstname: 'Alice' }, { firstname: 'Bob' }]);
// let promise2 = City.insertMany([{ name: 'Madrid' }, { name: 'Barcelone' }, { name: 'Paris' }]);

// Promise.all([promise1, promise2])
//   .then(values => { 
//     console.log("students and cities has been inserted");
//     console.log(values);
//     /*
//     [ [ { _id: 5a4e462048841e65562c465a, firstname: 'Alice', __v: 0 },
//       { _id: 5a4e462048841e65562c465b, firstname: 'Bob', __v: 0 } ],
//     [ { _id: 5a4e462048841e65562c465c, name: 'Madrid', __v: 0 },
//       { _id: 5a4e462048841e65562c465d, name: 'Barcelone', __v: 0 },
//       { _id: 5a4e462048841e65562c465e, name: 'Paris', __v: 0 } ] ]
//     */
//     //res.render(succes.hbs, {message:"you've successvally your stuff"})
//     mongoose.connection.close();
//   })
//   .catch(err => console.error(err));