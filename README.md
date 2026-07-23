# 김기범 포트폴리오

김기범의 프로젝트와 작업 방식을 소개하는 GitHub Pages용 단일 페이지 포트폴리오입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

배포용 검증:

```bash
npm run lint
npm run build
npm run preview
```

## GitHub Pages 배포

이 폴더를 `codingbear107.github.io` 저장소의 `main` 브랜치에 올리면
`.github/workflows/deploy.yml`이 정적 사이트를 빌드하고 GitHub Pages에 배포합니다.

저장소의 **Settings → Pages → Build and deployment → Source**를
**GitHub Actions**로 설정해야 합니다.

## 공개 전 확인

- 학과 공식 인스타그램 게시물 링크 또는 비식별 캡처 추가
- 유료 운영 앱의 고객·학생 개인정보를 지운 증거 이미지 추가
- 필요하면 공개 연락용 이메일 추가
- 프로젝트 결과 수치가 바뀌면 본문과 메타데이터 함께 갱신
