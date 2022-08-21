// config.js
module.exports = {
    title: 'CTF 그라운드', // 사이트 타이틀
    description: 'CTf 문서입니다.',
    themeConfig: {
        // logo: 'https://avatars1.githubusercontent.com/u/18749057?s=460&v=4', // 로고 이미지
        nav: [
            { text: 'web', link: '/web' },
            { text: 'steganography', link: '/steganography' },
            { text: 'forensics', link: '/forensics' },
            { text: 'pwn', link: '/pwn' },
            { text: 'crypto', link: '/crypto' },
            { text: 'reversing', link: '/reversing' },
        ],
        sidebar: 'auto' // h1~h6 같은 heading tag를 기준으로 sidebar를 만들어줌
    }
}