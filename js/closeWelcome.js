//function welcomeClose() {
 //   document.getElementsByClassName(welcomeBody).style.opacity = '0';
//}

var removeWelcome = document.getelementsbyid(welcomeBody);
var containerEl = removeWelcome.ParentNode;
containerEl.removeChild(removeWelcome)



$(document).ready(function () {
    $(.closeButton).click(function () {
        $(.welcomeBody).css({
            'opacity': 0.5
        });

    });
});