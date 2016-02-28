Router.onBeforeAction(function() {
   document.title = 'TITLE';
   this.next();
});

Router.onAfterAction(function() {
   if(this.route.options.title) {
      document.title = this.route.options.title+" - TITLE";
   }
});

Router.map(function() {
   this.route('home',{
      layoutTemplate: 'layout_index',
      path: '/'
   });

// Contact section
// this.route('contactUs',{
//    title: 'Contact Us',
//    path: '/contact/connect/contact',
//    template: 'contactUs',
//    layoutTemplate: 'layout_subclean'
// }

});

Router.configure({
  layoutTemplate: 'layout_index'
});
