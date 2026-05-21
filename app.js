/**
 * 💎 Bison SMC Academy - Main Interactive Logic (Vanilla JS)
 * - Platform Agnostic, Zero Vendor Lock-in SPA Framework
 * - LocalStorage Progress & Statistics Tracking
 * - Multi-mission Interactive SVG Chart Simulator
 * - AI Tutor with User's Local Gemini API Key
 */

// ── FALLBACK DATABASE (SMC/ICT 15 Chapters) ──
// If lessons_db.json is not loaded, this data ensures 100% functional app.
const FALLBACK_LESSONS = [
    {
        "id": "MSS",
        "title": "시장 구조 전환 (MSS, Market Structure Shift)",
        "phase": "1단계: 시장 기초와 추세",
        "difficulty": "초급",
        "tldr": "MSS는 달리던 기차가 방향을 완전히 틀기 위해 처음으로 켜는 깜빡이(방향지시등)입니다.",
        "analogy": "도둑이 담장을 넘어 집 안으로 들어오려면 먼저 가장 높은 보안 울타리(마지막 언덕)를 깨트려야 하는 것과 같습니다. 차트가 하락하다가 상승으로 바뀌려면 직전의 가장 높은 산봉우리를 뚫어내야 합니다.",
        "concept": "하락 추세 속에서 형성된 마지막 '낮은 고점(LH, Lower High)'을 강세 캔들(장대양봉 등) 몸통으로 돌파하여 캔들이 마감되는 순간을 MSS가 확정되었다고 판단합니다. 꼬리만 터치한 것은 유동성 청소(Sweep)일 뿐 돌파가 아닙니다.",
        "terms": [
            { "term": "MSS (Market Structure Shift)", "desc": "시장 구조 전환. 추세가 공식적으로 바뀌는 첫 번째 신호." },
            { "term": "Displacement (강력한 전개)", "desc": "거래량이 실린 장대 캔들로 지지/저항을 강하게 밀어붙이는 움직임." }
        ],
        "quizzes": [
            {
                "question": "다음 중 하락 추세에서 상승 추세로의 진짜 시장 구조 전환(MSS)을 의미하는 것은?",
                "options": [
                    "캔들의 꼬리만 직전 고점을 살짝 스치고 내려왔을 때",
                    "캔들의 꽉 찬 몸통이 직전의 '낮은 고점(LH)'을 돌파하여 마감했을 때",
                    "20일 이동평균선 아래에서 계속 음봉이 발생할 때",
                    "거래량이 완전히 바닥을 치며 횡보할 때"
                ],
                "answer": 1,
                "explanation": "시장 구조 전환은 강력한 힘(Displacement)을 수반하며, 꼬리가 아닌 몸통이 직전 고점 위에서 완성되어 마감해야 신뢰할 수 있습니다."
            },
            {
                "question": "시장 구조 전환(MSS)이 일어날 때 필수적으로 동반되어야 하는 캔들의 특성은 무엇일까요?",
                "options": [
                    "거래량이 없는 지지부진한 도지(Doji) 캔들",
                    "위아래로 매우 긴 꼬리만 달고 몸통이 얇은 캔들",
                    "속도와 거래량이 실려 강하게 뚫고 나가는 장대형 캔들(Displacement)",
                    "반드시 5개 연속 음봉이 겹쳐서 나오는 형태"
                ],
                "answer": 2,
                "explanation": "세력의 개입을 알려주는 강력한 캔들 돌파(Displacement)가 동반되어야 진짜 추세 전환의 뼈대가 갖춰집니다."
            }
        ]
    },
    {
        "id": "LIQUIDITY",
        "title": "유동성 이론 (Liquidity Concepts)",
        "phase": "2단계: 유동성 이론",
        "difficulty": "중급",
        "tldr": "유동성은 기관 세력들이 배를 채우기 위해 눈독을 들이는 '개미들의 짭조름한 손절 물량 맛집'입니다.",
        "analogy": "세력은 거대한 고래와 같아서 수천억 원의 주문을 한 번에 체결하려면 엄청난 양의 반대 물량이 필요합니다. 물고기 떼(개미들의 손절 물량)가 바글바글 모여 있는 낚시 포인트(직전 고점/저점 너머)로 그물을 던지는 원리입니다.",
        "concept": "차트상 직전 고점(BSL, Buy-side Liquidity) 바로 위에는 숏 포지션 개미들의 손절 주문(매수 주문)이, 직전 저점(SSL, Sell-side Liquidity) 바로 아래에는 롱 포지션 개미들의 손절 주문(매도 주문)이 지뢰처럼 깔려 있습니다. 가격은 세력들의 체결을 위해 이곳을 먼저 청소(Sweep)하러 갑니다.",
        "terms": [
            { "term": "BSL (Buy-side Liquidity)", "desc": "매수측 유동성. 직전 고점들 뒤에 배치된 숏 포지션의 손절 물량." },
            { "term": "SSL (Sell-side Liquidity)", "desc": "매도측 유동성. 직전 저점들 뒤에 배치된 롱 포지션의 손절 물량." },
            { "term": "Sweep (청소/휩쓸기)", "desc": "고점/저점을 꼬리로만 쏙 터치하여 손절 물량만 가볍게 가로챈 뒤 반대로 질주하는 현상." }
        ],
        "quizzes": [
            {
                "question": "기관과 세력들이 대규모 매도(숏) 포지션을 구축하기 위해 개미들의 손절 물량을 청소하러 가는 고점 구간을 무엇이라 부르는가?",
                "options": [
                    "SSL (Sell-side Liquidity)",
                    "BSL (Buy-side Liquidity)",
                    "FVG (Fair Value Gap)",
                    "20MA Line"
                ],
                "answer": 1,
                "explanation": "매수측 유동성(BSL)은 고점 뒤에 쌓이며, 숏을 쥔 개미들의 손절(매수)을 강제로 발동시켜 세력들이 편안하게 대형 매도 물량을 떠넘길 때 활용됩니다."
            }
        ]
    },
    {
        "id": "PREMIUM_DISCOUNT",
        "title": "프리미엄 vs 디스카운트 (Premium & Discount Zone)",
        "phase": "1단계: 시장 기초와 추세",
        "difficulty": "초급",
        "tldr": "시장에서 성공하려면 무조건 동네 대형마트에서 '반값 할인(디스카운트)' 품목만 노려야 합니다.",
        "analogy": "백화점에서 정가 100만 원짜리 명품을 120만 원(프리미엄)에 사면 손해지만, 40만 원(디스카운트)에 세일할 때 사면 큰 이득을 봅니다. 차트에서도 피보나치 50% 반값 라인을 기준으로 어디가 싼 지를 계산해야 합니다.",
        "concept": "최근 상승 파동의 최저점(0%)과 최고점(100%)을 연결한 뒤, 50%의 균형 가격(Equilibrium)을 잡습니다. 50% 이상 구역은 '프리미엄(비싼 영역)', 50% 이하 구역은 '디스카운트(저렴한 영역)'입니다. 매수는 오직 디스카운트 구역에서만 진입해야 안전합니다.",
        "terms": [
            { "term": "Equilibrium (균형 가격)", "desc": "피보나치 되돌림의 딱 중간(0.5 / 50%) 지점." },
            { "term": "Discount Zone (할인 영역)", "desc": "균형 가격 아래의 저렴한 영역. 롱 진입의 필수 전제조건." }
        ],
        "quizzes": [
            {
                "question": "피보나치 0.5(50%)를 기준으로 아래의 저렴한 영역을 무엇이라 부르며, 매수(롱) 관점에서 어떻게 대응해야 하는가?",
                "options": [
                    "프리미엄 구역 - 공격적으로 즉시 추격 매수한다.",
                    "디스카운트 구역 - 가격이 이 아래로 충분히 내려올 때까지 진입을 대기한다.",
                    "평형 구역 - 볼륨이 없으므로 영원히 매매하지 않는다.",
                    "초과 프리미엄 구역 - 고배율 롱을 진입한다."
                ],
                "answer": 1,
                "explanation": "성공적인 SMC 트레이딩의 황금률은 '오직 디스카운트 구역에서만 롱을 잡는 것'이며 비쌀 때는 절대로 서둘러 진입하지 않습니다."
            }
        ]
    },
    {
        "id": "ORDERBLOCK",
        "title": "주문 블록의 기초 (Order Blocks, OB)",
        "phase": "1단계: 시장 기초와 추세",
        "difficulty": "초급",
        "tldr": "오더블록은 대기업 회장님이 대량 매집 주식을 쌓아놓고 비서에게 '이 가격 오면 또 사둬'라고 지시한 본사 기지입니다.",
        "analogy": "어마어마한 부자가 백화점 물건을 전부 쓸어가려고 계약금을 걸어두었습니다. 백화점에 재고가 채워져 가격이 그 자리로 다시 내려오면 자동으로 계약이 활성화되며 불이 뿜어지듯 팔려나갑니다.",
        "concept": "가격이 한 방향으로 폭발하기(MSS) 직전에 세력들이 주문을 대량으로 체결한 마지막 반대 방향 캔들 영역입니다. 상승 폭발 직전의 음봉이 '강세 오더블록(Bullish OB)'이 되며, 훗날 되돌림 시 강력한 바닥 지지판이 됩니다.",
        "terms": [
            { "term": "Mitigation (완화/되돌림)", "desc": "오더블록에 훗날 가격이 다시 터치하여 세력들의 미체결 잔여 물량을 해소하는 과정." },
            { "term": "Bullish OB (강세 오더블록)", "desc": "상승 폭발 직전에 만들어진 마지막 음봉 캔들 몸통 구역." }
        ],
        "quizzes": [
            {
                "question": "다음 중 상승 오더블록(Bullish OB)의 기준으로 가장 올바른 캔들 영역은?",
                "options": [
                    "가격이 장대양봉으로 전속력 폭발하기 직전에 만들어진 마지막 '음봉 캔들의 몸통 구역'",
                    "차트의 맨 꼭대기 고점에서 생성된 엄청난 장대양봉",
                    "아무 추세도 없이 잔잔하게 흘러가는 도중의 노란색 캔들",
                    "거래량이 없는 미세한 캔들의 긴 꼬리 끝부분"
                ],
                "answer": 0,
                "explanation": "급격한 상승 폭발이 터지기 직전에 나타난 마지막 하락(음봉) 캔들 몸통을 상승 오더블록(OB)이라 칭하며 되돌림 시 강력한 롱 진입 타점이 됩니다."
            }
        ]
    },
    {
        "id": "FVG",
        "title": "공정가치갭 (FVG, Fair Value Gap)",
        "phase": "3단계: 고급 ICT 패턴",
        "difficulty": "중급",
        "tldr": "FVG는 세력들이 람보르기니를 타고 풀액셀을 밟아 순간이동을 하면서 도로에 뻥 뚫어놓은 공기 구멍(진공 상태)입니다.",
        "analogy": "태풍이 휘쓸고 지나간 자리는 기압 차이 때문에 주변 공기가 다시 메우러 가야 합니다. 차트가 한쪽으로 너무 빨리 질주하면, 미처 체결되지 못한 주문 공간(갭)이 생기며 가격은 결국 자석처럼 이 빈틈을 메우러 끌려옵니다.",
        "concept": "3개의 연속된 캔들 중, 1번째 캔들의 저가(꼬리)와 3번째 캔들의 고가(꼬리)가 서로 겹치지 않아 2번째 캔들의 한가운데에 붕 뜬 빈 공간이 생겼을 때 이를 FVG라고 합니다. 이 공간은 고효율 되돌림의 강력한 지지/저항(POI) 역할을 합니다.",
        "terms": [
            { "term": "FVG (Fair Value Gap)", "desc": "공정가치갭. 3캔들 패턴에서 1번 캔들과 3번 캔들 꼬리 사이에 비어있는 비효율적 공간." },
            { "term": "POI (Point of Interest)", "desc": "관심 영역. 트레이더가 진입을 노려보기 위해 눈여겨보는 유효 작도선." }
        ],
        "quizzes": [
            {
                "question": "3개의 캔들로 구성된 캔들 조합에서 공정가치갭(FVG)이 생성되는 수학적 조건은 무엇인가?",
                "options": [
                    "1번 캔들의 종가와 2번 캔들의 시가가 같아야 한다.",
                    "1번 캔들의 저가(꼬리 끝)와 3번 캔들의 고가(꼬리 끝)가 서로 만나지 못하고 중간에 빈 공간이 남아야 한다.",
                    "2번 캔들이 무조건 도지(Doji) 캔들이어야 한다.",
                    "모든 캔들의 거래량이 균일하게 감소할 때 발생한다."
                ],
                "answer": 1,
                "explanation": "1번 캔들과 3번 캔들의 꼬리가 겹치지 않는 빈틈이 FVG이며, 시장의 단기적 비효율성을 알려주는 가장 대표적인 시각적 증거입니다."
            }
        ]
    },
    {
        "id": "IFVG",
        "title": "반전된 공정가치갭 (IFVG, Inverted Fair Value Gap)",
        "phase": "3단계: 고급 ICT 패턴",
        "difficulty": "고급",
        "tldr": "과거에 세력이 뚫어놓은 '공기 구멍 지지대'가 아래로 뻥 뚫리면서, 이번엔 거꾸로 철옹성 '천장 저항대'로 성별이 바뀌는 현상입니다.",
        "analogy": "튼튼한 트램펄린(지지판 FVG) 위에서 방방 뛰고 놀았는데, 너무 무거운 덤벨을 떨어뜨려 트램펄린이 찢어지고 지하로 추락했습니다. 이제 위로 다시 올라가려고 손을 뻗어보지만, 찢어진 트램펄린 천장이 내 머리를 꽉 막아 통과하지 못하게 하는 저항벽이 되었습니다.",
        "concept": "과거에 강력한 지지 역할을 하던 FVG 구역을 캔들 몸통이 밑으로 뚫고 내려가 강하게 마감했을 때, 이 FVG는 성질이 반전되어 강력한 저항선(IFVG)으로 뒤바뀝니다. 반대로 저항 FVG를 뚫고 올라가면 지지 IFVG가 됩니다.",
        "terms": [
            { "term": "IFVG (Inverted FVG)", "desc": "돌파당한 뒤 지지에서 저항으로, 혹은 저항에서 지지로 역할이 뒤바뀐 공정가치갭." },
            { "term": "Invalidation (무효화)", "desc": "내 분석 시나리오나 패턴의 효력이 상실되는 경계선." }
        ],
        "quizzes": [
            {
                "question": "다음 중 반전된 공정가치갭(IFVG)의 원리를 가장 올바르게 표현한 트레이딩 상식은?",
                "options": [
                    "한 번 생성된 FVG는 영원히 지지역할만 반복한다.",
                    "과거에 지지대였던 FVG 공간이 캔들 몸통에 의해 아래로 완전 붕괴된 후 되돌아오면, 이번엔 강력한 저항대로 작용한다.",
                    "IFVG는 일반 FVG보다 신뢰도가 낮아 즉각 휴지통에 버려야 한다.",
                    "캔들이 하락 돌파하는 즉시 FVG는 소멸하며 다시 그릴 필요가 없다."
                ],
                "answer": 1,
                "explanation": "지지선이 뚫리면 저항선이 되는 일반 기술적 분석의 원리와 동일하게, ICT에서도 FVG 돌파 마감은 강력한 반전 지지/저항(IFVG)을 형성합니다."
            }
        ]
    },
    {
        "id": "BPR",
        "title": "균형가격 범위 (BPR, Balanced Price Range)",
        "phase": "3단계: 고급 ICT 패턴",
        "difficulty": "고급",
        "tldr": "매수 세력과 매도 세력이 번갈아 가며 한 자리에 폭탄 폭격을 가해 갭이 양쪽으로 완전히 겹쳐진 '초고밀도 지뢰밭'입니다.",
        "analogy": "도로를 건설하느라 한 번 깊게 파헤쳤는데(하락 FVG), 바로 다음 날 반대쪽에서 도로 포장 기계가 돌진해 흙을 메우고 지나갔습니다(상승 FVG). 양쪽 세력이 한 자리에서 어마어마한 싸움을 벌였기에, 이곳은 지나가는 모든 차를 강력히 튕겨내는 아스팔트 바닥이 됩니다.",
        "concept": "공격적인 하락(음봉 갭)이 발생한 직후, 동일한 가격 범위에 공격적인 상승(양봉 갭)이 양방향으로 겹치며 메워진 좁은 영역입니다. 이 구간은 가격이 도달했을 때 속도가 비정상적으로 빠르고 강력하게 튕겨나가는 극도의 고확률 POI가 됩니다.",
        "terms": [
            { "term": "BPR (Balanced Price Range)", "desc": "양방향의 공격적 갭이 겹쳐서 극도의 효율과 균형을 맞춘 초강력 지지/저항대." }
        ],
        "quizzes": [
            {
                "question": "양방향의 급속한 FVG(매수 FVG와 매도 FVG)가 동일한 가격대에서 서로 겹쳐서 생성된 초고확률 지지/저항대를 무엇이라 부르는가?",
                "options": [
                    "Equilibrium (평형 가격)",
                    "BPR (Balanced Price Range)",
                    "MSS (시장 구조 전환)",
                    "Monday Range"
                ],
                "answer": 1,
                "explanation": "BPR은 갭과 갭이 겹친 초강력 완충 영역으로, 가격이 이곳을 다시 터치할 때 딜레이 없이 즉각적이고 폭발적인 지지나 저항을 보입니다."
            }
        ]
    },
    {
        "id": "DOL",
        "title": "유동성 이끌림 (Draw On Liquidity, DOL)",
        "phase": "2단계: 유동성 이론",
        "difficulty": "중급",
        "tldr": "차트를 분석할 때 가장 먼저 파악해야 할 '가격이 가고자 하는 최종 종착지인 블랙홀 자석'입니다.",
        "analogy": "배고픈 사자가 숲속에서 어디로 갈지 정할 때, 사슴 무리가 우글거리는 호숫가(유동성 밀집)로 향하는 것은 당연합니다. 세력들도 가장 달콤한 개미들의 손절 물량이 가득한 곳으로 차트 운전대를 꺾습니다.",
        "concept": "트레이딩 전 '오늘 가격이 어디로 이끌려 갈 것인가(Bias)'를 판단하는 기준점입니다. 가장 대표적인 DOL 자석은 미청산된 고점(BSL), 저점(SSL), 혹은 채워지지 않은 거대한 공정가치갭(FVG) 구역입니다.",
        "terms": [
            { "term": "DOL (Draw On Liquidity)", "desc": "유동성 이끌림. 가격을 강력하게 빨아들이는 차트상의 다음 먹잇감(목표가)." },
            { "term": "Market Bias (시장 편향)", "desc": "상위 타임프레임을 기준으로 오늘 시장이 상승할지 하락할지 방향을 판단하는 논리." }
        ],
        "quizzes": [
            {
                "question": "SMC 분석 시 트레이더가 차트를 켜고 가장 먼저 해야 하는 일이며, '가격이 향해 갈 다음 자석(목표치)'을 무엇이라 부르는가?",
                "options": [
                    "RSI 과매수 수치 계산",
                    "DOL (Draw On Liquidity) 설정",
                    "보조 지표 10개 오버레이",
                    "급상승 알트코인 실시간 추격 매수"
                ],
                "answer": 1,
                "explanation": "가장 중요한 것은 가격의 목적지인 DOL을 잡는 것이며, 이를 설정해야만 중간 경로에서 속지 않고 안전하게 편승할 수 있습니다."
            }
        ]
    },
    {
        "id": "LRL",
        "title": "낮은 저항 유동성 런 (LRLR, Low Resistance Liquidity Run)",
        "phase": "2단계: 유동성 이론",
        "difficulty": "중급",
        "tldr": "브레이크가 고장 난 스포츠카가 내리막길에서 앞에 서 있는 장애물(개미 손절)들을 추풍낙엽처럼 날려버리며 폭주하는 현상입니다.",
        "analogy": "마라톤 선수가 평평한 아스팔트 내리막길을 달릴 때는 속도가 시속 40km까지 올라갑니다. 반면, 가파르고 울퉁불퉁한 돌계단을 오를 때는 자꾸 멈추게 됩니다. LRLR은 차트가 장애물 없이 고속도로를 타는 기회를 의미합니다.",
        "concept": "가격이 한 방향으로 거침없이 질주하기 아주 완벽한 환경입니다. 과거에 깔끔하게 쌓인 여러 개의 동등한 고점/저점(Equil Highs/Lows)들은 지저분한 매물대가 없기 때문에 가격이 한 번 방향을 잡아 달리기 시작하면 브레이크 없이 모조리 털며 고속 질주합니다.",
        "terms": [
            { "term": "LRLR (Low Resistance Liquidity Run)", "desc": "낮은 저항 유동성 주행. 가격이 한 방향으로 거침없이 속도를 뿜어내며 유동성을 청소하는 질주 흐름." },
            { "term": "EQH (Equal Highs)", "desc": "쌍고점. 두 개 이상의 고점이 나란히 줄 서 있어 돌파 시 초고속 숏 스퀴즈를 유발하는 유동성 화약고." }
        ],
        "quizzes": [
            {
                "question": "차트상에 쌍고점(EQH)이나 추세선 유동성이 예쁘게 쌓인 후, 가격이 그 방향으로 방향을 틀었을 때 나타나는 일반적인 가격 변동 양상은?",
                "options": [
                    "매우 느릿느릿하고 지저분하게 계단식 횡보를 거친다.",
                    "엄청난 가속도가 붙으며 한 번에 물량들을 거침없이 돌파하는 폭발(LRLR)이 나타난다.",
                    "그 즉시 거래량이 소멸하고 차트가 멈춘다.",
                    "오더블록의 방해 때문에 즉각 상승분을 반납하고 폭락한다."
                ],
                "answer": 1,
                "explanation": "장애물(숏 물량)이 밀집한 구역은 땔감이 가득한 아궁이와 같아서, 불꽃이 튀는 순간 활활 타오르며 숏 스퀴즈 LRLR을 만들어 냅니다."
            }
        ]
    },
    {
        "id": "BREAKER",
        "title": "브레이커 블록 (Breaker Blocks)",
        "phase": "3단계: 고급 ICT 패턴",
        "difficulty": "고급",
        "tldr": "아군을 몰살시키려던 적군의 포대(실패한 오더블록)를 탈취해, 이번엔 적군을 향해 포탄을 쏘아 올리는 아군 기지로 변모한 전쟁터입니다.",
        "analogy": "성문을 꽁꽁 막고 서 있던 방패병(오더블록)이 뒤에서 들이닥친 기병대(유동성 청소)에 휩쓸려 무참히 쓰러졌습니다. 이제 뚫린 성문 자리는 침입자가 성 밖을 지키고 서서 원래 주인의 역습을 막아내는 요새가 됩니다.",
        "concept": "가격을 올려 개미 고점 유동성을 휩쓸고(Sweep) 난 뒤, 방향을 급격히 반대로 꺾으며 돌파당한 직전의 실패한 오더블록(OB)입니다. 지지/저항이 반전되는 가장 강력한 POI 중 하나로, 되돌림 시 매우 안전한 진입 타점을 제공합니다.",
        "terms": [
            { "term": "Breaker Block (브레이커 블록)", "desc": "유동성 수거 이후 추세 전환 과정에서 돌파된 직전의 마지막 반대 캔들 영역." },
            { "term": "Liquidity Sweep (유동성 수거)", "desc": "주요 고점/저점을 미세하게 뚫고 꼬리만 단 뒤 추세를 완전히 뒤집는 움직임." }
        ],
        "quizzes": [
            {
                "question": "다음 중 브레이커 블록(Breaker)이 형성되기 위해 반드시 앞서 발생해야 하는 '세력의 속임수' 동작은?",
                "options": [
                    "거래량이 없는 미세 횡보",
                    "직전 주요 고점이나 저점을 터치하고 꼬리만 단 채 휩쓸고 지나가는 '유동성 수거(Sweep)'",
                    "20일선 밑에서의 오랜 대기",
                    "단기 하락 캔들의 5개 연속 발생"
                ],
                "answer": 1,
                "explanation": "브레이커는 반드시 '유동성 수거(Sweep)' 동작이 먼저 완료된 뒤, 그 스윕을 유발했던 블록이 깨지는 과정에서 탄생하는 최상급 기술입니다."
            }
        ]
    },
    {
        "id": "STOPLOSS",
        "title": "구조적 올바른 스탑로스 설정법 (Stop Loss)",
        "phase": "4단계: 실전 트레이딩 가이드",
        "difficulty": "중급",
        "tldr": "손절은 단순히 내 기분대로 '-2%'를 잡는 게 아니라, 내 예상이 100% 무효가 되는 '우주 방어 본진 너머'에 숨겨두어야 합니다.",
        "analogy": "야구 경기에서 투수가 공을 던질 때, 홈런을 맞지 않으려면 아웃라인 펜스 너머로 수비를 배치하는 것과 같습니다. 적군이 절대로 뚫을 수 없는 최종 산봉우리에 안전선(손절선)을 긋고 진입해야 합니다.",
        "concept": "올바른 스탑로스는 임의의 비율이 아니라, 내 기술적 분석 관점이 완전히 무효화(Invalidated)되는 '구조적 고점 바로 위'나 '구조적 저점 바로 아래'에 배치해야 합니다. 손절 거리가 멀다면 계약 수량(Position Size)을 줄여 감당 손실을 맞추는 것이 프로의 공식입니다.",
        "terms": [
            { "term": "Stop Loss (손절선)", "desc": "시장 상황이 내 시나리오와 다르게 흘러갈 때 자금을 보호하기 위해 체결하는 자동 강제 청산 주문." },
            { "term": "Position Sizing (포지션 규모 조절)", "desc": "손절폭 크기에 비례하여 매 거래당 잃을 리스크액(예: 100$)을 일정하게 역산하는 공식." }
        ],
        "quizzes": [
            {
                "question": "SMC 실전 리스크 관리 관점에서 올바른 스탑로스(손절)를 설정하는 가장 성숙한 기준은 무엇인가?",
                "options": [
                    "내 기분에 맞춰 무조건 진입가 대비 -1.5% 뒤에 둔다.",
                    "내 분석 관점이 깨지는 '구조적 직전 고점/저점 너머(Invalidation)'에 배치하고, 거리가 멀다면 계약 규모를 역산하여 줄인다.",
                    "손절은 초보자나 하는 것이므로 스탑로스를 아예 설정하지 않는다.",
                    "타이트하게 진입가 바로 1틱 밑에 둔다."
                ],
                "answer": 1,
                "explanation": "올바른 스탑로스는 구조적 경계선 뒤에 두고, 손절폭이 넓다면 진입 계약 크기를 작게 조절해 총 손실액을 리스크 한도 내로 묶어야 합니다."
            }
        ]
    },
    {
        "id": "LOSS_RATE",
        "title": "수학적 손실률 제어 및 리스크 관리",
        "phase": "4단계: 실전 트레이딩 가이드",
        "difficulty": "초급",
        "tldr": "아무리 뛰어난 장수도 방패 없이 전장에 나가면 단 한 발의 화살에 목숨을 잃습니다. 리스크 관리는 계좌의 절대 방패입니다.",
        "analogy": "러시안 룰렛을 할 때 총알이 단 1발이라도 들어있으면 언젠가 죽습니다. 트레이딩에서 한 번에 전 재산의 50%씩 배팅하는 사람은 승률 90%라도 딱 2번 연속 지면 계좌가 공중분해됩니다.",
        "concept": "단 한 번의 거래에서 잃을 수 있는 최대 리스크를 전체 자본의 1~2%로 한정합니다. 진입가와 손절가의 거리(손절폭)가 5%라면 계약 크기는 계좌의 20%로 세팅하여 손절 시 정확히 계좌의 1%만 잃도록 설계하는 안전 장치입니다.",
        "terms": [
            { "term": "Risk of Ruin (파산 위험률)", "desc": "잘못된 배팅 비율로 인해 수학적으로 계좌가 0으로 갈 확률을 계산한 공식." },
            { "term": "1% Rule (1%의 법칙)", "desc": "어떤 거래에서도 총 손실이 전체 자본금의 1%를 초과하지 않도록 묶어두는 규칙." }
        ],
        "quizzes": [
            {
                "question": "자본금 10,000$를 보유한 트레이더가 '거래당 1% 리스크' 규칙을 따를 때, 한 번 손절을 당했을 때 날아갈 최대 금액은 얼마여야 하는가?",
                "options": [
                    "1,000$ (10%)",
                    "100$ (1%)",
                    "500$ (5%)",
                    "2,000$ (20%)"
                ],
                "answer": 1,
                "explanation": "10,000$의 1%는 정확히 100$입니다. 진입 가격과 손절 가격의 간격이 얼마든 간에 최종 청산 금액은 100$를 넘지 않아야 계좌가 무한 생존할 수 있습니다."
            }
        ]
    },
    {
        "id": "SESSION_PROFILE",
        "title": "세션 프로필과 시간적 핵심 (Session Profiles)",
        "phase": "4단계: 실전 트레이딩 가이드",
        "difficulty": "고급",
        "tldr": "트레이딩은 '어디로 갈까(가격)'보다 '언제 탈까(시간)'가 10배 더 중요합니다.",
        "analogy": "새벽 3시에는 남대문 시장이 활성화되고, 오후 2시에는 금융가가 바쁩니다. 차트도 전 세계 은행들이 일하는 출퇴근 시간에 맞춰 불꽃 거래량이 터지고 가짜 돌파와 진짜 추세가 시계태엽처럼 맞물립니다.",
        "concept": "하루 24시간을 3대 세션으로 분류합니다. 아시아 세션(횡보 및 유동성 함정 축적) -> 런던 세션(아시아 고점/저점을 휩쓰는 가짜 움직임, 조작) -> 뉴욕 세션(런던의 조작을 바탕으로 한 진짜 하루의 대추세 전개)으로 이어지는 시간의 룰입니다.",
        "terms": [
            { "term": "Judas Swing (유다 스윙)", "desc": "세션 시작 직후 개미들을 속이기 위해 진짜 갈 방향의 정반대로 질주하여 유동성을 휩쓰는 가짜 돌파 동작." },
            { "term": "Killzone (킬존)", "desc": "런던 오픈(한국시간 오후 4~6시) 및 뉴욕 오픈(한국시간 오후 9~11시) 등 유동성이 폭증하는 황금 거래 시간대." }
        ],
        "quizzes": [
            {
                "question": "런던 오픈이나 뉴욕 오픈 초기에 진짜 추세 방향의 반대로 강하게 달리며 양방향 손절을 유도하는 세력의 가짜 돌파 패턴을 무엇이라 부르는가?",
                "options": [
                    "BPR (Balanced Price Range)",
                    "Judas Swing (유다 스윙)",
                    "Equilibrium Run",
                    "Divergence Shift"
                ],
                "answer": 1,
                "explanation": "예수를 배반한 '유다'의 이름에서 따온 유다 스윙은, 킬존 시작 시점에 개미들의 반대 방향 탑승을 유도한 뒤 매물을 털어 진짜 추세로 밀어붙이는 세력의 핵심 기만 전술입니다."
            }
        ]
    },
    {
        "id": "MONDAY_RANGE",
        "title": "먼데이 레인지 모델 (Monday Range Model)",
        "phase": "4단계: 실전 트레이딩 가이드",
        "difficulty": "고급",
        "tldr": "월요일 하루 동안 그려진 최고점과 최저점이라는 '기준 울타리'를 사용해 일주일 전체의 방향타를 점치는 정교한 설계도입니다.",
        "analogy": "월요일에 텐트의 두 기둥(고점과 저점)을 땅에 단단히 박아둡니다. 화요일이나 수요일에 텐트 기둥 바깥으로 삐져나온 끈을 팽팽하게 당기는 속임수(Sweep)가 나오면, 텐트는 오히려 반대 방향으로 단단하게 기울어 진짜 집을 짓습니다.",
        "concept": "월요일의 24시간 캔들 고가와 저가를 범위(Monday Range)로 삼습니다. 주중(화~목)에 가격이 월요일 고점을 위로 휩쓸고(Sweep) 강하게 꺾이면 그 주에는 하락 추세가 이어지고, 반대로 월요일 저점을 쓸고 반등하면 주간 상승 추세가 전개되는 고확률 템플릿입니다.",
        "terms": [
            { "term": "Monday High (MH)", "desc": "월요일의 최고점. 주간 저항의 나침반." },
            { "term": "Monday Low (ML)", "desc": "월요일의 최저점. 주간 지지의 나침반." }
        ],
        "quizzes": [
            {
                "question": "먼데이 레인지 모델에 따른 주간 거래 진행 시, 화요일이나 수요일에 월요일 고점(MH)을 돌파한 뒤 꼬리만 남기고 강력한 하락 캔들이 마감되었을 때 퀀트가 가질 수 있는 합리적 편향(Bias)은?",
                "options": [
                    "주간 강세가 이어질 것이므로 더 높은 배율의 롱을 잡는다.",
                    "고점 유동성 청소(Sweep)가 완료되었으므로 그 주의 목표가를 월요일 저점(ML) 이하로 겨냥하는 '숏(매도) 관점'을 구축한다.",
                    "차트의 작동이 정지한 것이므로 거래를 종료한다.",
                    "횡보할 것이 확실하므로 그리드 매매를 돌린다."
                ],
                "answer": 1,
                "explanation": "주중에 월요일 고점(MH)이 청소되고 무너진 것은 주간 고점이 확정(Weekly High Established)되었을 확률이 매우 높음을 뜻하며, 이후 가격은 반대편인 월요일 저점(ML) 유동성을 찾아서 하락하게 됩니다."
            }
        ]
    },
    {
        "id": "RSI_DIVERGENCE",
        "title": "RSI 일반 다이버전스와 모멘텀 전환",
        "phase": "1단계: 시장 기초와 추세",
        "difficulty": "초급",
        "tldr": "자동차 속도계는 120km를 가리키는데, 정작 차는 언덕길에서 점점 느려지며 뒤로 밀리기 시작하는 엔진 방전 경고등입니다.",
        "analogy": "등산객이 겉으로는 높은 산봉우리(더 높은 고점)를 향해 한 걸음 내디뎠지만, 심박수 측정기(RSI 지표)의 체력 수치는 바닥을 드러내며 헐떡이고 있습니다. 이는 조만간 등산객이 다리가 풀려 산비탈 아래로 굴러떨어질 것임을 예고합니다.",
        "concept": "가격이 직전 고점보다 더 높은 고점을 갱신했으나(Higher High), 상대강도지수(RSI) 보조지표의 고점은 오히려 이전보다 낮아졌을 때(Lower High) 이를 '일반 약세 다이버전스'라고 하며, 강력한 추세 반전(하락) 신호로 판단합니다.",
        "terms": [
            { "term": "RSI (Relative Strength Index)", "desc": "상대강도지수. 캔들의 최근 상승 힘과 하락 힘의 상대적인 강도를 0~100 사이 숫자로 계량화한 모멘텀 지표." },
            { "term": "Divergence (다이버전스)", "desc": "가격의 움직임 방향과 보조지표의 움직임 방향이 일치하지 않고 반대로 엇갈리는 괴리 현상." }
        ],
        "quizzes": [
            {
                "question": "다음 중 차트에서 '일반 하락(약세) 다이버전스'가 감지되는 올바른 차트 형태는?",
                "options": [
                    "가격의 고점은 계속 높아지는데, RSI 지표의 고점은 직전보다 확실히 낮아지고 있을 때",
                    "가격의 저점도 낮아지고 RSI 지표의 저점도 똑같이 낮아질 때",
                    "RSI 지표가 무조건 50선 위에서 계속 평평하게 일직선을 그릴 때",
                    "거래량이 엄청나게 늘어남과 동시에 장대음봉이 뜰 때"
                ],
                "answer": 0,
                "explanation": "가격 고점의 갱신과 반대되는 RSI 고점 하락은 세력의 매수 동력이 내부적으로 고갈되었음을 보여주는 강력한 추세 붕괴 직전 신호입니다."
            }
        ]
    }
];

// ── STATE VARIABLES ──
let lessons = [...FALLBACK_LESSONS]; // Initialize with fallback
let userProgress = {
    completed: [], // List of completed lesson IDs
    quizStats: {
        totalQuestions: 0,
        correctAnswers: 0
    }
};

let currentLesson = null;
let currentQuizIndex = 0;
let answeredQuestionsInSession = {}; // quizIndex -> isCorrect (bool)
let selectedOptionIndex = null;

// ── DOM ELEMENTS ──
const DOM = {
    // Nav Items
    navItems: document.querySelectorAll('.nav-item'),
    tabContents: document.querySelectorAll('.tab-content'),
    
    // Global Elements
    globalSearch: document.getElementById('global-search'),
    sidebarProgressText: document.getElementById('sidebar-progress-text'),
    sidebarProgressBar: document.getElementById('sidebar-progress-bar'),
    sidebarCompletedCount: document.getElementById('sidebar-completed-count'),
    resetProgressBtn: document.getElementById('reset-progress-btn'),
    apiKeyIndicator: document.getElementById('api-key-indicator'),
    
    // Dashboard Tab
    dashCompletedLessons: document.getElementById('dash-completed-lessons'),
    dashQuizRate: document.getElementById('dash-quiz-rate'),
    dashLevelBadge: document.getElementById('dash-level-badge'),
    continueLearningSlot: document.getElementById('continue-learning-slot'),
    phaseRows: document.querySelectorAll('.phase-row'),
    
    // Roadmap Tab
    roadmapTimeline: document.getElementById('roadmap-timeline'),
    
    // Cheatsheet Tab
    filterButtons: document.querySelectorAll('.filter-btn'),
    cheatsheetGrid: document.getElementById('cheatsheet-grid'),
    
    // Simulator Tab
    simMissionBtns: document.querySelectorAll('.sim-mission-btn'),
    simMissionText: document.getElementById('sim-mission-text'),
    simResetBtn: document.getElementById('sim-reset-btn'),
    simVerifyBtn: document.getElementById('sim-verify-btn'),
    simFeedback: document.getElementById('sim-feedback'),
    simCanvas: document.getElementById('sim-svg-canvas'),
    candlesGroup: document.getElementById('canvas-candles-group'),
    interactiveGroup: document.getElementById('canvas-interactive-group'),
    
    // Lesson Modal
    lessonModal: document.getElementById('lesson-modal'),
    modalClose: document.getElementById('modal-close'),
    modalPhase: document.getElementById('modal-phase'),
    modalDifficulty: document.getElementById('modal-difficulty'),
    modalTitle: document.getElementById('modal-title'),
    modalTabButtons: document.querySelectorAll('.modal-tab'),
    modalTabContents: document.querySelectorAll('.modal-tab-content'),
    
    // Modal Learn Tab
    modalTldr: document.getElementById('modal-tldr'),
    modalAnalogy: document.getElementById('modal-analogy'),
    modalConcept: document.getElementById('modal-concept'),
    modalTermsList: document.getElementById('modal-terms-list'),
    modalQuizCountText: document.getElementById('modal-quiz-count'),
    
    // Modal Quiz Tab
    quizProgressText: document.getElementById('quiz-progress-text'),
    quizProgressBar: document.getElementById('quiz-progress-bar'),
    quizQuestionText: document.getElementById('quiz-question-text'),
    quizOptionsGroup: document.getElementById('quiz-options-group'),
    quizFeedbackBox: document.getElementById('quiz-feedback'),
    feedbackIconSlot: document.getElementById('feedback-icon-slot'),
    feedbackTitleText: document.getElementById('feedback-title-text'),
    feedbackDescText: document.getElementById('feedback-desc-text'),
    quizNextBtn: document.getElementById('quiz-next-btn'),
    quizFinishBtn: document.getElementById('quiz-finish-btn'),
    
    // Chatbot Widget
    chatbotContainer: document.getElementById('chatbot-container'),
    chatTriggerBtn: document.getElementById('chat-trigger-btn'),
    chatWindow: document.getElementById('chat-window'),
    chatCloseBtn: document.getElementById('chat-close-btn'),
    chatMessagesBox: document.getElementById('chat-messages-box'),
    chatUserInput: document.getElementById('chat-user-input'),
    chatSendBtn: document.getElementById('chat-send-btn')
};

// ── INITIALIZATION ──
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Check & Load Local Storage Progress
    loadProgressFromStorage();
    
    // 2. Fetch lessons_db.json
    await loadLessonsDatabase();
    
    // 3. Setup Navigation & Search
    initNavigation();
    initGlobalSearch();
    
    // 4. Update UI Dashboard & Roadmap
    renderDashboard();
    renderRoadmap();
    renderCheatsheet('all');
    
    // 5. Initialize Simulator
    initSimulator();
    
    // 6. Setup Chatbot Widget
    initChatbot();
    
    // 7. Update API Key Indicator
    updateApiKeyIndicator();
    
    // Check reset button listener
    if(DOM.resetProgressBtn) {
        DOM.resetProgressBtn.addEventListener('click', () => {
            if(confirm("정말로 모든 학습 진척도와 퀴즈 기록을 초기화하시겠습니까? 🐣")) {
                userProgress = {
                    completed: [],
                    quizStats: { totalQuestions: 0, correctAnswers: 0 }
                };
                saveProgressToStorage();
                updateAllProgressUI();
                renderDashboard();
                renderRoadmap();
                renderCheatsheet('all');
                alert("진척도가 완전히 초기화되었습니다. 처음부터 다시 신나게 시작해봐요! 🚀");
            }
        });
    }
});

