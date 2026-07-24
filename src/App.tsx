import { useEffect } from 'react'

type IconProps = {
  size?: number
}

const ArrowUpRight = ({ size = 18 }: IconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
  </svg>
)

const Github = ({ size = 20 }: IconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path
      d="M15 22v-3.9c.04-1-.34-1.97-1.05-2.67 3.52-.39 7.22-1.73 7.22-7.82A6.1 6.1 0 0 0 19.55 3.37 5.7 5.7 0 0 0 19.39.55S18.1.14 15 2.17a15.4 15.4 0 0 0-8 0C3.9.14 2.61.55 2.61.55a5.7 5.7 0 0 0-.16 2.82A6.1 6.1 0 0 0 .83 7.61c0 6.08 3.7 7.42 7.22 7.82A3.76 3.76 0 0 0 7 18.1V22M7 19c-3 .92-3-1.5-4.2-2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  </svg>
)

const Mail = ({ size = 20 }: IconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path
      d="M4 6.5h16v11H4zM4.8 7.3 12 13l7.2-5.7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  </svg>
)

const Check = ({ size = 16 }: IconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path d="m5 12 4 4L19 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
)

type ProjectVisualType = 'ise' | 'planner' | 'vibetown' | 'scpc'

type Project = {
  id: string
  number: string
  period: string
  stage: string
  title: string
  summary: string
  detail: string
  role: string
  decision: string
  results: readonly string[]
  stack: readonly string[]
  links: readonly {
    href: string
    label: string
  }[]
  privateLabel?: string
  visual: ProjectVisualType
}

const projects: readonly Project[] = [
  {
    id: 'ise',
    number: '01',
    period: '2026.05 — NOW',
    stage: 'LIVE · OFFICIAL LAUNCH',
    title: 'ISE 커뮤니티',
    summary:
      '흩어진 학과 정보와 LMS 일정을 한곳에 모은 지능형반도체공학과 통합 플랫폼.',
    detail:
      '직접 겪은 e-Class 일정 관리의 불편에서 시작해 과제·퀴즈 일정을 자동 수집하고, 자료 공유·커뮤니티·AI 학습 기능까지 확장했습니다.',
    role: 'Solo · 문제 정의, 기획, 디자인, 풀스택 개발, 배포',
    decision:
      'LMS를 3시간 주기로 동기화하고, 학교 이메일 인증과 문서 맥락 기반 AI를 하나의 서비스 흐름으로 묶었습니다.',
    results: ['학과 공식 채널 출시', 'LMS 3시간 주기 동기화', '학교 이메일 인증'],
    stack: ['Next.js', 'Firebase', 'Gemini', 'GraphRAG'],
    links: [
      {
        href: 'https://ise-community.web.app',
        label: '서비스',
      },
      {
        href: 'https://www.instagram.com/p/DXoON_ZgVmj/?img_index=1',
        label: '공식 출시 공지',
      },
    ],
    visual: 'ise',
  },
  {
    id: 'planner',
    number: '02',
    period: '2026.01 — NOW',
    stage: 'LIVE · PAID INTERNAL APP',
    title: '원생 계획표 통합 운영 앱',
    summary:
      '학원 운영자의 반복적인 촬영·문자 발송 업무를 하나의 모바일 흐름으로 줄인 유료 내부 도구.',
    detail:
      '2026년 1월 중순 도입해 2월까지 무료로 검증했고, 이후 월 1만원으로 전환했습니다. 계획표 촬영, 학생 선택, 메시지 발송과 이력 관리를 한 흐름으로 통합했습니다.',
    role: 'Solo · 현장 문제 발굴, 워크플로 설계, 앱 개발, 운영',
    decision:
      'Android APK에 서버 관리형 PIN과 오프라인 캐시를 적용했습니다. 학생별 하루 1회 발송 제한, 이력과 실행 취소로 중복 발송 위험도 줄였습니다.',
    results: ['40분 → 10분', '20클릭 → 5클릭', '월 1만원 · 3개월 연속 결제'],
    stack: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
    links: [],
    privateLabel: 'PRIVATE APK · v8.0',
    visual: 'planner',
  },
  {
    id: 'vibetown',
    number: '03',
    period: '2026.05 — NOW',
    stage: 'PUBLIC PROTOTYPE · PRE-VALIDATION',
    title: 'Vibetown',
    summary:
      '고등학생이 AI와 함께 자신의 첫 웹 프로젝트를 완성하도록 돕는 한국어 바이브코딩 SaaS.',
    detail:
      '예시 프로젝트 탐색부터 명세 작성, 웹 IDE, 도구 사용 학습, 배포까지 이어지는 경험을 구현했습니다. 현재 공개 프로토타입 단계이며 사용자·시장 검증은 아직 시작 전입니다.',
    role: 'Solo · 제품 전략, UX, 풀스택, 배포 인프라, 테스트',
    decision:
      '브라우저에 프로젝트 키를 노출하지 않는 짧은 공개 URL과 동일 출처 프록시를 설계해, 학생 결과물을 안전하게 공유하도록 했습니다.',
    results: ['공개 프로토타입', 'Unit 119/119', '키 없는 공개 URL'],
    stack: ['React', 'Cloudflare', 'Firebase', 'AI Agents'],
    links: [
      {
        href: 'https://vibetown.co.kr',
        label: '프로토타입',
      },
    ],
    visual: 'vibetown',
  },
  {
    id: 'scpc',
    number: '04',
    period: '2026.07 · 5-DAY SPRINT',
    stage: 'OPEN SOURCE · AI CHALLENGE',
    title: 'SCPC Agent Harness',
    summary:
      '모호한 AI 요청을 일관된 정책·행동 계획으로 바꾸는 결정론적 에이전트 하네스.',
    detail:
      '외부 LLM 없이 구조와 의미를 해석하는 규칙 기반 시스템을 만들고, 5일간 평가 루프를 반복해 공개 점수를 0.379에서 0.861까지 높였습니다.',
    role: 'Solo · 실험 설계, 규칙 엔진, 평가 하네스, 오픈소스',
    decision:
      '파서·불변식·준수 감사를 결정론적으로 분리하고, 변형 테스트로 같은 의미의 입력에서 정책이 흔들리지 않는지 검증했습니다.',
    results: ['1,845명 중 269위', '0.379 → 0.861', '외부 LLM·네트워크 0'],
    stack: ['Python', 'Deterministic AI', 'Evaluation', 'Agent Harness'],
    links: [
      {
        href: 'https://github.com/codingbear107/scpc-2026-harness',
        label: 'GitHub',
      },
    ],
    visual: 'scpc',
  },
]

