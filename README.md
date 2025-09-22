## Introduction

Wild Oasis is a **Project Base learning (Demo)** built to simulate real‑world hotel management workflows. The app is designed for property/hospitality staff (admins) to handle:

- User Authentication and Profiles.

- Cabins (room) Data: creation, editing, photos, capacity, pricing & discounts.

- Booking Operations: reservations, check‑in/out, status updates, and extras (e.g. breakfast)

- Guest Management: guest details and history.

- Dashboards and Charts to give quick insights into occupancy, sales, and performance over time.

It helps explore many React & backend integration concepts, especially using Supabase, React Query, auth, form handling, conditional UI (dark mode), and data visualization.

---

## 🌟 Key Features

- **Authentication & Authorization** — Only admin users can log in; secure profile settings (avatar, password, profile info).

- **Cabins Management** — Create, update, delete cabins; upload images; set capacity, price, discounts.

- **Bookings Management** — View bookings, set booking status (unconfirmed / checked in / checked out), filter bookings, manage check‑in/out, add extras like breakfast.

- **Guest Management** — Track guest info, booking history, national IDs, etc.

- **Dashboard / Analytics** — Charts and stats showing sales, occupancy rates, stays over recent days.

- **Dark Mode** — Toggleable dark/light theme.

- **UX‑friendly** — Uses React form validation, toast notifications, loading states, etc.

---

## 🛠️ Tech Stack / Technologies Used

- **React** — Core UI library for building component-based interfaces.

- **React Router DOM** — Client-side routing for multi-page navigation.

- **React Query (TanStack Query)** — Server-state management, data fetching, caching & syncing.

- **React Query Devtools** — Debugging and monitoring React Query state.

- **Supabase JS SDK** — Backend-as-a-service for authentication, database, and storage.

- **React Hook Form** — Efficient form management and validation.

- **React Error Boundary** — Graceful error handling and fallback UI.

- **React Hot Toast** — Toast notifications for better user feedback.

- **React Icons** — Icon library with popular icon packs.

- **Recharts** — Data visualization and charts for analytics/dashboard.

- **Styled Components** — CSS-in-JS styling with theme support (including dark mode).

- **date-fns** — Utility library for modern date & time formatting and manipulation.

---

## 🚀 Installation & Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/Wild-Oasis.git
cd Wild-Oasis

# Install dependencies
npm install


# Run locally
npm run dev
```

Then open your browser at `http://localhost:5173` (or whatever port Vite or dev server uses).

---

## 📁 Project Structure

