# First Motors Shela Review System

This is a complete review collection system for First Motors Shela, designed to:
1. Generate QR codes that customers scan
2. Show a premium keyword-rich review
3. Allow customers to copy the review
4. Automatically redirect to Google Maps to submit the review
5. Include admin tools for managing and tracking reviews

## Files Included

- `index.html` - Main landing page with links to all components
- `simple_review_page.html` - Customer-facing review page (what QR codes point to)
- `qr_code_generator.html` - Tool to generate downloadable QR codes
- `apple_review_system.html` - Admin/management system for tracking reviews
- `vercel.json` - Vercel deployment configuration

## Vercel Deployment Instructions

### Option 1: Using Vercel Dashboard (Recommended)
1. Push these files to a GitHub/GitLab/Bitbucket repository
2. Go to [Vercel.com](https://vercel.com) and click "New Project"
3. Import your repository
4. Vercel will automatically detect the static site and deploy it
5. Your site will be live at a URL like `https://your-project-name.vercel.app`

### Option 2: Using Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. From this directory: `vercel`
4. Follow the prompts to deploy

## How the System Works

### Customer Flow:
1. Customer scans QR code (generated from `qr_code_generator.html`)
2. Lands on `simple_review_page.html`
3. Views premium keyword-rich review
4. Taps "Copy Review" button
5. Review text copied to clipboard
6. Automatically redirected to Google Maps review page
7. Customer pastes review and submits

### Admin Flow:
1. Visit `apple_review_system.html`
2. Use the form to collect reviews with car make/model, service, technician, rating, comments
3. Generate 500 sample reviews for testing
4. View all submitted reviews
5. Export reviews as JSON
6. Clear all reviews when needed

## Key Features
- ✅ Apple-inspired design with red/white/black theme
- ✅ iPad/tablet optimized for waiting area use
- ✅ Premium keyword integration (PPF, Ceramic Coating, Denting Painting, Periodic Service, XPEL, Garware, GYEON, Gtechniq, Glasurit, etc.)
- ✅ Location specificity: "First Motors Shela • Opposite Orchid Blues Residency"
- ✅ One-click copy to clipboard with automatic redirect to Google Maps
- ✅ Zero server dependencies - works offline after initial load
- ✅ Complete review tracking and management system
- ✅ 500 humanized sample review generator
- ✅ Exact Google Maps redirect using Place ID from your URL

## Files Description

### index.html
Main landing page with navigation to all components.

### simple_review_page.html
What customers see after scanning QR code:
- Shows premium keyword-rich review
- "Copy Review" button
- Auto-redirect to Google Maps after copying

### qr_code_generator.html
Tool to generate QR codes:
- Creates downloadable PNG QR codes
- Points to `simple_review_page.html`
- Includes instructions for use

### apple_review_system.html
Admin/management system:
- Form to collect reviews with car make/model, service, technician, rating, comments
- Automatic review text generation
- 500 sample review generator
- Review tracking, viewing, and export
- Clear all reviews function

## Local Testing
To test locally before deploying:
1. Open any HTML file in a browser
2. Or run: `python -m http.server 8080` in this directory
3. Visit `http://localhost:8080`

## Support
For questions or enhancements, please contact the developer.