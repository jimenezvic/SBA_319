const playerRegistrationQuick = [
    {
        name:"$",
        position:"$",
        age:"$",
        consent:"$",
        medicalWaiver:"$",
        liabilityWaiver:"$"
    }
]




const playerRegistrationComplete = [
    {   

        name: "#",
        birth: "#", 
        gender: "#", 
        address: "#",
        number:"#", 
        email:"#",
        position:"#",
        consent:"#",
        medicalWaiver:"#",
        liabilityWaiver:"#",
        health:{
            emergencyContact:"#",
            relationship:"#",
            phone:""
        }
    

}];

module.exports = {playerRegistrationQuick, playerRegistrationComplete}
