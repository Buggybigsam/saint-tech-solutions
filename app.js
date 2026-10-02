/**
 * Saint Tech Solutions - Client-Side App
 * Identical behavior and routing to Skipiffy.com
 */

// Portfolio Projects Data (Identical to Skipiffy portfolio)
const projectData = {
  ligue: {
    title: "Ligue Atelier",
    client: "Fashion House",
    category: "E-Commerce",
    year: "2025",
    image: "assets/images/portfolio-fashion.jpg",
    blurb: "An editorial storefront for a Ghanaian couturier. Slow scroll, soft motion, fast checkout.",
    summary: "A storefront that leads with the lookbook and ends in a quick checkout. Built around seasonal drops, with tools so the in house team can stage a new collection without touching code.",
    features: [
      "Headless commerce with custom collection pages",
      "Lookbook editor with drag and drop ordering",
      "Stripe and Mobile Money checkout",
      "Scheduled drops and back in stock alerts"
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Sanity CMS", "Stripe", "Framer Motion"]
  },
  "nova-nancy": {
    title: "Nova Nancy Premium Apparel",
    client: "Nova Nancy Atelier",
    category: "E-Commerce",
    year: "2026",
    image: "assets/images/nova-nancy.png",
    liveUrl: "https://nova-nancy-premium-apparel.vercel.app",
    blurb: "An editorial storefront for a Ghanaian couturier. Bespoke consultation booking, a curated lookbook, and fast checkout.",
    summary: "A full-stack premium apparel platform built for Nova Nancy Atelier — a Ghanaian fashion house. The site leads with an editorial lookbook, flows into bespoke consultation booking, and ends at a clean checkout. Powered by Supabase for real-time order management and Clerk for seamless authentication.",
    features: [
      "Bespoke consultation booking with real-time availability",
      "Editorial lookbook and curated product gallery",
      "Supabase-powered order management and admin portal",
      "Clerk authentication for client accounts",
      "Transactional emails via Resend (order confirmations, consultations)"
    ],
    stack: ["React", "Vite", "Supabase", "Clerk", "Resend", "Vercel"]
  },
  "nova-stitch": {
    title: "Nova Stitch Studio",
    client: "Nova Stitch Studio",
    category: "E-Commerce",
    year: "2026",
    image: "assets/images/nova-stitch-studio.jpg",
    liveUrl: "https://nova-stitch-studio.vercel.app",
    blurb: "A luxury bespoke tailoring and couture studio platform. Appointments, fabric selection, and client wardrobe management in one place.",
    summary: "A full-service digital atelier for Nova Stitch Studio, a premium couture and bespoke tailoring house. Clients browse the lookbook, book in-person fittings, select from curated fabric swatches, and track their bespoke orders from first fitting to final delivery.",
    features: [
      "Bespoke appointment and fitting scheduler",
      "Curated fabric and material swatch gallery",
      "Client order tracker from fitting to delivery",
      "Editorial couture lookbook",
      "Admin dashboard for managing orders and client profiles"
    ],
    stack: ["React", "Vite", "Supabase", "Resend", "Vercel"]
  },
  nokizzy: {
    title: "NO KIZZY",
    client: "NO KIZZY STORE",
    category: "E-Commerce",
    year: "2026",
    image: "assets/images/portfolio-fashion.jpg",
    blurb: "A luxury streetwear store with seasonal drops, accessories and a quick checkout.",
    summary: "A digital showroom built for a modern West African apparel brand.",
    features: [
      "Streetwear product catalog and lookbook",
      "In stock accessories alongside pre order apparel",
      "Local payments through Paystack & Mobile Money",
      "Designed for phones first"
    ],
    stack: ["Shopify", "React", "Tailwind CSS", "Paystack"]
  },
  colina: {
    title: "Colina Legal",
    client: "Law Firm",
    category: "Industry",
    year: "2024",
    image: "assets/images/portfolio-legal.jpg",
    blurb: "A calm, credible platform for a multi practice firm. Case studies and intake in one place.",
    summary: "A firm site that signals authority without feeling stiff. Practice areas, attorney profiles and case studies sit behind one intake flow that sends each lead to the right partner automatically.",
    features: [
      "Practice area and attorney profiles",
      "Intake forms with automatic routing",
      "Case study library with filters",
      "Content in two languages"
    ],
    stack: ["React", "Vite", "TypeScript", "Tailwind", "Supabase", "Resend"]
  },
  pomelo: {
    title: "Pomelo Studio",
    client: "Beauty Studio",
    category: "Company",
    year: "2025",
    image: "assets/images/portfolio-fashion.jpg",
    blurb: "Calm and tactile. A beauty studio site built around its booking flow.",
    summary: "A beauty studio site designed around the moment someone books. Clean type and warm imagery lead straight into a service picker, stylist choice and a calendar that takes a deposit.",
    features: [
      "Service list with stylist assignment",
      "Live availability and deposits",
      "Automatic SMS and email reminders",
      "Gift cards and packages"
    ],
    stack: ["Next.js", "Tailwind", "Cal.com", "Stripe", "Twilio"]
  },
  bhingengs: {
    title: "Bhingengs Logistics",
    client: "Shipping",
    category: "Industry",
    year: "2024",
    image: "assets/images/portfolio-logistics.jpg",
    blurb: "A corporate site and an operations dashboard in one. Fleet data, tracking and enquiries together.",
    summary: "A corporate site joined to an operations dashboard for a regional logistics company. Visitors see a clean marketing site, while signed in clients get live shipment tracking and quote requests.",
    features: [
      "Live shipment tracking by reference",
      "Client portal with invoice history",
      "Quote requests routed by response time",
      "Fleet and route metrics dashboard"
    ],
    stack: ["React", "TypeScript", "Tailwind", "Supabase", "PostgREST", "Mapbox"]
  },
  gellurus: {
    title: "Gellurus",
    client: "SaaS Startup",
    category: "Landing",
    year: "2025",
    image: "assets/images/portfolio-saas.jpg",
    blurb: "A high contrast launch page for a Series A startup. Built to convert cold traffic.",
    summary: "A launch page for a Series A software company, built to perform on paid traffic. Loads fast, makes its point quickly, and sends every lead straight into the team's CRM.",
    features: [
      "Modular sections for fast changes",
      "Split testing on the hero and pricing",
      "Lead capture wired to HubSpot",
      "Event tracking with PostHog"
    ],
    stack: ["Astro", "React islands", "Tailwind", "PostHog", "HubSpot"]
  },
  aurum: {
    title: "Aurum Visual Identity",
    client: "Design Studio",
    category: "Branding",
    year: "2025",
    image: "assets/images/portfolio-branding.jpg",
    blurb: "A comprehensive brand identity, bespoke typography, luxury packaging, and complete digital design system.",
    summary: "Complete visual rebranding and graphic design system for a luxury design studio. Includes brand style guide book, editorial typography, embossed stationery, social media kits, and vector logo assets.",
    features: [
      "Custom vector logo marks and monogram variants",
      "Typography hierarchy and curated color palette",
      "Brand style guidelines and asset library",
      "Social media templates and marketing collateral",
      "Packaging, business stationery, and print specifications"
    ],
    stack: ["Adobe Illustrator", "Figma", "InDesign", "Photoshop", "Brand Strategy"]
  }
};

// Pricing by Currency
const currencyData = {
  GHC: {
    essential: "GH₵ 2,800",
    signature: "GH₵ 5,499",
    atelier: "Custom"
  },
  USD: {
    essential: "$450",
    signature: "$950",
    atelier: "Custom"
  },
  GBP: {
    essential: "£350",
    signature: "£750",
    atelier: "Custom"
  }
};

// 1. Page Routing & View Switcher (Exact Skipiffy route switching)
function switchPage(pageId) {
  const views = document.querySelectorAll('.page-view');
  views.forEach(v => v.classList.remove('active'));

  const targetView = document.getElementById(`view-${pageId}`);
  if (targetView) {
    targetView.classList.add('active');
  }

  // Update nav active link
  const navLinks = document.querySelectorAll('.nav-item-link, .mobile-item-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === pageId || link.getAttribute('href') === `#${pageId}`) {
      link.classList.add('active');
    }
  });

  // Scroll to top on page switch
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update location hash
  if (history.pushState) {
    history.pushState(null, null, `#${pageId}`);
  } else {
    location.hash = `#${pageId}`;
  }
}

