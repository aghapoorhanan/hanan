# 🚀 راهنمای Deploy سایت HANAN - hananad.ir

## ✅ اطلاعات شما:
- **دامنه:** hananad.ir
- **Host:** ایران سرور
- **روش Deploy:** Netlify
- **GitHub:** دارید

---

## 📋 مرحله 1: آماده‌سازی Git Repository

### 1.1: باز کردن PowerShell/Terminal در پوشه پروژه

```powershell
# مطمئن شوید که در پوشه HANAN هستید:
cd "C:\Users\Aria Device\OneDrive\دسکتاپ\HANAN"
```

### 1.2: Initialize کردن Git

```powershell
git init
```

### 1.3: Add کردن فایل‌ها

```powershell
git add .
```

### 1.4: Commit کردن

```powershell
git commit -m "First commit - HANAN website"
```

---

## 📤 مرحله 2: آپلود به GitHub

### 2.1: ساخت Repository در GitHub

1. به https://github.com بروید و Login کنید
2. کلیک روی **+** > **New repository**
3. اطلاعات:
   - **Repository name:** `HANAN-website`
   - **Description:** `HANAN Advertisement Agency Website`
   - **Public** انتخاب کنید (یا Private اگر می‌خواهید)
   - ❌ **Initialize with README** را تیک نزنید
4. **Create repository** کلیک کنید

### 2.2: Push به GitHub

```powershell
# در PowerShell:

git branch -M main

# این خط را با URL واقعی repository خودتان جایگزین کنید:
git remote add origin https://github.com/YOUR_USERNAME/HANAN-website.git

# Push کنید:
git push -u origin main
```

⚠️ **نکته:** `YOUR_USERNAME` را با نام کاربری GitHub خودتان جایگزین کنید!

---

## 🌐 مرحله 3: Deploy در Netlify

### 3.1: ساخت Account در Netlify

1. به https://app.netlify.com بروید
2. **Sign up with GitHub** کلیک کنید
3. GitHub خود را authorize کنید

### 3.2: Deploy کردن سایت

1. **Add new site** > **Import an existing project**
2. **GitHub** کلیک کنید
3. اگر مورد نیاز است، **Authorize Netlify** را بزنید
4. Repository **HANAN-website** را انتخاب کنید
5. تنظیمات:
   - **Build command:** (خالی بگذارید)
   - **Publish directory:** `./`
6. **Deploy site** کلیک کنید

✅ **تبریک! سایت شما در Netlify deploy شد!**

یک URL مثل این دریافت می‌کنید: `https://random-name-12345.netlify.app`

---

## 🔗 مرحله 4: وصل کردن دامنه hananad.ir

### 4.1: اضافه کردن دامنه در Netlify

1. در Netlify > **Site settings**
2. **Domain management** کلیک کنید
3. **Add custom domain**
4. **hananad.ir** وارد کنید
5. **Continue**
6. **Verify** کلیک کنید
7. Netlify به شما می‌گوید که DNS را تنظیم کنید

### 4.2: تنظیمات DNS در ایران سرور

**این مراحل را در پنل ایران سرور انجام دهید:**

1. وارد پنل ایران سرور شوید: https://iran-server.com
2. به **مدیریت DNS** یا **DNS Management** بروید
3. رکوردهای زیر را اضافه کنید:

#### رکورد 1:
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 3600
```

#### رکورد 2:
```
Type: CNAME
Name: www
Value: سایت-شما.netlify.app (نام واقعی که Netlify به شما داده)
TTL: 3600
```

**مثال:**
اگر Netlify URL شما `happy-panda-12345.netlify.app` است:
```
Type: CNAME
Name: www
Value: happy-panda-12345.netlify.app
TTL: 3600
```

4. **ذخیره** کنید

---

## ⏰ مرحله 5: صبر کردن...

⚠️ **DNS Propagation** معمولاً **24 تا 48 ساعت** طول می‌کشد!

### چک کردن وضعیت:

```powershell
# در PowerShell:
nslookup hananad.ir
```

یا از سایت:
- https://dnschecker.org
- دامنه `hananad.ir` را وارد کنید
- باید IP `75.2.60.5` را ببینید

---

## 🔒 مرحله 6: SSL Certificate (اتوماتیک!)

Netlify به صورت خودکار SSL رایگان برای شما نصب می‌کند!

### اگر SSL نصب نشد:

1. در Netlify > **Site settings** > **Domain management**
2. **Verify DNS configuration** کلیک کنید
3. **Provision certificate** کلیک کنید
4. چند دقیقه صبر کنید

---

## ✅ تست نهایی

بعد از 24 ساعت، در مرورگر باز کنید:

- ✅ http://hananad.ir
- ✅ https://hananad.ir (با SSL)
- ✅ http://www.hananad.ir
- ✅ https://www.hananad.ir

**سایت شما باید کامل کار کند!** 🎉

---

## 🆘 مشکلات رایج و راه حل

### مشکل 1: DNS کار نمی‌کند
**راه حل:** 24 ساعت صبر کنید + TTL را 3600 بگذارید

### مشکل 2: SSL نصب نمی‌شود
**راه حل:** در Netlify دوباره **Provision certificate** بزنید

### مشکل 3: تصاویر نمایش داده نمی‌شوند
**راه حل:** مطمئن شوید همه مسیرها relative هستند (با `public/` شروع می‌شوند)

---

## 📞 اگر مشکل داشتید:

1. **Netlify Support:** https://www.netlify.com/support/
2. **DNS Check:** https://dnschecker.org
3. **ایران سرور:** تماس با پشتیبانی ایران سرور

---

**موفق باشید! 🚀**

بانام **HANAN** حرفه‌ای دیده شوید!

