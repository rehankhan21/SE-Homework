/*
    Java Memory

    Heap, Stack

    write business logic in methods not in classes.

    when you run the program, everything in the main method, variables 
    and methods. 

    How primitive type and How object types gets stored. RAM, random acess memory.

    Ram gets divided into HEAP and Stack.

    Java program is converted into class file(exe file). The interperter complier
    reads everyline step by step.

    Primitive data type makes a section in the stack,

    main method gets loaded in the memory, at the bottom of the stack. In
    the memory allocated to the main method, also contained the other varibles,
    it splits the memory for int, and String, The content of the memory for int
    stores its values.

    When a new method is created it will be have its own container aloocated to it
    on top of the main method. Inside add it has its own variables. which will
    be allocate the space in the add method memory container.

    Inside of the add method we called another method, addmorenums() will stack
    on top of add method.

    Difference between method invocation and method definition.
    when you invocate a method, the method is running, make sure the method
    is defined. The interperter finds the method definition for the invocation.

    Once invocation is done the method gets popped out
*/