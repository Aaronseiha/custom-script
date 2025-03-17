// 🔥 Ensure this script runs only once
if (!window.hasRunCustomScript) {
    window.hasRunCustomScript = true;

    document.addEventListener("DOMContentLoaded", function() {
        console.log("✅ Custom script loaded successfully.");

        // 🚀 Prevent duplicate ClickFunnels script injections
        if (window.hasInitializedClickFunnelsFix) {
            console.warn("⚠️ ClickFunnels fix already applied. Skipping.");
            return;
        }
        window.hasInitializedClickFunnelsFix = true;

        // ✅ Prevent duplicate `originalFetch` declaration
        if (!window.originalFetch) {
            window.originalFetch = window.fetch;
        }

        var form = document.querySelector("form");
        var submitButton = document.querySelector("#id-6Z-Zndk8k-597"); // Submit Button
        var targetSection = document.querySelector("#id-6Z-LPqMkm-209"); // Target Section

        if (!form || !submitButton || !targetSection) {
            console.warn("⚠️ Form, submit button, or target section not found. Exiting.");
            return;
        }

        // ✅ Attach form submit event
        form.addEventListener("submit", function(event) {
            setTimeout(function() {
                scrollToSection(targetSection);
            }, 1000); // Adjust timing if needed
        });

        // ✅ Scroll to the target section
        function scrollToSection(section) {
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
                console.log("📜 Scrolled to target section:", section.id);
            } else {
                console.warn("⚠️ Target section not found.");
            }
        }
    });
}
