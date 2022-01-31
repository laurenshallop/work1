$( document ).ready(function() {
    // Current Date & Time
    //moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
       
        $(".saveBtn").on("click", function () {
            console.log(this);
            let text = $(this).siblings(".description").val();
            let time = $(this).parent().attr("id");
    
            // Items in locak storage
            localStorage.setItem(time, text);
        })
    
        $("#hour8 .description").val(localStorage.getItem("hour8"));
        $("#hour9 .description").val(localStorage.getItem("hour9"));
        $("#hour10 .description").val(localStorage.getItem("hour10"));
        $("#hour11 .description").val(localStorage.getItem("hour11"));
        $("#hour12 .description").val(localStorage.getItem("hour12"));
        $("#hour1 .description").val(localStorage.getItem("hour1"));
        $("#hour2 .description").val(localStorage.getItem("hour2"));
        $("#hour3 .description").val(localStorage.getItem("hour3"));
        $("#hour4 .description").val(localStorage.getItem("hour4"));
        $("#hour5 .description").val(localStorage.getItem("hour5"));
        $("#hour6 .description").val(localStorage.getItem("hour6"));
    
    
      
    function hourTracker () {
        let currentHour = moment().hour();
    
        $(".time-block").each(function () {
            let blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour)
    
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
    
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("future");
                $(this).removeClass("present");
            }
    
            else {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present"); 
            }
        })
     }
    
        hourTracker();
    })
