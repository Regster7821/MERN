// 1
// console.log(hello);
// var hello = 'world';
    // var hello;           -- variable gets hoisted
    // console.log(hello);  -- console reads console.log
    // hello = 'world'      -- variable hello gets defined


// 2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
    // var needle;          -- variable gets hoisted
    // needle = 'haystack'  -- needle gets defined
    // test();              -- unknown function gets called
    // function test(){     -- function gets defined
    //     var needle = 'magnet';
    //     console.log(needle);}


// 3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
    // var brendan;             -- variable gets hoisted
    // brendan = 'super cool;    -- variable gets defined
    // function print(){        -- function gets defined
    //     brendan = 'only okay';
    //     console.log(brendan);}
    // console.log(brendan);    -- console is told to log variable 'brendan'


// 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
    // var food;            -- variable gets hoisted
    // food = 'chicken';    -- variable gets defined
    // eat();               -- unknown functions gets called
    // function eat(){      -- function 'eat' gets defined
    //    food = 'half-chicken';
    //    console.log(food);
    //    var food = 'gone';}


// 5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
    // var mean;            -- variable gets hoisted
    // mean();              -- fucntion gets called
    // mean = function() {  -- variable gets defined as function (incorrect syntax)
    //    food = "chicken";
    //    console.log(food);
    //    var food = "fish";
    //    console.log(food);}
    // console.log(food);   -- console told to log variable 'food'


// 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
    // var genre;              -- variable hoisted
    // console.log(genre);     -- console told to log variable 'genre'
    // genre = 'disco';        -- variable 'genre' defined
    // rewind();               -- function 'rewind' gets called
    // function rewind() {     -- function 'rewind' gets defined
    //    genre = "rock";
    //    console.log(genre);
    //    var genre = "r&b";
    //    console.log(genre);}
    // console.log(genre);     -- console told to log variable 'genre'


// 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
    // dojo;                    -- variable hoisted
    // dojo = "san jose";       -- variable defined
    // console.log(dojo);       -- console told to log variable dojo
    // learn();                 -- function 'learn' gets called
    // function learn() {       -- function 'learn' gets defined
    //    dojo = "seattle";
    //    console.log(dojo);
    //    var dojo = "burbank";
    //    console.log(dojo);}
    // console.log(dojo);       -- console told to log variable 'dojo'

// 8
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
    // console.log(makeDojo("Chicago", 65));        -- console told to log the function 'makeDojo' with the given paramters
    // console.log(makeDojo("Berkeley", 0));        -- console told to log the funciton 'makeDojo' with the given paramters
    // function makeDojo(name, students){           -- function 'makeDojo' defined
    //    const dojo = {};
    //    dojo.name = name;
    //    dojo.students = students;
    //    if(dojo.students > 50){
    //        dojo.hiring = true;
    //    }
    //    else if(dojo.students <= 0){
    //        dojo = "closed for now";
    //    }
    //    return dojo;}