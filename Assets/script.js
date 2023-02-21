function displayTime() {
  var d = new Date();
  var day = d.getDate();
  var month = d.getUTCMonth();
  var year = d.getFullYear();
  var hour = d.getHours();
  var min = d.getMinutes();
  var seconds = d.getSeconds();
  var AMorPM = "AM";

  if (hour >= 12) {
    AMorPM = "PM";
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  month = monthNames[month];

  document.getElementById("year").innerHTML = 
  "ⓒ "+ year;

  document.getElementById("clock").innerHTML =
    day +
    "-" +
    month +
    "-" +
    year +
    "," +
    " " +
    hour +
    ":" +
    min +
    ":" +
    seconds +
    " " +
    AMorPM;
}
setInterval(displayTime, 1000);

$(document).ready(function () {
  $("#rotate").hover(function () {
    // $("#rubbish").slideToggle(250);
    $("#cancel").fadeToggle();
    // $("#cancel").toggleClass("cancelHover");
  });
  $("#rotateLeft").hover(function () {
    // $("#rubbishLeft").slideToggle(250);
    $("#cancelLeft").fadeToggle();
    // $("#cancel").toggleClass("cancelHover");
  });
  $("#rotateLeftBottom").hover(function () {
    // $("#rubbishLeftBottom").slideToggle(250);
    $("#cancelLeftBottom").fadeToggle();
    // $("#cancel").toggleClass("cancelHover");
  });
  $("#rotateRight").hover(function () {
    // $("#rubbishRight").slideToggle(250);
    $("#cancelRight").fadeToggle();
    // $("#cancel").toggleClass("cancelHover");
  });
});

// Contact Form
function closeForm() {
  $(".form-popup-bg").addClass("is-visible");
}
function addForm() {
  $(".form-popup-bg").removeClass("is-visible");
}

$(document).ready(function ($) {
  /* Contact Form Interactions */
  $("#btnOpenForm").on("click", function (event) {
    event.preventDefault();
    $(".form-popup-bg").addClass("is-visible");
  });

  //close popup when clicking x or off popup
  $(".form-popup-bg").on("click", function (event) {
    if (
      $(event.target).is(".form-popup-bg") ||
      $(event.target).is("#btnCloseForm")
    ) {
      event.preventDefault();
      $(this).removeClass("is-visible");
    }
  });
});

// Popup Alert

function openAlert(time) {
  $(".alert-popup-bg").addClass("is-visible");
  setTimeout(function () {
    $(".alert-popup-bg").removeClass("is-visible");
  }, time);
}
function sendMail(params) {
  let phoneIn = document.getElementById("phoneIn").value;
  let compIn = document.getElementById("compIn").value;
  let mailIn = document.getElementById("mailIn").value;
  let nameIn = document.getElementById("nameIn").value;
  let message =
    "<p style='padding:12px;border-left:4px solid #d0d0d0;font-style:italic;color:red'><strong>" +
    nameIn +
    "</strong> just Joined your waitlist</p>";
  let elastic =
    "<p>Hello There, <strong>" +
    phoneIn +
    "</strong> just joined our waitlist</p>";
  let tempParams = {
    from_name: nameIn,
    to_name: "Timii",
    phone: phoneIn,
    compIn: compIn,
    mailIn: mailIn,
  };
  Email.send({
    SecureToken: "cde84301-f0ad-4075-a596-39114e1bea7f",
    To: "timilehin@thetrybeco.org",
    From: "akinstimi005@gmail.com",
    Subject: "Another One",
    Body: message,
  }).then((message) => openAlert(1500));
  emailjs
    .send("service_odsntbf", "template_arspdrl", tempParams)
    .then(function (res) {
      console.log("success", res.status);
      $(".form-popup-bg").removeClass("is-visible");
    });
}


var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});