// ── LOADER FUNCTIONS ──
async function loadLessonsDatabase() {
    try {
        const response = await fetch('data/lessons_db.json');
        if (response.ok) {
            const data = await response.json();
            if (Array.isArray(data) && data.length > 0) {
                lessons = data;
                console.log("🎯 lessons_db.json 성공적으로 로드 완료! 챕터 수:", lessons.length);
            }
        } else {
            console.warn("⚠️ lessons_db.json 로드 실패. 내장된 고품질 Fallback 데이터를 사용합니다.");
        }
    } catch (e) {
        console.warn("⚠️ lessons_db.json 비동기 패치 중 오류 발생. Fallback 모드로 즉각 구동합니다.", e);
    }
}

function loadProgressFromStorage() {
    const saved = localStorage.getItem('bison_academy_progress');
    if (saved) {
        try {
            userProgress = JSON.parse(saved);
        } catch (e) {
            console.error("Progress parsing error", e);
        }
    }
    
    // Backward compatibility check
    if (!userProgress.completed) userProgress.completed = [];
    if (!userProgress.quizStats) userProgress.quizStats = { totalQuestions: 0, correctAnswers: 0 };
}

function saveProgressToStorage() {
    localStorage.setItem('bison_academy_progress', JSON.stringify(userProgress));
}

