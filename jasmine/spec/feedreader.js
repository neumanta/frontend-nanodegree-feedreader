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
    // TAN: Testing functions to validate the RSS Feeds
    describe('RSS Feeds', function() {
                        /* This is our first test - it tests to make sure that the
                         * allFeeds variable has been defined and that it is not
                         * empty. Experiment with this before you get started on
                         * the rest of this project. What happens when you change
                         * allFeeds in app.js to be an empty array and refresh the
                         * page?
                         */
        // TAN: Check to ensure allFeeds has been defined and the length is not 0
        it('are defined and the feeds length is greater than 0', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);
        });


                        /* Done - TODO: Write a test that loops through each feed
                         * in the allFeeds object and ensures it has a URL defined
                         * and that the URL is not empty.
                         */
        // TAN: Check to ensure the url is defined
        //      and confirm the url has data
        it('has url defined and length is greater than 0 (not empty)', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).toBeGreaterThan(0);
            }
        });

                        /* Done - TODO: Write a test that loops through each feed
                         * in the allFeeds object and ensures it has a name defined
                         * and that the name is not empty.
                         */
        // TAN: Check to ensure the name is defined
        //      and confirm the name has data
        it('has name defined and length is greater than 0 (not empty)', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).toBeGreaterThan(0);
            }
        });
    });


                    /* Done - TODO: Write a new test suite named "The menu" */
    // TAN: Validate the menu capabilities
    describe('The menu', function() {
 
                        /* Done - TODO: Write a test that ensures the menu element is
                         * hidden by default. You'll have to analyze the HTML and
                         * the CSS to determine how we're performing the
                         * hiding/showing of the menu element.
                         */
        // TAN: Ensure the menu is hidden when app is started
        it('is hidden by default', function() {
           // $('body').toggleClass('menu-hidden');
           expect($('.menu-hidden').is(":visible")).toBe(true); 
        });

                         /* Done - TODO: Write a test that ensures the menu changes
                          * visibility when the menu icon is clicked. This test
                          * should have two expectations: does the menu display when
                          * clicked and does it hide when clicked again.
                          */
        // TAN: Confirm the menu is displayed when clicked
        it('changes visibility when the menu icon is clicked', function() {
                      
           // NOTE: Cannot use the variable for menu-hidden
           //       it will not evaluate properly because it is
           // $menuHidden = $('.menu-hidden');
           var $menuIcon = $('.menu-icon-link');

           var $menuVisible = $('.menu-hidden').is(":visible");
           // console.log("menuVisible: ", $menuVisible);
           $menuIcon.trigger('click');
           // console.log("menuVisible: ", $('.menu-hidden').is(":visible"));
           expect($('.menu-hidden').is(":visible")).not.toBe($menuVisible); 

           $menuIcon.trigger('click');
           $menuVisible = $('.menu-hidden').is(":visible");
           // console.log("menuVisible: ", $('.menu-hidden').is(":visible"));
           expect($('.menu-hidden').is(":visible")).toBe($menuVisible); 

        });
    });


                    /* Done - TODO: Write a new test suite named "Initial Entries" */
    // TAN: Ensure the initial feed entries are loaded
    describe('Initial Entries', function() {
                        /* Done - TODO: Write a test that ensures when the loadFeed
                         * function is called and completes its work, there is at least
                         * a single .entry element within the .feed container.
                         * Remember, loadFeed() is asynchronous so this test wil require
                         * the use of Jasmine's beforeEach and asynchronous done() function.
                         */

        // TAN: First load the first entry of feeds and wait until done
        //      This is an async load.
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        // TAN: Validate that the initial entries have been defined and loaded.
        it('have been loaded and return at least a single .entry element', function(done) {
            expect($('.feed').find('.entry')).toBeDefined();
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
            done();
        });

     });

                    /* Done - TODO: Write a new test suite named "New Feed Selection" */
    // TAN: Ensure a second feed is loaded properly
    describe('New Feed Selection', function() {
                        /* Done - TODO: Write a test that ensures when a new feed is loaded
                         * by the loadFeed function that the content actually changes.
                         * Remember, loadFeed() is asynchronous.
                         */

        // TAN: Setup the initial and updated variables
        var $initialFeed;
        var $updatedFeed;

        // TAN: Read the initial feed
        beforeEach(function(done) {
            loadFeed(0, function() {
                $initialFeed = $('.feed').html();   
                // console.log("$initialFeed: ", $initialFeed.length, $initialFeed);
                done();
            });
        });

        // TAN: Read a second feed to ensure the new feed is loaded
        beforeEach(function(done) {
            loadFeed(1, function() {
                $updatedFeed = $('.feed').html();   
                // console.log("$updatedFeed: ", $updatedFeed);
                done();
            });
        });

        // TAN: After the loadFeed has completed, 
        //      validate we have loaded new content from the second feed
        it('changes content when new feed is loaded', function(done) {
            // console.log("are equal: ", ($initialFeed === $updatedFeed))
            expect($initialFeed === $updatedFeed).toBeFalsy();
            done();
        });

     });

}());
