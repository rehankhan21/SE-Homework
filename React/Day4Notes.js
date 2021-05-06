/*
    React Day 4

    Using states in functional components,

    Destructing Arrays
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
*/