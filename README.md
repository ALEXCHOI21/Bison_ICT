# 💎 Bison SMC/ICT Academy

> **"SMC/ICT 트레이딩 이론을 비전공자 및 초보자의 눈높이에서 가장 쉽고 수려하게 전달하는 자율 학습 플랫폼"**

본 플랫폼은 **SMC(Smart Money Concepts)**와 **ICT(Inner Circle Trader)** 방법론을 기반으로 기관들의 유동성 수거 원리를 차트 분석에 대입하여 학습할 수 있도록 설계된 **웹 기반 대화형 에듀테크 솔루션**입니다.

특정 프레임워크나 빌드 도구에 종속되지 않는 **Pure Vanilla HTML/CSS/JS (Platform-Agnostic SPA)** 구조로 동작하여, 언제 어디서나 가볍고 신속하게 호스팅할 수 있습니다.

---

## 🌟 핵심 기능 (Core Features)

1. **📚 4단계 교육 로드맵 (Learning Roadmap)**
   * 초급부터 고급까지 총 15개 핵심 챕터를 유기적인 시계태엽 구조의 타임라인으로 학습합니다.
   * 브라우저 **Local Storage**를 연동하여 가입/로그인 없이도 개인의 학습 진척도와 통계가 실시간으로 보존됩니다.

2. **⚡ 개념 퀵-치트시트 (Cheatsheet)**
   * `MSS (시장 구조 전환)`, `FVG (공정가치갭)`, `BSL/SSL (유동성)`, `BPR (균형가격 범위)` 등 복잡한 전문 약어와 세력의 의도를 초보자 맞춤형 비유(Analogy)로 풀어서 설명합니다.

3. **📝 4지선다 인터랙티브 퀴즈 엔진 (Interactive Quiz Engine)**
   * 각 단원의 개념을 완벽하게 내재화할 수 있도록 실전 차트 시나리오 기반의 문제를 제공합니다.
   * 오답 선택 시 시각적 Shake 피드백 및 심층 해설 팝업이 유기적으로 연동됩니다.

4. **📐 3대 미션 실시간 SVG 작도 판독기 (Visual Simulator)**
   * **Mission 1: 공정가치갭 (FVG) 판독** - 캔들 사이의 비효율적 공간을 클릭 드래그하여 정확하게 맞추는 실전 작도 미션.
   * **Mission 2: 시장 구조 전환 (MSS) 판독** - 추세의 공식적인 반전 돌파점을 찾아 선을 긋는 핵심 추적 미션.
   * **Mission 3: 강세 오더블록 (Bullish OB) 판독** - 세력의 최종 매집 기지를 시각적으로 지정하는 최종 수거 미션.
   * 마우스 조작을 알고리즘이 실시간으로 판독 및 채점합니다.

5. **🤖 로컬 API Key 주입형 AI Tutor**
   * 플랫폼의 장기적인 서버 유지 비용을 **Zero**로 통제하기 위해, 학습자의 브라우저 로컬 스토리지에 직접 API Key를 임시 보관하여 AI와 실시간으로 차트 질의응답을 나눌 수 있습니다.

---

## 🛠️ 기술 스택 (Tech Stack)

* **UI/UX**: HTML5 Semantic Markup
* **Styling**: Pure CSS3 (Glassmorphism 테마, Neon Indigo & Violet HSL 스키마, Responsive Flexbox/Grid)
* **Logic**: Vanilla ES6+ Javascript (No external framework dependencies)
* **Visual Engine**: SVG (Scalable Vector Graphics) Interactive Render Engine
* **Database**: `docs/data/lessons_db.json` (정형화된 15개 챕터 교안 데이터베이스)

---

## 🌐 GitHub Pages 배포 가이드 (Deployment)

본 저장소는 배포 즉시 활성화할 수 있도록 루트(`/`) 경로에 최적화되어 있습니다:

1. 본 리포지토리의 **`Settings` (설정)** 탭으로 이동합니다.
2. 좌측 메뉴에서 **`Pages`**를 클릭합니다.
3. **`Build and deployment`** 섹션의 **`Branch`** 드롭다운 설정을 다음과 같이 지정합니다:
   * **`main`** 브랜치 선택
   * 폴더는 **`/ (root)`** 로 선택
4. 우측의 **`Save` (저장)** 버튼을 누르면 1분 뒤 아래의 주소로 자동 배포됩니다.

🔗 **배포 공식 주소**: [https://alexchoi21.github.io/Bison_ICT/](https://alexchoi21.github.io/Bison_ICT/)
