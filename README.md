# Kautilya Research and Consulting
### Modern Corporate Website & Recruitment Portal

A high-converting, enterprise-grade corporate website and recruitment management portal engineered for **Kautilya Research and Consulting**, a firm specializing in strategic talent acquisition, executive search, workforce consulting, and manpower solutions.

---

## 🏛️ Architecture & Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org) with TypeScript
- **CMS & Backend**: [Payload CMS 3.x](https://payloadcms.com) embedded natively inside Next.js via `/admin`
- **Database**: PostgreSQL 16 (utilizing Payload's `@payloadcms/db-postgres` adapter)
- **Styling**: Tailwind CSS with custom corporate dark aesthetic, glowing glassmorphism, and modern typography
- **Form Validation**: [Zod](https://zod.dev) + [React Hook Form](https://react-hook-form.com) for client and server-side validation
- **Icons**: [Lucide React](https://lucide.dev)
- **Deployment**: Dockerized multi-stage container (`Dockerfile` + `docker-compose.yml`) or VPS Node.js with PM2 cluster mode

---

## 🚀 Key Features

### 1. Landing Page (`/`)
- **High-Impact Hero Section**: Value proposition ("Strategic Talent Acquisition & Manpower Solutions") with dual CTAs ("Find Talent" modal and "Explore Careers").
- **Trust & Stats Bar**: 14+ Years of Industry Leadership, 18,500+ Strategic Placements, 98.4% Retention Rate, 26+ Global Sectors.
- **Core Services Grid**: Executive Search & CXO Hiring, Bulk Manpower & Turnkey Staffing, Technical Staff Augmentation, Recruitment Process Outsourcing (RPO), HR Advisory & Talent Mapping, GCC Setup Consulting.
- **Why Choose Us**: Research-driven recruitment methodology, 7-stage domain vetting, rapid 72-hour turnaround, and strict confidentiality protocols.
- **Industries Served & Testimonials**: Interactive sector cards and executive endorsements.
- **Employer Mandate Modal**: Immediate proposal inquiry form with SLA guarantee.

### 2. Careers Portal (`/careers`)
- **Live Search & Multi-Filter**: Real-time filtering across Department, Contract Type (Full-time, Part-time, Contract, Internship), Location (Mumbai, Bengaluru, Delhi NCR, Hyderabad, Remote), and Experience Level.
- **Dynamic Job Cards**: Department badges, salary ranges, location tags, quick-apply triggers, and responsive layout.
- **Empty State**: Friendly reset handling when search queries match zero roles.

### 3. Job Detail & Application Page (`/careers/[slug]`)
- **Dynamic SEO Metadata**: Generated per job post using Next.js `generateMetadata`.
- **Comprehensive Role Breakdown**: Role mission, key responsibilities, candidate requirements, compensation, and executive perquisites.
- **Embedded Application Form**:
  - Full Name, Email, Phone, Current Location, Total Experience, LinkedIn/Portfolio URLs, and Cover Note.
  - Resume file upload (accepting PDF, DOC, DOCX up to 10MB) with drag-and-drop support.
  - Interactive submission states: animated progress indicator, input error handling, and confirmation reference ID generation.

### 4. About & Contact Pages (`/about`, `/contact`)
- **About Us**: Corporate heritage, ancient statecraft philosophy of Kautilya, governance principles, and company growth timeline.
- **Contact Us**: Dedicated enterprise consultation form, office addresses across Mumbai BKC, Bengaluru, Gurugram Cyber City, and Singapore.

---

## 🗄️ Payload CMS Collections Schema

Located in `src/collections/`:

1. **`Jobs` Collection** (`src/collections/Jobs.ts`):
   - `title` (Text, required)
   - `slug` (Text, auto-generated from title, unique)
   - `department` (Select: Tech, Finance, Operations, Healthcare, Executive, HR, Sales)
   - `location` (Text, e.g. "Mumbai, India (Hybrid)")
   - `type` (Select: Full-time, Part-time, Contract, Internship)
   - `experienceLevel` (Select: Entry, Mid, Senior, Executive)
   - `salaryRange` (Text, e.g. "₹38,00,000 - ₹52,00,000 PA")
   - `description` (Textarea, required)
   - `responsibilities` (Array of items)
   - `requirements` (Array of items)
   - `benefits` (Array of items)
   - `status` (Select: `published`, `draft`, `closed`)
   - `publishedDate` (Date)

2. **`Applications` Collection** (`src/collections/Applications.ts`):
   - `job` (Relationship to `jobs`)
   - `fullName` (Text, required)
   - `email` (Email, required)
   - `phone` (Text, required)
   - `currentLocation` (Text)
   - `totalExperience` (Text)
   - `resume` (Relationship to `media` upload)
   - `linkedinUrl` (Text)
   - `coverLetter` (Textarea)
   - `status` (Select: `New`, `Reviewing`, `Shortlisted`, `Offered`, `Rejected`)
   - **Access**: Public `create` allowed for candidate submissions without login; `read`/`update`/`delete` restricted to authenticated staff.

3. **`Media` Collection** (`src/collections/Media.ts`):
   - Upload support for candidate resumes (PDF/DOC/DOCX) and media assets with public create access.

4. **`Users` Collection** (`src/collections/Users.ts`):
   - Authentication-enabled staff collection with RBAC (Super Admin, Talent Lead, Recruiter).

---

## 💻 Local Development Setup

### Prerequisites
- Node.js >= 20.x or 22.x
- npm >= 10.x
- PostgreSQL (local instance or Docker container)

### Step 1: Clone and Install
```bash
git clone <repo-url>
cd krc
npm install --legacy-peer-deps
```

### Step 2: Environment Configuration
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Ensure variables are set:
```env
DATABASE_URI=postgres://postgres:postgres@localhost:5432/krc_payload
PAYLOAD_SECRET=your-secure-random-secret-key-at-least-32-chars
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### Step 3: Run Development Server
```bash
npm run dev
```

Visit:
- **Public Website**: [http://localhost:3000](http://localhost:3000)
- **Careers Portal**: [http://localhost:3000/careers](http://localhost:3000/careers)
- **Payload CMS Admin**: [http://localhost:3000/admin](http://localhost:3000/admin)

### Step 4: Seed Initial Admin & Jobs (Optional)
If your PostgreSQL database is running, populate it with standard jobs and the initial superadmin:
```bash
npm run seed
```
- **Admin Email**: `admin@kautilyaresearch.com`
- **Admin Password**: `KautilyaSecurePass2025!`

---

## 🐳 Docker Deployment

The application includes a production-ready, multi-stage `Dockerfile` and `docker-compose.yml` for single-command orchestration with PostgreSQL.

### Start All Services (Next.js App + PostgreSQL):
```bash
docker compose up -d --build
```

This will automatically:
1. Spin up a persistent PostgreSQL 16 container (`krc_postgres`) with health checks.
2. Build the optimized Next.js + Payload image (`krc_app`).
3. Bind the application to port `3000` and link the persistent media directory.

### Stop Services:
```bash
docker compose down
```

---

## 🖥️ VPS Deployment (Node.js + PM2)

If deploying directly to a Linux VPS (Ubuntu/Debian):

1. **Install Node.js 22 & PM2**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```

2. **Build and Start with PM2**:
   ```bash
   npm install --legacy-peer-deps
   npm run build
   pm2 start ecosystem.config.cjs
   pm2 save
   pm2 startup
   ```

3. **Nginx Reverse Proxy Configuration**:
   ```nginx
   server {
       server_name kautilyaresearch.com www.kautilyaresearch.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           client_max_body_size 25M;
       }
   }
   ```

---

## 🔒 Security & Fiduciary Compliance

- **File Upload Protection**: Server-side MIME validation, size caps (10MB), and sanitization.
- **Access Control**: Public candidate job submission requires no authentication; viewing candidate resumes and dossiers requires active Payload staff session authentication.
- **Audit Trails**: ISO 9001:2015 tracking codes generated for all corporate mandate inquiries and candidate submissions.
