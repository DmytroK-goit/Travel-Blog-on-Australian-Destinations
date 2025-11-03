// main.js — subscribe handling and small utilities
(function(){
  // Subscribe form handling: store locally
  var form = document.getElementById('subscribe-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var emailInput = form.querySelector('input[name=email]') || form.querySelector('input[type=email]');
      var email = emailInput && emailInput.value ? emailInput.value.trim() : '';
      if(!email) { alert('Please enter a valid email'); return; }
      var subs = JSON.parse(localStorage.getItem('travelcrown_subs') || '[]');
      subs.push({email: email, date: new Date().toISOString()});
      localStorage.setItem('travelcrown_subs', JSON.stringify(subs));
      form.reset();
      alert('Subscribed — saved locally.');
    });
  }

  // Basic HTML validation check (console) - for developer convenience only
  try {
    if (typeof document.documentElement !== 'undefined') {
      // no-op, placeholder to ensure script runs without external calls
      console.log('Travel Crown main.js loaded');
    }
  } catch (e) {
    console.warn('Validation helper failed', e);
  }
})();