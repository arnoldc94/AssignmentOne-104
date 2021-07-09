var salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        number:"206-k"
    },
    hour:{
        open:"9.00 am",
        close:"10.00 pm"
    },
    pets:[]
}

class Pet{
    constructor(name,age,gender,breed,service,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        
    }
}
var scooby=new Pet("scooby",50,"male","dane","shower","shaggy","555-555-555");
var scrappy=new Pet("scrappy",40,"male","dane","nails cut","shaggy","666-666-666");
var tweety=new Pet("tweety",20,"male","parokeet","nails trimmed","sylvester","777-777-777");
var jerry=new Pet("jerry",45,"male","brown mouse","bath","tom","888-888-888");

salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(tweety);
salon.pets.push(jerry);

function displayPet(){
    var tmp="";
    document.getElementById("info").innerHTML=`<p>Amount of Pets: ${salon.pets.length}</p>`;
    for(var i=0;i<salon.pets.length;i++){
        tmp+=`
        <div class="pet";> 
            <p>Name: ${salon.pets[i].name}</p>
        </div>`;
     } 
    document.getElementById("pets").innerHTML=tmp;
}
displayPet();

function registerPet(){
    //get and store the values
   var inputName=document.getElementById("petName").value;
   var inputAge=document.getElementById("petAge").value;
   var inputGender=document.getElementById("petGender").value;
    var inputBreed=document.getElementById("petBreed").value;
    var inputService=document.getElementById("petService").value;
    var inputOwnerName=document.getElementById("ownerName").value;
    var inputPhone=document.getElementById("ownerPhone").value;


    var thePet=new Pet(inputName,Number(inputAge),inputGender,inputBreed,inputService,inputOwnerName,inputPhone);
    console.log(thePet);

    salon.pets.push(thePet);

    clearInputs();
    displayPet();
}

function clearInputs(){
    document.getElementById("petName").value="";
    document.getElementById("petAge").value="";
    document.getElementById("petGender").value="";
    document.getElementById("petBreed").value="";
    document.getElementById("ownerName").value="";
    document.getElementById("ownerPhone").value="";
}