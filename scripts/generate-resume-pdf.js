const puppeteer = require('puppeteer');
const path = require('path');

async function generateResumePDF() {
  console.log('Starting PDF generation...');
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport to ensure consistent rendering
    await page.setViewport({ width: 1200, height: 1600 });
    
    // Navigate to the resume page
    console.log('Navigating to resume page...');
    await page.goto('http://localhost:3001/resume', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for content to load
    await page.waitForSelector('h1', { timeout: 5000 });
    
    // Add custom styles for PDF generation
    await page.addStyleTag({
      content: `
        /* Hide navigation for PDF */
        .no-print, header {
          display: none !important;
        }
        
        /* Ensure proper spacing and sizing */
        body {
          margin: 0;
          padding: 0;
          font-size: 11px !important;
        }
        
        /* Adjust main content padding for PDF */
        main {
          padding-top: 0 !important;
        }
        
        /* Scale down all text elements */
        h1 {
          font-size: 1.75rem !important;
          margin-bottom: 0.5rem !important;
        }
        
        h2 {
          font-size: 1.1rem !important;
          margin-bottom: 0.5rem !important;
          margin-top: 1rem !important;
          padding-bottom: 0.25rem !important;
        }
        
        h3 {
          font-size: 0.95rem !important;
          margin-bottom: 0.1rem !important;
        }
        
        p, li {
          font-size: 0.75rem !important;
          line-height: 1.3 !important;
        }
        
        /* Reduce spacing between sections */
        .space-y-12 > * + * {
          margin-top: 0.75rem !important;
        }
        
        /* Reduce spacing in experience items */
        .space-y-12 > div > div > * + * {
          margin-top: 0.5rem !important;
        }
        
        /* Adjust experience item spacing */
        .flex.space-x-6 {
          gap: 0.5rem !important;
        }
        
        /* Smaller margins for bullet points */
        ul {
          margin: 0 !important;
          padding-left: 1rem !important;
        }
        
        ul li {
          margin-bottom: 0.1rem !important;
          padding-left: 0.25rem !important;
        }
        
        /* Ensure images are properly sized */
        img {
          max-width: 100%;
          height: auto;
          width: 40px !important;
          height: 40px !important;
        }
        
        /* Better print colors */
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        
        /* Tighten up the layout */
        .text-5xl {
          font-size: 1.75rem !important;
        }
        
        .text-3xl {
          font-size: 1.1rem !important;
        }
        
        .text-2xl {
          font-size: 0.95rem !important;
        }
        
        .text-lg {
          font-size: 0.75rem !important;
        }
        
        .text-sm {
          font-size: 0.65rem !important;
        }
        
        .mb-4 {
          margin-bottom: 0.25rem !important;
        }
        
        .mt-4 {
          margin-top: 0.25rem !important;
        }
        
        .py-8 {
          padding-top: 0.5rem !important;
          padding-bottom: 0.5rem !important;
        }
        
        /* Tighter experience content */
        .flex-grow > * + * {
          margin-top: 0.1rem !important;
        }
        
        /* Reduce logo container size */
        .flex-shrink-0 {
          width: 48px !important;
          margin-right: 12px !important;
        }
        
        /* About section specific */
        div:has(> h2:contains("About")) + p {
          margin-bottom: 0.75rem !important;
        }
        
        /* Experience section adjustments */
        .border-b {
          border-bottom-width: 0.5px !important;
        }
        
        /* Tighter job meta info */
        .text-gray-500 {
          margin-bottom: 0.25rem !important;
        }
        
        /* Remove extra padding from main container */
        .p-8 {
          padding: 0 !important;
        }
        
        /* Adjust width for better use of space */
        .max-w-4xl {
          max-width: 100% !important;
        }
      `
    });
    
    // Generate PDF
    console.log('Generating PDF...');
    const pdfBuffer = await page.pdf({
      path: path.join(__dirname, '../Chris_Stanley_Resume.pdf'),
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.3in',
        right: '0.3in',
        bottom: '0.3in',
        left: '0.3in'
      },
      displayHeaderFooter: false,
      preferCSSPageSize: false
    });
    
    console.log('PDF generated successfully!');
    console.log(`PDF saved to: ${path.join(__dirname, '../Chris_Stanley_Resume.pdf')}`);
    
  } catch (error) {
    console.error('Error generating PDF:', error);
  } finally {
    await browser.close();
  }
}

// Run the script
generateResumePDF().catch(console.error); 