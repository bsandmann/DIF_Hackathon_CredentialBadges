(function() {
    // Safeguard to prevent multiple executions
    if (window.blocktrustBadgeLoaderExecuted) return;
    window.blocktrustBadgeLoaderExecuted = true;

    function createSkeletonLoader() {
        return `
            <div style="width: 30rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-family: 'Poppins', sans-serif; padding: 1rem; margin-bottom: 2rem; background: #F8FAFC; overflow: hidden;">
                <div style="display: flex; align-items: flex-start; gap: 1rem;">
                    <div style="width: 7rem; height: 7rem; flex-shrink: 0; background-color: #ffffff; border-radius: 0.5rem;"></div>
                    <div style="flex-grow: 1;">
                        <div style="width: 70%; height: 1.5rem; border-radius: 0.25rem; background: linear-gradient(90deg, #F8FAFC 0%, #E0E6ED 50%, #F8FAFC 100%); background-size: 200% 100%; animation: shimmer 1.5s infinite;"></div>
                        <div style="width: 50%; height: 1rem; margin-top: 0.5rem; border-radius: 0.25rem; background: linear-gradient(90deg, #F8FAFC 0%, #E0E6ED 50%, #F8FAFC 100%); background-size: 200% 100%; animation: shimmer 1.5s infinite;"></div>
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.5rem;">
                            <div style="width: 30%; height: 0.75rem; border-radius: 0.25rem; background: linear-gradient(90deg, #F8FAFC 0%, #E0E6ED 50%, #F8FAFC 100%); background-size: 200% 100%; animation: shimmer 1.5s infinite;"></div>
                            <div style="width: 20%; height: 0.75rem; border-radius: 0.25rem; background: linear-gradient(90deg, #F8FAFC 0%, #E0E6ED 50%, #F8FAFC 100%); background-size: 200% 100%; animation: shimmer 1.5s infinite;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function addSkeletonStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shimmer {
                0% { background-position: -200% 0; }
                100% { background-position: 200% 0; }
            }
        `;
        document.head.appendChild(style);
    }

    async function fetchAndRenderBadge(element, domain) {
        const credentialId = element.getAttribute('data-id');
        const templateId = element.getAttribute('data-template');
        const theme = templateId.split('_').pop();

        // Show skeleton loader
        element.innerHTML = createSkeletonLoader();

        try {
            const response = await fetch(`${domain}/api/GetBadge/${credentialId}/${templateId}/${theme}`);
            if (!response.ok) {
                console.error('Error fetching the credential:', response.status, response.statusText);
                return;
            }
            const badgeHtml = await response.text();
            element.innerHTML = badgeHtml;
        } catch (error) {
            console.error('Error fetching the credential:', error);
        }
    }

    function getDomain() {
        const scripts = document.getElementsByTagName('script');
        for (let i = scripts.length - 1; i >= 0; i--) {
            const src = scripts[i].src;
            if (src && src.includes('badge-loader.js')) {
                return new URL(src).origin;
            }
        }
        console.error('Unable to determine script domain');
        return '';
    }

    function init() {
        const domain = getDomain();
        if (!domain) {
            console.error('Badge loader initialization failed: Unable to determine domain');
            return;
        }

        addSkeletonStyles();

        const badges = document.querySelectorAll('.blocktrust-badge');
        if (badges.length === 0) {
            console.warn('No badge elements found on the page');
        } else {
            badges.forEach(element => fetchAndRenderBadge(element, domain));
        }
    }

    // Ensure the script only executes after the page has fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();