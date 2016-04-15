window.onload = function WindowLoad(event) {
    var myFirebaseRef = new Firebase("https://velocimonster.firebaseio.com/");
    var today = new Date();
    myFirebaseRef.set({
    	lastIncident: today
    });
    myFirebaseRef.child("test").on("value", function(snapshot) {
  		alert(snapshot.val());  // Alerts "San Francisco"
	});
}