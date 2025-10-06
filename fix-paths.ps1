# Fix paths for GitHub Pages deployment
# Run this before deploying to GitHub Pages

Write-Host "🔧 Fixing paths for GitHub Pages deployment..." -ForegroundColor Cyan
Write-Host ""

$file = "index.html"

# Check if file exists
if (-not (Test-Path $file)) {
    Write-Host "❌ Error: index.html not found!" -ForegroundColor Red
    Write-Host "   Make sure you're in the project root directory." -ForegroundColor Yellow
    exit 1
}

# Read the file
$content = Get-Content $file -Raw

# Count replacements
$imageCount = ([regex]::Matches($content, 'href="/images/')).Count + ([regex]::Matches($content, 'src="/images/')).Count
$cssCount = ([regex]::Matches($content, 'href="/css/')).Count
$jsCount = ([regex]::Matches($content, 'src="/js/')).Count
$assetsCount = ([regex]::Matches($content, 'href="/assets/')).Count
$docsCount = ([regex]::Matches($content, 'href="/documents/')).Count

Write-Host "Found paths to fix:" -ForegroundColor Yellow
Write-Host "  - Images: $imageCount paths" -ForegroundColor White
Write-Host "  - CSS: $cssCount paths" -ForegroundColor White
Write-Host "  - JavaScript: $jsCount paths" -ForegroundColor White
Write-Host "  - Assets: $assetsCount paths" -ForegroundColor White
Write-Host "  - Documents: $docsCount paths" -ForegroundColor White
Write-Host ""

# Replace absolute paths with relative paths
$content = $content -replace 'href="/images/', 'href="images/'
$content = $content -replace 'src="/images/', 'src="images/'
$content = $content -replace 'href="/css/', 'href="css/'
$content = $content -replace 'src="/js/', 'src="js/'
$content = $content -replace 'href="/assets/', 'href="assets/'
$content = $content -replace 'href="/documents/', 'href="documents/'

# Also fix any remaining absolute paths (in case some use different patterns)
$content = $content -replace 'url\("/images/', 'url("images/'
$content = $content -replace "url\('/images/", "url('images/"

# Save the file
Set-Content $file $content -NoNewline

Write-Host "✅ Success! All paths have been fixed." -ForegroundColor Green
Write-Host ""
Write-Host "📋 Summary:" -ForegroundColor Cyan
Write-Host "  - Absolute paths (/) converted to relative paths" -ForegroundColor White
Write-Host "  - Your website is now ready for GitHub Pages deployment" -ForegroundColor White
Write-Host ""
Write-Host "🚀 Next steps:" -ForegroundColor Yellow
Write-Host "  1. Push your code to GitHub" -ForegroundColor White
Write-Host "  2. Enable GitHub Pages in repository settings" -ForegroundColor White
Write-Host "  3. Your website will be live!" -ForegroundColor White
Write-Host ""
Write-Host "📖 See DEPLOYMENT-GUIDE.md for detailed instructions" -ForegroundColor Cyan
