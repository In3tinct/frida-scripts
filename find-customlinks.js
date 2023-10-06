
//Interceptor for ObjC app
Interceptor.attach(ObjC.classes.UIApplication['- applicationOpenURL:'].implementation, {
  
  onEnter: function (args) {

    var initWithURL = ObjC.Object(args[2]).toString();
    console.log("Custom/Deep link: " + initWithURL);

  },
  onLeave: function (retval) {

  }
});

//Swift app with SceneDelegate
//Change the package here "hackingwithswift" with the package you project has

var hook = ObjC.classes["hackingwithswift.SceneDelegate"]["- scene:openURLContexts:"];
Interceptor.attach(hook.implementation, {
  
  onEnter: function (args) {
    var initWithURL = ObjC.Object(args[3]).toString();
    console.log("Custom/Deep link: " + initWithURL);

  },
  onLeave: function (retval) {

  }
});
