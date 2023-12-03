// Remove `<link id="logincss" rel="stylesheet" href="/assets/copycord-login.css" />` from header when we're not accessing `/login` or `/register`
// copycord-login.css replaces discord's TOS tooltip with something more fitting for copycord, which when included in the main app, causes other tooltips
// to be affected, which is potentially unwanted.
//
// This script removes copycord-login.css when a user reloads the page. From testing, it appears copycord already properly removes
// copycord-login.css after login is successful, but not if you reload the page after logging in. This script is to remove copycord-login.css in
// that specific case.

var token = JSON.parse(localStorage.getItem("token"));
if (!token && location.pathname !== "/login" && location.pathname !== "/register") {
	document.getElementById("logincss").remove();
}
