<!---------------------------------------------------------------------------->
<!--                                                                        -->
<!--                         ✦  L U X E S T A Y  ✦                         -->
<!--                  Where Every Reservation Feels Like                    -->
<!--                           An Arrival                                   -->
<!--                                                                        -->
<!---------------------------------------------------------------------------->

<div align="center">

```
██╗     ██╗   ██╗██╗  ██╗███████╗███████╗████████╗ █████╗ ██╗   ██╗
██║     ██║   ██║╚██╗██╔╝██╔════╝██╔════╝╚══██╔══╝██╔══██╗╚██╗ ██╔╝
██║     ██║   ██║ ╚███╔╝ █████╗  ███████╗   ██║   ███████║ ╚████╔╝ 
██║     ██║   ██║ ██╔██╗ ██╔══╝  ╚════██║   ██║   ██╔══██║  ╚██╔╝  
███████╗╚██████╔╝██╔╝ ██╗███████╗███████║   ██║   ██║  ██║   ██║   
╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝  
```

### ◈ ─────────────────────────────────────── ◈

*Where Every Reservation Feels Like an Arrival*

### ◈ ─────────────────────────────────────── ◈

<br/>

![MERN Stack](https://img.shields.io/badge/Stack-MERN-c9a96e?style=for-the-badge&labelColor=1a1209)
![React](https://img.shields.io/badge/React-18-c9a96e?style=for-the-badge&logo=react&labelColor=1a1209)
![Node.js](https://img.shields.io/badge/Node.js-Express-c9a96e?style=for-the-badge&logo=node.js&labelColor=1a1209)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-c9a96e?style=for-the-badge&logo=mongodb&labelColor=1a1209)
![JWT](https://img.shields.io/badge/Auth-JWT-c9a96e?style=for-the-badge&logo=jsonwebtokens&labelColor=1a1209)

<br/>

</div>

---

<div align="center">

```
        ┌─────────────────────────────────────────────────┐
        │                                                   │
        │    🏨  A full-stack luxury hotel reservation      │
        │        platform — crafted for travellers who      │
        │        expect nothing less than seamless.         │
        │                                                   │
        └─────────────────────────────────────────────────┘
```

</div>

---

<br/>

## ╔══════════════════════════════════════╗
## ║        ✦  T H E  V I S I O N  ✦     ║
## ╚══════════════════════════════════════╝

<br/>

LuxeStay is not just a booking app — it's a **full concierge experience in the browser**. Every screen, every interaction, every flow has been designed to feel as effortless as checking into a five-star property. From the moment a guest lands on the homepage to the second their reservation is confirmed, LuxeStay delivers **elegance at every step**.

<br/>

---

<br/>

## ╔══════════════════════════════════════════════╗
## ║    ✦  T H E  G U E S T  J O U R N E Y  ✦    ║
## ╚══════════════════════════════════════════════╝

<br/>

```
  ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
  │          │     │          │     │          │     │          │     │          │
  │ REGISTER │ ──► │  BROWSE  │ ──► │  SELECT  │ ──► │   BOOK   │ ──► │  MANAGE  │
  │  & LOGIN │     │  HOTELS  │     │   ROOM   │     │   STAY   │     │ BOOKINGS │
  │          │     │          │     │          │     │          │     │          │
  └──────────┘     └──────────┘     └──────────┘     └──────────┘     └──────────┘
       🔐               🏛️               🛏️               📅               📋
```

<br/>

Once inside LuxeStay, every guest enjoys:

<br/>

```
  ◆  🔐  Secure account registration & JWT-powered sign-in
  ◆  🏛️  A curated gallery of handpicked hotel properties
  ◆  🛏️  Room browsing with pricing, capacity & availability
  ◆  📅  Intuitive check-in / check-out date selection
  ◆  ✅  Real-time double-booking conflict prevention
  ◆  💳  Dynamic billing calculated from total nights stayed
  ◆  📋  Personal dashboard to view all upcoming reservations
  ◆  ❌  One-click booking cancellation at any time
```

<br/>

---

<br/>

## ╔═ ═══════════════════════════════════╗
## ║  ✦  T H E   T E C H   S T A C K  ✦ ║
## ╚═ ═══════════════════════════════════╝

<br/>

```
┌─────────────────────────────────────────────────────────────────────┐
│                        F R O N T E N D                               │
├──────────────────────┬──────────────────────────────────────────────┤
│  Framework           │  React.js                                     │
│  Routing             │  React Router DOM                             │
│  HTTP Client         │  Axios                                        │
│  Auth Persistence    │  Browser LocalStorage  ›  JWT Token           │
└──────────────────────┴──────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                         B A C K E N D                                │
├──────────────────────┬──────────────────────────────────────────────┤
│  Runtime             │  Node.js                                      │
│  Framework           │  Express.js                                   │
│  Database            │  MongoDB Atlas                                │
│  ODM                 │  Mongoose                                     │
│  Authentication      │  JSON Web Token  ( JWT )                      │
│  Password Security   │  bcrypt.js                                    │
└──────────────────────┴──────────────────────────────────────────────┘
```

<br/>

---

<br/>

## ╔═════════════════════════════════════════════╗
## ║   ✦  A R C H I T E C T U R E  &  C R A F T ║
## ╚═════════════════════════════════════════════╝

<br/>

### 🔑  Authentication & Security

```
  ┌─────────────────────────────────────────────────────────┐
  │  User submits credentials                                │
  │         │                                                │
  │         ▼                                                │
  │  bcrypt verifies hashed password                         │
  │         │                                                │
  │         ▼                                                │
  │  Server issues signed JWT token                          │
  │         │                                                │
  │         ▼                                                │
  │  Token stored in localStorage  ›  sent on every request  │
  │         │                                                │
  │         ▼                                                │
  │  Protected routes validate token before responding       │
  └─────────────────────────────────────────────────────────┘
```

<br/>

### 🗄️  Database Design

```
  Hotels ──────────────────────► Rooms
    │  ( one-to-many )             │
    │                              │  ( one-to-many )
    │                              ▼
  Users ───────────────────────► Bookings
         ( one-to-many )

  ✦ Deep relational data surfaced via Mongoose .populate()
```

<br/>

### 📆  Booking Intelligence

```
  ┌────────────────────────────────────────────────────┐
  │  Guest selects room + date range                    │
  │                  │                                  │
  │                  ▼                                  │
  │  System checks for overlapping reservations         │
  │          │                    │                     │
  │     ✗ Conflict           ✓ No conflict              │
  │     └──► Reject          └──► Booking confirmed     │
  │                                    │                │
  │                                    ▼                │
  │             Total bill = nightly rate × nights      │
  └────────────────────────────────────────────────────┘
```

<br/>

---

<br/>

## ╔═══════════════════════════════════════════╗
## ║   ✦  K E Y  C O N C E P T S  A P P L I E D ║
## ╚═══════════════════════════════════════════╝

<br/>

```
  ┌─────────────────────────────────────────────────────────────────┐
  │                                                                   │
  │   ◈  RESTful API architecture                                     │
  │   ◈  JWT stateless authentication                                 │
  │   ◈  Password hashing with bcrypt                                 │
  │   ◈  Nested MongoDB population with Mongoose                      │
  │   ◈  Dynamic routing with React Router                            │
  │   ◈  State management via React Hooks                             │
  │   ◈  Axios with Authorization header injection                    │
  │   ◈  Double-booking prevention logic                              │
  │   ◈  Role-based route protection                                  │
  │   ◈  Reusable component architecture                              │
  │   ◈  Environment variable config for deployment                   │
  │   ◈  Conditional rendering for auth-aware UI                      │
  │                                                                   │
  └─────────────────────────────────────────────────────────────────┘
```

<br/>

---

<br/>

## ╔══════════════════════════════════════════╗
## ║    ✦  T H E  R O A D  A H E A D  ✦      ║
## ╚══════════════════════════════════════════╝

<br/>

```
  ╭─────────────────────────────────────────────────────╮
  │                F U T U R E   S U I T E S             │
  ├────────────────────────────┬────────────────────────┤
  │  💳 Payment Gateway        │  Stripe integration    │
  │  📧 Email Confirmations    │  Booking receipts      │
  │  🛠️  Admin Dashboard       │  Hotel & room control  │
  │  🔍 Search & Filtering     │  By price, location    │
  │  🖼️  Image Uploads         │  For hotels & rooms    │
  │  📆 Availability Calendar  │  Visual date picker    │
  │  📱 Mobile-first Design    │  Fully responsive UI   │
  ╰────────────────────────────┴────────────────────────╯
```

<br/>

---

<br/>

<div align="center">

```
   ╔════════════════════════════════════════════════════════════╗
   ║                                                            ║
   ║      "The art of hospitality is in the details."           ║
   ║                                                            ║
   ╚════════════════════════════════════════════════════════════╝
```

<br/>

*Built with care, coffee, and a deep respect for good UX.*

<br/>

```
        ◈ ──────────────────────────────────────────── ◈
                    ✦  L U X E S T A Y  ✦
                  The art of the reservation.
        ◈ ──────────────────────────────────────────── ◈
```

<br/>

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-c9a96e?style=for-the-badge&labelColor=1a1209)
![MERN](https://img.shields.io/badge/Powered%20by-MERN-c9a96e?style=for-the-badge&labelColor=1a1209)

</div>

---
