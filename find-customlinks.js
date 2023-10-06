
//Interceptor for custom links in ObjC app
Interceptor.attach(ObjC.classes.UIApplication['- applicationOpenURL:'].implementation, {
  
  onEnter: function (args) {

    var initWithURL = ObjC.Object(args[2]).toString();
    console.log("Custom/Deep link: " + initWithURL);

  },
  onLeave: function (retval) {

  }
});

//Interceptor for custom links in Swift app with SceneDelegate
//Change the package here "hackingwithswift" with the package you project has, for hooking swift functions with ObjC class it requires
//to append project name
var hook = ObjC.classes["hackingwithswift.SceneDelegate"]["- scene:openURLContexts:"];
Interceptor.attach(hook.implementation, {
  
  onEnter: function (args) {
    var initWithURL = ObjC.Object(args[3]).toString();
    console.log("Custom/Deep link: " + initWithURL);

  },
  onLeave: function (retval) {

  }
});
