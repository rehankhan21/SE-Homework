let person = {
    fname: "John",
    lname: "Smith",
    address: "101 somewhere street",
    age: 21,

    fullName: function() {
        return this.fname + " " + this.lname;
    },

    noises: ["did you see my credit card?", "doge to the moon", "hello"]
}

let student = {

    fname: "Dennis",
    lname: "Cargas",
    subjects: ["math", "social studies", "english"],
    grades: [80, 70, 100],
    averageValue: 0,
    averageArr: function() {
        let total = 0;
        for(let i = 0; i < this.grades.length; i++) {
            
            total += this.grades[i];
        }

        this.averageValue = Math.floor(total/this.grades.length);

        return this.averageValue;
    },

    // average: function() {

    // }

    result: function() {
        
        if(this.averageValue > 60){
            return "Student has passed"
        }
        else {
            return "Student has failed"
        }
    }
}