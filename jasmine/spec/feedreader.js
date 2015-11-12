/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Done - TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url not empty', function() {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* Done - TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name not empty', function() {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* Done - TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
 
        /* Done - TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
           // $('body').toggleClass('menu-hidden');
           expect($('.menu-hidden').is(":visible")).toBe(true); 
        });

         /* Done - TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility', function() {
                      
           // NOTE: Cannot use the variable for menu-hidden
           //       it will not evaluate properly because it is
           // menuHidden = $('.menu-hidden');
           var menuIcon = $('.menu-icon-link');

           var menuVisible = $('.menu-hidden').is(":visible");
           // console.log("menuVisible: ", menuVisible);
           menuIcon.trigger('click');
           // console.log("menuVisible: ", $('.menu-hidden').is(":visible"));
           expect($('.menu-hidden').is(":visible")).not.toBe(menuVisible); 

           menuIcon.trigger('click');
           menuVisible = $('.menu-hidden').is(":visible");
           // console.log("menuVisible: ", $('.menu-hidden').is(":visible"));
           expect($('.menu-hidden').is(":visible")).toBe(menuVisible); 

        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            })
        });

        // Validate that the initial entries have been loaded.
        it('loadFeed has entry.', function(done) {
            expect($('.feed').find('.entry').length).not.toBe(0);
            done();
        });

     });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        // Use the starting length as a baseline for change        
        var initialFeed = $('.feed').length;

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            })
        });

        // After the loadFeed has completed, validate we have loaded more data
        it('ensure feed changes.', function(done) {
            // console.log("initialFeed length: ", initialFeed);
            // console.log("updatedFeed length: ", $('.feed').find('.entry').length);
            expect($('.feed').find('.entry').length).not.toBe(initialFeed);
            done();
        });

     });

}());
