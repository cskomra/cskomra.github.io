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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty. (#8)
         */
        it('have URLs that are not empty', function() {
            for( var i = 0; i < allFeeds.length; i++) {
                var feedURL = allFeeds[i].url;
                expect(feedURL).toBeDefined();
                expect(feedURL).not.toBe(null);
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty. (#9)
         */
        it('have names that are not empty', function() {
            for( var i = 0; i < allFeeds.length; i++) {
                var feedName = allFeeds[i].name;
                expect(feedName).toBeDefined();
                expect(feedName).not.toBe(null);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" (#10)*/
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element. (#11)
         */
        it('is hidden by default', function() {
            expect($('body').attr('class')).toBe('menu-hidden');
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again. (#12)
         */
        it('changes visibility when menu icon is clicked', function() {
            menuIcon = $('.menu-icon-link');
            var numClicks = 0;
            menuIcon.on('click', function() {
                numClicks++;
            });

            if(numClicks % 2 == 0) {
                //numClicks is even and menu is hidden
                expect($('body').attr('class')).toBe('menu-hidden');
            }else{
                //numClicks is odd and menu is displayed
                expect($('body').attr('class')).toBe(null);
            }
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" (#13)*/
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function. (#14)
         */
        //loadFeed() is asynchronous

        beforeEach(function(done) {
            loadFeed(0, function() { //async function
                done();  //signals to the framework...
            });
        });

        it('load at least a single .entry element within the .feed container', function(done) {
            //get .feed container; check for .entry element in it
            expect($('.feed').find(".entry")).not.toBe(null);
            done(); //the function has completed
        });

     });

    /* TODO: Write a new test suite named "New Feed Selection" (#15)*/
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous. (#16)
         */

         //expect container before loadFeed to not be container after loadFeed
         var container = $('.feed');
         beforeEach(function(done) {
            loadFeed(0, function() { //async function
                done();  //signals to the framework...
            });
        });

        it('actually changes container content', function(done) {
            //get new .feed container; check against previous container
            expect($('.feed')).not.toBe(container);
            done(); //the function has completed
        });
    });
}());
