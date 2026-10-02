const http = require('http');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const DATA_DIR = path.join(__dirname, 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

// Ensure data directory and inquiries storage file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(ENQUIRIES_FILE)) {
  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify([], null, 2), 'utf8');
}

// ==========================================
// EMAIL CONFIGURATION (Gmail App Password)
// ==========================================
// To enable email notifications:
//   1. Go to your Google Account → Security → 2-Step Verification (must be ON)
//   2. Then go to Security → App Passwords → generate a password for "Mail"
//   3. Set environment variables before starting the server:
//        Windows PowerShell:
//          $env:SMTP_USER="sainttechn@gmail.com"
//          $env:SMTP_PASS="your-16-char-app-password"
//          node server.js
//
// Auto-load .env file if present (local development)
const envFile = path.join(__dirname, '.env');
if (fs.existsSync(envFile)) {
  const envContent = fs.readFileSync(envFile, 'utf8');
  envContent.split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx !== -1) {
        const k = trimmed.slice(0, eqIdx).trim();
        const v = trimmed.slice(eqIdx + 1).trim().replace(/^['"](.*)['"]$/, '$1');
        if (!process.env[k]) {
          process.env[k] = v;
        }
      }
    }
  });
}

const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'sainttechn@gmail.com';

let transporter = null;

if (SMTP_USER && SMTP_PASS) {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });
  console.log(`[EMAIL] Nodemailer configured. Notifications → ${NOTIFY_EMAIL}`);
} else {
  console.log('[EMAIL] ⚠️  SMTP credentials not set. Email notifications are OFF.');
  console.log('[EMAIL]     Set SMTP_USER and SMTP_PASS environment variables to enable.');
}

/**
 * Send email notification for a new enquiry
 */
