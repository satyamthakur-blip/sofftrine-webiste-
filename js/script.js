document.addEventListener('DOMContentLoaded', function(){
  // Back to top
  const back = document.getElementById('backToTop');
  window.addEventListener('scroll', ()=>{ if(window.scrollY>300){ back.style.display='block' } else { back.style.display='none' } });
  back.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

  // AOS init
  if(window.AOS) AOS.init({duration:700,once:true});

  // Simple project filters
  document.querySelectorAll('[data-filter]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.project-item').forEach(item=>{
        if(filter==='*') { item.style.display='block' } else { item.style.display = item.dataset.type===filter ? 'block' : 'none' }
      })
    })
  })

  // Bootstrap form validation
  (function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated')
      }, false)
    })
  })()

  // set year
  const y = new Date().getFullYear(); document.getElementById('year') && (document.getElementById('year').innerText = y)
})
