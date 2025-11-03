# راهنمای Deploy کردن سایت HANAN با دامنه اختصاصی

## 🚀 گزینه 1: Deploy روی Netlify (توصیه می‌شود - رایگان)

### مراحل Deploy:

#### مرحله 1: آماده‌سازی پروژه
پروژه شما آماده است! فایل `netlify.toml` قبلاً وجود دارد.

#### مرحله 2: Push به GitHub
```bash
# اگر قبلاً Git نصب نکرده‌اید:
git init
git add .
git commit -m "Initial commit"

# ایجاد repository در GitHub و push
git remote add origin https://github.com/YOUR_USERNAME/HANAN.git
git branch -M main
git push -u origin main
```

#### مرحله 3: Deploy در Netlify
1. **ورود به Netlify:** https://app.netlify.com
2. **ایجاد حساب رایگان** (یا ورود)
3. **Add new site** > **Import an existing project**
4. **اتصال GitHub** و انتخاب repository
5. **تنظیمات Deploy:**
   - Build command: (خالی بگذارید - HTML استاتیک است)
   - Publish directory: `./`
6. **Deploy site** کلیک کنید

#### مرحله 4: وصل کردن دامنه

**در داشبورد Netlify:**

1. **Site settings** > **Domain management**
2. **Add custom domain** کلیک کنید
3. دامنه خود را وارد کنید (مثلاً: `yourdomain.com`)
4. **Verify DNS** کلیک کنید

5. **در تنظیمات DNS دامنه‌تان این موارد را اضافه کنید:**

```
نوع (Type): A
نام (Name): @
مقدار (Value): 75.2.60.5

نوع (Type): CNAME
نام (Name): www
مقدار (Value): yoursite.netlify.app
```

6. **SSL Certificate**
   - Netlify به طور خودکار SSL رایگان می‌دهد
   - چند دقیقه صبر کنید تا SSL نصب شود

### ⚠️ نکات مهم:
- DNS propagation معمولاً 24 تا 48 ساعت طول می‌کشد
- برای دامنه‌های `.ir` از ایران پنل یا nic.ir وارد شوید
- برای دامنه‌های بین‌المللی از سرویس DNS همان شرکت استفاده کنید

---

## 🌐 گزینه 2: Deploy روی Vercel (رایگان)

اگر می‌خواهید روی Vercel deploy کنید:

```bash
# نصب Vercel CLI
npm i -g vercel

# در پوشه پروژه:
vercel

# Follow the prompts
```

سپس در dashboard Vercel دامنه خود را اضافه کنید.

---

## 🖥️ گزینه 3: هاست اشتراکی (cPanel)

اگر هاست اشتراکی خریداری کرده‌اید:

1. **ورود به cPanel**
2. **File Manager** > **public_html**
3. **آپلود تمام فایل‌های پروژه**
4. **تغییر نام index.html** به index اصلی (اگر نیاز بود)
5. **تنظیمات دامنه** در دامنه پنل

---

## 📋 چک‌لیست قبل از Deploy

- [ ] همه فایل‌ها در پوشه root هستند
- [ ] `netlify.toml` وجود دارد
- [ ] فایل‌های حساس را در `.gitignore` قرار داده‌اید
- [ ] تمام لینک‌ها relative path هستند (مثل `public/hananlogo.jpg`)
- [ ] فایل‌های تست و اضافی را پاک کرده‌اید

---

## 🔧 تنظیمات پس از Deploy

### 1. بررسی مسیرها
تمام مسیرها باید relative باشند:
```html
✅ <img src="public/hananlogo.jpg">
❌ <img src="/home/user/public/hananlogo.jpg">
❌ <img src="C:\Users\...">
```

### 2. Favicon
فایل favicon شما الان به درستی تنظیم شده:
```html
<link rel="icon" type="image/jpeg" href="public/hananlogo.jpg">
```

### 3. Clean Build
برای build تمیز، فایل‌های زیر را در Git ignore کنید:
```
__pycache__/
*.pyc
*.sqlite3
.env
node_modules/
*.log
```

### 4. Performance
برای بهبود performance:
- تصاویر را optimize کنید
- از WebP استفاده کنید
- CDN برای فایل‌های static

---

## 🆘 مشکلات رایج

### مشکل 1: DNS درست کار نمی‌کند
**راه حل:**
```bash
# چک کردن DNS
nslookup yourdomain.com

# یا
dig yourdomain.com
```

### مشکل 2: SSL Certificate
**راه حل:** در Netlify > SSL/TLS > Force HTTPS را enable کنید

### مشکل 3: فایل‌ها لود نمی‌شوند
**راه حل:** تمام مسیرها را relative کنید (با `public/` شروع شود)

---

## 📞 پشتیبانی

- **Netlify Support:** https://support.netlify.com
- **Vercel Docs:** https://vercel.com/docs
- **DNS Check:** https://dnschecker.org

---

**موفق باشید! 🎉**

