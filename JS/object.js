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
    grades: [80, 70, 90],
    average: function() {
        let avg = 0;
        let total = 0;
        for(let i = 0; i < this.grades.length; i++) {
            
            total += this.grades[i];
        }

        avg = total/this.grades.length;

        return Math.floor(avg);
    },

    result: function() {
        
        if(this.average() > 60){
            return "Student has passed"
        }
        else {
            return "Student has failed"
        }
    }
}