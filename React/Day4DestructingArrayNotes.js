/*
    React Day 4

    Using states in functional components,

   ** Destructing Arrays
    - extracting multiple properties from an array by taking the strcuture and
    deconstructing it down into its own parts. this is down by using assignment.

    Destructing Syntax
    ex. var[first, second, third] = ["denn", "men", "ten"]

    Without Destructing Syntax
    var first = "denn"
        second = "men"
        third = "ten"

    You cannot assign array values to numbers

    This takes each variable on the array literal on the left-hand-side and
    maps it to the same element at the same index in the array.
    var thing = ["table", "chair", "fan"]

    var [a, b, c] = thing
    // a = table, b = chair, c = fan

    Declaration and assignment can be done separately in destructing
    var first, second;
    [first, second] = ["Male", "Female"]

    If more variables in the array literal than there are elements in the array
    to map to. Then those variables will return undefined.

    ** You can Destructure arrays that are returned from a function.

    ex. function runners() {
        return ["sandra", "dennis", "chi"]
    }

    var [a,b,c] = runner();

    You can manually assign values too your array literal variables
    this is like a fallback to avoid undefined error
    var a, b;
    [a = 40, b = -4] = [1, 23]

    Default Values can also refer to other variables including the one
    in the same array literal

    var [first = coltin, second = first]
    // seconds output = coltin

    var [first = coltin, second = first] = ["koku"]
    // seconds ouput = koku

    Igorning Some Values
    you can skip elements you dont want.

    ex. var a,b 
    [a, , b] = [lordy, crown, roses]
    //b = roses;

    ** The Rest Parameter and Spread Syntax
    The new (...) operator is a REST PARAMETER on the left hand side.
    A Rest parameter is used to map all the remaining elements in the array
    that have not been mapped to the rest variable itself. Rest variable must 
    always be last.

    ex. var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
    var [first, , third, ...others] = planet;

    Others output = ["Mars","pluto", "saturn"]

    If the (...) operator appears on the RIGHT HAND SIDE rhs then is its a
    SPREAD SYNTAX. It takes all the other elements in the array which have
    no variable mapped to them and then maps it to the rest variable.

    ex. var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
    var [first, , third, ...rest] = ["Mercury", "Earth", ...planets, "Saturn"];

    Others output = ["Mars","pluto", "saturn"]
*/