// ── NAVIGATION CONTROLLER ──
function initNavigation() {
    DOM.navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = item.getAttribute('data-tab');
            
            // Toggle sidebar active state
            DOM.navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Toggle content visibility
            DOM.tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `tab-${tabId}`) {
                    content.classList.add('active');
                }
            });
            
            // If simulator is active, force render current mission
            if (tabId === 'simulator') {
                renderSimulatorMission(currentSimMission);
            }
        });
    });
    
    // Add Dashboard Row Phase Navigation
    DOM.phaseRows.forEach(row => {
        row.addEventListener('click', () => {
            const phaseNum = row.getAttribute('data-phase');
            // Navigate to cheatsheet and filter
            const cheatsheetTabLink = Array.from(DOM.navItems).find(n => n.getAttribute('data-tab') === 'cheatsheet');
            if (cheatsheetTabLink) {
                cheatsheetTabLink.click();
                const filterBtn = Array.from(DOM.filterButtons).find(btn => btn.getAttribute('data-filter') === phaseNum);
                if (filterBtn) filterBtn.click();
            }
        });
    });
}

function initGlobalSearch() {
    DOM.globalSearch.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        
        // Auto navigate to cheatsheet tab on search typing if not already there
        const activeTab = Array.from(DOM.tabContents).find(tc => tc.classList.contains('active'));
        if (activeTab && activeTab.id !== 'tab-cheatsheet' && query.length > 0) {
            const cheatsheetTabLink = Array.from(DOM.navItems).find(n => n.getAttribute('data-tab') === 'cheatsheet');
            if (cheatsheetTabLink) cheatsheetTabLink.click();
        }
        
        // Perform search rendering
        filterAndRenderCheatsheet(query);
    });
}

// ── DYNAMIC RENDERING: DASHBOARD ──
function renderDashboard() {
    updateAllProgressUI();
    
    // Compute Phase Stats
    const phases = { "1": { total: 0, completed: 0 }, "2": { total: 0, completed: 0 }, "3": { total: 0, completed: 0 }, "4": { total: 0, completed: 0 } };
    
    lessons.forEach(lesson => {
        const pNum = lesson.phase.charAt(0); // e.g. "1" from "1단계: ..."
        if (phases[pNum]) {
            phases[pNum].total++;
            if (userProgress.completed.includes(lesson.id)) {
                phases[pNum].completed++;
            }
        }
    });
    
    // Write phase details
    for (let pNum in phases) {
        const row = document.querySelector(`.phase-row[data-phase="${pNum}"]`);
        if (row) {
            const countSlot = row.querySelector('.phase-count');
            countSlot.innerHTML = `<span class="completed">${phases[pNum].completed}</span>/${phases[pNum].total} 완료`;
        }
    }
    
    // Continue Learning recommendation logic
    let recommendedLesson = lessons.find(l => !userProgress.completed.includes(l.id));
    if (!recommendedLesson) {
        // All chapters completed!
        DOM.continueLearningSlot.innerHTML = `
            <div class="learning-progress-item completed-all" style="background: linear-gradient(135deg, var(--bg-card), var(--success-glow)); border-color: var(--success); text-align: center; justify-content: center; flex-direction: column; gap: 10px;">
                <h3 style="color: var(--success); font-size: 1.25rem;"><i class="fa-solid fa-trophy"></i> 축하합니다! 모든 SMC 교육과정 마스터</h3>
                <p>비손 방법론의 핵심 15개 챕터를 전부 완료하셨습니다. 이제 실전 차트 작도 시뮬레이터나 AI 튜터 챗봇과 함께 고도의 실전 분석을 이어가세요!</p>
            </div>
        `;
    } else {
        DOM.continueLearningSlot.innerHTML = `
            <div class="learning-progress-item">
                <div class="learn-left">
                    <div class="learn-meta">
                        <span class="phase-badge ${getPhaseBadgeClass(recommendedLesson.phase)}">${recommendedLesson.phase.split(':')[0]}</span>
                        <span class="diff-badge ${getDiffClass(recommendedLesson.difficulty)}">${recommendedLesson.difficulty}</span>
                    </div>
                    <h3>${recommendedLesson.title}</h3>
                    <p>${recommendedLesson.tldr}</p>
                </div>
                <button class="btn btn-primary" onclick="openLessonModal('${recommendedLesson.id}')">
                    <i class="fa-solid fa-play"></i> 학습 시작하기
                </button>
            </div>
        `;
    }
}

function updateAllProgressUI() {
    const totalCount = lessons.length;
    const completedCount = userProgress.completed.length;
    const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    
    // Sidebar
    DOM.sidebarProgressText.textContent = `${pct}%`;
    DOM.sidebarProgressBar.style.width = `${pct}%`;
    DOM.sidebarCompletedCount.textContent = completedCount;
    
    // Dashboard Stats
    if(DOM.dashCompletedLessons) DOM.dashCompletedLessons.textContent = completedCount;
    
    const quizStats = userProgress.quizStats || { totalQuestions: 0, correctAnswers: 0 };
    const quizRate = quizStats.totalQuestions > 0 ? Math.round((quizStats.correctAnswers / quizStats.totalQuestions) * 100) : 0;
    if(DOM.dashQuizRate) DOM.dashQuizRate.textContent = `${quizRate}%`;
    
    // Determine level badge
    let badge = "초보 트레이더 🐣";
    if (pct >= 100) badge = "SMC 명예 퀀트 🏆";
    else if (pct >= 70) badge = "비손 정예 분석가 💎";
    else if (pct >= 40) badge = "중급 차티스트 ⚡";
    else if (pct >= 10) badge = "수련생 트레이더 📈";
    
    if(DOM.dashLevelBadge) DOM.dashLevelBadge.textContent = badge;
}

// ── DYNAMIC RENDERING: ROADMAP ──
function renderRoadmap() {
    DOM.roadmapTimeline.innerHTML = '';
    
    // Group lessons by phase
    const phasesMap = {};
    lessons.forEach(lesson => {
        if (!phasesMap[lesson.phase]) {
            phasesMap[lesson.phase] = [];
        }
        phasesMap[lesson.phase].push(lesson);
    });
    
    let phaseIndex = 1;
    for (let phaseName in phasesMap) {
        const phaseSection = document.createElement('div');
        phaseSection.className = 'roadmap-phase-section';
        
        const isCompletedAllInPhase = phasesMap[phaseName].every(l => userProgress.completed.includes(l.id));
        
        phaseSection.innerHTML = `
            <div class="phase-header-node">
                <div class="phase-node-dot"></div>
                <span class="phase-badge p${phaseIndex}">${phaseName.split(':')[0]}</span>
                <h3>${phaseName.split(':')[1] || phaseName}</h3>
            </div>
            <div class="lessons-grid"></div>
        `;
        
        const grid = phaseSection.querySelector('.lessons-grid');
        
        phasesMap[phaseName].forEach(lesson => {
            const isDone = userProgress.completed.includes(lesson.id);
            const card = document.createElement('div');
            card.className = `lesson-card ${isDone ? 'completed' : ''}`;
            card.innerHTML = `
                <div class="learn-meta">
                    <span class="diff-badge ${getDiffClass(lesson.difficulty)}">${lesson.difficulty}</span>
                </div>
                <h4>${lesson.title}</h4>
                <p>${lesson.tldr}</p>
                <div class="lesson-footer">
                    <span>${lesson.quizzes.length}개 퀴즈</span>
                    <span class="btn-link">학습하기 <i class="fa-solid fa-arrow-right"></i></span>
                </div>
            `;
            
            card.addEventListener('click', () => {
                openLessonModal(lesson.id);
            });
            
            grid.appendChild(card);
        });
        
        DOM.roadmapTimeline.appendChild(phaseSection);
        phaseIndex++;
    }
}

