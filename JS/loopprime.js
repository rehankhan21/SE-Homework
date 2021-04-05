let num = 30;
let flag = true;

for (let range = 1; range <= num; range++) {

    for (let counter = 2; counter < range; counter++) {

        if (range % counter == 0) {
            flag = false;
            break;
        }
        else {
            flag = true;
        }
    }

    if (flag == true) {
        process.stdout.write(range + ", ")
    }
}