"use client";
import React, { useState } from "react";
import copyimage from "../assets/icons8-copy-24.png";

const ComponetEmail = () => {
    const [showEmail, setShowEmail] = useState(false);
    const email = "devilprakashdas@gmail.com";

    const handleClick = (e) => {
        e.preventDefault();
        console.log("Button clicked!"); // Check if this logs in console
        setShowEmail(!showEmail);
        
        // Simple copy to clipboard
        navigator.clipboard.writeText(email)
            .then(() => console.log("Copied to clipboard!"))
            .catch(err => console.error("Copy failed:", err));
    };

    return (
        <div className="relative">
            <button
                onClick={handleClick}
                className="px-6 py-4 text-sm rounded-full bg-primary text-white flex items-center gap-2 mx-auto min-w-[200px] justify-center border-2 border-none z-50 relative"
            >
                <img
                    src={copyimage}
                    alt="Copy"
                    className="w-5 h-5"
                    style={{ filter: "brightness(0) invert(1)" }}
                />
                {showEmail ? "Copied!" : "Copy Email"}
            </button>
            {showEmail && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-[#7956db] text-[#7956db] t p-2 rounded text-sm z-50">
                    {email}
                </div>
            )}
        </div>
    );
};

export default ComponetEmail;