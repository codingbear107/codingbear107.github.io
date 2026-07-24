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

## 공개 정보 관리

- 유료 운영 앱에는 학생·학부모 정보가 없는 설정 화면만 사용
- 프로젝트 성과는 공식 게시물, 공개 저장소, 비식별 운영 근거로 확인
- 프로젝트 결과 수치가 바뀌면 본문과 메타데이터 함께 갱신