const otherWork = [
  {
    label: 'LIVE',
    title: 'CodeType',
    description:
      '자연어를 C 코드로 바꾸고, 컴파일 검증과 고스트 타이핑으로 이어지는 학습 도구.',
    meta: 'AI · Godbolt · Firebase',
    href: 'https://codetype.co.kr',
  },
  {
    label: 'LIVE',
    title: 'StudyManager',
    description:
      '독학재수학원 업무를 시간대별 안내와 체크리스트로 구조화한 인수인계용 PWA.',
    meta: 'React · PWA · Operations',
    href: 'https://studymanager-e470a.web.app',
  },
  {
    label: 'OPEN SOURCE',
    title: 'Medical AI',
    description:
      '의료영상 퓨샷 도메인 일반화를 실험한 ML 파이프라인. 워밍업 Combined 0.7913.',
    meta: 'Python · PyTorch · Domain Generalization',
    href: 'https://github.com/codingbear107/medical_ai',
  },
] as const

const capabilities = [
  {
    index: '01',
    title: 'Product',
    text: '실제 불편을 관찰하고 사용자 흐름과 최소 기능을 정의해 빠르게 검증합니다.',
  },
  {
    index: '02',
    title: 'Full-stack',
    text: 'React·Firebase·Cloudflare를 중심으로 웹과 앱, 운영 인프라까지 연결합니다.',
  },
  {
    index: '03',
    title: 'AI systems',
    text: 'RAG·GraphRAG, 에이전트 하네스, 평가 파이프라인을 제품 안에서 작동시킵니다.',
  },
  {
    index: '04',
    title: 'Verification',
    text: '명세, 테스트, E2E, 리뷰, Git 앵커로 “완료했다”는 증거를 남깁니다.',
  },
] as const

