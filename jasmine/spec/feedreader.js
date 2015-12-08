'use strict';
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
         * and that the URL is not empty.
         */
        it('has a valid URLs', function() {
            //We loop inside allFeed
            allFeeds.forEach(function(feed) {
                //We assert that feed urls are defined
                expect(feed.url).toBeDefined();
                //We assert that length of feed urls are not 0
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a valid Name', function() {
            //We loop inside allFeed
            allFeeds.forEach(function(feed) {
                //We assert that feed names are defined
                expect(feed.name).toBeDefined();
                //We assert that length of feed names are not 0
                expect(feed.name.length).not.toBe(0);
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            //We assert that menu is hidden at start by default
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('change visibility when clicked on icon', function() {
            //We repeat the same previous assertion about hidden menu at start by default
            expect($('body').hasClass('menu-hidden')).toBe(true);
            //We open the hidden menu via click() method
            $('i.icon-list').click();
            //Now let's assert that the hidden menu is visible (after first click)
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //We close the menu via click method
            $('i.icon-list').click();
            //We assert that the hidden menu is hidden (after the second click)
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        beforeEach(function(done){
            loadFeed(0,function() {
                done();
            });
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('has at least 1 entry', function(done) {
            //We assert that the last entry exists inside the DOM
            expect($('div.feed a.entry-link article').hasClass('entry')).toBe(true);
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var dataLoading1, dataLoading2;

        beforeEach(function(done){
            loadFeed(0,function() {
                dataLoading1 = $('.entry').text();
                loadFeed(1,function() {
                    dataLoading2 = $('.entry').text();
                    done();
                });
            });
        });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('contents change after load', function(done) {
            //We assert that the two contents have changed
            expect(dataLoading1).not.toBe(dataLoading2);
            done();
        });

    });

}());