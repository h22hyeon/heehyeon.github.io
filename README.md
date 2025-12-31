# Heehyeon's Blog

PhD in Machine Learning - Research and Blog Website

## Features

- 🎨 미니멀리즘 디자인 (애플 스타일)
- 📱 완전 반응형 디자인
- 🚀 빠른 로딩 속도
- ✨ 부드러운 애니메이션
- 📝 블로그 포스트 시스템
- 🔍 SEO 최적화

## 구조

```
heehyeon.github.io/
├── index.html          # 메인 페이지
├── css/
│   └── style.css      # 스타일시트
├── js/
│   └── main.js        # JavaScript 기능
└── README.md          # 프로젝트 설명
```

## GitHub Pages 배포

1. 이 저장소를 GitHub에 푸시합니다
2. GitHub 저장소 설정에서 Pages를 활성화합니다
3. 브랜치를 `main`으로 설정합니다
4. 몇 분 후 `https://h22hyeon.github.io`에서 사이트를 확인할 수 있습니다

## 커스터마이징

### 블로그 포스트 추가

`js/main.js` 파일의 `blogPosts` 배열에 새로운 포스트를 추가하세요:

```javascript
{
    id: 7,
    title: "Your Post Title",
    excerpt: "Post description",
    date: "2024-01-20",
    category: "Category Name"
}
```

### 색상 변경

`css/style.css` 파일의 `:root` 변수를 수정하여 색상을 변경할 수 있습니다.

### 섹션 수정

`index.html` 파일에서 각 섹션의 내용을 수정할 수 있습니다.

## 라이선스

MIT License

