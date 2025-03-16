// 🔥 Ensure this script runs only once
if (!window.hasRunCustomScript) {
    window.hasRunCustomScript = true;

    document.addEventListener("DOMContentLoaded", function() {
        console.log("✅ Custom script loaded successfully.");

        // 🚀 Ensure ClickFunnels isn't duplicating scripts
        if (window.hasInitializedClickFunnelsFix) {
            console.warn("⚠️ ClickFunnels fix already applied. Skipping.");
            return;
        }
        window.hasInitializedClickFunnelsFix = true;

        var form = document.querySelector("form");
        var submitButton = document.querySelector("#id-6Z-Zndk8k-597"); // Submit Button
        var targetSection = "#id-6Z-LPq
