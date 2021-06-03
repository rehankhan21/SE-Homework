/*
    Java Day 2

    Arrays and Annotations and Expection Handling

    declaring arrays in java

    // complier will automatically allocate the array length, 
    int[] numArr = new int[] {10, 20, 30};
    int[] num2 = new int[10];

    vowels and consetants

    w1 hw1,
    exit method, in switch case, if they input 5, then you run system.exit(0)

    return all the answers, expect for division which is void, which shows the answer
    divison shows divide and qoutient.

    **Execption Handling
        -when something unusual happens, or something goes wrong in the program,
        the program stops running and it throws an expection to the user. This is not
        okay when the product goes to production. Write a program, whenever an 
        expection occurs the program handles it. When the expection happens, we write 
        a message to the user and the program continues to run.

        -Execption Types
            -CheckedExecptions
            -UnCheckedExpections
            -errors

        -JVM recognizes the runtime errors

        - Event handling with Try Catch Finally block

    Hierarachy of java

    Throwable 
    // not possible for us to handle
        Error
            StackOverflowError
            VirtualMachineError - complier cant find a fo
            OutOfMemoryError

        Expection - is a super class of all the execption
            IOExpection - when we read or write from a file
            SQLExecption - database read or write execption
            ClassNotFoundExecption - class not found
            // When your source code complies but you still get expections after
            // during logic
            RuntimeExecption
                ArithmetoicExecption // 
                NullPointerExecption //
                NumberFormat //
                IndexOutOFBoundsExecption
                    ArrayindexoutofboundsExecption
                    StringindexoutofboundsExecption
    
    try{
        int data = 100/0;

    }catch(ArithmeticExecption e){
        system.out.println(e.getmessage);
    }
    system.out(Rest of code)

    Write the expections class name to catch the expection then print
    the error message
    Execption is an object, the execption gets thrown as an object.
    e is the obj that gets thrown back.
*/