// ── DYNAMIC RENDERING: CHEATSHEET ──
function renderCheatsheet(filterPhase = 'all', searchQuery = '') {
    DOM.cheatsheetGrid.innerHTML = '';
    
    let filtered = lessons;
    if (filterPhase !== 'all') {
        filtered = filtered.filter(l => l.phase.charAt(0) === filterPhase);
    }
    
    if (searchQuery) {
        filtered = filtered.filter(l => {
            const matchTitle = l.title.toLowerCase().includes(searchQuery);
            const matchTldr = l.tldr.toLowerCase().includes(searchQuery);
            const matchTerms = l.terms.some(t => t.term.toLowerCase().includes(searchQuery) || t.desc.toLowerCase().includes(searchQuery));
            return matchTitle || matchTldr || matchTerms;
        });
    }
    
    if (filtered.length === 0) {
        DOM.cheatsheetGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 12px; display: block;"></i>
                검색 조건과 일치하는 용어가 없습니다. 철자를 확인해보세요! 🐣
            </div>
        `;
        return;
    }
    
    filtered.forEach(lesson => {
        lesson.terms.forEach(t => {
            const cheatCard = document.createElement('div');
            cheatCard.className = 'cheat-card';
            cheatCard.innerHTML = `
                <div class="cheat-header">
                    <div class="cheat-title-group">
                        <h3>${t.term}</h3>
                        <span>${lesson.title}</span>
                    </div>
                    <span class="phase-badge ${getPhaseBadgeClass(lesson.phase)}">${lesson.phase.split(':')[0]}</span>
                </div>
                <div class="cheat-body">
                    <h4>💡 초보자용 비유 & 정의</h4>
                    <p>${t.desc}</p>
                </div>
            `;
            DOM.cheatsheetGrid.appendChild(cheatCard);
        });
    });
}

function filterAndRenderCheatsheet(query) {
    const activeFilterBtn = Array.from(DOM.filterButtons).find(btn => btn.classList.contains('active'));
    const currentFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
    renderCheatsheet(currentFilter, query);
}

// Setup cheatsheet filter buttons
DOM.filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        DOM.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        const searchQuery = DOM.globalSearch.value.trim().toLowerCase();
        renderCheatsheet(filter, searchQuery);
    });
});

// ── INTERACTIVE LESSON PLAYER (MODAL) ──
function openLessonModal(lessonId) {
    const lesson = lessons.find(l => l.id === lessonId);
    if (!lesson) return;
    
    currentLesson = lesson;
    currentQuizIndex = 0;
    answeredQuestionsInSession = {};
    selectedOptionIndex = null;
    
    // Set UI Texts
    DOM.modalTitle.textContent = lesson.title;
    DOM.modalPhase.className = `phase-badge ${getPhaseBadgeClass(lesson.phase)}`;
    DOM.modalPhase.textContent = lesson.phase.split(':')[0];
    DOM.modalDifficulty.className = `diff-badge ${getDiffClass(lesson.difficulty)}`;
    DOM.modalDifficulty.textContent = lesson.difficulty;
    
    DOM.modalTldr.textContent = lesson.tldr;
    DOM.modalAnalogy.textContent = lesson.analogy;
    DOM.modalConcept.textContent = lesson.concept;
    
    // Render Modal Terms List
    DOM.modalTermsList.innerHTML = '';
    lesson.terms.forEach(t => {
        const miniCard = document.createElement('div');
        miniCard.className = 'term-mini-card';
        miniCard.innerHTML = `
            <strong>${t.term}</strong>
            <p>${t.desc}</p>
        `;
        DOM.modalTermsList.appendChild(miniCard);
    });
    
    DOM.modalQuizCountText.textContent = lesson.quizzes.length;
    
    // Switch to Learn Tab initially
    switchModalTab('learn');
    
    // Open Modal
    DOM.lessonModal.classList.add('active');
}

function switchModalTab(tabName) {
    DOM.modalTabButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-modaltab') === tabName) {
            btn.classList.add('active');
        }
    });
    
    DOM.modalTabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === `modal-tab-${tabName}`) {
            content.classList.add('active');
        }
    });
    
    if (tabName === 'quiz') {
        startQuizSession();
    }
}

// Setup modal tabs click
DOM.modalTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-modaltab');
        switchModalTab(tab);
    });
});

DOM.modalClose.addEventListener('click', () => {
    DOM.lessonModal.classList.remove('active');
});

// ── QUIZ PLAYER ENGINE ──
function startQuizSession() {
    if (!currentLesson || !currentLesson.quizzes || currentLesson.quizzes.length === 0) {
        DOM.quizQuestionText.textContent = "풀이 가능한 퀴즈가 준비되어 있지 않습니다. 🐣";
        DOM.quizOptionsGroup.innerHTML = '';
        return;
    }
    
    renderQuizQuestion(currentQuizIndex);
}

function renderQuizQuestion(index) {
    selectedOptionIndex = null;
    DOM.quizFeedbackBox.style.display = 'none';
    DOM.quizNextBtn.style.display = 'none';
    DOM.quizFinishBtn.style.display = 'none';
    
    const quiz = currentLesson.quizzes[index];
    const isAnswered = answeredQuestionsInSession.hasOwnProperty(index);
    
    // Progress
    DOM.quizProgressText.textContent = `문제 ${index + 1} / ${currentLesson.quizzes.length}`;
    const pct = Math.round(((index) / currentLesson.quizzes.length) * 100);
    DOM.quizProgressBar.style.width = `${pct}%`;
    
    DOM.quizQuestionText.textContent = quiz.question;
    DOM.quizOptionsGroup.innerHTML = '';
    
    quiz.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt-btn';
        btn.innerHTML = `<span style="font-family: var(--font-outfit); font-weight: 700; color: var(--secondary); margin-right: 8px;">Q${idx+1}.</span> ${opt}`;
        
        if (isAnswered) {
            btn.classList.add('disabled');
            if (idx === quiz.answer) {
                btn.classList.add('correct');
            } else if (idx === answeredQuestionsInSession[index].userChoice) {
                btn.classList.add('incorrect');
            }
        } else {
            btn.addEventListener('click', () => submitQuizAnswer(index, idx));
        }
        DOM.quizOptionsGroup.appendChild(btn);
    });
    
    if (isAnswered) {
        showQuizFeedback(index, answeredQuestionsInSession[index].isCorrect);
    }
}

function submitQuizAnswer(quizIndex, optionIndex) {
    if (answeredQuestionsInSession.hasOwnProperty(quizIndex)) return; // Already answered
    
    const quiz = currentLesson.quizzes[quizIndex];
    const isCorrect = (optionIndex === quiz.answer);
    
    // Save to session state
    answeredQuestionsInSession[quizIndex] = {
        userChoice: optionIndex,
        isCorrect: isCorrect
    };
    
    // Save to global user statistics
    userProgress.quizStats.totalQuestions++;
    if (isCorrect) {
        userProgress.quizStats.correctAnswers++;
    }
    saveProgressToStorage();
    
    // Render states immediately
    const optionButtons = DOM.quizOptionsGroup.querySelectorAll('.quiz-opt-btn');
    optionButtons.forEach((btn, idx) => {
        btn.classList.add('disabled');
        if (idx === quiz.answer) {
            btn.classList.add('correct');
        } else if (idx === optionIndex) {
            btn.classList.add('incorrect'); // Plays shake animation automatically by CSS
        }
    });
    
    showQuizFeedback(quizIndex, isCorrect);
    updateAllProgressUI();
}

function showQuizFeedback(quizIndex, isCorrect) {
    const quiz = currentLesson.quizzes[quizIndex];
    
    DOM.quizFeedbackBox.style.display = 'flex';
    DOM.quizFeedbackBox.className = `quiz-feedback-box ${isCorrect ? 'correct' : 'incorrect'}`;
    
    if (isCorrect) {
        DOM.feedbackIconSlot.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        DOM.feedbackTitleText.textContent = "정답입니다! 너무 똑똑하시네요 🟢";
    } else {
        DOM.feedbackIconSlot.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        DOM.feedbackTitleText.textContent = "오답입니다! 다시 한 번 생각해보세요 🔴";
    }
    
    DOM.feedbackDescText.innerHTML = quiz.explanation;
    
    // Handle Navigation Buttons
    if (quizIndex < currentLesson.quizzes.length - 1) {
        DOM.quizNextBtn.style.display = 'inline-flex';
    } else {
        DOM.quizFinishBtn.style.display = 'inline-flex';
    }
}

// Setup quiz next and finish button listeners
DOM.quizNextBtn.addEventListener('click', () => {
    currentQuizIndex++;
    renderQuizQuestion(currentQuizIndex);
});

DOM.quizFinishBtn.addEventListener('click', () => {
    // Check if user completed this lesson before
    if (!userProgress.completed.includes(currentLesson.id)) {
        userProgress.completed.push(currentLesson.id);
        saveProgressToStorage();
        updateAllProgressUI();
        renderDashboard();
        renderRoadmap();
    }
    
    alert(`🎉 '${currentLesson.title}' 학습을 훌륭히 마쳤습니다! 배운 스마트 머니 지식으로 차트를 분석해보세요!`);
    DOM.lessonModal.classList.remove('active');
});

// ── SVG INTERACTIVE CHART SIMULATOR ──
let currentSimMission = 'fvg';
let mssClicked = false;
let obClicked = false;
let fvgDrawn = false;

// 12 Candles Chart Points Data
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 450;
const CANDLE_DATA = [
    { x: 60,  open: 260, close: 240, high: 280, low: 230,  type: 'down' }, // 1
    { x: 110, open: 240, close: 210, high: 250, low: 200,  type: 'down' }, // 2
    { x: 160, open: 210, close: 180, high: 220, low: 170,  type: 'down' }, // 3
    { x: 210, open: 180, close: 220, high: 230, low: 160,  type: 'up'   }, // 4 (OB Candidate)
    { x: 260, open: 220, close: 150, high: 230, low: 140,  type: 'down' }, // 5 (LH - MSS Line anchor)
    { x: 310, open: 150, close: 120, high: 160, low: 110,  type: 'down' }, // 6 (Sweeps SSL)
    { x: 360, open: 125, close: 220, high: 230, low: 115,  type: 'up'   }, // 7 (Massive Displacement - Candle 1 of FVG)
    { x: 410, open: 220, close: 290, high: 300, low: 210,  type: 'up'   }, // 8 (Candle 2 of FVG - FVG space)
    { x: 460, open: 290, close: 320, high: 330, low: 280,  type: 'up'   }, // 9 (Candle 3 of FVG - MSS breach confirm)
    { x: 510, open: 320, close: 290, high: 330, low: 280,  type: 'down' }, // 10 (Retrace back to FVG / Mitigation)
    { x: 560, open: 285, close: 340, high: 350, low: 280,  type: 'up'   }, // 11 (Strong bounce up)
    { x: 610, open: 340, close: 380, high: 390, low: 330,  type: 'up'   }  // 12
];

// Note: Highs and lows are inverted in SVG since Y=0 is the TOP and Y=450 is the BOTTOM!
// To represent realistic trading prices, let's remap Y: Price 100$ = Y=400, Price 400$ = Y=50
function scalePriceToY(price) {
    // 100$ to 400$ -> 380px to 50px
    return 380 - ((price - 100) / 300) * 330;
}

function initSimulator() {
    DOM.simMissionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            DOM.simMissionBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSimMission = btn.getAttribute('data-mission');
            renderSimulatorMission(currentSimMission);
        });
    });
    
    DOM.simResetBtn.addEventListener('click', () => {
        mssClicked = false;
        obClicked = false;
        fvgDrawn = false;
        DOM.simFeedback.style.display = 'none';
        renderSimulatorMission(currentSimMission);
    });
    
    DOM.simVerifyBtn.addEventListener('click', verifySimulatorSubmission);
    
    // Draw initial state
    renderSimulatorMission('fvg');
}

function renderSimulatorMission(mission) {
    DOM.candlesGroup.innerHTML = '';
    DOM.interactiveGroup.innerHTML = '';
    DOM.simFeedback.style.display = 'none';
    
    // 1. Set guide text
    if (mission === 'fvg') {
        DOM.simMissionText.innerHTML = `
            <strong>🎯 미션: 공정가치갭(FVG) 찾기</strong><br>
            차트가 강력하게 상승하면서 발생한 비효율적인 빈 공간(FVG)이 존재합니다. 
            양봉 폭발이 시작된 캔들 7번의 고가(꼬리 끝)와 9번의 저가(꼬리 끝) 사이의 빈 공간을 찾아 마우스로 클릭하세요!
        `;
    } else if (mission === 'mss') {
        DOM.simMissionText.innerHTML = `
            <strong>🎯 미션: 시장 구조 전환(MSS) 포착</strong><br>
            하락하던 파동이 급등세로 전환되기 직전, 하락 추세를 계속 이어가던 <strong>마지막 높은 고점(LH, Lower High)</strong>라인이 존재합니다. 
            캔들이 이 라인을 강하게 뚫을 때 추세가 전환(MSS)됩니다. 차트에서 해당 '하락 저항 고점'을 클릭하세요!
        `;
    } else if (mission === 'ob') {
        DOM.simMissionText.innerHTML = `
            <strong>🎯 미션: 강세 오더블록(OB) 탐색</strong><br>
            강력하게 시장 구조를 뚫어내는 대급등이 탄생하기 바로 직전, 
            세력들이 반대로 막대한 물량을 매집하며 쌓아놓았던 <strong>마지막 매수 캔들(음봉)</strong>을 클릭해 보세요!
        `;
    }
    
    // 2. Draw candles
    CANDLE_DATA.forEach((c, idx) => {
        const x = c.x + 30; // offset
        const yOpen = scalePriceToY(c.open);
        const yClose = scalePriceToY(c.close);
        const yHigh = scalePriceToY(c.high);
        const yLow = scalePriceToY(c.low);
        
        const isUp = c.type === 'up';
        const color = isUp ? 'hsl(145, 65%, 45%)' : 'hsl(350, 70%, 50%)';
        const wickColor = 'hsla(215, 20%, 60%, 0.6)';
        
        // Draw wick
        const wick = document.createElementNS("http://www.w3.org/2000/svg", "line");
        wick.setAttribute("x1", x);
        wick.setAttribute("y1", yHigh);
        wick.setAttribute("x2", x);
        wick.setAttribute("y2", yLow);
        wick.setAttribute("stroke", wickColor);
        wick.setAttribute("stroke-width", "2");
        DOM.candlesGroup.appendChild(wick);
        
        // Draw body
        const bodyWidth = 24;
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x - bodyWidth / 2);
        rect.setAttribute("y", Math.min(yOpen, yClose));
        rect.setAttribute("width", bodyWidth);
        rect.setAttribute("height", Math.max(2, Math.abs(yOpen - yClose)));
        rect.setAttribute("fill", isUp ? "rgba(38, 166, 154, 0.9)" : "rgba(239, 83, 80, 0.9)");
        rect.setAttribute("stroke", color);
        rect.setAttribute("stroke-width", "1.5");
        rect.setAttribute("rx", "2");
        DOM.candlesGroup.appendChild(rect);
        
        // Draw Candle Number label for easy reference
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", x);
        text.setAttribute("y", yLow + 20);
        text.setAttribute("fill", "var(--text-muted)");
        text.setAttribute("font-size", "10");
        text.setAttribute("text-anchor", "middle");
        text.textContent = idx + 1;
        DOM.candlesGroup.appendChild(text);
    });
    
    // 3. Inject mission specific interactive overlays
    if (mission === 'fvg') {
        // Correct FVG is between Candle 7 high and Candle 9 low
        // Candle 7 High: 230 -> scalePriceToY(230)
        // Candle 9 Low: 280 -> scalePriceToY(280)
        // The space is from Y of 230 to Y of 280, X span across Candle 8 (x: 410+30)
        const yTop = scalePriceToY(280); // Higher price is smaller Y in SVG
        const yBottom = scalePriceToY(230);
        const fvgHeight = yBottom - yTop;
        
        // Hidden interactive area
        const hotspot = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        hotspot.setAttribute("x", 360 + 30 - 15);
        hotspot.setAttribute("y", yTop);
        hotspot.setAttribute("width", 130);
        hotspot.setAttribute("height", fvgHeight);
        hotspot.setAttribute("fill", "transparent");
        hotspot.setAttribute("cursor", "pointer");
        
        hotspot.addEventListener('click', () => {
            fvgDrawn = true;
            // Draw visually beautiful translucent target area
            DOM.interactiveGroup.innerHTML = '';
            const fvgBox = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            fvgBox.className = 'fvg-correct-rect';
            fvgBox.setAttribute("x", 360 + 30);
            fvgBox.setAttribute("y", yTop);
            fvgBox.setAttribute("width", 100);
            fvgBox.setAttribute("height", fvgHeight);
            
            // FVG Text label inside SVG
            const fvgLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
            fvgLabel.setAttribute("x", 410 + 30);
            fvgLabel.setAttribute("y", yTop + fvgHeight / 2 + 4);
            fvgLabel.setAttribute("fill", "var(--success)");
            fvgLabel.setAttribute("font-size", "11");
            fvgLabel.setAttribute("font-weight", "bold");
            fvgLabel.setAttribute("text-anchor", "middle");
            fvgLabel.textContent = "Bison FVG POI 🎯";
            
            DOM.interactiveGroup.appendChild(fvgBox);
            DOM.interactiveGroup.appendChild(fvgLabel);
        });
        DOM.interactiveGroup.appendChild(hotspot);
        
    } else if (mission === 'mss') {
        // Correct MSS line is the High of Candle 5 (Lower High)
        // Candle 5 High is 230 -> Y = scalePriceToY(230)
        const mssY = scalePriceToY(230);
        
        // Draw hidden hotspot near Candle 5 High
        const hotspot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        hotspot.setAttribute("cx", 260 + 30);
        hotspot.setAttribute("cy", mssY);
        hotspot.setAttribute("r", "16");
        hotspot.setAttribute("fill", "transparent");
        hotspot.setAttribute("cursor", "pointer");
        
        hotspot.addEventListener('click', () => {
            mssClicked = true;
            DOM.interactiveGroup.innerHTML = '';
            
            // Draw horizontal MSS dashed line
            const mssLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
            mssLine.className = 'clicked-line';
            mssLine.setAttribute("x1", 50);
            mssLine.setAttribute("y1", mssY);
            mssLine.setAttribute("x2", 700);
            mssLine.setAttribute("y2", mssY);
            
            const mssLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
            mssLabel.setAttribute("x", 120);
            mssLabel.setAttribute("y", mssY - 8);
            mssLabel.setAttribute("fill", "var(--primary)");
            mssLabel.setAttribute("font-size", "12");
            mssLabel.setAttribute("font-weight", "bold");
            mssLabel.textContent = "MSS 돌파 기준선 (LH) ⚡";
            
            const marker = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            marker.className = 'clicked-marker';
            marker.setAttribute("cx", 260 + 30);
            marker.setAttribute("cy", mssY);
            marker.setAttribute("r", "6");
            
            DOM.interactiveGroup.appendChild(mssLine);
            DOM.interactiveGroup.appendChild(mssLabel);
            DOM.interactiveGroup.appendChild(marker);
        });
        DOM.interactiveGroup.appendChild(hotspot);
        
    } else if (mission === 'ob') {
        // Correct Bullish OB is Candle 4 (the down candle before the MSS-breaking run)
        // Candle 4: X = 210 + 30 = 240. Body range: 180 to 220
        const yTop = scalePriceToY(220);
        const yBottom = scalePriceToY(180);
        
        const hotspot = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        hotspot.setAttribute("x", 210 + 30 - 15);
        hotspot.setAttribute("y", yTop - 10);
        hotspot.setAttribute("width", 30);
        hotspot.setAttribute("height", yBottom - yTop + 20);
        hotspot.setAttribute("fill", "transparent");
        hotspot.setAttribute("cursor", "pointer");
        
        hotspot.addEventListener('click', () => {
            obClicked = true;
            DOM.interactiveGroup.innerHTML = '';
            
            // Render OB glow
            const obBox = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            obBox.setAttribute("x", 210 + 30 - 14);
            obBox.setAttribute("y", yTop);
            obBox.setAttribute("width", 28);
            obBox.setAttribute("height", yBottom - yTop);
            obBox.setAttribute("fill", "var(--secondary-glow)");
            obBox.setAttribute("stroke", "var(--secondary)");
            obBox.setAttribute("stroke-width", "2");
            obBox.setAttribute("rx", "2");
            
            const obLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
            obLabel.setAttribute("x", 210 + 30);
            obLabel.setAttribute("y", yTop - 12);
            obLabel.setAttribute("fill", "var(--secondary)");
            obLabel.setAttribute("font-size", "11");
            obLabel.setAttribute("font-weight", "bold");
            obLabel.setAttribute("text-anchor", "middle");
            obLabel.textContent = "Bullish OB 🔥";
            
            DOM.interactiveGroup.appendChild(obBox);
            DOM.interactiveGroup.appendChild(obLabel);
        });
        DOM.interactiveGroup.appendChild(hotspot);
    }
}

function verifySimulatorSubmission() {
    DOM.simFeedback.style.display = 'block';
    
    if (currentSimMission === 'fvg') {
        if (fvgDrawn) {
            DOM.simFeedback.className = "sim-feedback-panel correct";
            DOM.simFeedback.innerHTML = `
                <h4>🎉 정답입니다! 완벽해요!</h4>
                <p>7번 캔들의 높은 꼬리와 9번 캔들의 낮은 꼬리가 겹치지 않는 8번 캔들 부근의 FVG 구역을 완벽하게 포착했습니다. 가격은 훗날 이 FVG 구역을 마침내 터치하고(Mitigation) 재차 강력하게 튕겨 올랐습니다(10번, 11번 캔들 참조)! 이것이 최고의 롱 타점입니다.</p>
            `;
        } else {
            DOM.simFeedback.className = "sim-feedback-panel incorrect";
            DOM.simFeedback.innerHTML = `
                <h4>❌ 작도가 누락되었습니다!</h4>
                <p>캔들 7번의 고점 꼬리와 캔들 9번의 저점 꼬리 사이, 8번 캔들의 몸통 부분에 비어있는 공간(공정가치갭)을 캔버스 위에서 손가락이나 마우스로 터치해 활성화한 후 검증하세요!</p>
            `;
        }
    } else if (currentSimMission === 'mss') {
        if (mssClicked) {
            DOM.simFeedback.className = "sim-feedback-panel correct";
            DOM.simFeedback.innerHTML = `
                <h4>🎉 정답입니다! 훌륭한 안목이군요!</h4>
                <p>하락 파동의 마지막 저항 지점인 5번 캔들의 '낮은 고점(LH)' 라인을 정확히 짚으셨습니다. 가격이 7번, 8번 장대양봉 몸통으로 이 라인을 거침없이 상방 돌파하면서 추세가 상승으로 완전히 공식 확정(MSS)되었습니다!</p>
            `;
        } else {
            DOM.simFeedback.className = "sim-feedback-panel incorrect";
            DOM.simFeedback.innerHTML = `
                <h4>❌ 다른 캔들 영역을 지정했습니다!</h4>
                <p>하락 파동 중 돌파당하면 완전히 추세가 돌아버리는 '마지막 산봉우리'인 5번 캔들의 높은 꼬리 끝부분(고점)을 찾아 클릭한 뒤 검증을 눌러보세요.</p>
            `;
        }
    } else if (currentSimMission === 'ob') {
        if (obClicked) {
            DOM.simFeedback.className = "sim-feedback-panel correct";
            DOM.simFeedback.innerHTML = `
                <h4>🎉 정답입니다! 세력의 자취를 읽으셨네요!</h4>
                <p>상승 폭발이 폭풍처럼 시작되기 직전, 세력들이 저가에 대규모 주문을 쓸어 담아놓았던 마지막 강세 음봉 캔들인 4번 오더블록(OB)을 아주 정확하게 포착했습니다. 훗날 10번 캔들에서 이 OB까지 가격이 되돌아왔을 때 롱 대량 체결이 이루어져 폭등한 것을 확인해보세요!</p>
            `;
        } else {
            DOM.simFeedback.className = "sim-feedback-panel incorrect";
            DOM.simFeedback.innerHTML = `
                <h4>❌ 잘못된 캔들을 오더블록으로 골랐습니다.</h4>
                <p>진짜 폭등 캔들(7번)이 솟아나기 전, 추세 흐름의 바닥에 위치했던 4번째 하락 음봉(빨간색 캔들)을 찾아 그 몸통을 정확하게 클릭해 보세요!</p>
            `;
        }
    }
}

// ── FLOATING CHATBOT AI WIDGET ──
function initChatbot() {
    DOM.chatTriggerBtn.addEventListener('click', () => {
        DOM.chatWindow.classList.toggle('active');
        // Clear message count badge
        const badge = DOM.chatTriggerBtn.querySelector('.chat-badge');
        if (badge) badge.style.display = 'none';
        
        // Auto scroll to bottom
        scrollChatToBottom();
    });
    
    DOM.chatCloseBtn.addEventListener('click', () => {
        DOM.chatWindow.classList.remove('active');
    });
    
    DOM.chatSendBtn.addEventListener('click', handleChatSubmit);
    DOM.chatUserInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleChatSubmit();
    });
}

function scrollChatToBottom() {
    DOM.chatMessagesBox.scrollTop = DOM.chatMessagesBox.scrollHeight;
}

function updateApiKeyIndicator() {
    const key = localStorage.getItem('bison_google_api_key');
    if (key && key.trim().length > 10) {
        DOM.apiKeyIndicator.className = 'api-key-badge';
        DOM.apiKeyIndicator.innerHTML = `<i class="fa-solid fa-key" style="color: #34d399"></i> <span>Gemini AI 활성</span>`;
    } else {
        DOM.apiKeyIndicator.className = 'api-key-badge'
        DOM.apiKeyIndicator.style.background = 'rgba(239, 68, 68, 0.1)';
        DOM.apiKeyIndicator.style.color = '#f87171';
        DOM.apiKeyIndicator.style.borderColor = 'rgba(239, 68, 68, 0.2)';
        DOM.apiKeyIndicator.innerHTML = `<i class="fa-solid fa-key-skeleton"></i> <span>Gemini 연동 필요</span>`;
    }
}

async function handleChatSubmit() {
    const text = DOM.chatUserInput.value.trim();
    if (!text) return;
    
    // Render user message
    appendChatMessage('user', text);
    DOM.chatUserInput.value = '';
    
    // Check local API key
    let key = localStorage.getItem('bison_google_api_key');
    if (!key || key.trim().length < 10) {
        const inputKey = prompt("🤖 AI 튜터와 대화하려면 Google Gemini API Key가 필요합니다!\n입력하신 키는 서버로 전송되지 않고 사용자의 로컬 브라우저 브라우저(LocalStorage)에 안전하게 저장됩니다.\n\nAPI 키를 입력해주세요:");
        if (inputKey && inputKey.trim().length > 10) {
            localStorage.setItem('bison_google_api_key', inputKey.trim());
            updateApiKeyIndicator();
            key = inputKey.trim();
            appendChatMessage('bot', "🔑 Google API 키가 안전하게 연동되었습니다! 이제 비손 SMC 아카데미의 챗봇 튜터링 서비스를 마음껏 이용하세요. 무엇이 궁금하신가요?");
            return;
        } else {
            appendChatMessage('bot', "⚠️ API 키가 입력되지 않았거나 유효하지 않습니다. AI 튜터 대화를 활성화하려면 API 키를 입력해주셔야 합니다. 우측 상단의 '연동 필요' 배지를 눌러 다시 설정할 수도 있습니다.");
            return;
        }
    }
    
    // Generate AI tutor response via Gemini 2.0 Flash
    appendChatMessage('bot', "🤔 생각 중입니다... 잠시만 기다려주세요.");
    const thinkingMessageDiv = DOM.chatMessagesBox.lastElementChild;
    
    try {
        const aiAnswer = await callGeminiAPIForTutor(key, text);
        thinkingMessageDiv.innerHTML = aiAnswer;
    } catch (e) {
        thinkingMessageDiv.innerHTML = `❌ 에러가 발생했습니다. API 키의 기한 만료나 한도 초과 여부를 확인해주세요. (상세: ${e.message})`;
    }
    scrollChatToBottom();
}

function appendChatMessage(sender, text) {
    const msg = document.createElement('div');
    msg.className = `message ${sender}`;
    
    // Enable crude markdown styling (bold and bullets)
    let html = text
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/`([^`]+)`/g, '<code style="background:rgba(255,255,255,0.08); padding:2px 4px; border-radius:4px; font-family:monospace;">$1</code>')
        .replace(/^- (.*?)$/gm, '• $1');
        
    msg.innerHTML = html;
    DOM.chatMessagesBox.appendChild(msg);
    scrollChatToBottom();
}

async function callGeminiAPIForTutor(apiKey, userQuestion) {
    // Build context-rich prompt using internal database of lessons
    const contextSnippet = lessons.map(l => `[주제: ${l.title} (${l.phase})]\n정의: ${l.tldr}\n비유: ${l.analogy}\n차트기술요약: ${l.concept}\n용어: ${l.terms.map(t=>t.term+": "+t.desc).join(', ')}`).join('\n\n');
    
    const prompt = `
당신은 Team Mensa 소속의 최고 권위 퀀트 트레이더이자, 어려운 SMC/ICT 개념을 왕초보자도 100% 쉽게 이해하도록 가르치는 '천재 트레이딩 교육 전문가'입니다.
현재 아카데미 학생이 아래와 같이 질문을 던졌습니다.

[학생의 질문]:
"${userQuestion}"

[아카데미 내장 SMC/ICT 교재 지식 데이터]:
${contextSnippet}

[답변 작성 가이드라인 (왕필수)]:
1. 반드시 친절하고 다정한 '한국어'로 정중하게 반말로 하지 말고 존댓말로 교육하듯 설명하세요.
2. 학생의 질문이 아카데미 교재 지식에 있는 개념(예: FVG, MSS, OB, 세션 프로필, 리스크 관리 등)이라면, 교재 지식을 인용하면서 '왕초보자용 일상 비유'를 들어 무릎을 탁 치며 이해되도록 설명하십시오.
3. 만약 교재 데이터에 없는 완전히 무관한 주식/코인 분석이나 사담이라면, "비손 아카데미 교육 범위 내에서 스마트 머니 이론(SMC)에 관련된 내용만 친절하게 알려드릴 수 있어요!"라고 가이드하고 간략하게만 알려주세요.
4. 설명 시 중요한 트레이딩 전문 용어는 **영어 약어와 한국어 번역**을 함께 표시해주세요. (예: **MSS (시장 구조 전환)**)
5. 줄바꿈을 자주 하여 가독성 있게 정리해서 핵심 요약식 리스트로 출력해주세요.
`;

    const model = "gemini-2.0-flash";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    
    const payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "temperature": 0.4,
            "maxOutputTokens": 1000
        }
    };
    
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
        const errText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errText}`);
    }
    
    const data = await response.json();
    return data.candidates[0].content.parts[0].text.trim();
}

// ── UTILITY HELPERS ──
function getPhaseBadgeClass(phaseStr) {
    if (phaseStr.includes("1단계")) return "p1";
    if (phaseStr.includes("2단계")) return "p2";
    if (phaseStr.includes("3단계")) return "p3";
    if (phaseStr.includes("4단계")) return "p4";
    return "p1";
}

function getDiffClass(diffStr) {
    if (diffStr.includes("초급")) return "easy";
    if (diffStr.includes("중급")) return "medium";
    if (diffStr.includes("고급")) return "hard";
    return "easy";
}
