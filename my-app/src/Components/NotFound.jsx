
//---

//Explanation:
//1. **Navbar Placement**: The `<Navbar />` is placed above `<Routes>` in `App.jsx` so that it persists across all pages.  
//2. **Styling**: Added a simple inline style object in `Navbar.jsx` and provided an optional `Navbar.css` for more customization.  
//3. **Navigation Links**: The `Link` components from `react-router-dom` enable seamless navigation without refreshing the page.

//This structure gives you a modern and responsive navbar while maintaining a clean React app organization. Let me know if you need further customization!
import React from "react";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}

export default NotFound;
