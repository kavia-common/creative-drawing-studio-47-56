import React from "react";
import PropTypes from "prop-types";

// PUBLIC_INTERFACE
function Navbar({ title = "Drawing Studio", rightActions = null }) {
  return (
    <nav
      className="navbar"
      style={{
        width: "100%",
        top: 0,
        left: 0,
        position: "sticky",
        zIndex: 100,
        background: "#fff",
        boxShadow: "0 2px 8px 0 rgba(59,130,246,0.10), 0 1.5px 4px 0 rgba(6,182,212,0.06)",
        borderBottom: "1px solid #e9ecef",
        minHeight: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1.5rem",
        transition: "box-shadow 0.2s"
      }}
      aria-label="Main"
      role="navigation"
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Brand/Title */}
        <span
          className="navbar-title"
          style={{
            fontWeight: 700,
            fontSize: "1.25rem",
            color: "#3b82f6",
            letterSpacing: "0.01em",
            userSelect: "none"
          }}
          tabIndex={0}
        >
          {title}
        </span>
      </div>
      <div
        className="navbar-actions"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* Placeholder right-side actions: You can replace/add controls here */}
        {rightActions ? (
          rightActions
        ) : (
          <>
            <button
              type="button"
              aria-label="Choose color"
              tabIndex={0}
              style={{
                background: "#3b82f6",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                marginRight: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 0 1.5px #e0e7ef",
                cursor: "pointer",
              }}
              className="navbar-action"
            >
              <svg width="18" height="18" fill="#fff" aria-hidden="true" focusable="false">
                <circle cx="9" cy="9" r="7" stroke="#06b6d4" strokeWidth="2" fill="#3b82f6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Brush size"
              tabIndex={0}
              style={{
                background: "#06b6d4",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                marginRight: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 0 1.5px #e0e7ef",
                cursor: "pointer"
              }}
              className="navbar-action"
            >
              <svg width="18" height="18" fill="#fff" aria-hidden="true" focusable="false">
                <rect x="4" y="8" width="10" height="2.5" rx="1" fill="#fff" />
                <rect x="8" y="4" width="2.5" height="10" rx="1" fill="#fff" />
              </svg>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  /** The app title or brand to show on the left */
  title: PropTypes.string,
  /** Optional React element(s) to display as right-side actions */
  rightActions: PropTypes.node,
};

export default Navbar;
