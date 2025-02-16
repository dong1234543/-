// 这里可以放置其他 JavaScript 代码，但不需要懒加载功能 

// 页面加载完成后执行的逻辑
document.addEventListener("DOMContentLoaded", function() {
    console.log("页面加载完成");

    // 示例：在页面跳转时显示加载动画
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(event) {
            // 显示加载动画
            showLoadingAnimation();

            // 模拟延迟跳转
            setTimeout(function() {
                window.location.href = link.href;
            }, 500); // 500ms 后跳转
        });
    });
});

// 显示加载动画的函数
function showLoadingAnimation() {
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loading';
    loadingDiv.style.position = 'fixed';
    loadingDiv.style.top = '0';
    loadingDiv.style.left = '0';
    loadingDiv.style.width = '100%';
    loadingDiv.style.height = '100%';
    loadingDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    loadingDiv.style.display = 'flex';
    loadingDiv.style.justifyContent = 'center';
    loadingDiv.style.alignItems = 'center';
    loadingDiv.style.zIndex = '1000';
    loadingDiv.innerHTML = '<p>加载中...</p>';
    document.body.appendChild(loadingDiv);
} 