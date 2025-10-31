// نمایش یا مخفی کردن ویدیو درباره ما (در صورت نیاز به حفظ برای پروژه)
(async function ensureAboutVideo(){
    var videoTag = document.querySelector('.about .video-wrapper');
    if (!videoTag) return;
    try {
        const res = await fetch('public/my-video.mp4', { method: 'HEAD', cache: 'no-store' });
        if(!res.ok) videoTag.style.display = 'none';
    } catch(e){
        videoTag.style.display = 'none';
    }
})();

// فرم مشاوره رایگان اصلی
const mainCtaForm = document.getElementById('main-cta-form');
if(mainCtaForm){
    mainCtaForm.addEventListener('submit',function(e){
        e.preventDefault();
        alert('درخواست شما ثبت شد! کارشناسان ما بزودی تماس می‌گیرند.');
        mainCtaForm.reset();
    });
}

// فرم Lead Magnet
const leadMagnetForm = document.getElementById('lead-magnet-form');
if(leadMagnetForm){
    leadMagnetForm.addEventListener('submit',function(e){
        e.preventDefault();
        const email = leadMagnetForm.elements['magnet-email'].value;
        alert('ایمیل شما ثبت شد! لینک دانلود بلافاصله باز می‌شود.');
        window.open('lead-magnet.pdf','_blank');
        leadMagnetForm.reset();
    });
}

// بارگذاری خودکار لوگوهای برند از public/brands/brand1..brand12 با پسوندهای رایج
(function loadBrandLogos(){
  const row = document.getElementById('brandsRow');
  if(!row) return;
  const names = Array.from({length:12}, (_,i)=>`brand${i+1}`);
  const exts = ['png','jpg','jpeg','svg','webp'];
  function tryLoad(name, idx){
    if(idx>=exts.length) return; // هیچ فایل موجود نیست
    const testImg = new Image();
    const src = `public/brands/${name}.${exts[idx]}`;
    testImg.onload = function(){
      const wrap = document.createElement('div');
      wrap.className = 'w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl shadow flex items-center justify-center overflow-hidden';
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'لوگوی برند';
      img.className = 'w-full h-full object-contain bg-white';
      wrap.appendChild(img);
      row.appendChild(wrap);
    };
    testImg.onerror = function(){ tryLoad(name, idx+1); };
    testImg.src = src;
  }
  names.forEach(n=>tryLoad(n,0));
})();

// ورود/ثبت‌نام – ریدایرکت ادمین
function isAdmin(phone) { return phone === '09054183173'; }
function handleLoginRedirect(formSelector, isRegister) {
  let form = document.querySelector(formSelector);
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let phoneField = form.querySelector('input[type="tel"]');
    let phone = phoneField ? phoneField.value.trim() : '';
    if (isAdmin(phone)) { window.location.href = 'admin.html'; return; }
    let email = form.querySelector('input[type="email"]').value.trim();
    let name = (form.querySelector('input[type="text"]')?.value ?? '').trim();
    let users = JSON.parse(localStorage.getItem('users')||'[]');
    let user = users.find(u=>u.phone===phone);
    if(isRegister && !user){ users.push({name, email, phone, credit:0}); localStorage.setItem('users',JSON.stringify(users)); }
    localStorage.setItem('currentUser', JSON.stringify(user||{name,email,phone,credit:0}));
    window.location.href = 'wallet.html';
  });
}
handleLoginRedirect('form[action=""]:has(input[type="tel"])', false);
handleLoginRedirect('form[action=""]:has(input[type="tel"])', true);
