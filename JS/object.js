let person = {
    fname: "John",
    lname: "Smith",
    address: "101 somewhere street",
    age: 21,

    fullName: function() {
        return this.fname + " " + this.lname;
    }
}