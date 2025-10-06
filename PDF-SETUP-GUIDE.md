# 📄 VISUAL GUIDE: Where to Place Your PDF

```
Your Workspace Structure:
═══════════════════════════════════════════════════════════════

D:\
└── Coding\
    └── Website\
        └── dwijainfra-clone\          ← YOUR WEBSITE FOLDER
            ├── 📄 index.html
            ├── 📄 run.py
            ├── 📄 start-site.bat
            ├── 📄 start-site.ps1
            ├── 📁 css\
            ├── 📁 js\
            ├── 📁 images\
            │   ├── logo.jpeg
            │   ├── 1.jpg
            │   ├── 2.jpg
            │   ├── 3.png
            │   ├── 4.png
            │   ├── 5.jpg
            │   └── 6.jpg
            └── 📁 documents\              ← PLACE YOUR PDF HERE!
                ├── README.md
                ├── QUICK-START.md
                └── ⚠️ company-profile.pdf  ← YOUR PDF GOES HERE!
```

---

## 🎯 EXACT STEPS TO ADD YOUR PDF

### Step 1: Find Your PDF File
- Locate your company profile PDF on your computer
- It can be anywhere (Desktop, Downloads, Documents, etc.)

### Step 2: Rename It
- **Current name**: `anything.pdf` or `Company Brochure.pdf` etc.
- **New name**: `company-profile.pdf` (exactly, all lowercase, no spaces)

### Step 3: Copy to Documents Folder
**Windows File Explorer Path:**
```
D:\Coding\Website\dwijainfra-clone\documents\
```

**PowerShell Command (Alternative):**
```powershell
# Navigate to your project
cd D:\Coding\Website\dwijainfra-clone\documents\

# Copy your PDF here (update path to your PDF location)
Copy-Item "C:\Users\YourName\Desktop\YourPDF.pdf" -Destination "company-profile.pdf"
```

