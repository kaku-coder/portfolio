"use client";
import React from "react";
import copyimage from "../assets/icons8-copy-24.png";

const ComponetEmail = ({ onCopy, copied }) => {
    const email = "devilprakashdas@gmail.com";
    console.log('ComponentEmail - copied prop:', copied);

    const handleClick = () => {
        console.log("Button clicked!");
        
        // Call the onCopy function if provided
        if (onCopy) {
            onCopy();
        }
        
        // Simple copy to clipboard
        navigator.clipboard.writeText(email)
            .then(() => console.log("Copied to clipboard!"))
            .catch(err => console.error("Copy failed:", err));
    };

    return (
        <div className="relative">
            <button
                onClick={handleClick}
                className="px-6 py-4 text-sm rounded-full bg-primary text-white flex items-center gap-2 mx-auto min-w-[200px] justify-center border-2 border-none z-50 relative transition-all duration-300 hover:scale-110 hover:bg-coral hover:shadow-lg hover:shadow-coral/50 active:scale-95"
            >
                <img
                    src={copyimage}
                    alt="Copy"
                    className={`w-5 h-5 ${copied ? 'animate-spin' : ''}`}
                    style={{ filter: "brightness(0) invert(1)", transition: "transform 0.3s ease" }}
                />
                <span className={`transition-all duration-300 ${copied ? 'text-yellow-300 font-bold' : ''}`}>
                    {copied ? "Copied!" : "Copy Email"}
                </span>
            </button>
        </div>
    );
};

export default ComponetEmail;