// Prevent script from running multiple times
if (window.hasRunCustomScript) {
    console.warn("⚠️ Script already loaded. Skipping duplicate execution.");
} else {
    window.hasRunCustomScript = true;
    
    document.addEventListener("DOMContentLoaded", function() {
        console.log("✅ Custom script loaded successfully.");

        var form = document.querySelector("form");
        var submitButton = document.querySelector("#id-6Z-Zndk8k-597"); // Submit Button
        var targetSection = "#id-6Z-LPqMkm-209"; // Mission Text Section

        if (!form) {
            console.error("❌ Form not found on page.");
            return;
        }

        if (!submitButton) {
            console.error("❌ Submit button not found. Check the ID.");
            return;
        }

        // Detect form submission
        form.addEventListener("submit", function(event) {
            console.log("✅ Form submitted.");

            // Delay scrolling to ensure form processing is complete
            setTimeout(function() {
                var section = document.querySelector(targetSection);
                if (section) {
                    console.log("✅ Scrolling to Mission Text Section...");
                    window.scrollTo({ top: section.offsetTop - 50, behavior: "smooth" });
                } else {
                    console.warn("⚠️ Target section not found: " + targetSection);
                }
            }, 1500); // Adjust delay if needed
        });

        console.log("✅ Script initialized successfully.");
    });
}
