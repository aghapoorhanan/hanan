# راهنمای سریع - Quick Start Guide

## وضعیت فعلی پروژه

✅ **پروژه الان آماده است و با SQLite کار می‌کند**

اگر می‌خواهید از دیتابیس Neon استفاده کنید، مراحل زیر را دنبال کنید:

## مراحل استفاده از Neon

### مرحله 1: ساخت حساب Neon (اگر ندارید)

1. به https://neon.tech بروید
2. Sign up کنید (رایگان)
3. یک پروژه جدید بسازید

### مرحله 2: گرفتن Connection String

1. در داشبورد Neon، روی پروژه کلیک کنید
2. Connection String را کپی کنید

مثال:
```
postgres://user:password@ep-cool-darkness-123456.us-east-2.aws.neon.tech/neondb?sslmode=require
```

### مرحله 3: تنظیم .env

در پوشه `backend` فایل `.env` بسازید:

```bash
cd backend
copy env.example .env   # Windows
# یا
cp env.example .env     # Linux/Mac
```

سپس فایل `.env` را باز کنید و این خط را ویرایش کنید:

```env
# خط 12 را uncomment کنید و connection string خود را قرار دهید:
DATABASE_URL=postgres://user:password@ep-xxxxx.us-east-2.aws.neon.tech/dbname?sslmode=require

# خط 9 را comment کنید:
# DATABASE_URL=postgres://user:password@localhost:5432/hanan
```

### مرحله 4: نصب وابستگی‌ها (اگر نصب نشده)

```bash
pip install -r requirements.txt
```

### مرحله 5: ساخت جداول

```bash
python manage.py migrate
```

### مرحله 6: اجرای سرور

```bash
python manage.py runserver
```

## ✅ تمام!

اگر مشکل داشتید، `backend/README.md` را ببینید یا کنسول را بررسی کنید.

---

**نکته مهم:** فایل `.env` را **هرگز** در Git commit نکنید! (قبلاً در `.gitignore` است)

