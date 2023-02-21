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

  document.getElementById("year").innerHTML = "ⓒ " + year;

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
document.body.addEventListener("mousemove", function (e) {
  (cursor.style.left = e.clientX + "px"), (cursor.style.top = e.clientY + "px");
});

const Quote_Array = [
  "Coding like poetry should be short and concise. ― Santosh Kalwar",
  "It's not a bug; its an undocumented feature. ― Anonymous",
  "First, solve the problem. Then, write the code. - John Johnson",
  "Code is like humor. When you have to explain it, it's bad. - Cory House",
  "Make it work, make it right, make it fast. - Kent Beck",
  "Clean code always looks like it was written by someone who cares. — Robert C. Martin",
  "Of course, bad code can be cleaned up. But it's very expensive. — Robert C. Martin",
  "Programming is the art of algorithm design and the craft of debugging errant code. - Ellen Ullman",
  "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning. ― Rick Cook",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. ― Martin Fowler",
  "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
  "Programming is the art of telling another human being what one wants the computer to do. ― Donald Ervin Knuth",
  "Confusion is part of programming. ― Felienne Hermans",
  "No matter which field of work you want to go in, it is of great importance to learn at least one programming language. ― Ram Ray",
  "If we want users to like our software, we should design it to behave like a likable person.  - Alan Cooper",
  "Quality is a product of a conflict between programmers and testers. ― Yegor Bugayenk",
  "Everybody should learn to program a computer because it teaches you how to think. - Steve Jobs",
  "I taught myself how to program computers when I was a kid, bought my first computer when I was 10, and sold my first commercial program when I was 12. - Elon Musk",
  "Software and cathedrals are much the same — first we build them, then we pray.",
  "Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it? ― Olawale Daniel",
  "Programmers seem to be changing the world. It would be a relief, for them and for all of us, if they knew something about it.  - Ellen Ullman",
  "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. - Linus Torvalds",
  "Programmer: A machine that turns coffee into code. - Anonymous",
  "When I wrote this code, only God and I understood what I did. Now only God knows.  - Anonymous",
  "I'm not a great programmer; I'm just a good programmer with great habits. ― Kent Beck",
  "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity. - John Romero",
  "Programming is learned by writing programs. ― Brian Kernighan",
  "Software comes from heaven when you have good hardware. - Ken Olsen",
  "There is always one more bug to fix.  - Ellen Ullman",
  "If debugging is the process of removing bugs, then programming must be the process of putting them in. – Sam Redwine",
  "Talk is cheap. Show me the code. ― Linus Torvalds",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. – Dan Salomon",
  "If, at first, you do not succeed, call it version 1.0. ― Khayri R.R. Woulfe",
  "Computers are fast; developers keep them slow. – Anonymous",
];

const onLoad = () => {
  let number = Math.floor(Math.random() * 10 + 1);
  if ((number = Quote_Array[Math.floor(Math.random() * 35 + 1)])) {
    document.getElementById("load-quote").innerHTML =
      Quote_Array[Math.floor(Math.random() * 10 + 1)];
  }
};
window.onload = onLoad();

let count = 1;
function incrementCount() {
  // If count is already at 100, reset it to 1
  if (count === 100) {
    document.getElementById("preload").style.display = "none";
  } else {
    count++;
  }
  // Display the current count in the console
  console.log(count);
}

// Call the incrementCount function repeatedly every second
setInterval(incrementCount, 60);

const interval = setInterval(function () {
  document.getElementById("counter").innerHTML = count;
}, 9);