```
├── public/                         # Static assets
src/
├── context/                        # React Context providers
│   └── DarkModeContext.jsx         # Dark mode theme context
├── data/                           # Static data files
│   ├── cabins/                     # Cabin-related data
│   └── img/                        # Image assets
│       ├── data-bookings.js        # Booking data
│       ├── data-cabins.js          # Cabin data
│       ├── data-guests.js          # Guest data
│       └── Uploader.jsx            # Data upload utility
├── features/
│   ├── authentication/
│   │   ├── LoginForm.jsx           # User login form component
│   │   ├── Logout.jsx              # Logout functionality component
│   │   ├── SignupForm.jsx          # User registration form
│   │   ├── UpdatePasswordForm.jsx  # Password change form
│   │   ├── UpdateUserDataForm.jsx  # User profile update form
│   │   ├── UserAvatar.jsx          # User profile picture display
│   │   ├── useLogin.js             # Custom hook for login logic
│   │   ├── useLogout.js            # Custom hook for logout logic
│   │   ├── useSignup.js            # Custom hook for user registration
│   │   ├── useUpdateUser.js        # Custom hook for profile updates
│   │   └── useUser.js              # Custom hook for user data management
│   ├── bookings/
│   │   ├── BookingDataBox.jsx      # Detailed booking information display
│   │   ├── BookingDetail.jsx       # Individual booking page component
│   │   ├── BookingRow.jsx          # Single booking row in table
│   │   ├── BookingTable.jsx        # Table displaying all bookings
│   │   ├── BookingTableOperations.jsx # Booking table filter/sort controls
│   │   ├── useBooking.js           # Custom hook for single booking data
│   │   ├── useBookings.js          # Custom hook for bookings list
│   │   └── useDeleteBooking.js     # Custom hook for booking deletion
│   ├── cabins/
│   │   ├── AddCabin.jsx            # Add new cabin form component
│   │   ├── CabinRow.jsx            # Single cabin row in table
│   │   ├── CabinTable.jsx          # Table displaying all cabins
│   │   ├── CabinTableOperations.jsx # Cabin table filter/sort controls
│   │   ├── CreateCabinForm.jsx     # Form for creating/editing cabins
│   │   ├── useCabins.js            # Custom hook for cabins data
│   │   ├── useCreateCabin.js       # Custom hook for cabin creation
│   │   ├── useDeleteCabin.js       # Custom hook for cabin deletion
│   │   └── useUpdateCabin.js       # Custom hook for cabin updates
│   ├── check-in-out/
│   │   ├── CheckinBooking.jsx      # Guest check-in process component
│   │   ├── CheckoutButton.jsx      # Quick checkout button
│   │   ├── TodayActivity.jsx       # Today's check-ins/outs widget
│   │   ├── TodayItem.jsx           # Single today activity item
│   │   ├── useCheckin.js           # Custom hook for check-in logic
│   │   ├── useCheckout.js          # Custom hook for check-out logic
│   │   └── useTodayActivity.js     # Custom hook for today's activities
│   ├── dashboard/
│   │   ├── DashboardBox.jsx        # Dashboard container widget
│   │   ├── DashboardFilter.jsx     # Dashboard time period filter
│   │   ├── DashboardLayout.jsx     # Dashboard page layout component
│   │   ├── DurationChart.jsx       # Stay duration analytics chart
│   │   ├── SalesChart.jsx          # Revenue/sales analytics chart
│   │   ├── Stat.jsx                # Individual statistic display
│   │   ├── Stats.jsx               # Collection of statistics widgets
│   │   ├── useRecentBookings.js    # Custom hook for recent bookings data
│   │   └── useRecentStays.js       # Custom hook for recent stays data
│   └── settings/
│       ├── SettingsForm.jsx        # Application settings form
│       ├── useSettings.js          # Custom hook for settings data
│       └── useUpdateSetting.js     # Custom hook for settings updates
├── hooks/
│   ├── useLocalStorageState.js     # Custom hook for localStorage state
│   ├── useMoveBack.js              # Custom hook for browser back navigation
│   └── useOutsideClicked.js        # Custom hook for outside click detection
├── pages/
│   ├── Account.jsx                 # User account management page
│   ├── Booking.jsx                 # Individual booking details page
│   ├── Bookings.jsx                # All bookings list page
│   ├── Cabins.jsx                  # Cabin management page
│   ├── Checkin.jsx                 # Guest check-in page
│   ├── Dashboard.jsx               # Main dashboard analytics page
│   ├── Login.jsx                   # User authentication page
│   ├── PageNotFound.jsx            # 404 error page
│   ├── Settings.jsx                # Application settings page
│   └── Users.jsx                   # User management page
├── services/
│   ├── apiAuth.js                  # Authentication API calls
│   ├── apiBookings.js              # Booking-related API calls
│   ├── apiCabins.js                # Cabin-related API calls
│   ├── apiSettings.js              # Settings API calls
│   └── supabase.js                 # Supabase client configuration
├── ui/
│   ├── AppLayout.jsx               # Main application layout wrapper
│   ├── Button.jsx                  # Reusable button component
│   ├── ButtonGroup.jsx             # Grouped button components
│   ├── ButtonIcon.jsx              # Icon button component
│   ├── ButtonText.jsx              # Text-styled button component
│   ├── Checkbox.jsx                # Checkbox input component
│   ├── ConfirmDelete.jsx           # Delete confirmation modal
│   ├── DarkModeToggle.jsx          # Dark/light mode toggle switch
│   ├── DataItem.jsx                # Key-value data display component
│   ├── Empty.jsx                   # Empty state placeholder component
│   ├── ErrorFallback.jsx           # Error boundary fallback UI
│   ├── FileInput.jsx               # File upload input component
│   ├── Filter.jsx                  # Data filtering component
│   ├── Flag.jsx                    # Country flag display component
│   ├── Form.jsx                    # Generic form wrapper component
│   ├── FormRow.jsx                 # Horizontal form field wrapper
│   ├── FormRowVertical.jsx         # Vertical form field wrapper
│   ├── Header.jsx                  # Application header component
│   ├── HeaderMenu.jsx              # Header navigation menu
│   ├── Heading.jsx                 # Typography heading component
│   ├── Input.jsx                   # Text input field component
│   ├── Logo.jsx                    # Application logo component
│   ├── MainNav.jsx                 # Main sidebar navigation
│   ├── Menus.jsx                   # Context menu/dropdown component
│   ├── Modal.jsx                   # Modal dialog component
│   ├── Pagination.jsx              # Data pagination component
│   ├── ProtectedRoute.jsx          # Authentication route guard
│   ├── Row.jsx                     # Layout row component
│   ├── Select.jsx                  # Dropdown select component
│   ├── Sidebar.jsx                 # Application sidebar component
│   ├── SortBy.jsx                  # Data sorting component
│   ├── Spinner.jsx                 # Loading spinner component
│   ├── SpinnerMini.jsx             # Small loading spinner
│   ├── Table.jsx                   # Data table component
│   ├── TableOperations.jsx         # Table actions toolbar
│   ├── Tag.jsx                     # Status/category tag component
│   └── Textarea.jsx                # Multi-line text input component
├── utils/
│   ├── constants.js                # Application constants and config
│   └── helpers.js                  # Utility and helper functions
├── App.jsx                         # Root application component
├── main.jsx                        # Application entry point
└── styles/
    └── GlobalStyle.js              # Global CSS styles and theme
```

---

## 🎯 Learning Outcomes

- Building reusable, modern component-based UIs with hooks.

- Setting up nested routes, loaders, and navigation flows.

- Using authentication, database, and storage services in a real project.

- Managing server state, caching, mutations, and background updates.

- Handling complex forms with validation and minimal re-renders.

- Implementing graceful error handling and fallback UIs.

- Providing instant user feedback for actions.

- Creating interactive charts and dashboards for analytics.
- Writing CSS-in-JS with theme switching (dark mode support).

- Manipulating and formatting dates for bookings, check-in, and reports.

- Organizing code into features, services, and reusable UI components.

---

## 🤝 Contributions

Contributions are welcome! If you’d like to help out:

1. Fork the repo
2. Create a branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```
3. Make your changes and commit
4. Push to your fork and open a Pull Request with description of what changed

Please follow existing code style, commit messages, and suggest via issue if big changes are proposed.
