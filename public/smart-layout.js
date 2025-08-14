// 智能布局自适应系统
class SmartLayout {
    constructor() {
        this.init();
        this.setupEventListeners();
    }

    init() {
        this.updateLayout();
        this.optimizeForContent();
    }

    setupEventListeners() {
        // 监听窗口大小变化
        window.addEventListener('resize', this.debounce(() => {
            this.updateLayout();
        }, 250));

        // 监听设备方向变化
        window.addEventListener('orientationchange', () => {
            setTimeout(() => this.updateLayout(), 100);
        });
    }

    updateLayout() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = width / height;
        
        // 动态调整容器根据屏幕特性
        this.adjustContainerSizes(width, ratio);
        this.optimizeTextColumns(width);
        this.adjustSpacing(width);
    }

    adjustContainerSizes(width, ratio) {
        const root = document.documentElement;
        
        // 基于屏幕宽度和比例的智能计算
        let contentWidth, wideWidth, narrowWidth;
        
        if (width < 640) {
            // 移动设备
            contentWidth = '95vw';
            wideWidth = '98vw';
            narrowWidth = '92vw';
        } else if (width < 1024) {
            // 平板设备
            contentWidth = '90vw';
            wideWidth = '95vw';
            narrowWidth = '85vw';
        } else if (width < 1440) {
            // 小屏桌面
            contentWidth = ratio > 1.5 ? '80vw' : '85vw';
            wideWidth = ratio > 1.5 ? '90vw' : '92vw';
            narrowWidth = '75vw';
        } else if (width < 1920) {
            // 标准桌面
            contentWidth = ratio > 1.7 ? '70vw' : '75vw';
            wideWidth = ratio > 1.7 ? '85vw' : '88vw';
            narrowWidth = '65vw';
        } else {
            // 大屏幕/超宽屏
            contentWidth = ratio > 2 ? '60vw' : '65vw';
            wideWidth = ratio > 2 ? '75vw' : '80vw';
            narrowWidth = '55vw';
        }

        // 应用动态CSS变量
        root.style.setProperty('--dynamic-content-width', contentWidth);
        root.style.setProperty('--dynamic-wide-width', wideWidth);
        root.style.setProperty('--dynamic-narrow-width', narrowWidth);
    }

    optimizeTextColumns(width) {
        // 优化文本列宽以获得最佳阅读体验
        const textElements = document.querySelectorAll('.prose, article p');
        const optimalChars = this.getOptimalLineLength(width);
        
        textElements.forEach(element => {
            if (element.classList.contains('prose')) {
                // 博客文章优化
                const fontSize = parseFloat(getComputedStyle(element).fontSize);
                const optimalWidth = optimalChars * fontSize * 0.6; // 大概的字符宽度
                element.style.maxWidth = Math.min(optimalWidth, width * 0.8) + 'px';
            }
        });
    }

    getOptimalLineLength(width) {
        // 基于研究的最佳阅读线长度 (45-75 字符)
        if (width < 640) return 45;
        if (width < 1024) return 60;
        if (width < 1440) return 65;
        return 70;
    }

    adjustSpacing(width) {
        const root = document.documentElement;
        
        // 动态调整间距
        let sectionSpacing, cardGap;
        
        if (width < 640) {
            sectionSpacing = '2rem';
            cardGap = '1rem';
        } else if (width < 1024) {
            sectionSpacing = '3rem';
            cardGap = '1.5rem';
        } else {
            sectionSpacing = '4rem';
            cardGap = '2rem';
        }
        
        root.style.setProperty('--dynamic-section-spacing', sectionSpacing);
        root.style.setProperty('--dynamic-card-gap', cardGap);
    }

    optimizeForContent() {
        // 根据内容类型优化布局
        const techCards = document.querySelectorAll('.tech-card');
        if (techCards.length > 0) {
            this.optimizeTechGrid(techCards);
        }
    }

    optimizeTechGrid(cards) {
        const container = cards[0].parentElement;
        const width = window.innerWidth;
        
        // 智能计算技术栈网格列数
        let columns;
        if (width < 480) columns = 3;
        else if (width < 640) columns = 4;
        else if (width < 768) columns = 5;
        else if (width < 1024) columns = 6;
        else if (width < 1280) columns = 7;
        else if (width < 1600) columns = 8;
        else columns = 9;
        
        if (container) {
            container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        }
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// 初始化智能布局系统
document.addEventListener('DOMContentLoaded', () => {
    new SmartLayout();
});

// 为支持的浏览器添加CSS容器查询支持检测
if (CSS.supports('container-type: inline-size')) {
    document.documentElement.classList.add('supports-container-queries');
}
