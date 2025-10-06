# ✅ DEPLOYMENT CHECKLIST - GitHub Pages

## Pre-Deployment Tasks

### 1. Prepare Your Files
- [ ] Add your `company-profile.pdf` to `/documents/` folder
- [ ] Test website locally at http://127.0.0.1:8000/
- [ ] Verify all images load correctly
- [ ] Check all links work
- [ ] Test contact form
- [ ] Test on mobile view (Chrome DevTools)

### 2. Fix File Paths
- [ ] Run the path fix script:
  ```powershell
  cd D:\Coding\Website\dwijainfra-clone
  .\fix-paths.ps1
  ```
- [ ] Verify script completed successfully
- [ ] Test website locally again to confirm it still works

---

## GitHub Setup

### 3. Create GitHub Account (if needed)
- [ ] Go to https://github.com/
- [ ] Click "Sign up"
- [ ] Enter email, password, username
- [ ] Verify email address
- [ ] ✅ Account ready!

### 4. Choose Deployment Method

**Option A: GitHub Desktop (Recommended for Beginners)**
- [ ] Download from https://desktop.github.com/
- [ ] Install application
- [ ] Sign in with GitHub account
- [ ] Continue to Method A below

**Option B: Git Command Line (For Advanced Users)**
- [ ] Download Git from https://git-scm.com/
- [ ] Install with default settings
- [ ] Configure Git (see guide)
- [ ] Continue to Method B below

---

## METHOD A: GitHub Desktop

### 5. Create Repository
- [ ] Open GitHub Desktop
- [ ] File → New Repository
- [ ] Name: `dwijainfra-website`
- [ ] Description: "DWIJA INFRASTRUCTURES Official Website"
- [ ] Choose local path
- [ ] Check "Initialize with README"
- [ ] Click "Create Repository"

### 6. Copy Website Files
- [ ] Open repository folder (shown in GitHub Desktop)
- [ ] Copy ALL files from `D:\Coding\Website\dwijainfra-clone\`
- [ ] Paste into repository folder
- [ ] Verify all folders copied: css/, js/, images/, documents/
- [ ] Verify index.html is in root (not in subfolder)

### 7. Commit Changes
- [ ] Go back to GitHub Desktop
- [ ] See list of changed files on left
- [ ] Summary: "Initial website deployment"
- [ ] Description: "DWIJA INFRASTRUCTURES responsive website"
- [ ] Click "Commit to main"

### 8. Publish to GitHub
- [ ] Click "Publish repository" (top bar)
- [ ] Uncheck "Keep this code private" (unless you want private)
- [ ] Click "Publish repository"
- [ ] Wait for upload to complete
- [ ] ✅ Repository is now on GitHub!

---

## METHOD B: Git Command Line

### 5. Configure Git (First Time Only)
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"
```

### 6. Create Repository on GitHub
- [ ] Go to https://github.com/new
- [ ] Repository name: `dwijainfra-website`
- [ ] Description: "DWIJA INFRASTRUCTURES Official Website"
- [ ] Choose Public or Private
- [ ] Check "Add a README file"
- [ ] Click "Create repository"
- [ ] Copy repository URL

### 7. Initialize and Push
```powershell
cd D:\Coding\Website\dwijainfra-clone
git init
git add .
git commit -m "Initial website deployment"
git branch -M main
git remote add origin https://github.com/yourusername/dwijainfra-website.git
git push -u origin main
```

- [ ] All commands executed successfully
- [ ] Files uploaded to GitHub

---

## Enable GitHub Pages (BOTH METHODS)

### 9. Configure GitHub Pages
- [ ] Go to your repository: https://github.com/yourusername/dwijainfra-website
- [ ] Click "Settings" tab (top-right)
- [ ] Click "Pages" in left sidebar
- [ ] Under "Source":
  - [ ] Branch: Select "main"
  - [ ] Folder: Select "/ (root)"
- [ ] Click "Save"
- [ ] Wait 1-2 minutes

### 10. Get Your Live URL
- [ ] Refresh the Pages settings page
- [ ] See: "Your site is live at https://yourusername.github.io/dwijainfra-website/"
- [ ] Click the URL
- [ ] ✅ Your website is LIVE!

---

## Post-Deployment Testing

