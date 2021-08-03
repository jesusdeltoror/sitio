
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBFHIJXXFBNrr62cBmhSBE_7-MyZr3l4LU",
    authDomain: "sitio-e6fd0.firebaseapp.com",
    projectId: "sitio-e6fd0",
    storageBucket: "sitio-e6fd0.appspot.com",
    messagingSenderId: "453285370595",
    appId: "1:453285370595:web:f63914a0b143ba6f2b83d6",
    measurementId: "G-XF37PMHFHF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



const options={
    
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, 
      {
        fullWidth:true,
        indicators:true
      });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });
