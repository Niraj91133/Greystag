# The Grey Stag - Developer Workflow

Agar aap dobara is project par kaam shuru karte hain ya website ko live (locally) chalana chahte hain, toh ye commands follow karein:

## 1. Prerequisites (Pehle ye install karein)
Ensure karein ki aapka Node.js installed hai.

## 2. Backend Start Karein
Sabse pehle server aur database connection zaroori hai. Ek naya terminal kholein:
```bash
cd backend
npm install   # (Sirf pehli baar)
npm run dev   # Ye server ko start karega
```

## 3. Frontend Start Karein
Ab website ka interface dekhne ke liye, dusre terminal mein:
```bash
cd frontend
npm install   # (Sirf pehli baar)
npm run dev   # Website http://localhost:3000 par live ho jayegi
```

## 4. Admin Dashboard / Database View
Agar aapko database ka data (Users, Products, Orders) directly dekhna hai:
```bash
cd backend
npx prisma studio
```
Ye `http://localhost:5555` par aapka poora database khol dega.

---

### Shortcuts / Tips:
- **Frontend Dashboard:** `http://localhost:3000/admin` par ja kar products manage karein.
- **Essential Collection:** Agar homepage par products na dikhein, toh Admin mein ja kar product edit karein aur "Essential Collection" checkbox tik karein.
- **Supabase:** Aapka media aur data Supabase cloud par save ho raha hai, isliye server band hone par bhi data delete nahi hoga.

**Happy Coding! 🚀 THE GREY STAG**
