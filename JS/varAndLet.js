/*
    Var is function scoped and let is block scoped

    -what is JSON
        - Javascript object notation, we take data from an api and we can convert that data into JSON,
        so that we can easily manipulate it and work with the data. Since its now a javascript object,
        we can do things like loop through the data and extract specific information. We can also use built
        in object properties and methods on it.
    -what is https protocol
        -HTTPS stands for hyper text transfer protocal secure, it is the secure version of HTTP. It is used for
        secure communication across the internet or a network. The communication protocal is encrypted using transport
        layer security (TLS)
        - Protocol allows the fetching of resources, such as HTML documents.
    -what is GET and POST methods
        -GET method is when you make a http request to the server to get some data from an api, this data can come
        from ethier a database or from another websites api.
        -POST method is when we make a http request to the server telling it we want to put the data we sent to the
        server into the database.
            and difference between them
    -what is REST API/RESTful API
        -REST API stands for Representational State Transfer. Makes APIs conform to the REST architecture and allows
        for interactions with RESTful web services. REST is a simple way to organize interactions between independent 
        systems.
        API GATEWAY?
    -what is microservice
        - Also known as the microservice architecture, a method of developing software systems that tries to
        focus on building single-fucntion MODULES with well-defined interfaces and operations.
        -Monoliths and Conway's Law
            -Conways Law states, "Organizations which design systems...are constrained to produce designs which
            are copies of the communication structures of these organizations."
        -Benefits:
            -Simpler To Deploy, deploy in literal pieces without affectinbg other services.
            -Simpler to understand, follow the code easier since the fucntions is isolated and less dependent.
            -Reusability across business, share small services like payment or login sustems across the business.
            -Faster defect isolation, when a test fails or service goes down, isolate it quickly with microservices.
            -Minimized Risk of Change, avoid locking in technologies or languages - change on the fly without risk.

 */


//  var varnum = 1;

//  let letnum = 1;
let x = true;

 function scopeTest() {
    let letnum = 2;

    if(x = true){
        var varnum = 1;
        let letnum = 1;
    }

    console.log(varnum);
    console.log(letnum);

 }

 //console.log(varnum);
 
 scopeTest();