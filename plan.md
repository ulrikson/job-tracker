# Job Application Tracker - Simple Plan

## Current Progress
- **Status:** Backend Development (Week 1)
- **Completed:** 
  - Project scaffolding
  - Prisma schema definition (User & **JobApplication** models)
  - Database migrations (Simplified model to company/link/userId)
  - Prisma client setup & standardizing paths
  - Health check endpoint with DB verification
  - **Test User Seeded** (ID: 1)
  - **API endpoints:** `GET /api/applications` & `POST /api/applications` working
- **Next Step:** Implement `PUT /api/applications/:id` and `DELETE /api/applications/:id`

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

## Database Schema (Simplified for MVP)

**User table:**
- id, email, password

**JobApplication table:**
- id, userId
- company, link
- createdAt, updatedAt

---

## Backend Structure

```
src/
├── index.ts          # Express app entry point
├── controllers/      # Route handlers (Logic)
├── routes/           # API route definitions
├── middleware/       # Middleware (Auth, etc.)
└── lib/              # Shared utilities (Prisma client)
prisma/
├── schema.prisma     # Database schema
└── seed.ts           # Database seeder
```

**API Endpoints:**
- `POST /api/auth/login` - Login, returns JWT (Pending)
- `GET /api/applications` - List all (**Completed**)
- `POST /api/applications` - Create new (**Completed**)
- `PUT /api/applications/:id` - Update existing (Next)
- `DELETE /api/applications/:id` - Delete (Next)

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

---

## What You Need to Build

### Week 1: Backend
1. Setup Express + TypeScript project (**Done**)
2. Create Prisma schema (**Done**)
3. Build 5 API endpoints (2/5 **Done**)
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

---

## Development Flow

1. **Start with backend**: Get API working first, test with Postman (**In Progress**)
2. **Then frontend**: Build UI that calls your API
3. **Test locally**: Run both servers (backend on :3000, frontend on :3001)
4. **Add your data**: Use Prisma Studio or write a quick script to import CSV
5. **Use it daily**: Track real job applications

---

## Testing Your Work

**Backend:**
- Use Postman/curl to test each endpoint
- Create a test user (**Done**)
- Create/read/update/delete test applications

---

## Next Steps

1. Implement Update and Delete endpoints
2. Add JWT Authentication
3. Start Frontend Setup

**Keep it simple. Get it working. Polish later.**