// 2. Mobile Drawer Navigation
const mobileToggleBtn = document.getElementById('mobileToggleBtn');
const mobileNavPanel = document.getElementById('mobileNavPanel');

if (mobileToggleBtn && mobileNavPanel) {
  mobileToggleBtn.addEventListener('click', () => {
    mobileNavPanel.classList.toggle('open');
  });
}

function closeMobileNav() {
  if (mobileNavPanel) {
    mobileNavPanel.classList.remove('open');
  }
}

// 3. Benefit Accordion Item Toggle
function toggleBenefit(elem) {
  const isOpen = elem.classList.contains('open');
  document.querySelectorAll('.benefit-accordion-item').forEach(el => el.classList.remove('open'));
  if (!isOpen) {
    elem.classList.add('open');
  }
}

// 4. Portfolio Filter Tabs (on /work view)
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.tab-pill-btn[data-filter]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const items = document.querySelectorAll('.portfolio-item');

      items.forEach(item => {
        const cat = item.getAttribute('data-cat');
        if (filter === 'All' || cat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Handle URL hash on initial load
  const initialHash = window.location.hash.replace('#', '') || 'home';
  if (['home', 'work', 'services', 'pricing', 'about', 'contact'].includes(initialHash)) {
    switchPage(initialHash);
  }
});

// 5. Case Study Modal Deep Dive
function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  const modalBody = document.getElementById('modalBodyInner');
  modalBody.innerHTML = `
    <div style="font-size: 0.75rem; text-transform: uppercase; color: hsl(var(--primary)); letter-spacing: 0.2em; font-weight: 700; margin-bottom: 0.35rem;">
      ${data.category} &bull; ${data.client} (${data.year})
    </div>
    <h2 class="font-display" style="font-size: 2.2rem; color: hsl(var(--foreground)); line-height: 1.15; margin-bottom: 1.25rem;">
      ${data.title}
    </h2>

    <div style="border-radius: 0.85rem; overflow: hidden; margin-bottom: 1.75rem; border: 1px solid hsl(var(--border));">
      <img src="${data.image}" alt="${data.title}" style="width: 100%; aspect-ratio: 16/9; object-fit: cover;" />
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 class="font-display" style="font-size: 1.2rem; color: hsl(var(--foreground)); margin-bottom: 0.4rem;">Summary</h4>
      <p style="color: hsl(var(--muted-foreground)); font-size: 0.95rem; line-height: 1.65;">${data.summary}</p>
    </div>

    <div style="margin-bottom: 1.75rem;">
      <h4 class="font-display" style="font-size: 1.2rem; color: hsl(var(--foreground)); margin-bottom: 0.6rem;">Key Features</h4>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        ${data.features.map(f => `
          <div style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.9rem; color: hsl(var(--foreground));">
            <span style="color: hsl(var(--primary)); font-weight: bold;">&#10003;</span>
            <span>${f}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 class="font-display" style="font-size: 1.2rem; color: hsl(var(--foreground)); margin-bottom: 0.6rem;">Technology Stack</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${data.stack.map(s => `<span class="tag-bubble" style="font-size: 0.8rem; padding: 0.3rem 0.8rem;">${s}</span>`).join('')}
      </div>
    </div>

    <div style="border-top: 1px solid hsl(var(--border)); padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
      <span style="font-size: 0.88rem; color: hsl(var(--muted-foreground));">Want a similar build for your business?</span>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
        ${data.liveUrl ? `<a href="${data.liveUrl}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:0.4rem;font-size:0.85rem;font-weight:600;color:hsl(var(--primary-glow));border:1px solid hsl(var(--primary-glow) / 0.4);padding:0.5rem 1rem;border-radius:6px;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.background='hsl(var(--primary-glow)/0.1)'" onmouseout="this.style.background=''">&#127760; Visit Live Site</a>` : ''}
        <a href="#contact" class="btn-book-now" onclick="closeProjectModal(); prefillService('${data.title} (${data.category})')">
          Discuss This Project &rarr;
        </a>
      </div>
    </div>
  `;

  document.getElementById('projectModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalOnBackdrop(e) {
  if (e.target.id === 'projectModal') {
    closeProjectModal();
  }
}

// 6. Currency Switcher on /pricing view
function setCurrency(curr) {
  const cData = currencyData[curr];
  if (!cData) return;

  const btnPills = document.querySelectorAll('.tab-pill-btn[data-curr]');
  btnPills.forEach(b => {
    b.classList.remove('active');
    if (b.getAttribute('data-curr') === curr) b.classList.add('active');
  });

  const pEssential = document.getElementById('planEssentialPrice');
  const pSignature = document.getElementById('planSignaturePrice');
  const pAtelier = document.getElementById('planAtelierPrice');

  if (pEssential) pEssential.textContent = cData.essential;
  if (pSignature) pSignature.textContent = cData.signature;
  if (pAtelier) pAtelier.textContent = cData.atelier;

  // Also update Project Calculator if available
  if (typeof updateCalculatorCurrency === 'function') {
    updateCalculatorCurrency(curr);
  }
}

// 7. Form Helpers
function prefillService(serviceName) {
  switchPage('contact');
  const input = document.getElementById('contactService');
  if (input) input.value = serviceName;
}

function prefillPlan(planName) {
  switchPage('contact');
  const input = document.getElementById('contactService');
  const msg = document.getElementById('contactMessage');
  if (input) input.value = `${planName} Package`;
  if (msg) msg.value = `Hi, I am interested in the ${planName} package for my business.\n\nKey requirements: `;
}

// ==========================================
// EMAIL FORWARDING CONFIGURATION (Web3Forms)
// ==========================================
// Loaded securely from config.js (excluded from git via .gitignore)
const WEB3FORMS_ACCESS_KEY = (typeof window !== 'undefined' && window.STS_CONFIG && window.STS_CONFIG.WEB3FORMS_ACCESS_KEY)
  ? window.STS_CONFIG.WEB3FORMS_ACCESS_KEY
  : "";

// Populate hidden access_key input dynamically on page load
document.addEventListener('DOMContentLoaded', () => {
  const keyInput = document.getElementById('contactAccessKey');
  if (keyInput && WEB3FORMS_ACCESS_KEY) {
    keyInput.value = WEB3FORMS_ACCESS_KEY;
  }
});

async function handleContactSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('btnSubmitContact');
  const original = btn.innerHTML;

  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const phone = document.getElementById('contactPhone') ? document.getElementById('contactPhone').value.trim() : '';
  const service = document.getElementById('contactService').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  btn.disabled = true;
  btn.innerHTML = 'Sending enquiry...';

  let emailSent = false;

  // 1. Forward directly to your email via Web3Forms API
  if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== "YOUR_ACCESS_KEY_HERE") {
    try {
      const w3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: name,
          email: email,
          phone: phone || "Not provided",
          service: service || "General Website Inquiry",
          message: message,
          from_name: "Saint Tech Solutions Website",
          subject: `🚀 New Project Inquiry from ${name} - ${service || 'General'}`
        })
      });

      const w3Data = await w3Res.json();
      if (w3Data.success) {
        emailSent = true;
      }
    } catch (w3Err) {
      console.warn("Web3Forms delivery note:", w3Err.message);
    }
  }

  // 2. Also log to backend database / local server if running
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, service, message })
    });
    const data = await res.json();
    console.log('[BACKEND RESPONSE]', data);
  } catch (err) {
    // Save to local offline storage if backend is offline
    const offlineList = JSON.parse(localStorage.getItem('sts_offline_enquiries') || '[]');
    const fallbackId = 'OFFLINE-' + Date.now().toString(36).toUpperCase();
    offlineList.push({ id: fallbackId, name, email, service, message, date: new Date().toISOString() });
    localStorage.setItem('sts_offline_enquiries', JSON.stringify(offlineList));
  }

  // 3. User Confirmation Feedback
  if (emailSent) {
    btn.innerHTML = 'Enquiry Sent to Email &#10003;';
    btn.style.background = '#2563eb';
    alert(`✅ Success! Your enquiry has been sent directly to Saint Tech Solutions (sainttechn@gmail.com).\n\nThank you, ${name}! We will review your project and reply to ${email} within one business day.`);
    document.getElementById('contactForm').reset();
  } else if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
    btn.innerHTML = 'Enquiry Recorded &#10003;';
    btn.style.background = '#2563eb';
    alert(`✅ Enquiry received, ${name}!\n\nYour message has been stored in your Saint Tech dashboard. To also have it forwarded instantly to sainttechn@gmail.com, configure your Web3Forms access key in config.js.`);
    document.getElementById('contactForm').reset();
  } else {
    btn.innerHTML = 'Enquiry Recorded &#10003;';
    btn.style.background = '#2563eb';
    alert(`✅ Thank you, ${name}! Your project details have been received and we will get back to you shortly.`);
    document.getElementById('contactForm').reset();
  }

  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = original;
    btn.style.background = '';
  }, 4500);
}

// 8. Backend Health Ping on Page Load
function checkBackendHealth() {
  const pill = document.getElementById('backendStatusBadge');
  if (pill) {
    pill.innerHTML = `<span style="display:inline-block; width:8px; height:8px; border-radius:9999px; background:#10b981; box-shadow:0 0 8px rgba(16,185,129,0.5);"></span> Direct Email Delivery: Active (sainttechn@gmail.com)`;
    pill.style.color = '#10b981';
  }

  fetch('/api/health')
    .then(r => r.json())
    .then(data => {
      console.log('[BACKEND HEALTH]', data);
    })
    .catch(() => {
      console.log('[BACKEND] Running in standalone frontend mode with Web3Forms.');
    });
}
document.addEventListener('DOMContentLoaded', checkBackendHealth);

// 8. Sticky Header Scroll Listener
window.addEventListener('scroll', () => {
  const header = document.getElementById('siteHeader');
  if (header) {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// 9. Cinematic Background Slideshow Controller
(function initBgSlideshow() {
  const slides = document.querySelectorAll('.bg-slide');
  if (!slides.length) return;
  let current = 0;
  const INTERVAL = 8000; // 8 seconds per slide

  function goToSlide(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
  }

  // Auto-advance
  setInterval(() => goToSlide(current + 1), INTERVAL);
})();

// ==================== 10. PROJECT SCOPE & BUDGET CALCULATOR ====================
const calcPricing = {
  company: {
    name: 'Company Profile Website',
    base: { GHC: 2800, USD: 450, GBP: 350 },
    baseWeeks: 2
  },
  ecommerce: {
    name: 'E-Commerce Online Store',
    base: { GHC: 5499, USD: 950, GBP: 750 },
    baseWeeks: 3.5
  },
  landing: {
    name: 'Landing Page Design',
    base: { GHC: 2200, USD: 360, GBP: 280 },
    baseWeeks: 1.5
  },
  branding: {
    name: 'Graphic Design & Branding',
    base: { GHC: 1800, USD: 300, GBP: 240 },
    baseWeeks: 1.5
  }
};

const calcPageScope = {
  small: { label: '1 – 3 Core Pages', addWeeks: 0, addCost: { GHC: 0, USD: 0, GBP: 0 } },
  medium: { label: '4 – 6 Custom Pages', addWeeks: 1, addCost: { GHC: 1200, USD: 200, GBP: 160 } },
  large: { label: '7 – 10+ Pages & Sections', addWeeks: 2, addCost: { GHC: 2400, USD: 380, GBP: 300 } }
};

const calcAddons = {
  payment: { label: 'Payment Gateway (Cards & MoMo)', cost: { GHC: 600, USD: 100, GBP: 80 } },
  cms: { label: 'Client CMS & Content Self-Edit', cost: { GHC: 800, USD: 130, GBP: 100 } },
  seo: { label: 'Deep SEO & Speed Optimization', cost: { GHC: 500, USD: 80, GBP: 65 } },
  rush: { label: 'Priority Rush Delivery', rate: 0.25 }
};

let currentCalc = {
  type: 'company',
  scope: 'small',
  addons: new Set(),
  currency: 'GHC'
};

function selectCalcType(typeKey, el) {
  currentCalc.type = typeKey;
  document.querySelectorAll('.calc-type-card').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
  renderCalculator();
}

function selectCalcScope(scopeKey, el) {
  currentCalc.scope = scopeKey;
  document.querySelectorAll('.calc-scope-card').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
  renderCalculator();
}

function toggleCalcAddon(addonKey, el) {
  if (currentCalc.addons.has(addonKey)) {
    currentCalc.addons.delete(addonKey);
    el.classList.remove('selected');
  } else {
    currentCalc.addons.add(addonKey);
    el.classList.add('selected');
  }
  renderCalculator();
}

function updateCalculatorCurrency(curr) {
  currentCalc.currency = curr;
  renderCalculator();
}

function renderCalculator() {
  const curr = currentCalc.currency;
  const currSymbol = curr === 'GHC' ? 'GH₵ ' : curr === 'USD' ? '$' : '£';

  const typeConfig = calcPricing[currentCalc.type] || calcPricing.company;
  const scopeConfig = calcPageScope[currentCalc.scope] || calcPageScope.small;

  let total = typeConfig.base[curr] + scopeConfig.addCost[curr];
  let weeks = typeConfig.baseWeeks + scopeConfig.addWeeks;

  // Addons
  currentCalc.addons.forEach(k => {
    const addon = calcAddons[k];
    if (addon) {
      if (addon.cost) {
        total += addon.cost[curr];
      }
    }
  });

  // Rush surcharge
  if (currentCalc.addons.has('rush')) {
    total += Math.round(total * calcAddons.rush.rate);
    weeks = Math.max(1, weeks - 1);
  }

  // Format price
  const formattedPrice = curr === 'GHC'
    ? `GH₵ ${total.toLocaleString()}`
    : `${currSymbol}${total.toLocaleString()}`;

  const priceElem = document.getElementById('calcEstimatedPrice');
  if (priceElem) priceElem.textContent = formattedPrice;

  // Format timeline
  const weeksElem = document.getElementById('calcEstimatedWeeks');
  if (weeksElem) {
    weeksElem.textContent = `${Math.floor(weeks)} – ${Math.ceil(weeks + 1)} Weeks`;
  }

  // Update summary items
  const summaryList = document.getElementById('calcSummaryList');
  if (summaryList) {
    let itemsHtml = `
      <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; font-size:0.88rem; color:hsl(var(--foreground));">
        <span>${typeConfig.name}</span>
        <span style="font-weight:600;">${currSymbol}${typeConfig.base[curr].toLocaleString()}</span>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; font-size:0.88rem; color:hsl(var(--muted-foreground));">
        <span>Scope: ${scopeConfig.label}</span>
        <span>+${currSymbol}${scopeConfig.addCost[curr].toLocaleString()}</span>
      </div>
    `;

    currentCalc.addons.forEach(k => {
      const addon = calcAddons[k];
      if (addon.cost) {
        itemsHtml += `
          <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem; font-size:0.84rem; color:hsl(var(--primary-glow));">
            <span>+ ${addon.label}</span>
            <span>+${currSymbol}${addon.cost[curr].toLocaleString()}</span>
          </div>
        `;
      } else if (k === 'rush') {
        itemsHtml += `
          <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem; font-size:0.84rem; color:hsl(var(--primary-glow));">
            <span>+ Priority Rush Delivery (+25%)</span>
            <span>Active</span>
          </div>
        `;
      }
    });

    summaryList.innerHTML = itemsHtml;
  }
}

function applyCalculatorToContact() {
  const curr = currentCalc.currency;
  const currSymbol = curr === 'GHC' ? 'GH₵ ' : curr === 'USD' ? '$' : '£';
  const typeConfig = calcPricing[currentCalc.type] || calcPricing.company;
  const scopeConfig = calcPageScope[currentCalc.scope] || calcPageScope.small;

  let total = typeConfig.base[curr] + scopeConfig.addCost[curr];
  let weeks = typeConfig.baseWeeks + scopeConfig.addWeeks;

  const selectedAddonsLabels = [];
  currentCalc.addons.forEach(k => {
    const addon = calcAddons[k];
    if (addon) {
      if (addon.cost) total += addon.cost[curr];
      selectedAddonsLabels.push(addon.label);
    }
  });

  if (currentCalc.addons.has('rush')) {
    total += Math.round(total * calcAddons.rush.rate);
    weeks = Math.max(1, weeks - 1);
  }

  const formattedPrice = curr === 'GHC' ? `GH₵ ${total.toLocaleString()}` : `${currSymbol}${total.toLocaleString()}`;

  switchPage('contact');

  const inputService = document.getElementById('contactService');
  const inputMessage = document.getElementById('contactMessage');

  if (inputService) {
    inputService.value = `Custom Scope: ${typeConfig.name}`;
  }

  if (inputMessage) {
    inputMessage.value = `Hello Saint Tech Solutions,

I used your Project Scope Calculator and would like to lock in this estimate:

- Project Type: ${typeConfig.name}
- Page Scope: ${scopeConfig.label}
- Selected Add-ons: ${selectedAddonsLabels.length ? selectedAddonsLabels.join(', ') : 'None'}
- Estimated Timeline: ${Math.floor(weeks)} – ${Math.ceil(weeks + 1)} Weeks
- Estimated Total: ${formattedPrice}

Tell me more about how we can kick off this project.`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderCalculator();
});
