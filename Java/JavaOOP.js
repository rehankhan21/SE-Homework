/*
    Loose Coupling - if one object is not working then u can put that object 
    undermantaince.
    Tight Coupling

    Divide that work in similar categories, This can be in one package. If
    one part of the website breaks it wont ruin the rest of the website. 
    Seperate the workflow into different Java Components.

    Public Level - goes through the whole project, ex store
    Private Level - only in its own class file.
    Package Level - only in the package its in, ex.department
    

    Java Bean Class / Java Object Class
    Static property is class level,
    static variable is a class level variable.
    its common to all the objects.
    - One static var,
    non static/instance var = static variable cannot be called as instance 
    variables. Can be called with the object reference operator.
    Static Vars are called class variables. Cannot be called with the 
    object reference object.

    Static variables always in static methods, Static variables refer to the 
    whole class and not a single class instance.

    ***Static is for class variables and call methods,
    ***Non Static is for Object variables / instantance variables and methods

    Setters and Getters

    source which shortcut to generate setters and getters

    **Inheretince

    In java works the same way as in React, you extend your class to
    another. Then you can use the parent classes instantence varaibles, and
    the instantence methods.

    when you have the same method name in both the parent class and the child
    class. it is called Method overloading and method overriding.

    Is a relationship? or Has a relationship?

    Method Overloading and Method Overriding

    Method overloading 
    - method with parameters and a method without parameters.
    - methods have the same name, but since the parameters are different, this
    is method overloading
    - when a class has 2 or more methods with the same name. But with the different
    signature/definition, that is called method overloading.
    - we can do method overloading for both non static and static methods.
    - Static you dont call with a reference variable only class 

    Method Overriding
    - Overriding happens only with inheritence.
    - Methods with the same name are written in 2 or more different classes.
    you cannot do overriding within the same class.
    - You can have the same method with the same signature, as long as they are
    in different classes.
    - overriding happens during runtime. How does the complier know which 
    method too use? it depends on what object reference too use. Super for 
    parent method. Class reference for static, object reference for  non static

*/