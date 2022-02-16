function hide(id) {
	for(i=0; i< arguments.length; i++) { 
		document.getElementById(arguments[i]).style.display = 'none';
	}
}

function show(id) {
	for(i=0; i< arguments.length; i++) { 
		document.getElementById(arguments[i]).style.display = 'block';
	}
}

function toggle(id) {
  let element = document.getElementById(id);
  let display = window.getComputedStyle(element, null).display;
  if(display == "" || display == "none") {
    show(id);
  } else {
    hide(id);
  }
}

function swap(id1, id2) {
  toggle(id1);
  toggle(id2);
}

function showClass(className) {
  let elements = document.getElementsByClassName(className);
  for(i=0; i< elements.length; i++) {
		elements[i].classList.remove('hide');
	}
}

function hideClass(className) {
  let elements = document.getElementsByClassName(className);
  for(i=0; i< elements.length; i++) { 
		elements[i].classList.add('hide');
	}
}

function swapClasses(elementId, class1, class2) {
  let element = document.getElementById(elementId);
  if(element.classList.contains(class1)) {
    element.classList.remove(class1);
    element.classList.add(class2);
  } else {
    element.classList.add(class1);
    element.classList.remove(class2);
  }
}

function changeImgToSrc(targetElementId, srcSourceElementId) {
  let target = document.getElementById(targetElementId);
  let source = document.getElementById(srcSourceElementId).src;
  target.src = source;
}

function changeTitle(newTitle) {
  document.title = newTitle;
}

function hoverIcon(element, initialIcon, hoverIcon) {
  element.addEventListener("mouseout", function(){ this.innerHTML=initialIcon; });
  element.innerHTML = hoverIcon;
}

function scrollToTop(id) {
  let element = document.getElementById(id);
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  element.scrollTop=0;
}

function delay(delayTimeMs) {
  return new Promise(resolve => setTimeout(resolve, delayTimeMs));
}

// Counts up from start to stop, e.g. "0% -> 100%"
// Useful for loading percentage
async function counter(targetId, append, duration, jitter, start, stop) {
  // Jitter: if 100 max jitter, 0 no jitter in gui
  let element = document.getElementById(targetId);
  let waitDuration = duration / (stop - start);

  // Do not loop faster than 60fps
  // TODO: Does not work. if increment increases AND waitDuration, the time does not match
  // also the animation is not smooth.
  /* let increment = waitDuration < 17 ? 17: 1;
  waitDuration = waitDuration < 17 ? waitDuration*17 : waitDuration; */
  /* for(i=start; i<=stop; i+=increment) { */

  for(i=start; i<=stop; i++) {
      /* Only update GUI if start, stop or is jittering. */
      if(i==0 || i>= stop || Math.random()*100 > jitter) {
          i = i > stop ? stop : i;  // do not overshoot
          element.innerHTML = i + append;
      }
      await delay(waitDuration);
  }
}