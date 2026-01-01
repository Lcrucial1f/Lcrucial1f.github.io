// 阅读进度条
(function () {
    const progressBar = document.getElementById('progress-bar');
    if (!progressBar) return;

    function updateProgress() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = percent + '%';
    }

    window.addEventListener('scroll', updateProgress);
    window.addEventListener('load', updateProgress);
})();

// 复制 BibTeX
(function () {
    const btn = document.querySelector('.copy-btn');
    const bib = document.querySelector('bibtex');
    if (!btn || !bib) return;

    btn.addEventListener('click', () => {
        const text = bib.textContent.trim();
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text);
        } else {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
        btn.textContent = 'Copied';
        setTimeout(() => (btn.textContent = 'Copy'), 1500);
    });
})();

// 简单图片点击放大（可选）
(function () {
    const imgs = document.querySelectorAll('.zoom-trigger img');
    if (!imgs.length) return;

    imgs.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.background = 'rgba(0,0,0,0.7)';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = 999;

            const big = document.createElement('img');
            big.src = img.src;
            big.style.maxWidth = '90vw';
            big.style.maxHeight = '90vh';
            big.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
            big.style.borderRadius = '8px';
            overlay.appendChild(big);

            overlay.addEventListener('click', () => document.body.removeChild(overlay));
            document.body.appendChild(overlay);
        });
    });
})();

