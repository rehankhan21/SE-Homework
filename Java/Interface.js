/*
    Interface, Abstraction

    Interface is a reference type in java.

    Interface is similar to class, the same 

    it is a collection of abstract methods, empty methods.

    Only declartion of the method is in the interface, but the Java class implements
    the interface, all the abstract methods that are declared in the interface
    the definitions have to be defined in that class.

    Class inherits the abstract methods from the interface

    All the variables in the interface has to be static by defualt, and final
    meaning they cant be changed.

    **Differences of class and interface

    Class is a blue print for objects. We cannot make objects from an interface

    Interface does not have instance varaibles an instance methods. Only the 
    declaration of the instance methods.

    Interface doesnt have constructors.

    When your class is implementing a Interface you use the Implemnet key word
    instead of the extends keyword.

    Interface is created the way you create a class but the keyword we use
    is called interface.

    public interface PersonInterface(){
            static final String ORGINAIZATION = "Per Scholas";
            double calculate(int num);
    } 

    Interface is where you declare methods, your class makes a promise to
    implement everything that was written in the interface.

    Final in java is like Const in javascript

    when you make a variable in an Interface, it has to be Static and Final.

    Employee extends Person implements PersonInterface{

    }

    class has to implement everything in the interface..


    Multiple classes can implement the same Interface.

    Polymorphism - when you access same method in different ways.
    ex. when multiple classes implement the same interface. they all acess
    the same method declaration but have different definitions.

    HW 1 more method in the interface,

    implemented by employee and student
*/