### Step 4: Verify It's There
**Check with File Explorer:**
1. Open: `D:\Coding\Website\dwijainfra-clone\documents\`
2. You should see: `company-profile.pdf`

**Check with PowerShell:**
```powershell
cd D:\Coding\Website\dwijainfra-clone\documents\
dir
# You should see company-profile.pdf listed
```

### Step 5: Test the Download
1. **Start your website:**
   ```powershell
   cd D:\Coding\Website\dwijainfra-clone
   python run.py
   ```

2. **Open browser:**
   ```
   http://127.0.0.1:8000/
   ```

3. **Find the button:**
   - Scroll down to "Featured Projects" section
   - Look for the teal button at the top: "📥 Download Company Profile"

4. **Click and test:**
   - Click the button
   - PDF should open in new tab or download
   - ✅ Success!

---

## 🔍 Where is the Download Button?

### Location on Website:
```
┌─────────────────────────────────────────────┐
│  NAVBAR (Logo + DWIJA INFRASTRUCTURES)      │
├─────────────────────────────────────────────┤
│  HERO SECTION                               │
│  "Building Excellence in Engineering..."    │
├─────────────────────────────────────────────┤
│  ABOUT SECTION                              │
│  Company info, stats, expertise             │
├─────────────────────────────────────────────┤
│  SERVICES SECTION                           │
│  6 service cards with details               │
├─────────────────────────────────────────────┤
│  ┌───────────────────────────────────────┐ │
│  │  FEATURED PROJECTS                    │ │
│  │  ================================     │ │
│  │                                       │ │
│  │  [Our Portfolio]                     │ │
│  │  Featured Projects                   │ │
│  │  Showcasing our commitment...        │ │
│  │                                       │ │
│  │  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │ │
│  │  ┃ 📥 Download Company Profile  ┃  │ │ ← HERE!
│  │  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │ │
│  │  (Teal gradient button)              │ │
│  │                                       │ │
│  │  [All Projects] [Residential] [...] │ │
│  │                                       │ │
│  │  [Project 1] [Project 2] [Project 3]│ │
│  │  ...project cards...                 │ │
│  └───────────────────────────────────────┘ │
├─────────────────────────────────────────────┤
│  CONTACT SECTION                            │
└─────────────────────────────────────────────┘
```

---

## 🎨 What the Button Looks Like

### Desktop View:
```
┌──────────────────────────────────────────┐
│                                          │
│    [Our Portfolio]                       │
│    Featured Projects                     │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  📥  Download Company Profile      │ │
│  └────────────────────────────────────┘ │
│  (Teal gradient, white text)            │
│                                          │
└──────────────────────────────────────────┘
```

### Mobile View:
```
┌───────────────────┐
│                   │
│ [Our Portfolio]   │
│ Featured Projects │
│                   │
│ ┌───────────────┐ │
│ │ 📥 Download   │ │
│ │ Company       │ │
│ │ Profile       │ │
│ └───────────────┘ │
│                   │
└───────────────────┘
```

---

## ⚠️ Common Mistakes to Avoid

### ❌ WRONG Filenames:
- `Company Profile.pdf` (has space)
- `company-profile.PDF` (wrong case)
- `CompanyProfile.pdf` (no hyphen)
- `dwija-profile.pdf` (wrong name)

### ✅ CORRECT Filename:
- `company-profile.pdf` (exact match!)

### ❌ WRONG Locations:
- `D:\Coding\Website\dwijainfra-clone\company-profile.pdf` (not in documents folder)
- `D:\Coding\Website\dwijainfra-clone\images\company-profile.pdf` (wrong folder)
- `D:\Coding\Website\documents\company-profile.pdf` (wrong path)

### ✅ CORRECT Location:
- `D:\Coding\Website\dwijainfra-clone\documents\company-profile.pdf` (exact!)

---

## 📊 File Requirements

### ✅ Recommended:
- **Format**: PDF (Adobe PDF)
- **Size**: Under 10 MB (for fast downloads)
- **Pages**: 4-12 pages (company overview length)
- **Content**: 
  - Company introduction
  - Services offered
  - Past projects/portfolio
  - Team & credentials
  - Contact information

### ⚠️ Avoid:
- Very large files (over 20 MB) - slow to download
- Password-protected PDFs - users can't open
- Corrupted or damaged PDFs - won't open

---

## 🧪 Testing Checklist

After adding your PDF:

- [ ] File is named `company-profile.pdf` (exact)
- [ ] File is in `documents` folder
- [ ] Server is running (`python run.py`)
- [ ] Website opens at `http://127.0.0.1:8000/`
- [ ] Button is visible in Featured Projects section
- [ ] Clicking button opens/downloads PDF
- [ ] PDF opens correctly
- [ ] PDF displays all content properly

---

## 🆘 Troubleshooting

### Problem: "404 - File Not Found"
**Solution**: 
- Check filename is exactly `company-profile.pdf`
- Check file is in `documents` folder
- Restart server

### Problem: "PDF Won't Open"
**Solution**:
- Check PDF isn't corrupted
- Try opening PDF manually first
- Check file permissions
- Try different browser

### Problem: "Button Not Visible"
**Solution**:
- Clear browser cache (Ctrl + Shift + R)
- Check you're in Featured Projects section
- Scroll down from top of page

### Problem: "PDF Opens Instead of Downloads"
**Solution**:
- This is normal browser behavior
- Users can still save it
- If you want forced download, let me know

---

## 🎉 Success!

Once you see this:
```
✅ PDF file in correct location
✅ Correct filename
✅ Server running
✅ Button visible on website
✅ PDF opens/downloads when clicked

🎊 YOU'RE DONE! 🎊
```

Your website is 100% complete and ready to use!

---

**Need Help?** Check these files:
- `documents/README.md` - Detailed instructions
- `documents/QUICK-START.md` - Quick guide
- `PROJECT-COMPLETE.md` - Full project summary
