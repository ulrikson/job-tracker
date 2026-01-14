# Job Application Tracker - Simple Plan

## Current Progress

- **Status:** Frontend Development (Week 2)
- **Completed:**
  - **Backend:**
    - Project scaffolding
    - Prisma schema definition & migrations
    - API endpoints (CRUD for applications)
    - JWT Authentication (Login/Register/Middleware)
  - **Frontend:**
    - Next.js setup + Tailwind CSS
    - API client wrapper (`apiRequest`)
    - Login & Register pages
    - Dashboard (List View of applications)
- **Next Step:** Build "Add Application" Form

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

- `POST /api/auth/login` - Login, returns JWT (**Completed**)
- `POST /api/auth/register` - Register new user (**Completed**)
- `GET /api/applications` - List all (**Completed**)
- `POST /api/applications` - Create new (**Completed**)
- `PUT /api/applications/:id` - Update existing (**Completed**)
- `DELETE /api/applications/:id` - Delete (**Completed**)

---

## Frontend Structure

```
frontend/
├── app/
│   ├── login/
│   │   └── page.tsx        # Login form (**Completed**)
│   ├── register/
│   │   └── page.tsx        # Register form (**Completed**)
│   ├── dashboard/
│   │   └── page.tsx        # Main view - list + add/edit (**List View Done**)
│   └── layout.tsx
├── lib/
│   ├── api.ts              # API client (fetch wrapper) (**Completed**)
│   └── types.ts            # TypeScript interfaces
└── package.json
```

---

## What You Need to Build

### Week 1: Backend (**Completed**)

1. Setup Express + TypeScript project (**Done**)
2. Create Prisma schema (**Done**)
3. Build API endpoints (**Done**)
4. Add JWT middleware (**Done**)
5. Test with curl/Postman (**Done**)

### Week 2: Frontend

1. Setup Next.js + Tailwind (**Done**)
2. Build login page (**Done**)
3. Build dashboard with list view (**Done**)
4. Build add/edit form (modal or inline) (**Next**)
5. Connect to backend API (**In Progress**)

### Week 3: Polish

1. Make it look good with Tailwind
2. Add loading states
3. Add error handling
4. Import your CSV data manually via Prisma Studio or SQL
5. Actually use it

---

## Key Features

**MVP (what you actually need):**

- Login with email/password (**Done**)
- View all applications in one page (**Done**)
- Add new application
- Edit existing application
- Delete application
- Show days since last update
- Status color coding
- Vibe rating display (stars)

---

## Development Flow

1. **Start with backend**: Get API working first, test with Postman (**Done**)
2. **Then frontend**: Build UI that calls your API (**In Progress**)
3. **Test locally**: Run both servers (backend on :3000, frontend on :3001)
4. **Add your data**: Use Prisma Studio or write a quick script to import CSV
5. **Use it daily**: Track real job applications

---

## Testing Your Work

**Backend:**

- Use Postman/curl to test each endpoint (**Done**)
- Create a test user (**Done**)
- Create/read/update/delete test applications (**Done**)

**Frontend:**

- Log in with test user (**Done**)
- View applications list (**Done**)
- Create new application (**Next**)

---

## Next Steps

1. Create "Add Application" UI (Modal or Form)
2. Wire it up to `POST /api/applications`
3. Add Edit/Delete functionality to the dashboard list

**Keep it simple. Get it working. Polish later.**
