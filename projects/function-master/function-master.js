
var data1 = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};

var objectValues = function (objet){
    var arrayBoy = [];
    for(var keys in objet){
        arrayBoy.push(objet[keys]);
        //console.log(arrayBoy);
    } return arrayBoy;
}

//console.log(objectValues);

// console.log(objectValues(data1));

  /* global keysToString */
    // QUnit.test("keysToString() : Should take an object and return all its keys in a string each separated with a space", function(assert){
    //   var data = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
    //   assert.equal(keysToString(data), "a b ponies dingle");
    // });


    
 function keysToString(objet){
    var arrayBoy = [];
    for(var keys in objet){
        arrayBoy.push(keys);
    } 
    var stringBoy = ""; 
    var spacely = " ";
    for (var i = 0; i < arrayBoy.length; i++){
        if(i < arrayBoy.length - 1){
        stringBoy += arrayBoy[i].concat(spacely);
        } else {stringBoy += arrayBoy[i]}
        //console.log(stringBoy);
        //str1.concat(str2);
    }
    //console.log(typeof stringBoy);
    return stringBoy;
}



  function valuesToString(objet){
    var arrayBoy = [];
    for(var keys in objet){
        arrayBoy.push(objet[keys]);
    } 
    var stringBoy = ""; 
    var spacely = " ";
    for (var i = 0; i < arrayBoy.length; i++){
        if (typeof arrayBoy[i] === "string"){
        if(i < arrayBoy.length - 1){
        stringBoy += arrayBoy[i].concat(spacely);
        } else {stringBoy += arrayBoy[i]}
        } else {console.log("no way!")}
        //console.log(stringBoy);
        //str1.concat(str2);
    }
    //console.log(typeof stringBoy);
    return stringBoy;
}

  

    function arrayOrObject(input){
        if(Array.isArray(input) === true){
            return "array"
        } else {
            return "object"
        }
    };
       
       
    //  /* global capitalizeWord*/
    // QUnit.test("capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized", function(assert){
    //   assert.equal(capitalizeWord("greg"), "Greg");
    //   assert.equal(capitalizeWord("pumpkin"), "Pumpkin");
    //   assert.equal(capitalizeWord("quattuordecillion"), "Quattuordecillion");
    // });   
    
    
    
    
      /* global  capitalizeAllWords*/
    // QUnit.test("capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized ", function(assert){
    //   assert.equal(capitalizeAllWords("one two three four"), "One Two Three Four");
    //   assert.equal(capitalizeAllWords("please excuse my dear aunt sally"), "Please Excuse My Dear Aunt Sally");
    // });
    
    
    

    // /* global  welcomeMessage*/
    // QUnit.test("welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'", function(assert){
    //   assert.equal(welcomeMessage({name: "bert"}), "Welcome Bert!");
    //   assert.equal(welcomeMessage({name: "Charlie"}), "Welcome Charlie!");
    // });




    // /* global  profileInfo*/
    // QUnit.test("profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'", function(assert){
    //   assert.equal(profileInfo({name: "jake", species: "dog"}), "Jake is a Dog");
    //   assert.equal(profileInfo({name: "reggie", species: "dog"}), "Reggie is a Dog");
    // });





    // /* global  maybeNoises*/
    // QUnit.test("maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'", function(assert){
    //   assert.equal(maybeNoises({noises:["bark", "woof", "squeak","growl"]}), "bark woof squeak growl");
    //   assert.equal(maybeNoises({noises: []}), "there are no noises");
    //   assert.equal(maybeNoises({}), "there are no noises");
    // });





    // /* global  hasWord*/
    // QUnit.test("hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.", function(assert){
    //   var data = "This is a super awesome string of words";
    //   assert.strictEqual(hasWord(data, "awesome"), true);
    //   assert.strictEqual(hasWord(data, "words"), true);
    //   assert.strictEqual(hasWord(data, "turtle"), false);
    // });





    // /* global addFriend */
    // QUnit.test("addFriend() : Should take a name and an object and add the name to the object's friends array then return the object", function(assert){
    //   assert.deepEqual(addFriend("lester", {friends:[]}), {friends:["lester"]});
    //   assert.deepEqual(addFriend("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]});
    // });
    
    
    

    // /* global isFriend */
    // QUnit.test("isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise", function(assert){
    //   assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
    //   assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
    //   assert.equal(isFriend("chuck",{}), false);
    // });




    // /* global nonFriends */
    // QUnit.test("nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with", function(assert){
    //   var data = [
    //     {name: "Jimmy", friends:["Sara", "Liza"]},
    //     {name: "Bob", friends:[]},
    //     {name: "Liza", friends: ["Jimmy"]},
    //     {name: "Sara", friends: ["Jimmy"]}
    //   ];
    //   assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
    //   assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
    //   assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);
    // });




    // /* global updateObject */
    // QUnit.test("updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.", function(assert){
    //   var data = {a: "one", b: "two", "hokey": false};
    //   assert.deepEqual(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
    //   var data = {a: "one", b: "two", "hokey": false};
    //   assert.deepEqual(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
    //   var data = {a: "one", b: "two", "hokey": false};
    //   assert.deepEqual(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
    // });




    // /* global removeProperties */
    // QUnit.test("removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>", function(assert){
    //   var data = {a: "one", b: "two", "hokey": false};
    //   removeProperties(data, ["a","hokey"]);
    //   assert.deepEqual(data, {b: "two"});




    //   var data = {a: "one", b: "two", "hokey": false};
    //   removeProperties(data, ["b"])
    //   assert.deepEqual(data, {a: "one", "hokey": false});




    //   var data = {a: "one", b: "two", hokey: false};
    //   removeProperties(data, []);
    //   assert.deepEqual(data, {a: "one", b: "two", "hokey": false});
    // });




    // /* global dedup */
    // QUnit.test( "dedup() : Should take an array and return an array with all the duplicates removed", function( assert ) {
    //   var data = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];



    //   assert.deepEqual( dedup(data), [1,2,3,4,5,"a","b","c"]);
    // });