async function sendEnquiryEmail(enquiry) {
  if (!transporter) return;

  const subject = `[New Enquiry] ${enquiry.name} – ${enquiry.service} | ${enquiry.id}`;

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #0d0d0d; color: #e5e5e5; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 0 auto; background: #111; border: 1px solid #222; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #1a1a2e, #16213e); padding: 32px 28px; }
    .header h1 { margin: 0; font-size: 22px; color: #fff; }
    .header p { margin: 6px 0 0; font-size: 13px; color: #7c8db0; }
    .badge { display: inline-block; background: #1a3a6b; color: #5ba3ff; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 10px; }
    .body { padding: 28px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #7c8db0; margin-bottom: 4px; }
    .value { font-size: 15px; color: #e5e5e5; font-weight: 500; }
    .message-box { background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 8px; padding: 16px; font-size: 14px; color: #ccc; line-height: 1.7; white-space: pre-wrap; }
    .footer { padding: 20px 28px; border-top: 1px solid #222; font-size: 12px; color: #555; }
    a { color: #5ba3ff; }
    .divider { border: none; border-top: 1px solid #222; margin: 0; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>🔔 New Client Enquiry</h1>
      <p>Saint Tech Solutions — Website Contact Form</p>
      <div class="badge">${enquiry.id}</div>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${enquiry.name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${enquiry.email}">${enquiry.email}</a></div>
      </div>
      ${enquiry.phone ? `
      <div class="field">
        <div class="label">Phone / WhatsApp</div>
        <div class="value"><a href="tel:${enquiry.phone}">${enquiry.phone}</a></div>
      </div>` : ''}
      <div class="field">
        <div class="label">Service Interested In</div>
        <div class="value">${enquiry.service}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${enquiry.message}</div>
      </div>
      <div class="field">
        <div class="label">Submitted At</div>
        <div class="value">${new Date(enquiry.createdAt).toLocaleString('en-GB', { timeZone: 'Africa/Accra', dateStyle: 'full', timeStyle: 'short' })}</div>
      </div>
      <div class="field">
        <div class="label">Client IP</div>
        <div class="value" style="color:#555; font-size:13px;">${enquiry.clientIp}</div>
      </div>
    </div>
    <hr class="divider" />
    <div class="footer">
      This email was sent automatically by the Saint Tech Solutions website contact form.<br />
      Reply directly to <a href="mailto:${enquiry.email}">${enquiry.email}</a> to respond to this client.
    </div>
  </div>
</body>
</html>
`;

  const textBody = `
NEW CLIENT ENQUIRY — Saint Tech Solutions
Enquiry ID: ${enquiry.id}

Name:    ${enquiry.name}
Email:   ${enquiry.email}
Phone:   ${enquiry.phone || 'Not provided'}
Service: ${enquiry.service}

Message:
${enquiry.message}

Submitted: ${new Date(enquiry.createdAt).toLocaleString()}
`;

  try {
    await transporter.sendMail({
      from: `"Saint Tech Solutions" <${SMTP_USER}>`,
      to: NOTIFY_EMAIL,
      replyTo: enquiry.email,
      subject,
      text: textBody,
      html: htmlBody
    });
    console.log(`[EMAIL] ✅ Notification sent for enquiry [${enquiry.id}] from ${enquiry.name}`);
  } catch (err) {
    console.error(`[EMAIL] ❌ Failed to send email for [${enquiry.id}]:`, err.message);
  }
}

// Helpers for Reading & Saving Enquiries
function getEnquiries() {
  try {
    const raw = fs.readFileSync(ENQUIRIES_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading enquiries.json:', err.message);
    return [];
  }
}

function saveEnquiries(list) {
  try {
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(list, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error saving enquiries.json:', err.message);
    return false;
  }
}

// MIME Types for Static Assets
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Helper: Parse JSON Body from Incoming Request
function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 1e6) { // 1MB limit
        reject(new Error('Request body too large'));
      }
    });
    req.on('end', () => {
      if (!body.trim()) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(new Error('Invalid JSON payload'));
      }
    });
    req.on('error', reject);
  });
}

function startServer(port) {
  const s = http.createServer(async (req, res) => {
    // CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      return res.end();
    }

    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = parsedUrl.pathname;

    // ==========================================
    // BACKEND API ENDPOINTS
    // ==========================================

    // 1. GET /api/health
    if (req.method === 'GET' && pathname === '/api/health') {
      const enquiries = getEnquiries();
      const healthData = {
        status: 'healthy',
        service: 'Saint Tech Solutions Backend API',
        version: '1.0.0',
        uptimeSeconds: Math.floor(process.uptime()),
        enquiriesCount: enquiries.length,
        emailNotifications: transporter ? 'enabled' : 'disabled',
        timestamp: new Date().toISOString(),
        environment: 'production'
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(healthData, null, 2));
    }

    // 2. POST /api/contact or POST /api/enquiries (Project Inquiry Submission)
    if (req.method === 'POST' && (pathname === '/api/contact' || pathname === '/api/enquiries')) {
      try {
        const payload = await parseJsonBody(req);
        const { name, email, phone, service, message, budget } = payload;

        // Validation
        if (!name || !name.trim()) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: 'Name is required' }));
        }
        if (!email || !email.trim() || !email.includes('@')) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: 'A valid email address is required' }));
        }
        if (!message || !message.trim()) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: 'Project description is required' }));
        }

        const newEnquiry = {
          id: 'STS-' + Date.now().toString(36).toUpperCase() + '-' + Math.floor(100 + Math.random() * 900),
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: (phone || '').trim(),
          service: (service || 'General Inquiry').trim(),
          budget: (budget || 'Flexible').trim(),
          message: message.trim(),
          createdAt: new Date().toISOString(),
          clientIp: req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1',
          status: 'new'
        };

        const existing = getEnquiries();
        existing.unshift(newEnquiry);
        saveEnquiries(existing);

        console.log(`[BACKEND] New enquiry received: [${newEnquiry.id}] from ${newEnquiry.name} <${newEnquiry.email}> for ${newEnquiry.service}`);

        // Send email notification (non-blocking — doesn't delay the response)
        sendEnquiryEmail(newEnquiry).catch(err => {
          console.error('[EMAIL] Background send error:', err.message);
        });

        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
          success: true,
          message: "Enquiry successfully received by Saint Tech Solutions. We will be in touch within one business day.",
          enquiryId: newEnquiry.id,
          createdAt: newEnquiry.createdAt
        }, null, 2));

      } catch (err) {
        console.error('[BACKEND ERROR] Handling contact form:', err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Failed to process inquiry: ' + err.message }));
      }
    }

    // 3. GET /api/enquiries (View Submitted Enquiries)
    if (req.method === 'GET' && pathname === '/api/enquiries') {
      const list = getEnquiries();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({
        total: list.length,
        enquiries: list
      }, null, 2));
    }

    // ==========================================
    // STATIC ASSET SERVING
    // ==========================================
    let decodedPath;
    try {
      decodedPath = decodeURIComponent(pathname);
    } catch (e) {
      decodedPath = pathname;
    }

    let reqPath = decodedPath === '/' ? 'index.html' : decodedPath;
    let filePath = path.join(__dirname, reqPath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          // If asking for a static asset (.jpeg, .png, .css, etc.), return 404 instead of HTML
          if (ext && ext !== '.html') {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            return res.end('404 Asset Not Found: ' + decodedPath);
          }
          fs.readFile(path.join(__dirname, 'index.html'), (indexErr, indexContent) => {
            if (indexErr) {
              res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
              res.end('404 Not Found');
            } else {
              res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
              res.end(indexContent);
            }
          });
        } else {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('500 Server Error: ' + err.code);
        }
      } else {
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-cache'
        });
        res.end(content);
      }
    });
  });

  s.listen(port, () => {
    console.log(`====================================================`);
    console.log(`Saint Tech Solutions Full-Stack Server Running Live!`);
    console.log(`Frontend URL:     http://localhost:${port}`);
    console.log(`Backend Health:   http://localhost:${port}/api/health`);
    console.log(`Enquiries API:    http://localhost:${port}/api/enquiries`);
    console.log(`Email Alerts:     ${transporter ? 'ENABLED → ' + NOTIFY_EMAIL : 'DISABLED (set SMTP_USER & SMTP_PASS)'}`);
    console.log(`====================================================`);
  });

  s.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} in use, trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

const START_PORT = parseInt(process.env.PORT, 10) || 3030;
startServer(START_PORT);
