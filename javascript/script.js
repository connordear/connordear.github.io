// $(window).scroll(function() {
// 		$('.about-grid').each(function(){
// 		var imagePos = $(this).offset().top;
//
// 		var topOfWindow = $(window).scrollTop();
// 			if (imagePos < topOfWindow+400) {
// 				$(this).addClass("slideRight");
// 			}
// 		});
// 	});

// const scale = 3000
// const gridPos = $('.about-grid').offset().top;
// $(window).scroll(function() {
//   var topOfWindow = $(window).scrollTop();
//   var fraction = (topOfWindow / gridPos);
// 	var calculatedMargin = scale - (fraction * scale);
// 	if (calculatedMargin < 0) {
// 		$('.about-grid').css('left', 0);
// 	} else {
// 		$('.about-grid').css('left', calculatedMargin);
// 	}
// 	$('.project-cont').each(function() {
// 		const contPos = $(this).offset().top;
// 		var calculatedDist = topOfWindow / contPos;
// 		var projectCalcMargin = scale - (calculatedDist * scale);
// 		if (projectCalcMargin < 0) {
// 			$(this).css('transform', 'translateX(0px)');
// 		} else {
// 			$(this).css('transform', 'translateX(' + projectCalcMargin + 'px)');
// 		}
// 	});
// });


// var container = document.getElementById('about');
// var windowHeight = window.innerHeight;
// var windowWidth = window.innerWidth;
// var scrollArea = 1000 - windowHeight;
//
// // update position of square 1 and square 2 when scroll event fires.
// window.addEventListener('scroll', function() {
//   var scrollTop = window.pageYOffset || window.scrollTop;
//   var scrollPercent = scrollTop/scrollArea || 0;
//
//   container.style.left = scrollPercent*window.innerWidth + 'px';
// });

 //  A new hope
// var _containerHeight = 4000;
// var _width, _height, _scrollHeight;
// var letters = document.getElementsByTagName('span');
// var _movingElements = [];
// var _scrollPercent = 0;
// var pre = prefix();
// var _jsPrefix  = pre.lowercase;
// if(_jsPrefix == 'moz') _jsPrefix = 'Moz'
// var _cssPrefix = pre.css;
// var _positions = [
//   {
//     name: 'about',
//     start: {
//         percent: 0.2, x: -0.2, y: 0.2
//     },
//     end: {
//       percent: 0.8, x: 0.9, y: 0.9
//     }
//   }];
//
// 	resize();
// 	initMovingElements();
//
// 	function initMovingElements() {
// 	  for (var i = 0; i < _positions.length; i++) {
// 	    _positions[i].diff = {
// 	      percent: _positions[i].end.percent - _positions[i].start.percent,
// 	      x: _positions[i].end.x - _positions[i].start.x,
// 	      y: _positions[i].end.y - _positions[i].start.y,
// 	    }
// 	    _positions[i].target = {};
// 	    _positions[i].current = {};
// 	    var el = document.getElementsByClassName('boy '+_positions[i].name)[0];
// 	    _movingElements.push(el);
// 	  }
// 	}
//
// 	function resize() {
// 	    _width = window.innerWidth;
// 	  _height = window.innerHeight;
// 	  _scrollHeight = _containerHeight-_height;
// 	}
//
// 	function rotateLetters() {
// 	  for (var i = 0; i < letters.length; i++) {
// 	    letters[i].style[_jsPrefix+'Transform'] = 'rotateY('+(_scrollPercent*500)+'deg)'
// 	  }
// 	}
//
// 	function updateElements() {
// 	  for (var i = 0; i < _movingElements.length; i++) {
// 	    var p = _positions[i];
// 	    if(_scrollPercent <= p.start.percent) {
// 	      p.target.x = p.start.x*_width;
// 	      p.target.y = p.start.y*_containerHeight;
// 	    } else if(_scrollPercent >= p.end.percent) {
// 	      p.target.x = p.end.x*_width;
// 	      p.target.y = p.end.y*_containerHeight;
// 	    } else {
// 	      p.target.x = p.start.x*_width + (p.diff.x*(_scrollPercent-p.start.percent)/p.diff.percent*_width);
// 	      p.target.y = p.start.y*_containerHeight + (p.diff.y*(_scrollPercent-p.start.percent)/p.diff.percent*_containerHeight);
// 	    }
//
// 	    // lerp
// 	    if(!p.current.x) {
// 	      p.current.x = p.target.x;
// 	      p.current.y = p.target.y;
// 	    } else {
// 	      p.current.x = p.current.x + (p.target.x - p.current.x)*0.1;
// 	      p.current.y = p.current.y + (p.target.y - p.current.y)*0.1;
// 	    }
// 	    _movingElements[i].style[_jsPrefix+'Transform'] = 'translate3d('+p.current.x+'px, '+
// 	        p.current.y+'px, 0px)';
// 	  }
// 	}
//
//
//
// 	function loop() {
// 	  _scrollOffset = window.pageYOffset || window.scrollTop;
// 	  _scrollPercent = _scrollOffset/_scrollHeight || 0;
// 	  rotateLetters();
// 	  updateElements();
//
// 	  requestAnimationFrame(loop);
// 	}
//
// 	loop();
//
// 	window.addEventListener('resize', resize);
//
// 	/* prefix detection http://davidwalsh.name/vendor-prefix */
//
// 	function prefix() {
// 	  var styles = window.getComputedStyle(document.documentElement, ''),
// 	    pre = (Array.prototype.slice
// 	      .call(styles)
// 	      .join('')
// 	      .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
// 	    )[1],
// 	    dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
// 	  return {
// 	    dom: dom,
// 	    lowercase: pre,
// 	    css: '-' + pre + '-',
// 	    js: pre[0].toUpperCase() + pre.substr(1)
// 	  };
// 	}