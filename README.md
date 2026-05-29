# CRUD Log
Work log app for construction project management.

## Setup

### Backend
```bash
cd backend
npm install
```

### Run backend
```
npm run start:dev
```

### Backend URL

```text
http://localhost:3000
```

## Database
Uses MySQL with Prisma ORM.

### Setup database
1. Create database:
```sql
CREATE DATABASE crudlog;
```
2. Set environment variables:
```text
DATABASE_URL="mysql://root:***@localhost:3306/crudlog"
```
3. Run migrations:
```bash
npx prisma migrate dev
```

### Frontend
```bash
cd frontend
npm install
```

### Run frontend
```
npm run dev
```

### Frontend URL

```text
http://localhost:5173
```

## Notes
Frontend and backend should be run separately.

## Stack*
 Node.js + NestJS (REST API with CORS)
- TypeScript
- React + Vite
- MySQL
- Prisma ORM

* Stack chosen for clear separation of frontend/backend, type safety and fast prototyping.