/*
    Tries to keep the code as loosly coupled as possible.

    Java is divided into core and mvc.

    Object that is created outside of the class but is injected into the class
    is called 
    Dependency Injection

    all the dependecies were created in XML file then injected into your class file.
    all the java files are complied but all the xml files are not.
    XML files gives you the meta data. all the data you need to run your java file.

    All the methods and objects and feilds. Configuration setting in your xml file.
    easy to make changes in your XML file, since its not being complied. So your 
    class files wont break.

    Inversion of Control

    IoC - that creating object power is given to the spring framework. in the xml file, then 
    you tell spring which 

    Sigleton Design Pattern - only 1 object for that class, all other classes on use that
    single object too. so u dont make same object multiple times. Then the other classes
    can be connected to that single object in the XML file.

    Prototype Design Pattern -
*/