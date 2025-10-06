# 🚀 DEPLOYMENT GUIDE - GitHub Pages

## Make Your Website Live on the Internet!

---

## 📋 WHAT YOU'LL NEED

1. ✅ Your website files (already complete!)
2. ✅ A GitHub account (free)
3. ✅ Git installed on your computer
4. ✅ 10-15 minutes of your time

---

## 🎯 DEPLOYMENT METHODS

### **Method 1: GitHub Desktop (Easiest - Recommended for Beginners)** ⭐
- No command line needed
- Visual interface
- Simple drag & drop

### **Method 2: Git Command Line (Advanced)**
- Uses PowerShell/Terminal
- More control
- Faster for experienced users

---

## 🎨 METHOD 1: GITHUB DESKTOP (RECOMMENDED)

### Step 1: Create GitHub Account
1. Go to: https://github.com/
2. Click "Sign up"
3. Create account with email
4. Verify your email

### Step 2: Install GitHub Desktop
1. Download: https://desktop.github.com/
2. Install the application
3. Sign in with your GitHub account

### Step 3: Create New Repository
1. Open GitHub Desktop
2. Click **"File" → "New Repository"**
3. Fill in details:
   - **Name**: `dwijainfra-website` (or any name you want)
   - **Description**: "DWIJA INFRASTRUCTURES Official Website"
   - **Local Path**: Choose where to save
   - ✅ Check "Initialize this repository with a README"
4. Click **"Create Repository"**

### Step 4: Copy Your Website Files
1. Open the new repository folder (GitHub Desktop shows the path)
2. Copy ALL your website files into this folder:
   ```
   From: D:\Coding\Website\dwijainfra-clone\
   
   Copy these files:
   - index.html
   - css/ (folder)
   - js/ (folder)
   - images/ (folder)
   - documents/ (folder with your PDF)
   - robots.txt
   - All other files
   ```

### Step 5: Commit Changes
1. Go back to GitHub Desktop
2. You'll see all files listed on the left
3. In bottom-left, write commit message:
   - **Summary**: "Initial website deployment"
   - **Description**: "DWIJA INFRASTRUCTURES responsive website"
4. Click **"Commit to main"**

### Step 6: Publish to GitHub
1. Click **"Publish repository"** button (top-right)
2. Uncheck "Keep this code private" (unless you want it private)
3. Click **"Publish repository"**
4. Wait for upload to complete ✅

### Step 7: Enable GitHub Pages
1. Go to your repository on GitHub.com
2. Click **"Settings"** tab (top-right)
3. Scroll down to **"Pages"** section (left sidebar)
4. Under "Source":
   - Branch: Select **"main"**
   - Folder: Select **"/ (root)"**
5. Click **"Save"**
6. Wait 1-2 minutes for deployment

### Step 8: Get Your Live URL
1. Refresh the Settings → Pages page
2. You'll see: **"Your site is live at https://yourusername.github.io/dwijainfra-website/"**
3. Click the link to view your live website! 🎉

---

## 💻 METHOD 2: GIT COMMAND LINE

### Step 1: Install Git
1. Download: https://git-scm.com/download/win
2. Install with default settings
3. Restart PowerShell

### Step 2: Configure Git (First Time Only)
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"
```

### Step 3: Create GitHub Repository
1. Go to: https://github.com/new
2. Repository name: `dwijainfra-website`
3. Description: "DWIJA INFRASTRUCTURES Official Website"
4. Public or Private (your choice)
5. ✅ Check "Add a README file"
6. Click **"Create repository"**

### Step 4: Initialize Git in Your Project
```powershell
cd D:\Coding\Website\dwijainfra-clone
git init
```

### Step 5: Add All Files
```powershell
git add .
```

### Step 6: Commit Files
```powershell
git commit -m "Initial website deployment - DWIJA INFRASTRUCTURES"
```

### Step 7: Connect to GitHub
```powershell
# Replace 'yourusername' with your actual GitHub username
git remote add origin https://github.com/yourusername/dwijainfra-website.git
```

### Step 8: Push to GitHub
```powershell
git branch -M main
git push -u origin main
```

### Step 9: Enable GitHub Pages
1. Go to: https://github.com/yourusername/dwijainfra-website
2. Click **"Settings"** → **"Pages"**
3. Source: Select **"main"** branch, **"/ (root)"** folder
4. Click **"Save"**
5. Your site will be live at: `https://yourusername.github.io/dwijainfra-website/`

---

## 🔧 IMPORTANT: FIX FILE PATHS FOR DEPLOYMENT

Before deploying, you need to update file paths in `index.html`:

### Change Absolute Paths to Relative Paths

**Find and replace in index.html:**

