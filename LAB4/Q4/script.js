finder = function () {
    //get inputs
    var a = document.getElementById('usn').value;
    var s = document.getElementById('sem').value;
    if (a.length == 0 || s.length == 0)
    //if one of the input is not given
    {
        alert("One of the field is empty");
        return;
    }
    //initialize two flags (one for USN & one for SEM) to hold the status of the data entered
    var usn_flag = 0;
    var sem_flag = 0;
    var b = a.toLowerCase();
    //Check if USN is of the format "DAADDAADDD" where D=digit & A=alphabet
    var str = b.search(/^[1-4][a-z][a-z][0-9][0-9][a-z][a-z][0-9][0-9][0-9]/);
    if (str == 0)
        //if USN matches, set the flag
        usn_flag = 1;
    //Check if SEM is between 1-8
    str = s.search(/^[1-8]$/);
    if (str == 0)
        //if SEM matches, set the flag
        sem_flag = 1;
    if (!sem_flag && !usn_flag)
        //if SEM & USN don't match the requirement
        alert("Both USN & SEM are invalid");
    else if (sem_flag && !usn_flag)
        //if SEM matches & USN doesn't
        alert("Sem is valid\nUSN is invalid");
    else if (!sem_flag && usn_flag)
        //if USN matches & SEM doesn't
        alert("USN is valid\nSem is invalid");
    else
        //if both USN & SEM matches
        alert("Both USN and Sem are valid");
}
