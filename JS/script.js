/*-------------- navbar js start  --------------*/
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("bg-white");
    }else{
        $('.navbar').removeClass("bg-white");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
/*-------------- navbar js end  --------------*/

// ------------------tabbing js start----------------//
const tabsBtns = Array.from(document.querySelectorAll("[data-tab-id]"));
const tabs = Array.from(document.querySelectorAll("[data-tab]"));

let selectedTab = tabsBtns[0].dataset.tabId;

const hideTabs = () => {
  tabs
    .filter((tab) => tab.dataset.tab !== selectedTab)
    .forEach((tab) => {
      tab.classList.add("tabs__tab--hide");
    });

  tabsBtns
    .filter((tab) => tab.dataset.tabId !== selectedTab)
    .forEach((tab) => {
      tab.classList.add("tabs__tab-btn--not-selected");
    });
};
hideTabs();

const handleSelectTab = (e) => {
  selectedTab = e.target.dataset.tabId;

  tabs.forEach((tab) => {
    tab.classList.remove("tabs__tab--hide");
  });

  tabsBtns.forEach((tab) => {
    tab.classList.remove("tabs__tab-btn--not-selected");
  });

  hideTabs();
};

tabsBtns.forEach((btn) => {
  btn.addEventListener("click", handleSelectTab);
});
// ------------------tabbing js end----------------//

// aos animation single line js
AOS.init({
    duration: 1200,
  })

// -----------------odomertar js start--------------//

  function Scroller(opts) {
    this.opts = opts || {};
    
    this.start = function() {
      $(_this.opts.selector).each(function() {
        var $this = $(this);
        var height = $this.height();
        var text = $this.text();
        var numText = text.match(/\d/gi).join('');
        var newText = '';
        
        $this.addClass('scroller-wrapper');
  
        for (var i = 0; i <= numText.length; i += 1) {
          if (!numText[i]) continue;
          
          var range = '';
          var style = '';
          var num = parseInt(numText[i], 10);
          var dur = Math.ceil(num / numText.length);
          // Create the full range (0 - num)
          for (var j = 0; j <= num ; j += 1) {
            range += wrap(j, 'span');
          }
         
          // Create the styling
          style += 'animation-duration: ' + dur + 's;';
          style += 'animation-timing-function: ease-out;';
          style += 'animation-name: scroller-' + num + ';';
          // Final HTML
          newText += wrap(range, 'div', style);
          
          // Restore
          setTimeout(function (i) {
            $this.html(text);
          }.bind(null, i), dur * 1000)
        }
        $this.html(newText).height(height);
      });
    };
    
    //Helpers
    var _this = this;
    var wrap = function (text, tag, style) {
      var styleAttr = style ? ' style="' + style + '"' : '';
      return '<' + tag + styleAttr + '>' + text + '</' + tag + '>';
    }
  }
  
  var scroller = new Scroller({
    selector: ".scroller"
  }); 
  
  setTimeout(function () {
    scroller.start()
  }, 1000)
  // -----------------odomertar js start--------------//

//  ------------------------ vertical tabing start------------------//
$(document).ready(function() {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
});
//  ------------------------ vertical tabing end------------------//


//  ------------------------ owl crousal start------------------//
jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
  });