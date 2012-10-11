/*
 * iVanilla
 * version 0.7
 * author: Thibaut Van Spaandonck (Urge2code)
 * http://www.urge2code.com
 * http://github.com/Urge2code/iVanilla
 * Licensed under the MIT license.
 */
(function(window, undefined) {
    var pixelRatio = window.devicePixelRatio || 1,
        userAgent = window.navigator.userAgent,
        isIPhone = userAgent.indexOf("iPhone") !== -1,
        isIPod = userAgent.indexOf("iPod") !== -1,
        isIPad = userAgent.indexOf("iPad") !== -1;
    
    window.iVanilla = {
        isIPhone: isIPhone,
        isIPod: isIPod,
        isIPhoneOrIPod: isIPhone || isIPod,
        isIPad: isIPad,
        is4InchScreen: window.screen.availHeight === 568,
        pixelRatio: pixelRatio,
        isRetinaDisplay: pixelRatio >= 2,
        orientation: {
            isPortrait: undefined,
            isLandscape: undefined
        },
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight
        },
        screen: {
            width: window.screen.availWidth * pixelRatio,
            height: window.screen.availHeight * pixelRatio
        },
        refreshOrientation: function() {
            this.orientation.isPortrait = window.orientation === 0 || window.orientation === 180;
            this.orientation.isLandscape = !this.orientation.isPortrait;
            window.scrollTo(0, 1); // Trick to make the iDevice hide the location bar
        }
    };
})(window);

$(function() {
    iVanilla.refreshOrientation();
    
    $("body").on("orientationchange", function(e) {
        e.preventDefault();
        iVanilla.refreshOrientation();
        
        $.event.trigger({
            type: "orientationChanged",
            isPortrait: iVanilla.orientation.isPortrait,
            isLandscape: iVanilla.orientation.isLandscape
        });
    });
});