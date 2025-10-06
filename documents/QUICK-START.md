# 📄 Quick Guide: Adding Your Company Profile PDF

## Step-by-Step Instructions

### 1. Prepare Your PDF
- Make sure your PDF is ready
- Recommended size: Under 10MB for fast downloads
- Should include:
  - Company overview
  - Services offered
  - Past projects
  - Credentials & certifications
  - Contact information

### 2. Rename Your PDF
- **Important**: The filename MUST be exactly: `company-profile.pdf`
- No spaces, no capital letters, no special characters

### 3. Copy PDF to Documents Folder
```
Location: D:\Coding\Website\dwijainfra-clone\documents\
```

**Windows File Explorer Steps:**
1. Open File Explorer (Windows Key + E)
2. Navigate to: `D:\Coding\Website\dwijainfra-clone\documents\`
3. Copy your renamed PDF (`company-profile.pdf`) into this folder

### 4. Test the Download
1. Make sure your local server is running:
   ```powershell
   python run.py
   ```
   OR
   ```powershell
   .\start-site.ps1
   ```

2. Open browser: `http://127.0.0.1:8000/`

3. Scroll to **Featured Projects** section

4. Click the **"Download Company Profile"** button (teal gradient button at top)

5. Your PDF should download or open in a new tab ✅

---

## Current Setup

The download button is located at the **top of the Featured Projects section** with:
- **Link**: `/documents/company-profile.pdf`
- **Design**: Teal gradient button with download icon
- **Behavior**: Opens in new tab
- **Mobile**: Fully responsive

---

## Alternative: If You Want a Different Filename

If you prefer a different filename (e.g., `dwija-company-brochure.pdf`), you need to:

1. Update the link in `index.html`:
   - Find: `href="/documents/company-profile.pdf"`
   - Replace with: `href="/documents/dwija-company-brochure.pdf"`

2. Place your PDF with that exact name in the documents folder

---

## Troubleshooting

### PDF Download Not Working?
1. Check filename is exactly `company-profile.pdf`
2. Check file is in `documents` folder
3. Restart your local server
4. Clear browser cache (Ctrl + Shift + R)
5. Check browser console for errors (F12)

### PDF Opens in Browser Instead of Downloading?
- This is normal browser behavior
- Users can still save the PDF from the browser
- If you want force download, let me know and I can add a download attribute

---

## Need Help?

If you encounter any issues:
1. Check the file path is correct
2. Ensure server is running
3. Verify filename matches exactly
4. Check file permissions (should be readable)

---

**Your PDF button is ready to use once you add the file!** 🎉