### 11. Test Live Website
- [ ] Website loads completely
- [ ] Navbar appears correctly
- [ ] Logo displays
- [ ] All sections visible (Hero, About, Services, Projects, Contact)
- [ ] Images load in all sections
- [ ] Service cards show properly
- [ ] Project filters work
- [ ] Contact form loads
- [ ] Google Maps embedded
- [ ] PDF download button works
- [ ] Back-to-top button appears when scrolling
- [ ] Footer displays correctly

### 12. Mobile Testing
- [ ] Open on your phone
- [ ] Test in portrait mode
- [ ] Test in landscape mode
- [ ] Hamburger menu works
- [ ] All sections readable
- [ ] Buttons are tappable
- [ ] Forms are usable
- [ ] No horizontal scrolling

### 13. Browser Testing
- [ ] Chrome (Desktop)
- [ ] Firefox (Desktop)
- [ ] Safari (Desktop/Mobile)
- [ ] Edge (Desktop)
- [ ] Chrome (Mobile)

### 14. Performance Check
- [ ] Page loads in under 3 seconds
- [ ] Images load properly
- [ ] No console errors (F12 → Console)
- [ ] Smooth scrolling works
- [ ] Animations play correctly

---

## Share Your Website

### 15. Promote Your Website
- [ ] Copy your live URL
- [ ] Add to email signature
- [ ] Share on WhatsApp
- [ ] Post on LinkedIn
- [ ] Add to business cards
- [ ] Update Google My Business
- [ ] Share with clients

### 16. SEO Setup (Optional)
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Create Google My Business listing
- [ ] Add to online directories

---

## Future Updates

### 17. Making Changes
**When you want to update your website:**

**Using GitHub Desktop:**
1. [ ] Edit files locally
2. [ ] Open GitHub Desktop
3. [ ] Review changes
4. [ ] Write commit message
5. [ ] Click "Commit to main"
6. [ ] Click "Push origin"
7. [ ] Wait 1-2 minutes
8. [ ] Changes are live!

**Using Git Command Line:**
```powershell
cd D:\Coding\Website\dwijainfra-clone
# Make your changes to files
git add .
git commit -m "Description of changes"
git push
# Wait 1-2 minutes, changes are live!
```

---

## Troubleshooting

### Common Issues:

**❌ 404 Error - Page Not Found**
- [ ] Check repository name in URL
- [ ] Verify index.html is in root folder
- [ ] Wait 5 more minutes
- [ ] Check GitHub Pages is enabled

**❌ Images Not Loading**
- [ ] Verify paths are relative (not starting with /)
- [ ] Check image files are in repository
- [ ] Check filename case matches exactly
- [ ] Clear browser cache

**❌ CSS Not Applied**
- [ ] Check css/style.css is in repository
- [ ] Verify path in index.html is relative
- [ ] Clear browser cache
- [ ] Check browser console for errors

**❌ Changes Not Showing**
- [ ] Wait 2-3 minutes after push
- [ ] Clear browser cache (Ctrl + Shift + R)
- [ ] Check commit was successful
- [ ] Try incognito/private mode

---

## Success Indicators

### ✅ You're Successfully Deployed When:
- [x] You can access your website from any device
- [x] All sections load properly
- [x] Images and styles display correctly
- [x] Mobile responsive works perfectly
- [x] Forms submit successfully
- [x] No console errors
- [x] Website works on multiple browsers

---

## Your Website Info

**Fill this in after deployment:**

```
GitHub Repository: https://github.com/____________/dwijainfra-website
Live Website URL: https://____________.github.io/dwijainfra-website/
Deployed Date: October __, 2025
```

---

## 🎉 DEPLOYMENT COMPLETE!

Once all checkboxes are ✅, your website is:
- 🌍 **Live on the internet**
- 📱 **Accessible from anywhere**
- 🚀 **Professionally hosted**
- 💰 **Completely FREE**
- ⚡ **Fast and reliable**

---

## 📞 Need Help?

If you get stuck:
1. Check `DEPLOYMENT-GUIDE.md` for detailed instructions
2. Review error messages carefully
3. Search GitHub documentation
4. Ask for help with specific error messages

---

**CONGRATULATIONS ON YOUR LIVE WEBSITE!** 🎊🎉🚀

Your DWIJA INFRASTRUCTURES website is now accessible to clients worldwide!
