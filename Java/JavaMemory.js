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


    **Storing Object datatype in memory

    Person p1, Person is a type of object, declaring a reference varaible 
    p1 of type object person

    new Person() is when u instantiate a class and create a new object.

    P1 being a reference variable will be stored in the stack, it will be stored
    in the method it was created in. P1s value contains the memory address, of the 
    new object we created(the reference to the object). The object is stored in the
    heap somewhere.

    The instantance varaibles are inside the object, which is in the heap.

    when u make another p1 = new Person(), it will create a new object, this will switch
    the value in p1 with the new memory address of the new object. and u lose
    access to the old object, but it is still there.

    ***Garbage Collection, it reads the memory and sees objects with no 
    reference varaible. That object is garbage collected and removed 
    from the memory automatically. Garbage collection only works in heap area
    not stack.

    This is all about getting more space for more varaibles in RAM.
*/