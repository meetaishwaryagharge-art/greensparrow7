/* Public website -> Firestore. Every form on the site saves through GS.save(). */
(function () {
  var db = null;
  try {
    if (window.GS_CONFIGURED && GS_CONFIGURED() && window.firebase) { firebase.initializeApp(GS_FIREBASE); db = firebase.firestore(); }
  } catch (e) { console.error('Firebase init failed:', e); }
  window.GS = {
    configured: !!db,
    save: function (col, data) {
      if (!db) return Promise.reject(new Error('not-configured'));
      data.page = location.pathname.split('/').pop() || 'index.html';
      data.status = 'new';
      data.createdAt = firebase.firestore.FieldValue.serverTimestamp();
      return db.collection(col).add(data).catch(function (e) { console.error('Firestore save failed:', e.code, e.message); throw e; });
    }
  };
  // Contact page form + blog newsletter form
  var em = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  document.querySelectorAll('[data-gs-static]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var kind = f.dataset.gsStatic, d = {}, msg = f.querySelector('.gs-static-msg'), btn = f.querySelector('button[type=submit]');
      new FormData(f).forEach(function (v, k) { d[k] = String(v).trim(); });
      function show(t, ok) { if (!msg) { alert(t); return; } msg.textContent = t; msg.hidden = false; msg.style.color = ok ? '#678c3b' : '#df561f'; }
      if (!em.test(d.email || '') || (kind === 'contact' && (!d.name || !d.message))) { show('Please fill in the required fields correctly.'); return; }
      if (kind === 'contact') d.form = 'Contact Page Message';
      btn.disabled = true;
      GS.save(kind === 'newsletter' ? 'subscribers' : 'messages', d)
        .then(function () { f.reset(); show(kind === 'newsletter' ? 'Thanks for subscribing!' : 'Thank you! We will get back to you shortly.', true); })
        .catch(function () { show('Could not send right now. Please email hello@greensparrow.in.'); })
        .then(function () { btn.disabled = false; });
    });
  });
})();
