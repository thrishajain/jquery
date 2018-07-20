$(function () {
    if (localStorage.getItem("students") == null) {
        localStorage.setItem("students", JSON.stringify([]));
    }
    showRegisteredStudents();
   

    dialog=$("#dialog").dialog({
        autoOpen:false,
        height:500,
        width:500,
        modal:true
    });
    $(".regstu").click(function(){
        dialog.dialog("open");
    });
     /*datepicker*/
    $("#dob").datepicker({
    changeYear: true,
        changeMonth: true,
        dateFormat: "dd-mm-yy",
        
    });
    /*validation*/
    $(".submit").click(function () {

        var isValid = $("#regform").validate({
            rules: {
                usn: {
                    required: true,
                    minlength: 10,
                    maxlength: 10,

                },
                name: {
                    required: true,
                    minlength: 5,

                },
                email: {
                    required: true,
                    email: true,
                },
                mobile: {
                    required: true,
                    minlength: 10,

                },
                course: {
                    required: true,

                },
                percentage: {
                    required: true,

                },
                dob: {
                    required: true,
                }

            },
            messages: {
                usn: {
                    required: "usn cannot be empty",
                    minlength: "usn must be 10 character",
                    maxlength: "usn must be 10 character",
                },
                name: {
                    required: "name cannot be empty",
                    minlength: "name must have 5 character",
                },
                email: {
                    required: "email cannot be empty",
                },
                mobile: {
                    required: "mobile number cannot be empty",
                    minlength: "mobile must be 10 character",
                },
                course: {
                    required: "select any course",
                },
                percentage: {
                    required: "percentage cannot be empty",
                },
                dob: {
                    required: "dob cannot be empty",

                }
            }

        }).form();

        if (isValid) {
            var usn = $("#usn").val();
            var name = $("#name").val();
            var email = $("#email").val();
            var mobile = $("#mobile").val();
            var course = $("#course").val();
            var percentage = $("#percentage").val();
            var dob = $("#dob").val();
            $(".reset").click();

            student = {
                "usn": usn,
                "name": name,
                "email": email,
                "mobile": mobile,
                "course": course,
                "percentage": percentage,
                "dob": dob

            }
            var students = getDataFromLocalStorage();
            students.push(student);
            updateLocalStorageData(students);
            showRegisteredStudents();
            dialog.dialog("close");
            return false;
        }

    });
    /*end of validation*/
    function showRegisteredStudents() {
        var students = getDataFromLocalStorage();
        var data = "";
        if (students.length == 0) {
            data = "<h3>No students registered yet....."
        } else {
            data += "<table id='regstudents'><thead><tr>";
            data += "<th>#</th>";
            data += "<th>USN</th>";
            data += "<th>Name</th>";
            data += "<th>Email</th>";
            data += "<th>Mobile</th>";
            data += "<th>DOB</th>";
            data += "<th>Course</th>";
            data += "<th>Percentage</th>";
            data += "</tr></thead>";
            for (var i = 0; i < students.length; i++) {
                var j = i + 1;
                data += "<tr>";
                data += "<td>" + j + "</td>";
                data += "<td>" + students[i].usn + "</td>";
                data += "<td>" + students[i].name + "</td>";
                data += "<td>" + students[i].email + "</td>";
                data += "<td>" + students[i].mobile + "</td>";
                data += "<td>" + students[i].dob + "</td>";
                data += "<td>" + students[i].course + "</td>";
                data += "<td>" + students[i].percentage + "</td>";
                data+="</tr>";
            }
            data+="</table>";
        }
        $("#content").html(data);
        $("#regstudents").dataTable({
            "pageLength":2
        });
       
    }

    function getDataFromLocalStorage() {
        var students = JSON.parse(localStorage.getItem("students"));
        return students;
    }

    function updateLocalStorageData(updatedStudentsArr) {
        localStorage.setItem("students",JSON.stringify(updatedStudentsArr));
    }
});
