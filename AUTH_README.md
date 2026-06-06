# Backend Login Authentication System

A complete Node.js/Express backend authentication system with JWT tokens and bcrypt password hashing.

## Features

✅ User Registration with email validation
✅ User Login with JWT token generation
✅ Password hashing with bcrypt
✅ Protected routes middleware
✅ Token verification and expiration (24 hours)
✅ Error handling
✅ In-memory user database (easily replaceable with real DB)

## Files Overview

- **auth.js** - Core authentication logic (register, login, token verification)
- **server.js** - Express server with API endpoints
- **authExamples.js** - Usage examples and curl commands
- **package.json** - Dependencies configuration

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

### 1. Register User
```
POST /register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "createdAt": "2026-06-06T10:30:00.000Z"
  }
}
```

### 2. Login User
```
POST /login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

### 3. Get Profile (Protected)
```
GET /profile
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Profile retrieved",
  "user": {
    "id": 1,
    "email": "john@example.com",
    "username": "john_doe"
  }
}
```

### 4. Logout
```
POST /logout
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Logout successful"
}
```

## Security Features

- **Password Hashing**: Bcrypt with 10 salt rounds
- **JWT Tokens**: 24-hour expiration
- **Token Verification**: Middleware to protect routes
- **Input Validation**: Required fields checking
- **Error Handling**: Comprehensive error messages

## Environment Variables

Create a `.env` file for production:
```
PORT=3000
JWT_SECRET=your-strong-secret-key-here
```

## Testing with Postman/cURL

See **authExamples.js** for complete curl and JavaScript fetch examples.

### Quick cURL Test:
```bash
# Register
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{"username":"john","email":"john@test.com","password":"pass123"}'

# Login
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@test.com","password":"pass123"}'
```

## Next Steps for Production

1. Replace in-memory database with MongoDB/PostgreSQL
2. Add email verification
3. Implement refresh tokens
4. Add rate limiting
5. Use HTTPS
6. Implement password reset functionality
7. Add two-factor authentication
8. Validate email format
9. Add CORS configuration
10. Implement database migrations

## License

ISC