❌ **BEFORE (won't work on GitHub Pages):**
```html
<link rel="icon" href="/assets/favicon.svg" />
<img src="/images/logo.jpeg" />
<link rel="stylesheet" href="/css/style.css" />
<script src="/js/main.js"></script>
```

✅ **AFTER (works on GitHub Pages):**
```html
<link rel="icon" href="./assets/favicon.svg" />
<img src="./images/logo.jpeg" />
<link rel="stylesheet" href="./css/style.css" />
<script src="./js/main.js"></script>
```

**Or use relative paths without the slash:**
```html
<link rel="icon" href="assets/favicon.svg" />
<img src="images/logo.jpeg" />
<link rel="stylesheet" href="css/style.css" />
<script src="js/main.js"></script>
```

### Find All Paths to Update:
```powershell
# Search for all absolute paths in PowerShell
cd D:\Coding\Website\dwijainfra-clone
Select-String -Path index.html -Pattern 'href="/' -CaseSensitive
Select-String -Path index.html -Pattern 'src="/' -CaseSensitive
```

---

## 📝 QUICK PATH FIX SCRIPT

I'll create a script to help you fix all paths automatically:

### Create this PowerShell script: `fix-paths.ps1`
```powershell
# Fix paths for GitHub Pages deployment
$file = "index.html"
$content = Get-Content $file -Raw

# Replace absolute paths with relative paths
$content = $content -replace 'href="/images/', 'href="images/'
$content = $content -replace 'src="/images/', 'src="images/'
$content = $content -replace 'href="/css/', 'href="css/'
$content = $content -replace 'src="/js/', 'src="js/'
$content = $content -replace 'href="/assets/', 'href="assets/'
$content = $content -replace 'href="/documents/', 'href="documents/'

# Save the file
Set-Content $file $content

Write-Host "✅ Paths fixed! Your website is ready for deployment." -ForegroundColor Green
```

### Run it:
```powershell
cd D:\Coding\Website\dwijainfra-clone
.\fix-paths.ps1
```

---

## 🌐 CUSTOM DOMAIN (OPTIONAL)

Want to use your own domain like `www.dwijainfra.com`?

### Step 1: Buy a Domain
- GoDaddy: https://www.godaddy.com/
- Namecheap: https://www.namecheap.com/
- Google Domains: https://domains.google/

### Step 2: Configure DNS
Add these records in your domain provider:

**A Records (all pointing to GitHub):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record:**
```
www → yourusername.github.io
```

### Step 3: Add Custom Domain in GitHub
1. Go to Settings → Pages
2. Under "Custom domain"
3. Enter: `www.dwijainfra.com`
4. Click Save
5. ✅ Check "Enforce HTTPS"

**Wait 24-48 hours for DNS propagation**

---

## 📊 AFTER DEPLOYMENT CHECKLIST

- [ ] Website loads at GitHub Pages URL
- [ ] All images display correctly
- [ ] Logo appears in navbar
- [ ] CSS styles applied
- [ ] JavaScript works (mobile menu, filters, etc.)
- [ ] Contact form submits
- [ ] PDF download works
- [ ] Back-to-top button appears
- [ ] Google Maps loads
- [ ] Mobile responsive on actual phone
- [ ] Test on different browsers

---

## 🔄 UPDATING YOUR WEBSITE

### Using GitHub Desktop:
1. Make changes to your local files
2. Open GitHub Desktop
3. Write commit message
4. Click "Commit to main"
5. Click "Push origin"
6. Wait 1-2 minutes for GitHub Pages to update

### Using Git Command Line:
```powershell
cd D:\Coding\Website\dwijainfra-clone
git add .
git commit -m "Updated website content"
git push
```

**Changes go live in 1-2 minutes!** ⚡

---

## ⚠️ COMMON ISSUES & SOLUTIONS

### Issue 1: "404 - Page Not Found"
**Solution:**
- Check repository name in URL matches
- Ensure index.html is in root folder (not in subfolder)
- Wait 5 minutes after enabling Pages

### Issue 2: "Images Not Loading"
**Solution:**
- Fix absolute paths (/ to ./ or remove /)
- Check image filenames match exactly (case-sensitive)
- Verify images are in the repository

### Issue 3: "CSS Not Applied"
**Solution:**
- Fix CSS path in index.html
- Check css/style.css exists
- Clear browser cache (Ctrl + Shift + R)

### Issue 4: "PDF Download Not Working"
**Solution:**
- Ensure PDF is in documents/ folder
- Check filename matches exactly
- Verify path is relative (documents/company-profile.pdf)

### Issue 5: "Changes Not Showing"
**Solution:**
- Wait 1-2 minutes after push
- Clear browser cache
- Check GitHub Actions for build errors

---

## 🎯 YOUR LIVE WEBSITE URL

After deployment, your website will be at:

```
https://yourusername.github.io/dwijainfra-website/
```

**Replace:**
- `yourusername` = Your GitHub username
- `dwijainfra-website` = Your repository name

---

## 📱 TEST YOUR LIVE WEBSITE

### Desktop Testing:
1. Open URL in Chrome
2. Open URL in Firefox
3. Open URL in Edge
4. Test all features

### Mobile Testing:
1. Open URL on your phone
2. Test in mobile browser
3. Check responsiveness
4. Test touch interactions

### Share Your Website:
- WhatsApp contacts
- Email signature
- Business cards
- Google My Business
- Social media profiles

---

## 🎓 LEARNING RESOURCES

### GitHub Pages Documentation:
https://docs.github.com/en/pages

### Git Basics:
https://git-scm.com/doc

### GitHub Desktop Guide:
https://docs.github.com/en/desktop

---

## 📞 SUPPORT

### GitHub Support:
https://support.github.com/

### Community Forum:
https://github.community/

---

## 🎉 CONGRATULATIONS!

Once deployed, your DWIJA INFRASTRUCTURES website will be:
- ✅ **Live on the internet** 24/7
- ✅ **Accessible worldwide** from any device
- ✅ **Free hosting** by GitHub
- ✅ **HTTPS secure** automatically
- ✅ **Easy to update** with Git

---

## 📝 QUICK DEPLOYMENT SUMMARY

```
1. Create GitHub account
2. Install GitHub Desktop (or Git)
3. Create new repository
4. Copy website files
5. Commit changes
6. Push to GitHub
7. Enable GitHub Pages in Settings
8. Get your live URL!

⏱️ Total time: 10-15 minutes
💰 Total cost: FREE
🌐 Result: Professional live website!
```

---

**YOUR WEBSITE WILL BE LIVE AND ACCESSIBLE TO THE WORLD!** 🌍✨

**Need help?** Let me know and I'll guide you through any step! 🚀