function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

function ProjectVisual({ type }: { type: ProjectVisualType }) {
  if (type === 'ise') {
    return (
      <div className="project-visual visual-ise">
        <div className="browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <span className="browser-address">ise-community.web.app</span>
        </div>
        <img
          alt="ISE 커뮤니티 모바일 홈 화면"
          height="1160"
          loading="lazy"
          src="/projects/ise-community.webp"
          width="700"
        />
      </div>
    )
  }

  if (type === 'planner') {
    return (
      <div className="project-visual visual-planner">
        <div className="planner-device">
          <img
            alt="원생 계획표 통합 운영 앱 버전 8.0 설정 화면"
            height="1376"
            loading="lazy"
            src="/projects/planner-settings-v8.jpg"
            width="648"
          />
        </div>
        <div className="planner-proof" aria-hidden="true">
          <span>PRIVATE APK · v8.0</span>
          <div>
            <small>WORK TIME</small>
            <strong>40m <i>→</i> 10m</strong>
          </div>
          <div>
            <small>PAID OPERATION</small>
            <strong>3 months</strong>
          </div>
          <p>PIN-gated · Firebase</p>
        </div>
      </div>
    )
  }

  if (type === 'vibetown') {
    return (
      <div className="project-visual visual-vibetown" aria-hidden="true">
        <div className="vibe-sidebar">
          <span className="vibe-mark">V</span>
          <span className="vibe-item is-active" />
          <span className="vibe-item" />
          <span className="vibe-item" />
        </div>
        <div className="vibe-main">
          <div className="vibe-header">
            <div>
              <small>MY FIRST BUILD</small>
              <strong>나만의 날씨 앱</strong>
            </div>
            <span>배포 준비</span>
          </div>
          <div className="vibe-workspace">
            <div className="vibe-code">
              <span><i className="blue">const</i> weather = <i className="mint">await</i> getWeather()</span>
              <span><i className="blue">return</i> (</span>
              <span className="indent">&lt;WeatherCard</span>
              <span className="indent deep">city=<i className="amber">&quot;Seoul&quot;</i></span>
              <span className="indent">/&gt;</span>
              <span>)</span>
            </div>
            <div className="vibe-preview">
              <small>SEOUL</small>
              <strong>27°</strong>
              <span>맑음</span>
            </div>
          </div>
          <div className="vibe-message">
            <span>AI</span>
            <p>좋아요. 이제 실제 날씨 데이터를 연결해 볼게요.</p>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'scpc') {
    return (
      <div className="project-visual visual-scpc" aria-hidden="true">
        <div className="score-ring">
          <svg viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="48" />
            <circle className="score-progress" cx="60" cy="60" r="48" />
          </svg>
          <div>
            <small>PUBLIC SCORE</small>
            <strong>0.8610</strong>
          </div>
        </div>
        <div className="scpc-output">
          <div className="output-head">
            <span>structured_output.json</span>
            <span className="output-ok"><Check /> deterministic</span>
          </div>
          <pre>{`{
  "control": "confirm",
  "target": "user",
  "scope": "redacted",
  "policy": ["minimize"],
  "audit": "passed"
}`}</pre>
        </div>
        <div className="scpc-foot">
          <span>700 tasks</span>
          <span>0 external APIs</span>
          <span>byte-for-byte</span>
        </div>
      </div>
    )
  }

  const exhaustiveVisual: never = type
  return exhaustiveVisual
}

function Header() {
  return (
    <header className="site-header">
      <a
        aria-label="김기범 Product builder 포트폴리오 처음으로"
        className="brand"
        href="#top"
      >
        <span className="brand-mark">KB</span>
        <span className="brand-copy">
          <strong>김기범</strong>
          <small lang="en">Product builder</small>
        </span>
      </a>
      <nav aria-label="주요 메뉴">
        <a href="#work" lang="en">Work</a>
        <a href="#system" lang="en">System</a>
        <a href="#about" lang="en">About</a>
      </nav>
      <a
        aria-label="GitHub 프로필 열기 (새 탭)"
        className="header-github"
        href="https://github.com/codingbear107"
        rel="noreferrer"
        target="_blank"
      >
        <Github />
        <span>GitHub</span>
      </a>
    </header>
  )
}

function App() {
  useReveal()

  return (
    <>
      <Header />
      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow" lang="en">
              <span className="status-dot" />
              AI-native product builder · Seoul
            </p>
            <h1>
              불편을 발견하고,
              <br />
              <em>작동하는 제품</em><span className="hero-postfix">으로</span>
              <br className="hero-desktop-break" />
              <span className="hero-final">바꿉니다.</span>
            </h1>
            <p className="hero-description">
              중앙대학교 지능형반도체공학과 김기범입니다. 문제 정의부터
              기획·디자인·개발·배포·검증까지, AI 에이전트와 함께 실제로
              쓰이는 제품을 만듭니다.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                만든 것 보기
                <ArrowUpRight />
              </a>
              <a
                aria-label="GitHub 프로필 열기 (새 탭)"
                className="button button-secondary"
                href="https://github.com/codingbear107"
                rel="noreferrer"
                target="_blank"
              >
                <Github />
                GitHub
              </a>
            </div>
          </div>

          <aside className="hero-signal" aria-label="작업 방식">
            <div className="signal-head" lang="en">
              <span>BUILD SIGNAL</span>
              <span className="live-badge"><i /> ACTIVE</span>
            </div>
            <div className="signal-title">
              <small lang="en">CURRENT FOCUS</small>
              <strong lang="en">Education SaaS</strong>
              <p>배우는 사람이 자신의 첫 제품을 끝까지 완성하게 만드는 경험.</p>
            </div>
            <ol className="signal-flow" lang="en">
              <li>
                <span>01</span>
                <div><strong>Find</strong><small>real friction</small></div>
                <i />
              </li>
              <li>
                <span>02</span>
                <div><strong>Specify</strong><small>smallest proof</small></div>
                <i />
              </li>
              <li>
                <span>03</span>
                <div><strong>Ship</strong><small>working product</small></div>
                <i />
              </li>
              <li>
                <span>04</span>
                <div><strong>Verify</strong><small>evidence & learn</small></div>
              </li>
            </ol>
            <div className="signal-note">
              <span lang="en">OPEN TO</span>
              <p>초기 제품 개발 · 창업팀 협업 · 빠른 MVP</p>
            </div>
          </aside>

          <dl className="hero-metrics" aria-label="주요 수치">
            <div>
              <dt>대표 프로젝트</dt>
              <dd>4</dd>
            </div>
            <div>
              <dt>연속 유료 운영</dt>
              <dd>3<sup>개월</sup></dd>
            </div>
            <div>
              <dt>SCPC 참가자 중 순위</dt>
              <dd className="metric-rank">269<small>/1,845</small></dd>
            </div>
            <div>
              <dt>학과 공식 출시</dt>
              <dd>1</dd>
            </div>
          </dl>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading" data-reveal>
            <div>
              <p className="section-kicker" lang="en">SELECTED WORK · 2025—2026</p>
              <h2>아이디어보다<br />작동하는 증거.</h2>
            </div>
            <p>
              데모에서 끝내지 않고, 실제 사용 흐름과 배포 환경까지 연결한
              프로젝트를 골랐습니다.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article
                className={`project-card project-card-${project.visual}`}
                data-reveal
                key={project.id}
                style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}
              >
                <div className="project-card-meta">
                  <span>{project.number} · {project.period}</span>
                  <span lang="en">{project.stage}</span>
                </div>
                <ProjectVisual type={project.visual} />
                <div className="project-body">
                  <div className="project-intro">
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>
                  <div className="project-copy">
                    <p>{project.detail}</p>
                    <p className="contribution">
                      <span lang="en">OWNERSHIP</span>
                      {project.role}
                    </p>
                    <p className="project-decision">
                      <span lang="en">KEY DECISION</span>
                      {project.decision}
                    </p>
                  </div>
                  <ul className="result-list" aria-label={`${project.title} 성과`}>
                    {project.results.map((result) => (
                      <li key={result}><Check />{result}</li>
                    ))}
                  </ul>
                  <div className="project-footer">
                    <ul className="tag-list" aria-label={`${project.title} 기술`}>
                      {project.stack.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a
                          aria-label={`${project.title} ${link.label} 열기 (새 탭)`}
                          href={link.href}
                          key={link.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {link.label}
                          <ArrowUpRight />
                        </a>
                      ))}
                      {project.privateLabel && (
                        <span className="private-label">{project.privateLabel}</span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section system-section" id="system">
          <div className="section-heading section-heading-light" data-reveal>
            <div>
              <p className="section-kicker" lang="en">THE SYSTEM BEHIND THE WORK</p>
              <h2>한 번의 경험을<br />다음 제품의 속도로.</h2>
            </div>
            <p>
              프로젝트마다 다시 헤매지 않도록 시행착오와 검증 방식을 도구로
              남깁니다.
            </p>
          </div>

          <div className="system-grid">
            <article className="system-card toolkit-card" data-reveal>
              <div className="system-card-head" lang="en">
                <span>01 · AGENT TOOLKIT</span>
                <span>v0.7.1</span>
              </div>
              <h3>에이전트가 빠르게 만들고,<br />사람이 확실하게 판단하는 구조.</h3>
              <p>
                PRD 인테이크부터 단일 가설 실험, 병렬 코드리뷰, 불변성 테스트,
                완료 증거까지 한 흐름으로 묶었습니다.
              </p>
              <ol
                aria-label="Agent Toolkit flow"
                className="toolkit-pipeline"
                lang="en"
              >
                {['PRD', 'SPEC', 'BUILD', 'REVIEW', 'PROOF'].map((item, index) => (
                  <li key={item}>
                    <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <strong>{item}</strong>
                    {index < 4 && <i aria-hidden="true" />}
                  </li>
                ))}
              </ol>
              <dl className="system-stats" lang="en">
                <div><dt>specialized skills</dt><dd>9</dd></div>
                <div><dt>review agent</dt><dd>1</dd></div>
                <div><dt>evidence levels</dt><dd>3</dd></div>
              </dl>
            </article>

            <article className="system-card wiki-card" data-reveal>
              <div className="system-card-head" lang="en">
                <span>02 · LLM WIKI</span>
                <span>PRIVATE</span>
              </div>
              <h3>프로젝트의 맥락을<br />AI가 읽을 수 있는 지식으로.</h3>
              <p>
                원본 기록, 상호링크 위키, 세션 부트스트랩, Git 롤백을 연결해
                결정과 교훈이 다음 작업에 이어지도록 설계했습니다.
              </p>
              <div className="wiki-graph" aria-hidden="true">
                <svg viewBox="0 0 520 210">
                  <g className="graph-lines">
                    <path d="M80 105 190 45 310 75 430 34" />
                    <path d="M80 105 205 160 310 75 430 168" />
                    <path d="M190 45 205 160 430 168" />
                    <path d="M310 75 345 150" />
                  </g>
                  <g className="graph-nodes">
                    <circle cx="80" cy="105" r="22" />
                    <circle cx="190" cy="45" r="15" />
                    <circle cx="205" cy="160" r="18" />
                    <circle cx="310" cy="75" r="25" />
                    <circle cx="345" cy="150" r="13" />
                    <circle cx="430" cy="34" r="16" />
                    <circle cx="430" cy="168" r="21" />
                  </g>
                  <g className="graph-labels">
                    <text x="80" y="109">GOAL</text>
                    <text x="310" y="79">WORK</text>
                    <text x="430" y="172">LEARN</text>
                  </g>
                </svg>
              </div>
              <dl className="system-stats" lang="en">
                <div><dt>wiki pages</dt><dd>33</dd></div>
                <div><dt>internal links</dt><dd>184</dd></div>
                <div><dt>dead links</dt><dd>0</dd></div>
              </dl>
            </article>
          </div>
        </section>

        <section className="section other-section">
          <div className="other-heading" data-reveal>
            <p className="section-kicker" lang="en">OTHER WORK</p>
            <h2>작게 만들고,<br />끝까지 확인한 것들.</h2>
          </div>
          <div className="other-grid">
            {otherWork.map((item, index) => (
              <a
                aria-label={`${item.title} 열기 (새 탭)`}
                className="other-card"
                data-reveal
                href={item.href}
                key={item.title}
                rel="noreferrer"
                style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}
                target="_blank"
              >
                <span className="other-label" lang="en">{item.label}</span>
                <div>
                  <h3>{item.title}</h3>
                  <ArrowUpRight size={24} />
                </div>
                <p>{item.description}</p>
                <small>{item.meta}</small>
              </a>
            ))}
          </div>
        </section>

        <section className="section capability-section">
          <div className="capability-intro" data-reveal>
            <p className="section-kicker" lang="en">WHAT I BRING</p>
            <h2>전체 흐름을 연결하고,<br />팀의 빈칸을 채웁니다.</h2>
            <p>
              모호한 요구를 사용 흐름과 수용 기준으로 구조화하고, 확인되지 않은
              부분은 가정과 질문으로 분리합니다.
            </p>
          </div>
          <div className="capability-list">
            {capabilities.map((item) => (
              <article data-reveal key={item.index}>
                <span>{item.index}</span>
                <h3 lang="en">{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-quote" data-reveal>
            <span className="quote-mark">“</span>
            <blockquote>
              상상을 현실로 만드는 순간에서
              <br />
              <em>가장 큰 효능감</em>을 느낍니다.
            </blockquote>
          </div>
          <div className="about-copy" data-reveal>
            <h2 className="section-kicker" lang="en">ABOUT</h2>
            <p className="about-lead">
              저는 일상의 작은 마찰을 지나치지 않고, 그것을 다른 사람에게도
              유용한 제품으로 바꾸는 일을 좋아합니다.
            </p>
            <p>
              코드를 많이 쓰는 것보다 문제를 정확히 정의하고, 작동하는 최소
              단위로 나누고, 배포 후 증거를 확인하는 데 집중합니다. 한 번 얻은
              교훈은 하네스와 위키에 축적해 다음 도전의 출발점으로 씁니다.
            </p>
            <p>
              지금은 바이브코딩 교육 SaaS를 만들고 있습니다. 시장과 비즈니스
              모델이 선명한 팀에서 구현을 책임지거나, 초기 아이디어를 함께
              제품으로 만드는 협업에도 열려 있습니다.
            </p>
            <dl className="about-facts" lang="en">
              <div><dt>Based in</dt><dd>Seoul, Korea</dd></div>
              <div><dt>Study</dt><dd>CAU · Intelligent Semiconductor Engineering</dd></div>
              <div><dt>Focus</dt><dd>AI Product · EdTech · SaaS</dd></div>
              <div><dt>Current · 2026.07</dt><dd lang="ko">LG Aimers 9기 Phase I 수강 · 2026 AI 반도체 회로 설계 경진대회 1차 결과 제출 준비</dd></div>
            </dl>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-noise" aria-hidden="true" />
          <p className="section-kicker" lang="en">LET’S BUILD SOMETHING USEFUL</p>
          <h2>
            좋은 문제를 갖고 있다면,
            <br />
            같이 <em>작동하게</em> 만들어 봅시다.
          </h2>
          <p>
            제품 구현, 빠른 MVP, AI 기능 설계와 검증이 필요한 팀의 제안을
            기다립니다.
          </p>
          <div className="contact-actions">
            <a
              aria-label="gibeom107@gmail.com으로 김기범에게 이메일 보내기"
              className="contact-button"
              href="mailto:gibeom107@gmail.com"
            >
              <Mail size={22} />
              gibeom107@gmail.com
              <ArrowUpRight size={22} />
            </a>
            <a
              aria-label="GitHub 프로필 열기 (새 탭)"
              className="contact-button contact-button-secondary"
              href="https://github.com/codingbear107"
              rel="noreferrer"
              target="_blank"
            >
              <Github size={22} />
              GitHub
              <ArrowUpRight size={22} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <span lang="en">© 2026 KIM GIBEOM</span>
          <span lang="en">AI-NATIVE PRODUCT BUILDER</span>
        </div>
        <a href="#top">맨 위로 ↑</a>
      </footer>
    </>
  )
}

export default App
