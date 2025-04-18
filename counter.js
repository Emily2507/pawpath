  //auto scroll to section
  $(document).ready(function() {
    $('a[href*="#AboutUs"]').on('click', function(e) {
      e.preventDefault();

      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500, 'linear');
    });
  });

//animate the counter
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("value");
  
  let hasAnimated = false; // prevent re-running if not needed
  
  //observing if the counter is in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        animateValue(obj, 0, 5638, 2500);
        hasAnimated = true;
      }
    });
  }, {
    threshold: 0.5 // triggers when 50% of the element is visible
  });
  
  observer.observe(obj);
  

  //carousel
  $(document).ready(function(){
    $('#carouselExampleControls').carousel({
      interval: 4000 // Adjust the interval (in milliseconds) as needed
    });
  });
