# Job Application Tracker - Simple Plan

## Current Progress
- **Status:** Backend Development (Week 1)
- **Completed:** 
  - Project scaffolding
  - Prisma schema definition (User & Application models)
  - Database migrations (`init` and `add_application_fields`)
  - Prisma client setup
- **Next Step:** Building API endpoints (starting with `GET /api/applications`)

## Tech Stack

**Backend:**
- Node.js + TypeScript
- Express
- PostgreSQL
- Prisma ORM
- JWT for auth

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

---

## Database Schema

**User table:**
- id, email, password (hashed), name

**Application table:**
- id, userId
- company, role, status, vibe (1-5)
- notes, layoffInfo, url
- dateFirstContact, dateLastUpdate
- timestamps

---

## Backend Structure

```
backend/
├── src/
│   ├── index.ts          # Express app setup
│   ├── routes.ts         # All API routes in one file
│   ├── middleware.ts     # JWT auth middleware
│   └── db.ts             # Prisma client export
├── prisma/
│   └── schema.prisma
└── package.json
```

**API Endpoints:**
- `POST /api/auth/login` - Login, returns JWT
- `GET /api/applications` - List all (requires auth)
- `POST /api/applications` - Create new
- `PUT /api/applications/:id` - Update existing
- `DELETE /api/applications/:id` - Delete

---

## Frontend Structure

```
frontend/
├── app/
│   ├── login/
│   │   └── page.tsx        # Login form
│   ├── dashboard/
│   │   └── page.tsx        # Main view - list + add/edit
│   └── layout.tsx
├── lib/
│   ├── api.ts              # API client (fetch wrapper)
│   └── types.ts            # TypeScript interfaces
└── package.json
```

**Pages:**
- `/login` - Email + password form
- `/dashboard` - Everything else (list, create, edit, delete)

**Dashboard view contains:**
- List of all applications (cards or table)
- "Add Application" button → opens modal/form
- Each card has edit/delete buttons
- Show: company, role, status badge, vibe stars, days since update

---

## What You Need to Build

### Week 1: Backend
1. Setup Express + TypeScript project
2. Create Prisma schema
3. Build 5 API endpoints
4. Add JWT middleware
5. Test with curl/Postman

### Week 2: Frontend  
1. Setup Next.js + Tailwind
2. Build login page
3. Build dashboard with list view
4. Build add/edit form (modal or inline)
5. Connect to backend API

### Week 3: Polish
1. Make it look good with Tailwind
2. Add loading states
3. Add error handling
4. Import your CSV data manually via Prisma Studio or SQL
5. Actually use it

---

## Key Features

**MVP (what you actually need):**
- Login with email/password
- View all applications in one page
- Add new application
- Edit existing application
- Delete application
- Show days since last update
- Status color coding
- Vibe rating display (stars)

**Skip for now:**
- Registration (just create your user in database directly)
- CSV import (do it manually)
- Analytics/stats
- Search/filters (can add later if needed)
- Email notifications
- Pagination (you don't have that many applications)

---

## Development Flow

1. **Start with backend**: Get API working first, test with Postman
2. **Then frontend**: Build UI that calls your API
3. **Test locally**: Run both servers (backend on :3001, frontend on :3000)
4. **Add your data**: Use Prisma Studio or write a quick script to import CSV
5. **Use it daily**: Track real job applications

---

## Testing Your Work

**Backend:**
- Use Postman/curl to test each endpoint
- Create a test user
- Create/read/update/delete test applications

**Frontend:**
- Login and see if it redirects to dashboard
- Add an application and see if it appears
- Edit and delete should work
- Refresh page - data should persist

---

## What Success Looks Like

**Week 1 done:** 
- Backend running, all 5 endpoints work in Postman

**Week 2 done:**
- You can login, see your applications, add/edit/delete them

**Week 3 done:**
- It looks professional, no bugs, using it daily instead of CSV

**Portfolio ready:**
- Deployed somewhere, have screenshots, can demo it live

---

## Folder Setup Commands

```bash
# Create project
mkdir job-tracker
cd job-tracker

# Backend
mkdir backend
cd backend
npm init -y
npm install express prisma @prisma/client bcryptjs jsonwebtoken cors
npm install -D typescript @types/express @types/node ts-node nodemon
npx prisma init
# Edit prisma/schema.prisma, then:
npx prisma migrate dev --name init

# Frontend  
cd ..
npx create-next-app@latest frontend --typescript --tailwind --app

# Start coding!
```

---

## Why This Works

**Simple enough to build in 2-3 weeks:**
- One login page
- One main view
- Standard CRUD operations
- No complex features

**Professional enough for portfolio:**
- Full-stack TypeScript
- Modern frameworks (Express, Next.js)
- Proper database (PostgreSQL)
- JWT authentication
- REST API

**Actually useful:**
- Solves your real problem
- You'll use it daily
- Real data to demo

---

## Next Steps

1. Setup backend project tomorrow
2. Build the 5 API endpoints
3. Test with Postman
4. Setup frontend project
5. Build login + dashboard
6. Connect everything
7. Start using it

**Keep it simple. Get it working. Polish later.**