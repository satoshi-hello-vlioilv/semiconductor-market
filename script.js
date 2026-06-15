/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const COUNTRY={JP:{flag:'🇯🇵',color:'var(--jp)',bg:'var(--jp-bg)',label:'日本'},US:{flag:'🇺🇸',color:'var(--us)',bg:'var(--us-bg)',label:'米国'},TW:{flag:'🇹🇼',color:'var(--tw)',bg:'var(--tw-bg)',label:'台湾'},KR:{flag:'🇰🇷',color:'var(--kr)',bg:'var(--kr-bg)',label:'韓国'},NL:{flag:'🇳🇱',color:'var(--nl)',bg:'var(--nl-bg)',label:'蘭'},DE:{flag:'🇩🇪',color:'var(--de)',bg:'var(--de-bg)',label:'独'},CN:{flag:'🇨🇳',color:'var(--cn)',bg:'var(--cn-bg)',label:'中国'},UK:{flag:'🇬🇧',color:'var(--uk)',bg:'var(--uk-bg)',label:'英国'}};

const LAYERS=[
  {id:1,name:'原材料・素材',en:'Materials',color:'#F59E0B'},
  {id:2,name:'製造装置・EDA',en:'Equipment / EDA',color:'#10B981'},
  {id:3,name:'IP・設計ライセンス',en:'IP Cores',color:'#3B82F6'},
  {id:4,name:'ファブレス設計',en:'Fabless Design',color:'#8B5CF6'},
  {id:5,name:'ファウンドリ / IDM',en:'Foundry / IDM',color:'#6366F1'},
  {id:6,name:'後工程・OSAT',en:'OSAT / Assembly',color:'#0D9488'},
  {id:7,name:'最終製品・需要',en:'End Products',color:'#F97316'},
];

const COMPANIES=[
  // ─── LAYER 1: Materials ───
  {id:'shinetsu',layer:1,sub:'Siウェーハ',name:'信越化学工業',en:'Shin-Etsu Chemical',ticker:'4063.T',country:'JP',
   product:'300mm Siウェーハ・EUVフォトレジスト',share:30,shareLabel:'Siウェーハ（世界1位）',
   revenue:'¥2.4兆',mcap:'¥14兆',stock24:'+8%',perf:'up',featured:true,gnt:true,
   ir:{per:'18x',pbr:'2.4x',roe:'13.5%',div:'¥300',guidance:'FY2025増収増益見通し',latestQ:'Q3好調・ウェーハASP底打ち',irLink:'https://www.shinetsu.co.jp/jp/ir/'},
   strength:'ウェーハとフォトレジストの両方を供給できる唯一の総合材料企業。切り替えコストが極めて高く、TSMC・Samsung・Intelの全ファウンドリに長期納入。PVC樹脂でも世界1位（35%）を誇る多重独占企業。',
   risk:'南海トラフ地震リスク（群馬・新潟・静岡に主要工場）。ウェーハ需給サイクルでASP下落リスク。',
   outlook:'Rapidus・JASM・Micron広島の稼働でウェーハ需要が拡大。EUVレジスト開発の加速でTAMが拡大。新工場建設（半導体露光材料）で供給能力を増強中。',
   highlights:['Siウェーハ世界1位（30%）','日本2社で市場の53%独占','EUVフォトレジスト上位（18%）'],
  },
  {id:'sumco',layer:1,sub:'Siウェーハ',name:'SUMCO',en:'SUMCO Corporation',ticker:'3436.T',country:'JP',
   product:'300mm Siウェーハ',share:23,shareLabel:'Siウェーハ（世界2位）',
   revenue:'≈¥4,000億',mcap:'≈¥4,000億',stock24:'軟調',perf:'dn',gnt:true,
   ir:{per:'12x',pbr:'1.1x',roe:'9.2%',div:'¥60',guidance:'ウェーハ需要回復見通し',latestQ:'Q3やや軟調・在庫調整継続',irLink:'https://www.sumcosi.com/ir/'},
   strength:'信越化学と並ぶウェーハ2強。日本2社合計で世界300mmウェーハの53%を独占。SiCウェーハも展開開始。',
   risk:'ウェーハサイクル感応が大きい。設備投資が重く固定費が高い。',
   outlook:'AI需要増でウェーハ需要が増加。2025〜2026年に需給タイト化が予測される。',
   highlights:['Siウェーハ世界2位（23%）','信越+SUMCOで53%独占'],
  },
  {id:'globalwafers',layer:1,sub:'Siウェーハ',name:'GlobalWafers',country:'TW',
   product:'300mm Siウェーハ',share:16,shareLabel:'Siウェーハ（世界3位）',
   highlights:['ウェーハ世界3位（16%）','台湾域内のTSMC需要に恩恵'],
  },
  {id:'siltronic',layer:1,sub:'Siウェーハ',name:'Siltronic',country:'DE',
   product:'Siウェーハ',share:12,shareLabel:'世界シェア（4位）',
   highlights:['ウェーハ世界4位（12%）','欧州最大のウェーハメーカー'],
  },
  {id:'sksiltron',layer:1,sub:'Siウェーハ',name:'SK Siltron',country:'KR',
   product:'Siウェーハ・SiCウェーハ',share:12,shareLabel:'世界シェア（4位）',
   strength:'SK Group傘下。SamsungとSK hynixの主要ウェーハサプライヤー。SiCウェーハにも展開。',
   highlights:['ウェーハ世界4位（12%）','SiCウェーハにも展開','Samsung・SK hynix向け'],
  },
  {id:'jsr',layer:1,sub:'フォトレジスト',name:'JSR（JIC傘下）',en:'JSR Corporation',ticker:'4185.T',country:'JP',
   product:'フォトレジスト（EUV対応）',share:25,shareLabel:'フォトレジスト（世界1位）',
   featured:true,gnt:true,
   strength:'2024年6月、産業革新投資機構（JIC）が約9,000億円で非公開化。EUVレジストの先端開発で最上位。日本政府が戦略的重要資産として囲い込み。',
   risk:'国有化に伴う意思決定速度への影響。対中輸出規制の対象になりうる。',
   outlook:'政府の戦略的保護下でEUV・High-NA EUVレジストの最先端開発を継続。Synopsys・ASML・TELと連携してEUVプロセス最適化。',
   highlights:['フォトレジスト世界1位（25%）','2024年6月JIC国有化','EUVレジスト最先端'],
  },
  {id:'tok',layer:1,sub:'フォトレジスト',name:'東京応化工業（TOK）',country:'JP',
   product:'フォトレジスト（EUV対応）',share:20,shareLabel:'フォトレジスト（世界2位）',
   ir:{per:'22x',pbr:'1.8x',roe:'8.1%',div:'¥160',guidance:'EUVレジスト増収見通し',latestQ:'売上堅調・EUV向け比率増加',irLink:'https://www.tok.co.jp/ir/'},
   highlights:['フォトレジスト世界2位（20%）','EUVレジスト積極開発'],
  },
  {id:'fujifilm',layer:1,sub:'フォトレジスト',name:'富士フイルム',country:'JP',
   product:'フォトレジスト・電子材料',share:12,shareLabel:'フォトレジスト（世界4位）',
   ir:{per:'28x',pbr:'2.2x',roe:'8.8%',div:'¥120',guidance:'医療・半導体材料で増収',latestQ:'医療事業好調・半導体材料増',irLink:'https://holdings.fujifilm.com/ja/ir'},
   highlights:['フォトレジスト世界4位（12%）','医療・半導体材料複合体'],
  },
  {id:'sumichem',layer:1,sub:'フォトレジスト',name:'住友化学',country:'JP',
   product:'フォトレジスト',share:10,shareLabel:'フォトレジスト（世界5位）',
   highlights:['フォトレジスト世界5位（10%）'],
  },
  {id:'ajinomoto',layer:1,sub:'特殊材料',name:'味の素ファインテクノ',country:'JP',
   product:'ABFフィルム（AI GPU向け基板素材）',share:99,shareLabel:'ABFフィルム（世界独占）',
   featured:true,gnt:true,
   strength:'AI GPU向けABF（Ajinomoto Build-up Film）基板の素材で世界99%独占。「食品会社が半導体を支配」として業界で有名。代替品が存在しない唯一の供給者。Ibiden（基板製造）のABF使用は100%味の素FT製。',
   risk:'川崎工場への地震リスク。需要急増への増産速度が制約になる可能性。',
   outlook:'AI GPU需要爆発でABFフィルム需要が急増。Ibiden基板の増産と完全連動。生産能力の拡大を急ピッチで進行中。',
   highlights:['ABFフィルム世界99%独占','NVIDIA・AMD・Intel GPU必須材料','代替品ゼロ'],
  },
  {id:'suminov',layer:1,sub:'特殊材料',name:'住友ベークライト',country:'JP',
   product:'半導体封止材（EMC）',share:40,shareLabel:'EMC（世界1位）',
   gnt:true,
   strength:'AI GPU・HBMのパッケージングに不可欠な封止材（エポキシモールディングコンパウンド）で世界40%独占。',
   highlights:['封止材EMC世界1位（40%）','AI GPU/HBMパッケージ必須'],
  },
  {id:'entegris',layer:1,sub:'特殊材料',name:'Entegris',country:'US',
   product:'CMPスラリー・高純度化学品',share:25,shareLabel:'CMPスラリー（世界1位）',
   highlights:['CMPスラリー世界1位（25%）','半導体用高純度化学品の総合サプライヤー'],
  },
  {id:'oxide',layer:1,sub:'特殊材料',name:'オキサイド',en:'Oxide Inc.',ticker:'6521.T',country:'JP',
   product:'DUV波長変換単結晶・レーザ光源',share:95,shareLabel:'DUV波長変換単結晶（世界独占）',
   featured:true,gnt:true,revenue:'≈¥30億',mcap:'≈¥120〜150億',stock24:'参考値',
   ir:{per:'55x',pbr:'4.2x',roe:'8.4%',div:'—',guidance:'検査装置向け増収見通し',latestQ:'受注好調・EUV光源部材展開中',irLink:'https://www.opt-oxide.com/ir/'},
   strength:'半導体ウェーハ欠陥検査装置に使用するDUVレーザの心臓部「波長変換単結晶（LBO・BBO）」で世界95%独占。KLA・日立ハイテク製検査装置に組み込まれ、Intel・TSMC・Samsung工場で稼働中。DUVレーザ光源でも世界シェア30%超。',
   risk:'小型株のため流動性リスク。半導体サイクル感応が高い。量産拡大フェーズで利益率圧迫も。',
   outlook:'微細化が進むほどDUV欠陥検出の重要性が増す。EUV光源コンポーネント・EUV検査用結晶への展開でTAM拡大。量産体制の確立が次のステップ。',
   highlights:['DUV波長変換単結晶95%独占','TSMC・Samsung・Intel採用','グローバルニッチトップ100選'],
  },
  // ─── GNT追加（Layer1） ───
  {id:'resonac',layer:1,sub:'特殊材料',name:'レゾナック',en:'Resonac Holdings',ticker:'4004.T',country:'JP',
   product:'CMPスラリー・ウェーハ研磨材・GaN基板',share:20,shareLabel:'CMPスラリー（世界2位）',
   gnt:true,
   ir:{per:'16x',pbr:'1.3x',roe:'8.2%',div:'¥40',guidance:'半導体材料増収見通し',latestQ:'CMP好調・GaN基板量産準備中',irLink:'https://www.resonac.com/jp/ir'},
   strength:'旧昭和電工・日立化成合併で誕生。CMPスラリー世界2位（20%）。GaN-on-Si次世代パワー基板も展開。半導体前工程向け機能材料の総合メーカーとして日立ハイテクとも連携。',
   risk:'Entegrisとの競争激化。素材事業の収益率が製品事業より低い。',
   outlook:'GaN基板のEV・5G通信向け需要が拡大予測。AI GPU増産でCMPスラリー消費量増加。',
   highlights:['CMPスラリー世界2位（20%）','GaN基板次世代パワー展開','昭和電工+日立化成合併誕生'],
  },
  {id:'fujimi',layer:1,sub:'特殊材料',name:'フジミインコーポレーテッド',en:'Fujimi Incorporated',ticker:'5384.T',country:'JP',
   product:'CMPスラリー・研磨材',share:15,shareLabel:'CMPスラリー（世界3位）',
   gnt:true,
   ir:{per:'24x',pbr:'2.8x',roe:'12.1%',div:'¥60',guidance:'AI向け研磨材で増収',latestQ:'CMPスラリー受注堅調・高マージン継続',irLink:'https://www.fujimi.co.jp/ir/'},
   strength:'CMP（化学機械研磨）スラリーの老舗メーカー。Siウェーハ・メタル・Low-k各分野に特化した製品群。TSMC・Samsung・Micronへの長期サプライヤー。高利益率（営業利益率15%超）を維持。',
   risk:'Entegris・CMC Materialsとの競争。エンドユーザーの製造プロセス変更でスラリー仕様が変わりやすい。',
   outlook:'AI GPU製造でのCMP工程増加により消費量拡大。次世代スラリーの開発で競合との差別化を継続。',
   highlights:['CMPスラリー世界3位（15%）','TSMC/Samsung長期サプライヤー','営業利益率15%超'],
  },
  {id:'stella',layer:1,sub:'特殊材料',name:'ステラケミファ',en:'Stella Chemifa',ticker:'4109.T',country:'JP',
   product:'超高純度フッ化水素酸（HF）・フッ素化合物',share:60,shareLabel:'超高純度HF（国内独占、世界1位級）',
   gnt:true,
   ir:{per:'20x',pbr:'1.9x',roe:'9.6%',div:'¥56',guidance:'半導体向けHF需要増見通し',latestQ:'超高純度品比率上昇・収益改善',irLink:'https://www.stella-chemifa.co.jp/ir/'},
   strength:'半導体製造に不可欠な超高純度フッ化水素酸（HF）で国内独占・世界1位級。ウェーハ洗浄・エッチングに使用される超高純度品（12N以上）の製造で世界トップ。韓国・台湾ファウンドリも調達。日韓輸出管理摩擦（2019年）で注目を浴びた重要物資。',
   risk:'フッ素化学品の環境規制強化。地政学的な輸出規制リスク。',
   outlook:'微細化進展でウェーハ洗浄工程が増加し超高純度HFの需要が拡大。EUV工程でも使用量増加。',
   highlights:['超高純度HF国内独占・世界1位','2019年日韓摩擦の注目材料','12N超高純度グレードで競合排除'],
  },
  {id:'hamamatsu',layer:1,sub:'光学センサ',name:'浜松ホトニクス',en:'Hamamatsu Photonics',ticker:'6965.T',country:'JP',
   product:'PMT（光電子増倍管）・イメージセンサ・レーザ部品',share:90,shareLabel:'PMT（世界1位・90%超）',
   gnt:true,
   ir:{per:'32x',pbr:'3.6x',roe:'11.4%',div:'¥40',guidance:'医療・半導体向け増収',latestQ:'PMT・CMOS好調・医療診断向け増加',irLink:'https://www.hamamatsu.com/jp/ja/investor-relations.html'},
   strength:'光電子増倍管（PMT）で世界90%超独占。半導体検査装置（KLA・レーザーテック）に組み込まれるほか、医療診断（PET/CT）・物理実験（ニュートリノ検出器）にも不可欠。EUV光源の制御にも光検出器が使用される。独立系研究機関との共同研究で技術リードを維持。',
   risk:'PMT市場は成熟しているが高利益率で安定。新興の半導体ベースSiPMとの競合。',
   outlook:'EUV検査装置向け高感度光検出器の需要増。医療診断でのPET/CT普及加速。中性子・ニュートリノ研究での独占的採用継続。',
   highlights:['PMT世界90%超独占','EUV検査装置に必須部品','医療診断・物理実験でも独占'],
  },

  // ─── LAYER 2: Equipment/EDA ───
  {id:'asml',layer:2,sub:'リソグラフィ',name:'ASML',en:'ASML Holding N.V.',ticker:'ASML',country:'NL',
   product:'EUV・DUV露光装置',share:100,shareLabel:'EUV露光装置（世界独占）',
   featured:true,gnt:true,
   revenue:'€32.5B（2025・+約15%）',mcap:'≈€300B規模',stock24:'+約25%（直近1年）',perf:'up',
   ir:{per:'34x',pbr:'17x',roe:'51%',div:'€6.40',guidance:'2026年も2025年並み以上・High-NA EUV本格展開',latestQ:'Q4 2025受注が過去最高・High-NA採用進む',irLink:'https://www.asml.com/en/investors'},
   strength:'EUV露光装置（1台約400億円）で世界100%独占。High-NA EUV（次世代、NA=0.55）も独占量産中。TSMC・Samsung・Intelへの供給でAI半導体サプライチェーンの絶対的要。30万点以上の部品からなる超精密機械。',
   risk:'中国向け売上は2026年に比率約20%へ縮小（2025年は33%）。NikonのArF新機種が2028年に競合予定。',
   outlook:'High-NA EUV普及で単価さらに上昇。TSMCのArizona・日本・ドイツファブ新設で新規需要。中国減少を先端EUV需要が相殺し、2026年売上は2025年を下回らない見通し。',
   highlights:['EUV 100%独占（代替なし）','High-NA EUV量産・採用拡大','Q4 2025受注が過去最高'],
  },
  {id:'tel',layer:2,sub:'プロセス装置',name:'東京エレクトロン（TEL）',en:'Tokyo Electron',ticker:'8035.T',country:'JP',
   product:'コータ/デベロッパ・成膜・エッチング装置',share:90,shareLabel:'EUV用コータ/デベロッパ',
   featured:true,gnt:true,
   revenue:'≈¥2兆',mcap:'≈¥15〜20兆',stock24:'+87%',perf:'up',
   ir:{per:'28x',pbr:'8.5x',roe:'30.4%',div:'¥400',guidance:'FY2025増収増益・2nm工程装置急拡大',latestQ:'Q3受注過去最高・中国向け正常化',irLink:'https://www.tel.com/ir/'},
   strength:'EUV工程向けコータ/デベロッパで90〜92%（EUV用は100%）独占。世界装置メーカー売上4位。ASMLと連携してEUV工程全体を最適化する「生態系パートナー」。洗浄・成膜・エッチングまで幅広い工程を手掛ける。',
   risk:'対中輸出規制強化（23品目）で中国向け売上が制限。中国売上比率が高い。',
   outlook:'2nm工程移行でコータ重要性が増大。Rapidus・JASMへの国内供給増加。AIサーバー需要増でCoWoS工程装置も拡大。',
   highlights:['EUV用コータ100%（唯一）','世界装置4位','ASML連携で2nm完全対応'],
  },
  {id:'amat',layer:2,sub:'プロセス装置',name:'Applied Materials',en:'AMAT',ticker:'AMAT',country:'US',
   product:'CVD/PVD成膜装置・CMP装置',share:20,shareLabel:'WFE市場シェア（世界1位）',
   revenue:'$27.2B',mcap:'≈$150B',stock24:'+29%',perf:'up',
   ir:{per:'22x',pbr:'9.5x',roe:'43%',div:'$1.04',guidance:'WFE市場$120B超見込み',latestQ:'Q4好調・ハイブリッドボンディング受注増',irLink:'https://ir.appliedmaterials.com/'},
   strength:'半導体装置売上世界1位。CVD/PVD成膜でトップシェア。CMP（化学機械研磨）でも世界60%。BESIに9%出資しハイブリッドボンディング（先進パッケージ）にも展開。',
   highlights:['装置売上世界1位','CMP60%','HBM向けハイブリッドボンディング進出'],
  },
  {id:'lam',layer:2,sub:'プロセス装置',name:'Lam Research',ticker:'LRCX',country:'US',
   product:'エッチング装置・成膜（ALD/CVD）装置',share:45,shareLabel:'エッチング装置（世界1位）',
   revenue:'$14.9B',mcap:'≈$100B',stock24:'+34%',perf:'up',
   ir:{per:'25x',pbr:'12x',roe:'48%',div:'$0.92',guidance:'WFE回復でエッチング需要拡大',latestQ:'Q4受注増・中国規制影響軽微',irLink:'https://investor.lamresearch.com/'},
   strength:'ドライエッチングで世界45%独占。3D NAND積層構造とHBM TSV（シリコン貫通電極）工程で必須設備。プラズマベースのエッチングで競合を圧倒。',
   highlights:['エッチング世界1位（45%）','HBM TSV工程必須','3D NAND積層に不可欠'],
  },
  {id:'kla',layer:2,sub:'プロセス装置',name:'KLA',ticker:'KLAC',country:'US',
   product:'ウェーハ検査・プロセス制御装置',share:60,shareLabel:'検査・計測装置（世界1位）',
   revenue:'$9.5B',mcap:'≈$90B',stock24:'+20%',perf:'up',
   ir:{per:'27x',pbr:'30x',roe:'110%',div:'$1.70',guidance:'AI GPU需要で検査装置増収',latestQ:'Q2受注過去最高水準',irLink:'https://ir.kla.com/'},
   strength:'プロセス制御（検査・計測）で世界56〜63%を独占。AI GPU量産では歩留まり管理が最重要課題でKLA需要が急増。オキサイドのDUV単結晶を使った検査装置が主力製品。',
   highlights:['検査計測世界1位（60%）','AI GPU歩留まり管理に必須','オキサイド単結晶を採用'],
  },
  {id:'lasertec',layer:2,sub:'プロセス装置',name:'レーザーテック',en:'Lasertec Corporation',ticker:'6920.T',country:'JP',
   product:'EUVマスクブランク検査装置',share:100,shareLabel:'EUVマスク検査装置（世界独占）',
   featured:true,gnt:true,
   revenue:'≈¥1,800億',mcap:'≈¥2〜3兆',stock24:'+26%（ピーク時+200%超）',perf:'up',
   ir:{per:'45x',pbr:'12x',roe:'26%',div:'¥150',guidance:'High-NA EUV移行で単価上昇',latestQ:'Q2受注高水準・Rapidus向け商談進展',irLink:'https://www.lasertec.co.jp/ja/ir/'},
   strength:'EUVマスクブランク検査装置で世界唯一のサプライヤー（100%独占）。ASML EUVを1台導入するごとにレーザーテックの装置も1台必要になる「連動構造」。High-NA EUV移行で検査精度要求が厳格化され装置単価が上昇。',
   risk:'高バリュエーション（PER100超の時期も）。TSMC/Samsung設備投資タイミングで受注変動。中国向けは制限済み。',
   outlook:'Rapidus千歳ファブ稼働で国内顧客獲得。High-NA EUV普及で需要が急増。マスクの複雑化で検査装置の単価上昇が続く。',
   highlights:['EUVマスク検査100%（唯一）','ASML EUVと1対1連動','High-NA移行で単価上昇'],
  },
  {id:'disco',layer:2,sub:'後工程装置',name:'ディスコ（Disco）',en:'Disco Corporation',ticker:'6146.T',country:'JP',
   product:'ダイシング装置・グラインダ（精密切断・研削）',share:70,shareLabel:'ダイシング装置（世界1位）',
   featured:true,gnt:true,
   revenue:'≈¥3,000億',mcap:'≈¥3〜4兆',stock24:'+47%',perf:'up',
   ir:{per:'30x',pbr:'7.8x',roe:'26%',div:'¥350',guidance:'HBM積層需要でダイシング急増',latestQ:'Q3受注過去最高・HBM用途急拡大',irLink:'https://www.disco.co.jp/jp/ir/'},
   strength:'半導体ウェーハをチップに切断するダイシングと、ウェーハを薄くするグラインダで70%以上独占。HBMの3D積層で必須となるTSV（貫通電極）工程にも不可欠。高精度な切断技術は30年かけて培った独自のもの。',
   risk:'HBM需要の変動で受注が変動。中国向け装置への規制リスク。',
   highlights:['ダイシング世界1位（70%）','HBM TSV工程に不可欠','グラインダも高シェア'],
  },
  {id:'advantest',layer:2,sub:'後工程装置',name:'アドバンテスト',en:'Advantest Corporation',ticker:'6857.T',country:'JP',
   product:'SoCテスタ（AI GPU向け）・HBMテスタ',share:90,shareLabel:'AI GPU向けSoCテスタ（事実上独占）',
   featured:true,gnt:true,
   revenue:'過去最高更新（FY2025）',mcap:'≈¥12兆規模',stock24:'+約40%（直近1年）',perf:'up',
   ir:{per:'45x',pbr:'16x',roe:'34%',div:'¥100',guidance:'Rubin/HBM4世代でテスト需要が一段と拡大',latestQ:'高水準の受注継続・生産能力を倍増中（高い営業利益率を維持）',irLink:'https://www.advantest.com/investors/'},
   strength:'NVIDIA H100/B200/Rubin系GPU全てとSK hynix HBM（高水準）のテストをほぼ独占。AI GPUはテスト難易度・時間がH100→B200で2〜3倍に増加し需要が非線形に拡大。Installed Base（稼働台数）増でストック収益も積み上がる。',
   risk:'NVIDIA依存度が高い。AIメモリ・GPU需要の反転局面で受注急減リスク。高バリュエーション。',
   outlook:'Rubin/HBM4移行でテスト時間がさらに増加。生産能力を倍増中で、極めて高い営業利益率を維持している。',
   highlights:['AIテスタ事実上独占（SoC/HBM）','テスト時間がH100→B200→Rubinで非線形増','高い営業利益率を維持'],
  },
  {id:'asmint',layer:2,sub:'プロセス装置',name:'ASM International',ticker:'ASM.AS',country:'NL',
   product:'ALD（原子層堆積）装置',share:55,shareLabel:'ALD装置（世界1位）',
   highlights:['ALD世界1位（55%）','3D NAND・High-k誘電体に必須','微細化加速で需要増'],
  },
  {id:'nikon',layer:2,sub:'リソグラフィ',name:'ニコン',country:'JP',
   product:'ArF液浸DUV露光装置',share:6,shareLabel:'DUV露光装置',
   highlights:['DUV露光装置（6%）','2028年に新型ArF機を発表予定'],
  },
  {id:'synopsys',layer:2,sub:'EDA',name:'Synopsys',ticker:'SNPS',country:'US',
   product:'EDAツール（論理合成・RTL検証）',share:32,shareLabel:'EDA市場シェア（世界1位）',
   revenue:'$6.1B（FY2024）',mcap:'≈$90B',stock24:'+14%',
   ir:{per:'52x',pbr:'12x',roe:'23%',div:'—',guidance:'Ansys買収でTAM大幅拡大',latestQ:'Q4 EDA+AI設計ツールで増収',irLink:'https://ir.synopsys.com/'},
   strength:'EDA市場トップ。2025年にAnsysを$35Bで買収完了しチップ設計〜物理シミュレーションを統合。Generative AIによる設計自動化（AI EDA）ツールを展開。台湾・日本・韓国でのAI半導体設計需要増に直結。',
   highlights:['EDA世界1位（32%）','Ansys $35B買収完了（2025）','AI EDA（生成AI設計自動化）展開'],
  },
  {id:'cadence',layer:2,sub:'EDA',name:'Cadence',ticker:'CDNS',country:'US',
   product:'EDAツール（物理設計・混載信号検証）',share:30,shareLabel:'EDA市場シェア（世界2位）',
   highlights:['EDA世界2位（30%）','AI最適化EDAを積極展開'],
  },
  {id:'siemenseda',layer:2,sub:'EDA',name:'Siemens EDA',country:'DE',
   product:'EDAツール（PCB・システム設計）',share:13,shareLabel:'EDA市場シェア（世界3位）',
   highlights:['EDA世界3位（13%）','PCB/システム設計に強み'],
  },
  {id:'teradyne',layer:2,sub:'後工程装置',name:'Teradyne',ticker:'TER',country:'US',
   product:'半導体テスタ（メモリ・SoC）',share:35,shareLabel:'テスタ市場シェア（アドバンテスト競合）',
   highlights:['テスタ世界2位','メモリ・ロジックテスタで競合'],
  },
  // ─── GNT追加（Layer2） ───
  {id:'screen',layer:2,sub:'プロセス装置',name:'SCREEN Holdings',en:'SCREEN Holdings Co.',ticker:'7735.T',country:'JP',
   product:'ウェーハ洗浄装置・塗布現像装置',share:60,shareLabel:'ウェーハ洗浄装置（世界1位・60%）',
   gnt:true,
   ir:{per:'18x',pbr:'2.4x',roe:'13.2%',div:'¥190',guidance:'AI向け洗浄装置需要急増',latestQ:'Q3受注過去最高・2nm工程向け急拡大',irLink:'https://www.screen.co.jp/ir/index.html'},
   strength:'半導体ウェーハ洗浄装置で世界60%独占（1位）。枚葉式洗浄装置「SU-3300」はTSMC・Samsung・インテル全ての先端ファブに採用。2nm以降では洗浄工程数が増加し1チップあたりの装置需要が倍増。ディスプレイ用印刷装置でも高シェア。',
   risk:'洗浄装置はTELとの競合もあり。中国向け規制品目に一部含まれる可能性。',
   outlook:'2nm世代でウェーハ洗浄工程数が増加。先進パッケージ（CoWoS/HBM）の積層工程にも洗浄装置が必要。Rapidus千歳ファブ向け主要サプライヤー候補。',
   highlights:['洗浄装置世界1位（60%）','TSMC/Samsung全ファブ採用','2nm工程で需要非線形増'],
  },
  {id:'kokusai',layer:2,sub:'プロセス装置',name:'国際電気',en:'Kokusai Electric',ticker:'6525.T',country:'JP',
   product:'バッチ熱処理装置（縦型炉・CVD）',share:70,shareLabel:'バッチ熱処理装置（世界1位・70%）',
   gnt:true,
   ir:{per:'25x',pbr:'4.1x',roe:'16.5%',div:'¥46',guidance:'AI・EV向け熱処理装置急増',latestQ:'IPO後急成長・3D NAND向け受注増',irLink:'https://www.kokusai-electric.co.jp/ir/'},
   strength:'縦型バッチ熱処理炉で世界70%独占。3D NAND・DRAM・ロジック半導体の製造で不可欠な熱酸化・成膜工程を担う。旧日立国際電気の半導体装置事業がKKR傘下を経て2023年東証上場。Applied Materials・Lamとは異なる「バッチ処理」に特化した独自市場で無競合に近い。',
   risk:'バッチ式からALD/枚葉式への移行で一部市場が縮小する可能性。顧客集中リスク。',
   outlook:'3D NAND積層増（100層→200層以上）で熱処理回数が増加。EV向けSiCパワー半導体の熱処理需要も拡大。',
   highlights:['バッチ熱処理世界1位（70%）','3D NAND/DRAMに必須','KKR傘下から2023年東証上場'],
  },
  {id:'jeol',layer:2,sub:'プロセス装置',name:'日本電子（JEOL）',en:'JEOL Ltd.',ticker:'6951.T',country:'JP',
   product:'電子ビーム描画装置・電子顕微鏡（SEM/TEM）',share:40,shareLabel:'電子ビーム描画装置（世界1位・40%）',
   gnt:true,
   ir:{per:'22x',pbr:'2.1x',roe:'9.8%',div:'¥50',guidance:'EB描画装置・分析装置で増収',latestQ:'電子ビーム描画装置受注増・研究機器も堅調',irLink:'https://www.jeol.co.jp/ir/'},
   strength:'電子ビーム（EB）リソグラフィ装置で世界40%独占。次世代マスク描画・ダイレクト露光に使用。透過型電子顕微鏡（TEM）でも世界トップシェア。半導体研究開発から製造ラインまで分析装置で不可欠な存在。',
   risk:'Advantest・Nuflareとの競合。研究機器市場の景気感応。',
   outlook:'EUVマスク描画の精度向上でEB装置の高精度化需要が増加。量子デバイス・次世代半導体研究での需要拡大。',
   highlights:['EB描画装置世界1位（40%）','EUVマスク描画に必須','TEM電子顕微鏡でも世界トップ'],
  },

  // ─── LAYER 3: IP ───
  {id:'arm',layer:3,sub:'CPU IPコア',name:'ARM Holdings',en:'Arm Holdings plc',ticker:'ARM',country:'UK',
   product:'CPUアーキテクチャIPライセンス（ARMv8/v9）',share:45,shareLabel:'IP市場シェア',
   featured:true,
   revenue:'$4.92B（FY2026・+23%）',mcap:'≈$170B',stock24:'+約20%（直近1年）',perf:'up',
   ir:{per:'85x',pbr:'22x',roe:'26%',div:'—',guidance:'ロイヤリティ単価上昇でEPS成長加速・AGI向けCPU投入',latestQ:'FY2026通期売上$4.92B（過去最高）・Q4 $1.49B',irLink:'https://investors.arm.com/'},
   strength:'モバイルSoC設計の99%がARM採用。データセンターCPUへの侵食が拡大（15〜25%）。2025年9月Qualcomm訴訟は完全勝訴で決着。SoftBank傘下。自社設計のAGI（AIデータセンターCPU）も投入し垂直展開を加速。',
   risk:'RISC-V台頭（中国の国家戦略ISA化）。ライセンス料モデルへの批判と代替圧力。',
   outlook:'AI推論チップ向けARMベース設計が急増。AWS Graviton・Google Axion・Microsoft CobaltなどHyperscalerのARMサーバーCPUが急拡大。データセンターでのx86侵食が続く。',
   highlights:['モバイルSoC設計99%採用','データセンターCPUへ侵食拡大','FY2026売上$4.92B（過去最高）'],
  },
  {id:'synopsysip',layer:3,sub:'DesignIP',name:'Synopsys DesignWare',country:'US',
   product:'Interface IP・SRAM・PCI-E等のIPコア',share:25,shareLabel:'IP市場シェア（世界2位）',
   highlights:['DesignWare IP世界2位（25%）','Interface IP・メモリIPに強み'],
  },
  {id:'cadenceip',layer:3,sub:'DesignIP',name:'Cadence IP',country:'US',
   product:'Tensilica DSP・EthIP等',share:12,shareLabel:'IP市場シェア',
   highlights:['Tensilica AI DSPIPで強み','無線/有線IF IPに特化'],
  },

  // ─── LAYER 4: Fabless ───
  {id:'nvidia',layer:4,sub:'AI / HPC',name:'NVIDIA',ticker:'NVDA',country:'US',
   product:'AI GPU・データセンター向けアクセラレータ',share:80,shareLabel:'AIアクセラレータ（世界シェア）',
   featured:true,
   revenue:'$215.9B（FY2026・+65%）',mcap:'≈$5.0T（世界首位）',stock24:'+約45%（直近1年）',perf:'up',
   ir:{per:'34x',pbr:'30x',roe:'90%',div:'$0.04',guidance:'FY2027もDC需要拡大・Rubin立ち上げへ',latestQ:'FY26通期DC売上$193.7B（過去最高）・Q1 FY27売上$81.6B',irLink:'https://investor.nvidia.com/'},
   strength:'AIアクセラレータで80〜90%独占。CUDAエコシステムの壁が最大の競争優位。FY2026データセンター売上$193.7B（過去最高）。2026年に世界初の$5兆ドル時価総額に到達し世界最大の企業に。Blackwell（B200/GB200/GB300）の大型発注が続き、次世代Vera Rubinへ移行中。',
   risk:'中国輸出規制（H/B/Bシリーズの順次規制）。ハイパースケーラのカスタムASIC（Broadcom等）が推論シェアを侵食。AI設備投資の循環反転リスク。',
   outlook:'Vera Rubinプラットフォームが2026年後半（H2 FY2027）に立ち上がり性能が再び大幅向上。データセンター支出は年$500B超へ拡大。CUDAエコシステムの切り替えコストはむしろ上昇。',
   highlights:['$5兆ドル時価総額・世界首位','AIアクセラレータ80〜90%独占','FY2026 DC売上$193.7B（過去最高）'],
  },
  {id:'broadcom',layer:4,sub:'ASIC / ネットワーク',name:'Broadcom',ticker:'AVGO',country:'US',
   product:'カスタムASIC（XPU）・ネットワークチップ',share:12,shareLabel:'ファブレスTOP10シェア',
   revenue:'≈$60B（FY2025）',mcap:'≈$1.5兆ドル規模',stock24:'+約50%（直近1年）',perf:'up',
   ir:{per:'34x',pbr:'18x',roe:'53%',div:'$2.36',guidance:'AI向けXPU/ネットワークが牽引しFY2026も大幅増収',latestQ:'AI半導体売上が高成長継続・カスタムXPU受注拡大',irLink:'https://investors.broadcom.com/'},
   strength:'Google・Meta・Apple・OpenAI向けカスタムASIC（XPU）で急成長。OpenAIとの$10B規模ASIC契約を締結。AI推論フェーズでNVIDIA依存を分散したい大手クラウドの受け皿として時価総額$1兆ドルを大きく超える規模に成長。Ethernetネットワーキング（Tomahawk）でも高シェア。',
   highlights:['AI XPUで急成長・時価総額$1兆ドル超','OpenAI $10B規模XPU契約','Google/Meta/Apple/OpenAI全顧客化'],
  },
  {id:'qualcomm',layer:4,sub:'モバイル',name:'Qualcomm',ticker:'QCOM',country:'US',
   product:'スマートフォンSoC（Snapdragon）',share:21,shareLabel:'スマホSoC世界シェア',
   strength:'Android高端スマホのSoC首位。Snapdragon X Eliteでエッジ AI/PCへ展開。ARMとの訴訟完全勝訴（2025.09）でOryonコアのPC事業が制約なしに継続。',
   highlights:['スマホSoC 21%','Snapdragon X EliteでPC展開中','ARM訴訟完全勝訴（2025.09）'],
  },
  {id:'amd',layer:4,sub:'CPU / GPU',name:'AMD',ticker:'AMD',country:'US',
   product:'CPU（EPYC）・GPU（Instinct MI系）',share:10,shareLabel:'ファブレスTOP10シェア',
   stock24:'−11%',perf:'dn',
   strength:'サーバーCPU（EPYC）でIntelから27%を奪取。MI300/MI325XでAIアクセラレータ市場に参入。IntelからデータセンターCPU2位の地位を奪った。',
   highlights:['サーバーCPU 27%（Intel抜き2位）','AI GPU MI300X で挑戦中','TSMC 3nmで製造'],
  },
  {id:'mediatek',layer:4,sub:'モバイル',name:'MediaTek',ticker:'2454.TW',country:'TW',
   product:'スマートフォンSoC・Wi-Fi/BTチップ',share:34,shareLabel:'スマホSoC（世界1位）',
   strength:'5Gスマホ全体でQualcommを抜き世界1位（34%）。コスト競争力が高い。Dimensity AIチップでエッジAI SoCへの展開を加速。',
   highlights:['スマホSoC世界1位（34%）','5G全体でQualcomm超え','エッジAI SoCへ展開'],
  },
  {id:'apple',layer:4,sub:'カスタム',name:'Apple Silicon',country:'US',
   product:'A-series（iPhone）・M-series（Mac）',share:100,shareLabel:'iPhone用SoC自社設計率',
   strength:'iPhone全量をARMベースで自社設計、TSMC 3nm級で独占製造。PC向けM5シリーズで業界最高クラスの性能電力比を実現。',
   highlights:['iPhone SoC自社設計100%','TSMC最大顧客級','M5でPC AI性能トップ'],
  },
  {id:'hisilicon',layer:4,sub:'中国勢',name:'HiSilicon（ファーウェイ）',country:'CN',
   product:'Kirin（スマホ）・Ascend（AI）',share:5,shareLabel:'中国AI市場シェア（推計）',
   strength:'Ascend 910B/910CでNVIDIA代替を狙う中国AI加速器。Kirin 9000Sは規制前DUV機でSMIC 7nmにて製造。中国AI市場での存在感が急増。',
   highlights:['Ascend 910B/C：NVIDIAの中国代替','規制前DUV機で7nm実現','中国AI市場に影響力'],
  },

  // ─── LAYER 5: Foundry ───
  {id:'tsmc',layer:5,sub:'ファウンドリ',name:'TSMC',en:'Taiwan Semiconductor Manufacturing',ticker:'2330.TW',country:'TW',
   product:'先端ロジック半導体受託製造（N2/3nm主力）',share:70,shareLabel:'ファウンドリ世界シェア',
   featured:true,
   revenue:'$122.4B（2025・+34%）',mcap:'≈$2.2T',stock24:'+約90%（直近1年）',perf:'up',
   ir:{per:'24x',pbr:'8x',roe:'34%',div:'NT$16',guidance:'N2ランプ・CoWoS拡張で2026年も高成長',latestQ:'N2量産2025年Q4に始動・AI需要で受注堅調',irLink:'https://investor.tsmc.com/'},
   strength:'先端ノード（≤3nm）で90%超独占。CoWoSパッケージングも独占的地位。NVIDIA・Apple・AMD・QualcommのすべてがTSMC依存。CapEx $52〜56B/年を投じ圧倒的技術リードを維持。N2（2nm）量産を2025年Q4に開始し2026年に本格ランプ、NVIDIA最大顧客（売上比率で首位級）に。',
   risk:'台湾有事リスク（代替なし）。CapEx規模の大きさが財務負担。',
   outlook:'N2ランプが2026年に加速、N2P/A16量産が2026年後半、N14（2027）とロードマップ充実。Arizona（複数ファブ）・日本熊本JASM・ドイツドレスデンへ分散投資継続。',
   highlights:['ファウンドリ70%超独占・≤3nm 90%超','N2（2nm）量産2025年Q4始動→2026加速','2025売上$122.4B（+34%）'],
  },
  {id:'samsungfoundry',layer:5,sub:'ファウンドリ',name:'Samsung Foundry',country:'KR',
   product:'先端ロジック受託製造（GAA/2nm）',share:7,shareLabel:'ファウンドリ世界シェア',
   strength:'世界初の2nm GAAモバイルチップ「Exynos 2600」を発表（2025.12）。2nm GAAでTeslaや中国勢から大型受注を獲得。歩留まり改善で量産体制を整備中。',
   risk:'Exynos 2600の本格量産は立ち上げ途上。先端ロジックでTSMCとの差は依然大きい。',
   highlights:['ファウンドリ世界2位（7%）','2nm GAA「Exynos 2600」発表（2025.12）','Tesla・中国勢から2nm受注'],
  },
  {id:'smic',layer:5,sub:'ファウンドリ',name:'SMIC',country:'CN',
   product:'成熟ノード〜7nm（DUVのみ）',share:5,shareLabel:'ファウンドリ世界シェア',
   strength:'中国最大のファウンドリ。Huawei Kirin 9000S/9020を7nm（N+2）で製造（規制前のASML DUV機を使用）。成熟ノードで急速に生産能力を拡大中。',
   risk:'EUV導入禁止で5nm以降の商用量産が困難。歩留まりが商用水準に未達。',
   highlights:['中国最大ファウンドリ（5%）','7nm限界（EUVなし）','成熟ノードで急拡大中'],
  },
  {id:'umc',layer:5,sub:'ファウンドリ',name:'UMC',country:'TW',
   product:'成熟ノード（22nm〜）受託製造',share:4,shareLabel:'ファウンドリ世界シェア',
   highlights:['ファウンドリ世界3位（4%）','成熟ノード特化','GFとの合併観測'],
  },
  {id:'gf',layer:5,sub:'ファウンドリ',name:'GlobalFoundries',ticker:'GFS',country:'US',
   product:'RF/FD-SOI・防衛向けチップ受託製造',share:4,shareLabel:'ファウンドリ世界シェア',
   highlights:['ファウンドリ世界4位（3.8%）','RF・FD-SOI・防衛向けに特化'],
  },
  {id:'intel',layer:5,sub:'IDM（製造）',name:'Intel Foundry',ticker:'INTC',country:'US',
   product:'CPU（IDM）・Intel Foundry（外部受託）',share:4,shareLabel:'ファウンドリ市場シェア（推計）',
   featured:true,
   revenue:'≈$53B（2025・概算）',mcap:'≈$120B規模',stock24:'+約30%（直近1年）',perf:'up',
   ir:{per:'N/A（赤字圏）',pbr:'1.3x',roe:'改善途上',div:'廃止中',guidance:'18Aランプ（Panther Lake）が本格化・14Aで外部顧客を開拓',latestQ:'18A量産がFab 52で立ち上がり歩留まり改善・外部顧客と交渉',irLink:'https://www.intc.com/ir/'},
   strength:'18A（RibbonFET＋PowerVia裏面電源）が量産入りし、TSMC N2に先行。Panther Lake／Clearwater Forestを牽引する。2025年に米政府が約10%出資、CHIPS法補助も。Lip-Bu Tan CEOの下でファウンドリを分離。外部顧客の本命は次世代14A（決定はH2 2026〜2027）。',
   risk:'Foundry部門の営業損失が継続。18Aの歩留まり改善は途上で大規模リストラも継続。外部顧客の本格獲得は14A（2027前後）が勝負どころ。',
   outlook:'2026年は「実行の年」、本格的な収益反転は2027年が分岐点。Panther Lakeの量産立ち上げと14Aでの外部顧客獲得が成否を分ける。',
   highlights:['18A量産入り・TSMC N2に先行','Panther Lake／Clearwater Forestを牽引','米政府が約10%出資・14Aで外部開拓'],
  },
  {id:'rapidus',layer:5,sub:'IDM（製造）',name:'Rapidus（ラピダス）',country:'JP',
   product:'2nm先端ロジック（国産ファウンドリ）',share:0,shareLabel:'2027年量産目標',
   featured:true,
   strength:'日本政府補助¥2.6兆＋黄金株保有。IBM 2nm技術移転。北海道千歳IIM-1で2025年4月に試作ライン稼働、7月にGAAトランジスタの動作を確認（設計通りの電気特性を達成）。2026年春には後工程（先端パッケージ）の試作ラインを開設予定。Tenstorrent（RISC-V AI）・PFN（MN-Core）の2nm製造を受注済み。',
   risk:'量産実績ゼロ。2027年量産目標への懐疑論。コスト競争力の確立が課題。追加資金調達が必要。',
   outlook:'2026年は試作ラインの安定化と顧客の設計参画を進め、2027年の本格量産を目指す。NEDOがFY2026の計画・予算を承認済み。Rapidus成功は日本の半導体主権回復の象徴。',
   highlights:['政府補助¥2.6兆＋α','2025年4月試作稼働・7月GAA動作確認','2027年量産目標・Tenstorrent/PFN受注'],
  },

  // ─── LAYER 5: Memory IDM ───
  {id:'skhynix',layer:5,sub:'メモリIDM',name:'SK hynix',ticker:'000660.KS',country:'KR',
   product:'DRAM・HBM（断トツ首位）・HBM4',share:62,shareLabel:'HBM世界シェア（断トツ1位）',
   featured:true,
   revenue:'$44.2B（2024）→過去最高（2025）',mcap:'≈$1.0兆ドル超（2026年突破）',stock24:'+約250%（2026年初来）',perf:'up',
   ir:{per:'9x',pbr:'2.6x',roe:'35%',div:'₩1,500',guidance:'HBM4独占供給でAIメモリ・スーパーサイクルを主導',latestQ:'Q1 2026売上₩52.6兆（+198%）・世界最高益のメモリ企業に',irLink:'https://www.skhynix.com/ir/'},
   strength:'HBM3E/HBM4でNVIDIA向け供給を主導（HBM 62%）。HBM4（Rubin向け）を2026年2月に量産開始。AIメモリ・スーパーサイクルで2026年に時価総額$1兆ドルを突破し、世界で最も収益性の高いメモリ企業に。Cheongju新工場$12.9B投資（2028年稼働）で世界最大級のHBM組立能力を確立予定。',
   risk:'NVIDIA依存度が高い（HBMの大半がNVIDIA向け）。AIメモリ需要が反転した際の在庫・価格リスク。',
   highlights:['HBM世界1位（62%・断トツ）','HBM4量産開始（2026年2月）・Rubin向け','時価総額$1兆ドル突破（2026）'],
  },
  {id:'samsungmem',layer:5,sub:'メモリIDM',name:'Samsung Memory',country:'KR',
   product:'DRAM・NAND・HBM（HBM4で巻き返し）',share:38,shareLabel:'DRAM世界シェア（約38%）',
   strength:'NAND世界トップ級。DRAMでも約38%で首位を争う。HBMでは出遅れたが第6世代HBM4を量産しNVIDIA Vera Rubin向け採用を狙う（HBM4EもGTC 2026で公開）。Samsung Foundryと合わせた垂直統合が強み。',
   risk:'HBMはSK hynix・Micronに先行を許す（シェア約17%）。HBM4でのNVIDIA本格採用が巻き返しの条件。',
   highlights:['NAND世界トップ級','DRAM約38%で首位を争う','HBM4量産でNVIDIA採用を狙う'],
  },
  {id:'micron',layer:5,sub:'メモリIDM',name:'Micron Technology',ticker:'MU',country:'US',
   product:'DRAM・HBM（急成長）',share:21,shareLabel:'HBM世界シェア（急拡大中）',
   revenue:'$37.4B（FY2025・過去最高）',mcap:'≈$250B規模',stock24:'+約150%（直近1年）',perf:'up',
   ir:{per:'12x',pbr:'4x',roe:'28%',div:'$0.46',guidance:'メモリ・スーパーサイクルで売上・粗利率とも過去最高',latestQ:'FY Q2 2026売上$23.9B（過去最高）・HBM急拡大',irLink:'https://investors.micron.com/'},
   strength:'HBM3E/HBM4でNVIDIA Blackwell/Rubin向けに採用。HBMシェアが急拡大し21%でSamsungを逆転（2位）。FY2025は過去最高売上$37.4B。広島に$9.6B HBMファブを建設（日本政府補助¥5,360億）。',
   highlights:['HBM急拡大（21%・Samsung超え）','FY2025売上$37.4B（過去最高）','広島$9.6Bファブ・政府補助¥5,360億'],
  },
  {id:'kioxia',layer:5,sub:'メモリIDM',name:'キオクシア（Kioxia）',en:'Kioxia Holdings',ticker:'6600.T',country:'JP',
   product:'3D NAND（BiCS FLASH）',share:14,shareLabel:'NAND世界シェア（3位）',
   featured:true,
   revenue:'≈¥2兆（FY2025・過去最高）',mcap:'≈¥10兆規模（上場来 約13倍）',stock24:'上場来 約13倍（2024.12〜）',perf:'up',
   ir:{per:'20x',pbr:'3.6x',roe:'18%',div:'¥30',guidance:'NANDスーパーサイクルで価格・数量とも拡大',latestQ:'NAND価格が歴史的高騰・2026年の生産能力は実質完売',irLink:'https://www.kioxia-holdings.com/ja-jp/ir/'},
   strength:'2024年12月東証プライム上場。NANDシェア世界3位（14%）。AIメモリ・スーパーサイクルでNAND価格が歴史的に高騰し、株価は上場来約13倍に急騰、日本有数の時価総額に成長。2026年の生産能力は実質完売。四日市・北上工場でBiCS NAND最先端を生産。',
   highlights:['上場来 約13倍（AIメモリ急騰）','NAND世界3位（14%）・2026年完売','日本有数の時価総額に成長'],
  },

  // ─── LAYER 6: OSAT/Backend ───
  {id:'ase',layer:6,sub:'OSAT',name:'ASE Group',country:'TW',
   product:'半導体パッケージング・テスト（OSAT）',share:38,shareLabel:'OSAT世界シェア（1位）',
   strength:'OSAT世界最大。売上$18.5B。TSMCのCoWoS容量不足を補う外注先として急成長。CoWoP（ASE独自の先進パッケージ）を展開しTSMCに対抗。',
   highlights:['OSAT世界1位（38%）','TSMCのCoWoS外注先として急成長','CoWoP（先進パッケージ）展開'],
  },
  {id:'amkor',layer:6,sub:'OSAT',name:'Amkor Technology',country:'US',
   product:'パッケージング・テスト（OSAT）',share:20,shareLabel:'OSAT世界シェア（2位）',
   strength:'OSAT世界2位。TSMCのCoWoS外注先候補。Arizona拠点でApple向けが主要顧客。Intel Ohio工場近隣にも展開。',
   highlights:['OSAT世界2位（20%）','TSMCのCoWoS外注先候補','Appleが主要顧客'],
  },
  {id:'jcet',layer:6,sub:'OSAT',name:'JCET（長電科技）',country:'CN',
   product:'パッケージング（OSAT）',share:15,shareLabel:'OSAT世界シェア',
   highlights:['中国最大OSAT（15%）','2024年に2桁成長でシェア拡大'],
  },
  {id:'ibiden',layer:6,sub:'基板',name:'イビデン（Ibiden）',en:'Ibiden Co.',ticker:'4062.T',country:'JP',
   product:'FC-BGA基板（AI GPU向け）',share:40,shareLabel:'AI GPU向けFC-BGA基板（世界1位）',
   featured:true,gnt:true,
   ir:{per:'18x',pbr:'3.2x',roe:'17.8%',div:'¥60',guidance:'AI GPU基板増産・CoWoS需要急増',latestQ:'Q3売上+28%・NVIDIA前払い発注継続',irLink:'https://www.ibiden.co.jp/ir/'},
   strength:'AI GPU（NVIDIA/AMD/Intel）向けFC-BGA基板で世界70〜85%独占。NVIDIA・Intel・AMDから前払い発注を受けるほど需要が逼迫。味の素ファインテクノのABFフィルムを100%使用する実質垂直統合。CoWoS基板でもTSMCのパートナー。',
   risk:'ABFフィルム供給に依存（味の素FT独占）。設備投資の大きさが財務負担。AI需要の急落リスク。',
   outlook:'NVIDIA Blackwell/Rubin世代でGPUあたりの基板枚数増。CoWoS先進パッケージ向け基板需要も拡大。2025〜2027年にCapEx継続。',
   highlights:['AI GPU基板70〜85%独占','NVIDIA/Intel前払い発注','代替品実質ゼロ'],
  },
  {id:'shinko',layer:6,sub:'基板',name:'新光電気工業',country:'JP',
   product:'FC-BGA基板（Intel向け主力）',share:20,shareLabel:'FC-BGA基板（世界2位）',
   highlights:['FC-BGA基板世界2位（20%）','Intelのサプライヤーアワード受賞','Ibiden+新光で基板市場を支配'],
  },
  {id:'unimicron',layer:6,sub:'基板',name:'Unimicron',country:'TW',
   product:'ABF基板・HDI基板',share:10,shareLabel:'ABF基板世界シェア',
   highlights:['ABF基板世界3位（10%）','台湾系基板メーカー'],
  },
  // ─── GNT追加（Layer6） ───
  {id:'lintec',layer:6,sub:'後工程材料',name:'リンテック',en:'Lintec Corporation',ticker:'7966.T',country:'JP',
   product:'ダイシングテープ・保護フィルム・プロセステープ',share:65,shareLabel:'ダイシングテープ（世界1位・65%）',
   gnt:true,
   ir:{per:'16x',pbr:'1.6x',roe:'10.2%',div:'¥80',guidance:'半導体テープ需要急増',latestQ:'半導体テープ事業好調・HBM積層向け増加',irLink:'https://www.lintec.co.jp/ir/'},
   strength:'ウェーハダイシング（切断）工程で使用するダイシングテープで世界65%独占。ウェーハを固定する粘着テープという地味な存在だが代替品ゼロ。HBMの積層枚数増加（HBM4:16層）でテープ消費量が増加。紙・フィルム・粘着材料の総合メーカーとして安定した事業基盤。',
   risk:'日東電工・古河電工との競合。半導体サイクルで需要変動。',
   outlook:'HBM4積層増でダイシング工程が増加。先進パッケージ向け特殊テープの開発加速。',
   highlights:['ダイシングテープ世界1位（65%）','HBM積層増でテープ需要増','紙・フィルム事業と半導体の異色複合'],
  },

  // ─── LAYER 7: End Products ───
  {id:'nvidiadc',layer:7,sub:'AI / DC',name:'NVIDIA（DC）',country:'US',
   product:'AIデータセンター（B200/GB300/Rubin系）',share:85,shareLabel:'AIアクセラレータ市場シェア',
   highlights:['AIデータセンター事実上独占','FY2026データセンター売上$193.7B（過去最高）'],
  },
  {id:'google',layer:7,sub:'AI / DC',name:'Google（TPU）',country:'US',
   product:'TPU（Tensor Processing Unit）自社AI加速器',share:5,shareLabel:'ハイパースケーラASIC',
   highlights:['TPU v5でNVIDIA代替を推進','GeminiモデルはTPUで学習'],
  },
  {id:'aws',layer:7,sub:'AI / DC',name:'AWS（Trainium）',country:'US',
   product:'AWS Trainium2・Inferentia自社チップ',share:3,shareLabel:'ハイパースケーラASIC',
   highlights:['Trainium2：NVIDIA H100対比コスト50%削減主張','Broadcomと共同開発'],
  },
  {id:'appledev',layer:7,sub:'モバイル',name:'Apple（iPhone）',country:'US',
   product:'iPhone（A19 Pro：TSMC 3nm級）',share:23,shareLabel:'スマホSoC市場（自社設計）',
   highlights:['A19 Pro：TSMC 3nm級','iPhoneシリーズ年10億台超'],
  },
  {id:'samsung_phone',layer:7,sub:'モバイル',name:'Samsung（Exynos）',country:'KR',
   product:'Galaxy向けExynos SoC',share:8,shareLabel:'スマホSoC市場',
   highlights:['Exynos2500で巻き返し狙い','Samsung Foundry自社製造'],
  },
  {id:'infineon',layer:7,sub:'車載',name:'Infineon Technologies',ticker:'IFX.DE',country:'DE',
   product:'車載MCU・SiCパワー半導体・MOSFET',share:13,shareLabel:'車載半導体（世界1位）',
   featured:true,
   strength:'車載半導体市場シェア世界1位（13%）。SiCパワー半導体でも15%（3位）。EV化・ADAS拡大の最大受益者。Marvell車載Ether事業を$2.5Bで買収（2024）で車載ネットワーク強化。',
   highlights:['車載半導体世界1位（13%）','SiCパワーでも主力','EV化・ADAS拡大の受益者'],
  },
  {id:'nxp',layer:7,sub:'車載',name:'NXP Semiconductors',country:'NL',
   product:'車載MCU・CAN/LIN通信・ADAS',share:10,shareLabel:'車載半導体（世界2位）',
   highlights:['車載半導体世界2位（10%）','車載ネットワーク（CAN）に強み'],
  },
  {id:'renesas',layer:7,sub:'車載',name:'ルネサスエレクトロニクス',en:'Renesas Electronics',ticker:'6723.T',country:'JP',
   product:'車載MCU・SoC',share:7,shareLabel:'車載半導体（世界3位）',
   strength:'車載MCU世界3位（7%）。Altiumを$5.9Bで買収しEDAまで垂直統合。TransphormのSiC/GaN事業も買収（2024）でパワー半導体展開。',
   highlights:['車載MCU世界3位（7%）','Altium（EDA）$5.9B買収','SiC展開へ'],
  },
  {id:'stmicro',layer:7,sub:'車載',name:'STMicroelectronics',country:'DE',
   product:'SiCパワー半導体・MCU',share:9,shareLabel:'車載半導体シェア',
   strength:'SiCパワー半導体で世界32%独占（1位）。Tesla Model 3のインバータにSiCを採用したことで一躍注目。',
   highlights:['SiCパワー世界1位（32%）','Tesla Model 3採用','車載でも9%'],
  },
  {id:'ti',layer:7,sub:'車載',name:'Texas Instruments',ticker:'TXN',country:'US',
   product:'アナログIC・組み込みプロセッサ',share:8,shareLabel:'車載・産業向けシェア',
   highlights:['アナログIC世界首位','車載・産業の安定需要','高配当の長期優良株'],
  },
];

/* ══════════════════════════════════════════
   RENDERING UTILS
══════════════════════════════════════════ */
const countryColor={JP:'#DC2626',US:'#1D4ED8',TW:'#0D9488',KR:'#7C3AED',NL:'#D97706',DE:'#059669',CN:'#B45309',UK:'#4338CA'};
const countryBg={JP:'#FEF2F2',US:'#EFF6FF',TW:'#F0FDFA',KR:'#F5F3FF',NL:'#FFFBEB',DE:'#ECFDF5',CN:'#FFF7ED',UK:'#EEF2FF'};
const layerColor=['','#F59E0B','#10B981','#3B82F6','#8B5CF6','#6366F1','#0D9488','#F97316'];

function flag(c){const f={JP:'🇯🇵',US:'🇺🇸',TW:'🇹🇼',KR:'🇰🇷',NL:'🇳🇱',DE:'🇩🇪',CN:'🇨🇳',UK:'🇬🇧'};return f[c]||''}
function perf(p){if(p==='up')return '<span class="up" style="font-size:10px">▲上昇</span>';if(p==='dn')return '<span class="dn" style="font-size:10px">▼下落</span>';return ''}

/* ─── Build Chain Map ─── */
function buildChainMap(){
  const wrap=document.getElementById('chainMap');
  if(!wrap)return;
  wrap.innerHTML='';
  const grid=document.createElement('div');
  grid.className='chain-grid';
  for(let li=1;li<=7;li++){
    const layer=LAYERS[li-1];
    const cos=COMPANIES.filter(c=>c.layer===li);
    const subs=[...new Set(cos.map(c=>c.sub))];
    const col=document.createElement('div');
    col.className='layer-col';
    const acc=document.createElement('div');
    acc.className='lc-accent';
    acc.style.background=layerColor[li];
    col.appendChild(acc);
    const hdr=document.createElement('div');
    hdr.className='lc-header';
    hdr.innerHTML=`<div class="lc-num">LAYER 0${li}</div><div class="lc-name">${layer.name}</div><div class="lc-en">${layer.en}</div>`;
    col.appendChild(hdr);
    const body=document.createElement('div');
    body.className='lc-body';
    subs.forEach(sub=>{
      const group=cos.filter(c=>c.sub===sub);
      const sg=document.createElement('div');
      sg.className='lc-subgroup';
      if(subs.length>1){const sl=document.createElement('div');sl.className='lc-sub-label';sl.textContent=sub;sg.appendChild(sl);}
      group.sort((a,b)=>(b.share||0)-(a.share||0)).forEach(co=>{
        const chip=document.createElement('div');
        chip.className='co-chip'+(co.gnt?' is-gnt':'');
        chip.style.setProperty('--country-color',countryColor[co.country]||'#1A6ED8');
        const gntStar=co.gnt?`<span style="font-size:9px;flex-shrink:0" title="GNT認定">⭐</span>`:'';
        chip.innerHTML=`<span class="flag">${flag(co.country)}</span>${gntStar}<span class="cname">${co.name}</span>${co.share?`<span class="share-num">${co.share}%</span>`:'<span class="share-num" style="font-size:9px;color:var(--t2)">詳細</span>'}`;
        const mb=document.createElement('div');mb.className='share-bar-mini';
        const mf=document.createElement('div');mf.className='share-bar-mini-fill';
        mf.style.width=`${Math.min(co.share||0,100)}%`;
        mb.appendChild(mf);chip.appendChild(mb);
        chip.onclick=()=>showDetail(co.id);
        sg.appendChild(chip);
      });
      body.appendChild(sg);
    });
    col.appendChild(body);
    grid.appendChild(col);
  }
  wrap.appendChild(grid);
}

/* ─── Build Layer Detail ─── */
function buildLayer(containerId,layerNums,cols,subFilter){
  const cont=document.getElementById(containerId);
  if(!cont)return;
  let cos=COMPANIES.filter(c=>layerNums.includes(c.layer));
  if(subFilter){const subs=Array.isArray(subFilter)?subFilter:[subFilter];cos=cos.filter(c=>subs.includes(c.sub));}
  const count=cos.length;
  const gridCols=cols||(count<=4?2:count<=9?3:4);
  const grid=document.createElement('div');
  grid.className='company-cards-grid';
  grid.style.gridTemplateColumns=`repeat(${gridCols},1fr)`;
  cos.sort((a,b)=>(b.share||0)-(a.share||0)).forEach(co=>{grid.appendChild(createCompanyCard(co));});
  cont.appendChild(grid);
}

function createCompanyCard(co){
  const cc=document.createElement('div');
  cc.className='company-card';
  const color=countryColor[co.country]||'#1668D9';
  const bg=countryBg[co.country]||'#EFF6FF';
  cc.style.setProperty('--country-color',color);
  const highlights=(co.highlights||[]).slice(0,3).map(h=>`<div class="cc-hl">${h}</div>`).join('');
  const shareSection=co.share?`<div class="cc-share-section"><div class="cc-share-label"><span>${co.shareLabel||'世界シェア'}</span><span class="cc-share-pct">${co.share}%</span></div><div class="cc-share-bar"><div class="cc-share-fill" style="width:${Math.min(co.share,100)}%;background:${color}"></div></div></div>`:'';
  const gntBadge=co.gnt?`<div class="gnt-badge">⭐ Global Niche Top</div>`:'';
  const featBadge=co.featured&&!co.gnt?`<div style="display:inline-flex;align-items:center;gap:3px;padding:2px 8px;border-radius:20px;font-size:9px;font-weight:700;background:#FEF3C7;color:#92400E;border:1px solid #F59E0B;margin-bottom:6px">★ FEATURED</div>`:'';
  const stat=(k,v,cls)=>v?`<div class="cc-stat"><span class="cc-stat-k">${k}</span><span class="cc-stat-v ${cls||''}">${v}</span></div>`:'';
  const footer=(co.revenue||co.mcap||co.stock24)?`<div class="cc-footer">${stat('売上',co.revenue)}${stat('時価総額',co.mcap)}${stat('株価騰落',co.stock24,co.perf==='up'?'up':co.perf==='dn'?'dn':'')}</div>`:'';
  cc.innerHTML=`<div class="cc-top"></div><div class="cc-body">${gntBadge}${featBadge}<div class="cc-row1"><div><div class="cc-name">${flag(co.country)} ${co.name}</div>${co.en?`<div class="cc-en">${co.en}</div>`:''}</div>${co.ticker?`<div class="cc-badge" style="color:${color};border-color:${color};background:${bg}">${co.ticker}</div>`:''}</div><div class="cc-product">${co.product||''}</div>${shareSection}<div class="cc-highlights">${highlights}</div></div>${footer}`;
  cc.onclick=()=>showDetail(co.id);
  return cc;
}

/* ─── Build Japan 4 Special ─── */
function buildJapan4(){
  const cont=document.getElementById('japan4-body');
  if(!cont)return;
  const ids=['oxide','lasertec','shinetsu','advantest'];
  const grid=document.createElement('div');
  grid.className='company-cards-grid';
  grid.style.gridTemplateColumns='repeat(2,1fr)';
  ids.forEach(id=>{const co=COMPANIES.find(c=>c.id===id);if(co)grid.appendChild(createCompanyCard(co));});
  cont.appendChild(grid);
}

/* ─── Build GNT Slide ─── */
function buildGNTSlide(){
  const cont=document.getElementById('gnt-body');
  if(!cont)return;
  const gntCos=COMPANIES.filter(c=>c.gnt);
  // GNT統計バー
  const statsWrap=document.createElement('div');
  statsWrap.style.cssText='display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px';
  const jpGnt=gntCos.filter(c=>c.country==='JP').length;
  const statItems=[
    {lbl:'GNT企業総数',val:`${gntCos.length}社`,color:'#78350F',bg:'#FEF3C7'},
    {lbl:'日本企業',val:`${jpGnt}社`,color:countryColor.JP,bg:countryBg.JP},
    {lbl:'平均世界シェア',val:`${Math.round(gntCos.reduce((s,c)=>s+(c.share||0),0)/gntCos.length)}%`,color:'#1668D9',bg:'#EFF6FF'},
    {lbl:'代替品ゼロ領域',val:`${gntCos.filter(c=>(c.share||0)>=90).length}社`,color:'#DC2626',bg:'#FEF2F2'},
  ];
  statItems.forEach(s=>{
    const b=document.createElement('div');
    b.style.cssText=`background:${s.bg};border:1px solid ${s.color}30;border-radius:8px;padding:8px 14px;min-width:120px`;
    b.innerHTML=`<div style="font-size:20px;font-weight:800;font-family:'DM Sans',sans-serif;color:${s.color}">${s.val}</div><div style="font-size:10px;color:var(--t2);margin-top:1px">${s.lbl}</div>`;
    statsWrap.appendChild(b);
  });
  cont.appendChild(statsWrap);
  // レイヤー別GNTカード一覧
  const layersWrap=document.createElement('div');
  layersWrap.className='gnt-layers-wrap';
  for(let li=1;li<=7;li++){
    const layerGnts=gntCos.filter(c=>c.layer===li);
    if(!layerGnts.length)continue;
    const section=document.createElement('div');
    section.className='gnt-layer-section';
    const hdr=document.createElement('div');
    hdr.className='gnt-layer-header';
    hdr.style.background=layerColor[li];
    hdr.innerHTML=`<span style="font-size:13px">${['','⚗️','⚙️','🧩','💻','🏭','📦','🖥️'][li]}</span><span>LAYER 0${li}：${LAYERS[li-1].name}</span><span style="margin-left:auto;font-size:9px;opacity:.85">${layerGnts.length}社</span>`;
    section.appendChild(hdr);
    const cardsRow=document.createElement('div');
    cardsRow.className='gnt-cards-row';
    layerGnts.sort((a,b)=>(b.share||0)-(a.share||0)).forEach(co=>{
      const color=countryColor[co.country]||'#1668D9';
      const card=document.createElement('div');
      card.className='gnt-mini-card';
      card.style.setProperty('--country-color',color);
      card.innerHTML=`<div style="flex-shrink:0;font-size:14px">${flag(co.country)}</div><div style="min-width:0"><div class="gnt-card-name">${co.name}</div><div class="gnt-card-share" style="color:${color}">${co.share?co.share+'%':'-'}</div><div class="gnt-card-product">${co.shareLabel||co.product||''}</div></div>`;
      card.onclick=()=>showDetail(co.id);
      cardsRow.appendChild(card);
    });
    section.appendChild(cardsRow);
    layersWrap.appendChild(section);
  }
  cont.appendChild(layersWrap);
  // インサイト
  const insight=document.createElement('div');
  insight.style.cssText='margin-top:12px;padding:10px 14px;background:linear-gradient(135deg,#FFFBEB,#FEF3C7);border-radius:8px;border:1px solid #F59E0B;font-size:10.5px;color:#92400E;line-height:1.7;flex-shrink:0';
  insight.innerHTML=`<strong>⭐ GNT構造の本質：</strong>日本企業${jpGnt}社が素材・装置の上流で「見えないボトルネック」を形成。どれか1社でも止まれば世界の半導体生産ラインが連鎖停止する。<br><span style="color:var(--blue);font-weight:600">👆 カードをクリックすると企業詳細・財務・IR情報が表示されます</span>`;
  cont.appendChild(insight);
}

/* ─── Build Stock Ranking ─── */
const STOCK_RANKING=[
  {rank:1,id:'oxide',name:'オキサイド',ticker:'6521.T',country:'JP',currRef:'¥4,500前後',tgtRef:'¥22,500',multi:5.0,horizon:'18ヶ月',moat:'DUV波長変換単結晶95%独占',catalysts:['AI検査装置需要の急増','EUV光源コンポーネント展開','KLA・日立ハイテク採用継続'],rationale:'時価総額≈¥150億という極めて小さな規模に対し、代替品ゼロの95%独占という構造的優位性が非対称リターンを生む。売上¥30億規模のため微細化進展に伴う受注増が利益に直結。AI GPU量産増で検査装置需要は構造的拡大局面にあり、小型株特有の営業レバレッジが最大の魅力。',risk:'流動性が低く機関投資家の参入が制限される。半導体サイクル感応が高い。'},
  {rank:2,id:'advantest',name:'アドバンテスト',ticker:'6857.T',country:'JP',currRef:'¥16,000前後',tgtRef:'¥28,800',multi:1.8,horizon:'18ヶ月',moat:'AI GPUテスタ事実上独占',catalysts:['Rubin世代でテスト時間3〜4倍化','HBM4テスト需要加速','生産能力5,000→10,000台倍増'],rationale:'NVIDIAのBlackwell→Rubinへの移行でテスト難易度が非線形に増加。H100→B200でテスト時間2〜3倍、Rubin→HBM4でさらに倍増が見込まれる。FY25Q1営業利益率47%という異常な収益性はそのまま拡張される構造。Installed Baseのストック収益も積み上がり中。',risk:'NVIDIA依存度70%超でAIバブル崩壊時のリスク高。高バリュエーション継続中。'},
  {rank:3,id:'lasertec',name:'レーザーテック',ticker:'6920.T',country:'JP',currRef:'¥20,000前後',tgtRef:'¥46,000',multi:2.3,horizon:'18ヶ月',moat:'EUVマスク検査装置100%独占',catalysts:['High-NA EUV普及で装置単価上昇','Rapidus千歳ファブ稼働','Samsung 2nm GAA量産開始'],rationale:'ASML EUVを1台導入するたびにレーザーテック装置も1台必要という連動構造は不変。High-NA EUV（NA=0.55）移行でマスクの複雑性が急増し、検査精度要求と単価が上昇。Rapidus国内顧客追加でリスク分散も進む。',risk:'ピーク時に比べバリュエーション調整は進行済みだが、TSMC設備投資サイクルに依存。'},
  {rank:4,id:'broadcom',name:'Broadcom',ticker:'AVGO',country:'US',currRef:'$320前後',tgtRef:'$640',multi:2.0,horizon:'18ヶ月',moat:'ハイパースケーラXPU設計独占',catalysts:['推論AI需要でカスタムXPU急成長','OpenAI $10B ASIC契約','Google/Meta/Apple全顧客化'],rationale:'AI推論フェーズ移行でカスタムASIC（XPU）の経済合理性が高まりNVIDIA依存分散が加速。Google・Meta・Apple・OpenAIという最大クラウド4社が全てBroadcom顧客。NVIDIA独占に対するヘッジとして大規模発注継続。時価総額$1Tから$2Tへの道筋が見える。',risk:'TSMCの先端製造容量確保が課題。VMwareソフト事業との統合消化が続く。'},
  {rank:5,id:'skhynix',name:'SK hynix',ticker:'000660.KS',country:'KR',currRef:'₩1,900,000前後',tgtRef:'₩2,660,000',multi:1.4,horizon:'18ヶ月',moat:'HBM世界シェア62%（断トツ1位）',catalysts:['HBM4（Rubin向け）独占的供給','AIメモリ・スーパーサイクル継続','Cheongju新工場$12.9B稼働（2028）'],rationale:'HBM3E/HBM4でNVIDIA向け供給を主導し、2026年に時価総額$1兆ドルを突破、世界で最も収益性の高いメモリ企業に。AIメモリ・スーパーサイクルでHBM供給能力の希少性がプレミアムを正当化。ただし2026年初来で大きく上昇しており、ここからの倍率は相対的に低下している。',risk:'NVIDIA依存度が高く、AI需要が反転した際の在庫・価格リスク。Samsung・Micronの追走。'},
  {rank:6,id:'arm',name:'ARM Holdings',ticker:'ARM',country:'UK',currRef:'$180前後',tgtRef:'$342',multi:1.9,horizon:'18ヶ月',moat:'モバイルSoC 99%採用・データセンターCPU侵食',catalysts:['データセンターCPUでx86シェア25%超へ','ロイヤリティ単価上昇（高価値チップ増）','Qualcomm訴訟完全勝訴で事業リスク消滅'],rationale:'AWS Graviton4・Google Axion2・Microsoft Cobalt2など大手クラウドがARMサーバーCPUを積極採用しx86依存度を引き下げ中。ARMのロイヤリティ収入はチップ価格に連動するため、高価値AI SoCの増加で平均単価（ARP）が上昇する構造。',risk:'RISC-Vの中国政策採用と国産化圧力。成長期待の高バリュエーション。'},
  {rank:7,id:'nvidia',name:'NVIDIA',ticker:'NVDA',country:'US',currRef:'$200前後',tgtRef:'$300',multi:1.5,horizon:'18ヶ月',moat:'AIアクセラレータ80〜90%独占・CUDAの壁',catalysts:['Vera Rubin（2026後半）立ち上げ','データセンター支出$500B超へ','CUDAエコシステムの拡張'],rationale:'$5兆ドル時価総額・世界首位に到達後も、Vera Rubin世代でGPU性能が再び大幅向上。CUDAのスイッチングコストはむしろ高まり離脱が困難な状況が続く。FY2026データセンター売上$193.7B（過去最高）からさらなる拡大が見込まれる。',risk:'カスタムASIC（Broadcom/Marvell）が推論用途でシェア侵食。中国輸出規制の影響継続。'},
  {rank:8,id:'kioxia',name:'キオクシア',ticker:'6600.T',country:'JP',currRef:'¥18,000前後',tgtRef:'¥27,000',multi:1.5,horizon:'18ヶ月',moat:'NAND世界3位・BiCS FLASH技術',catalysts:['AIメモリ・スーパーサイクルでNAND急騰','2026年の生産能力は実質完売','AI向けeSSD需要の構造的拡大'],rationale:'2024年12月上場後、AIメモリ・スーパーサイクルでNAND価格が歴史的に高騰し、株価は上場来約13倍に。2026年の生産能力は実質完売で、AI向けストレージ需要が構造的に拡大している。',risk:'NAND価格サイクルの反転リスク。急騰後の高バリュエーション。'},
  {rank:9,id:'tsmc',name:'TSMC',ticker:'TSM',country:'TW',currRef:'$430前後（ADR）',tgtRef:'$600',multi:1.4,horizon:'18ヶ月',moat:'先端ロジック≤3nm 90%超独占',catalysts:['N2量産2025年Q4始動→2026加速','Arizona複数ファブ稼働','CoWoS生産能力拡大継続'],rationale:'AI半導体需要の最終受益者として最も確実な成長軌道上にある。N2量産・CoWoS拡張・地理的分散の三本柱が揃い、台湾地政学リスクのディスカウントが縮小傾向。NVIDIA最大顧客化でトップライン成長が加速。',risk:'台湾有事リスクは依然として株価のキャップ要因。CapEx負担の継続。'},
  {rank:10,id:'disco',name:'ディスコ',ticker:'6146.T',country:'JP',currRef:'¥40,000前後',tgtRef:'¥64,000',multi:1.6,horizon:'18ヶ月',moat:'ダイシング装置世界70%独占',catalysts:['HBM積層でTSV工程需要急増','CoWoS対応ダイシング好調','AIサーバー1台あたりGPU数増加'],rationale:'HBMの3D積層（HBM4は16層以上）で1チップあたりのダイシング・グラインディング工程数が増加。AIサーバー1台に搭載されるHBMの量が増えることで装置需要が非線形に拡大。',risk:'HBM需要の変動感応。高バリュエーション時期もある。'},
  {rank:11,id:'asml',name:'ASML',ticker:'ASML',country:'NL',currRef:'$780前後',tgtRef:'$1,209',multi:1.55,horizon:'18ヶ月',moat:'EUV露光装置100%独占',catalysts:['High-NA EUV（NXE:5000）普及加速','中国規制の株価影響ほぼ織り込み済み','2030年まで受注残積み上がり'],rationale:'中国向けDUV輸出規制による売上影響はほぼ株価に織り込まれた状況。High-NA EUVの量産採用（TSMC、Samsung）が進み1台800億円超の装置が出荷される。TSMCの世界3拠点展開で需要の地理的分散も実現。',risk:'中国規制の追加強化リスク。Nikon ArF新世代機による部分的競合（2028年以降）。'},
  {rank:12,id:'amat',name:'Applied Materials',ticker:'AMAT',country:'US',currRef:'$195前後',tgtRef:'$293',multi:1.5,horizon:'18ヶ月',moat:'WFE装置売上世界1位・CMP60%独占',catalysts:['ハイブリッドボンディング（HBM先進パッケージ）参入','Gate-All-Around移行で成膜装置需要増','AI需要でWFE市場$120B超へ'],rationale:'装置売上世界1位としてWFE市場全体の拡大から恩恵。BESIへの出資でハイブリッドボンディングという高成長新市場にも布石。GAA（Gate-All-Around）移行でAMATの得意とする精密成膜・エッチング需要が増加。',risk:'中国向け規制で一部装置の輸出制限。装置サイクルの影響。'},
  {rank:13,id:'micron',name:'Micron Technology',ticker:'MU',country:'US',currRef:'$220前後',tgtRef:'$330',multi:1.5,horizon:'18ヶ月',moat:'HBM急拡大（21%・Samsung超え）',catalysts:['HBM3E/HBM4をBlackwell/Rubin向け採用','広島ファブ稼働でHBM生産能力拡大','メモリ・スーパーサイクルで価格急騰'],rationale:'HBM市場でSamsungを追い抜き2位に浮上。FY2025は過去最高売上$37.4Bを記録し、メモリ・スーパーサイクルで売上・粗利率とも過去最高を更新中。広島工場が日本政府補助付きで稼働し固定費を抑制。',risk:'Samsungが品質問題を解決した場合の競争激化。メモリサイクルの反転リスク。'},
  {rank:14,id:'shinetsu',name:'信越化学工業',ticker:'4063.T',country:'JP',currRef:'¥7,000前後',tgtRef:'¥9,450',multi:1.35,horizon:'18ヶ月',moat:'Siウェーハ世界1位（30%）・EUVレジスト',catalysts:['Rapidus/JASM稼働でウェーハ需要増','EUVフォトレジスト展開拡大','PVC・半導体材料の多重独占'],rationale:'ウェーハとEUVレジストの両方を供給できる唯一の企業として構造的に安定。Rapidus・JASM（TSMC熊本）・Micron広島の稼働でウェーハ需要が拡大。高い安定性と配当魅力を持つ防衛的優良株。',risk:'ウェーハサイクルでのASP下落リスク。南海トラフ地震への工場集中リスク。'},
  {rank:15,id:'lam',name:'Lam Research',ticker:'LRCX',country:'US',currRef:'$110前後',tgtRef:'$154',multi:1.4,horizon:'18ヶ月',moat:'エッチング装置世界45%独占',catalysts:['HBM TSVエッチング需要増','3D NAND積層数増加（200層超へ）','GAA移行でエッチング工程数増加'],rationale:'HBM3→HBM4移行で積層枚数が増えTSV（シリコン貫通電極）工程のエッチング需要が増加。3D NANDの更なる高積層化（200〜300層）も同社装置が必須。WFE市場拡大と相まって安定した成長基盤。',risk:'中国向け規制で一部装置の輸出制限。装置サイクル感応。'},
];

function buildStockRanking(){
  const wrap=document.getElementById('stockTableWrap');
  if(!wrap)return;
  const table=document.createElement('table');
  table.className='stock-table';
  table.innerHTML=`<thead><tr><th style="text-align:center">順位</th><th>企業名 / ティッカー</th><th>独占領域（Moat）</th><th style="min-width:130px">期待倍率 / 目標株価</th><th style="min-width:200px">主要触媒（Catalyst）</th><th style="min-width:80px">現在株価参考</th></tr></thead>`;
  const tbody=document.createElement('tbody');
  STOCK_RANKING.forEach((s,i)=>{
    const co=COMPANIES.find(c=>c.id===s.id);
    const color=co?countryColor[co.country]:'#1668D9';
    const bg=co?countryBg[co.country]:'#EFF6FF';
    const tr=document.createElement('tr');
    tr.className='stock-row';
    tr.style.background=i%2===0?'rgba(255,255,255,.8)':'rgba(241,245,255,.6)';
    const medalClass=s.rank===1?'medal-1':s.rank===2?'medal-2':s.rank===3?'medal-3':'medal-n';
    const pctWidth=Math.min(((s.multi-1)/4)*100,100);
    const catalystHtml=s.catalysts.map(c=>`<div style="display:flex;gap:4px;align-items:flex-start;font-size:9.5px;color:var(--t1);line-height:1.4"><span style="color:var(--blue);flex-shrink:0">▸</span>${c}</div>`).join('');
    const gntMark=co&&co.gnt?`<span style="font-size:8px;margin-left:3px">⭐</span>`:'';
    tr.innerHTML=`<td style="text-align:center"><div class="stock-rank-medal ${medalClass}">${s.rank}</div></td><td><div style="font-size:12px;font-weight:700;color:var(--t0)">${flag(s.country)} ${s.name}${gntMark}</div><div style="margin-top:2px"><span class="stock-cat-chip" style="color:${color};border-color:${color};background:${bg}">${s.ticker}</span></div></td><td><div style="font-size:10px;font-weight:600;color:var(--t0);line-height:1.4">${s.moat}</div></td><td><div class="stock-multi">${s.multi.toFixed(1)}x</div><div class="stock-multi-bar"><div class="stock-multi-fill" style="width:${pctWidth}%"></div></div><div style="font-size:10px;font-weight:700;color:var(--t0);margin-top:3px">${s.tgtRef}</div><div class="stock-horizon">目標 ${s.horizon}</div></td><td>${catalystHtml}</td><td><div class="stock-curr-price">概算参考</div><div class="stock-tgt-price">${s.currRef}</div></td>`;
    tr.onclick=()=>showStockDetail(s);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  wrap.appendChild(table);
}

function showStockDetail(s){
  const co=COMPANIES.find(c=>c.id===s.id);
  if(co){showDetail(co.id);return;}
  const panel=document.getElementById('detailPanel');
  const overlay=document.getElementById('detailOverlay');
  document.getElementById('dpName').textContent=`${flag(s.country)} ${s.name}`;
  document.getElementById('dpEn').textContent=s.ticker||'';
  const body=document.getElementById('dpBody');
  body.innerHTML=`<div class="dp-section"><div class="dp-s-title">投資考察</div><div class="dp-text">${s.rationale}</div></div><div class="dp-section dp-section-risk"><div class="dp-s-title" style="color:#DC2626">リスク要因</div><div class="dp-text">${s.risk}</div></div>`;
  overlay.classList.add('show');
  panel.classList.add('open');
}

/* ─── Build Summary ─── */
function buildSummary(){
  const cont=document.getElementById('summary-body');
  if(!cont)return;
  const items=[
    {area:'EUV露光装置',company:'ASML',companyId:'asml',country:'NL',share:'100%',alt:'⛔ 代替皆無',risk:'critical'},
    {area:'先端ロジック ≤3nm',company:'TSMC',companyId:'tsmc',country:'TW',share:'90%+',alt:'⛔ 代替極小',risk:'critical'},
    {area:'CoWoS（先進パッケージ）',company:'TSMC',companyId:'tsmc',country:'TW',share:'独占的',alt:'⛔ 2027まで満杯',risk:'critical'},
    {area:'AI GPUテスタ',company:'アドバンテスト',companyId:'advantest',country:'JP',share:'≒独占',alt:'⛔ 事実上ゼロ',risk:'critical'},
    {area:'EUVマスク検査装置',company:'レーザーテック',companyId:'lasertec',country:'JP',share:'100%',alt:'⛔ 代替皆無',risk:'critical'},
    {area:'DUV波長変換単結晶',company:'オキサイド',companyId:'oxide',country:'JP',share:'95%',alt:'⛔ 代替皆無',risk:'critical'},
    {area:'ABFフィルム',company:'味の素ファインテクノ',companyId:'ajinomoto',country:'JP',share:'99%',alt:'⛔ 代替皆無',risk:'critical'},
    {area:'EUVフォトレジスト',company:'日本4社（JSR等）',companyId:'jsr',country:'JP',share:'≒100%',alt:'⛔ 代替皆無',risk:'critical'},
    {area:'超高純度フッ化水素酸',company:'ステラケミファ',companyId:'stella',country:'JP',share:'独占的',alt:'⛔ 代替皆無',risk:'critical'},
    {area:'ウェーハ洗浄装置',company:'SCREEN Holdings',companyId:'screen',country:'JP',share:'60%',alt:'⚠ TELが追走',risk:'high'},
    {area:'バッチ熱処理装置',company:'国際電気',companyId:'kokusai',country:'JP',share:'70%',alt:'⚠ 代替困難',risk:'high'},
    {area:'Siウェーハ（300mm）',company:'信越化学＋SUMCO',companyId:'shinetsu',country:'JP',share:'53%',alt:'⚠ 代替3〜6ヶ月',risk:'high'},
    {area:'HBM（AI用メモリ）',company:'SK hynix',companyId:'skhynix',country:'KR',share:'62%（3社独占）',alt:'⚠ 3社寡占',risk:'high'},
    {area:'EDA（設計ツール）',company:'Synopsys/Cadence',companyId:'synopsys',country:'US',share:'62%',alt:'⛔ 先端は皆無',risk:'critical'},
    {area:'AIアクセラレータ',company:'NVIDIA',companyId:'nvidia',country:'US',share:'80〜92%',alt:'△ ASIC代替進行中',risk:'high'},
    {area:'ダイシングテープ',company:'リンテック',companyId:'lintec',country:'JP',share:'65%',alt:'⚠ 代替困難',risk:'high'},
    {area:'2nm先端ファウンドリ（国産）',company:'Rapidus（目標）',companyId:'rapidus',country:'JP',share:'建設中',alt:'⏳ 2027年量産目標',risk:'watch'},
  ];
  const wrap=document.createElement('div');
  wrap.style.cssText='overflow-x:auto';
  const table=document.createElement('table');
  table.style.cssText='width:100%;border-collapse:separate;border-spacing:0;font-size:12px;min-width:700px';
  table.innerHTML=`<thead><tr style="background:var(--navy);color:#fff;position:sticky;top:0;z-index:2"><th style="padding:10px 14px;text-align:left;border-radius:8px 0 0 0;white-space:nowrap">ボトルネック領域</th><th style="padding:10px 14px;text-align:left;white-space:nowrap">独占企業</th><th style="padding:10px 14px;text-align:center;white-space:nowrap">国</th><th style="padding:10px 14px;text-align:center;white-space:nowrap">シェア</th><th style="padding:10px 14px;text-align:center;white-space:nowrap">危険度</th><th style="padding:10px 14px;text-align:left;border-radius:0 8px 0 0;white-space:nowrap">代替可能性</th></tr></thead>`;
  const tbody=document.createElement('tbody');
  items.forEach((item,i)=>{
    const tr=document.createElement('tr');
    tr.style.cssText=`background:${i%2===0?'var(--white)':'var(--bg)'};cursor:pointer;transition:background .15s`;
    tr.onmouseover=()=>tr.style.background='#E8F0FE';
    tr.onmouseout=()=>tr.style.background=i%2===0?'var(--white)':'var(--bg)';
    tr.onclick=()=>showDetail(item.companyId);
    const riskColor=item.risk==='critical'?'#DC2626':item.risk==='high'?'#D97706':'#6366F1';
    const riskLabel=item.risk==='critical'?'致命的':item.risk==='high'?'高リスク':'注目';
    const dotCount=item.risk==='critical'?5:item.risk==='high'?3:1;
    const dots='●'.repeat(dotCount)+'○'.repeat(5-dotCount);
    tr.innerHTML=`<td style="padding:9px 14px;border-bottom:1px solid var(--border2);font-weight:600;color:var(--t0)">${item.area}</td><td style="padding:9px 14px;border-bottom:1px solid var(--border2);color:var(--t1)">${flag(item.country)} ${item.company}</td><td style="padding:9px 14px;border-bottom:1px solid var(--border2);text-align:center"><span class="tag" style="color:${countryColor[item.country]||'#000'};border-color:${countryColor[item.country]||'#000'};background:${countryBg[item.country]||'#fff'}">${item.country}</span></td><td style="padding:9px 14px;border-bottom:1px solid var(--border2);text-align:center;font-weight:700;font-family:'DM Sans',sans-serif;color:var(--blue)">${item.share}</td><td style="padding:9px 14px;border-bottom:1px solid var(--border2);text-align:center"><div style="font-size:9px;letter-spacing:-1px;color:${riskColor}">${dots}</div><div style="font-size:9px;font-weight:700;color:${riskColor}">${riskLabel}</div></td><td style="padding:9px 14px;border-bottom:1px solid var(--border2);color:${riskColor}">${item.alt}</td>`;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  wrap.appendChild(table);
  const insight=document.createElement('div');
  insight.style.cssText='margin-top:14px;padding:12px 16px;background:linear-gradient(135deg,#EEF6FF,#E8F0FE);border-radius:10px;border:1px solid #C2D6FD;font-size:11px;color:var(--t1);line-height:1.7';
  insight.innerHTML=`<strong style="color:var(--navy)">🔍 構造的結論：</strong>上記17領域のうち9領域で「代替品ゼロ」の独占が存在する。特に日本企業は上流（素材・検査装置）で10領域を独占しており、表舞台には出ないが世界の半導体生産の生命線を握る。どれか1社でも生産停止すれば、TSMC・Samsung・Intel全ての生産ラインが数週間〜数ヶ月以内に停止する連鎖リスクがある。<br><span style="color:var(--blue);font-weight:600">👆 各行をクリックすると企業詳細・投資分析が表示されます</span>`;
  cont.appendChild(wrap);
  cont.appendChild(insight);
}

/* ══════════════════════════════════════════
   DETAIL PANEL — タブ型UI（3タブ）
══════════════════════════════════════════ */
function showDetail(id){
  const co=COMPANIES.find(c=>c.id===id);
  if(!co)return;
  const panel=document.getElementById('detailPanel');
  const overlay=document.getElementById('detailOverlay');
  const color=countryColor[co.country]||'#1668D9';
  const bg=countryBg[co.country]||'#EFF6FF';
  const layerObj=LAYERS[(co.layer||1)-1];

  document.getElementById('dpName').textContent=`${flag(co.country)} ${co.name}`;
  document.getElementById('dpEn').textContent=co.en||co.ticker||'';

  const body=document.getElementById('dpBody');
  body.innerHTML='';

  // GNTバナー
  if(co.gnt){
    const banner=document.createElement('div');
    banner.style.cssText='background:linear-gradient(135deg,#FFFBEB,#FEF3C7);border-bottom:2px solid #F59E0B;padding:7px 20px;display:flex;align-items:center;gap:8px;flex-shrink:0';
    banner.innerHTML=`<span style="font-size:16px">⭐</span><div><div style="font-size:11px;font-weight:800;color:#92400E">Global Niche Top 認定企業</div><div style="font-size:10px;color:#B45309">${co.shareLabel||''}・世界${co.share||0}%</div></div>`;
    body.appendChild(banner);
  }

  // タブバー
  const tabs=document.createElement('div');
  tabs.className='dp-tabs';
  const tabLabels=[{id:'t-overview',lbl:'📋 概要'},{id:'t-ir',lbl:'💹 財務・IR'},{id:'t-invest',lbl:'📈 投資分析'}];
  tabLabels.forEach((t,i)=>{
    const btn=document.createElement('button');
    btn.className='dp-tab'+(i===0?' active':'');
    btn.textContent=t.lbl;
    btn.onclick=()=>{
      body.querySelectorAll('.dp-tab').forEach(b=>b.classList.remove('active'));
      body.querySelectorAll('.dp-tab-pane').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      body.querySelector(`#${t.id}`).classList.add('active');
    };
    tabs.appendChild(btn);
  });
  body.appendChild(tabs);

  // ─ タブ1: 概要 ─
  const pane1=document.createElement('div');
  pane1.id='t-overview';
  pane1.className='dp-tab-pane active';

  // 位置情報
  const posEl=document.createElement('div');
  posEl.className='dp-section';
  posEl.innerHTML=`<div class="dp-s-title">サプライチェーン上の位置</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <span class="dp-layer-tag">L0${co.layer} ${layerObj?layerObj.name:''}</span>
      ${co.sub?`<span style="background:${bg};color:${color};border:1px solid ${color};border-radius:4px;padding:3px 8px;font-size:11px">${co.sub}</span>`:''}
    </div>
    ${co.ticker?`<div style="margin-top:8px;font-size:11px;color:var(--t2)">証券コード: <strong style="color:var(--t0)">${co.ticker}</strong></div>`:''}`;
  pane1.appendChild(posEl);

  // 世界シェア
  if(co.share||co.shareLabel){
    const shareEl=document.createElement('div');
    shareEl.className='dp-section';
    shareEl.innerHTML=`<div class="dp-s-title">世界シェア</div>`;
    const shareRow=document.createElement('div');
    shareRow.className='dp-share-row';
    const lbl=document.createElement('div');lbl.className='dp-share-label';
    const sp=document.createElement('span');sp.textContent=co.shareLabel||'世界シェア';
    const sv=document.createElement('span');sv.style.cssText=`font-weight:700;font-family:'DM Sans',sans-serif;color:${color}`;sv.textContent=`${co.share||0}%`;
    lbl.appendChild(sp);lbl.appendChild(sv);
    const bar=document.createElement('div');bar.className='dp-share-bar';
    const fill=document.createElement('div');fill.className='dp-share-fill';fill.style.cssText=`width:${Math.min(co.share||0,100)}%;background:${color}`;
    bar.appendChild(fill);shareRow.appendChild(lbl);shareRow.appendChild(bar);
    shareEl.appendChild(shareRow);
    pane1.appendChild(shareEl);
  }

  // ハイライト
  if(co.highlights&&co.highlights.length){
    const hlEl=document.createElement('div');
    hlEl.className='dp-section';
    hlEl.innerHTML=`<div class="dp-s-title">主な強み・特徴</div><div class="dp-highlight-list">${co.highlights.map(h=>`<div class="dp-highlight">${h}</div>`).join('')}</div>`;
    pane1.appendChild(hlEl);
  }

  // 競争優位性
  if(co.strength){
    const strEl=document.createElement('div');
    strEl.className='dp-section';
    strEl.innerHTML=`<div class="dp-s-title">競争優位性</div><div class="dp-text">${co.strength}</div>`;
    pane1.appendChild(strEl);
  }

  // リスク
  if(co.risk){
    const riskEl=document.createElement('div');
    riskEl.className='dp-section dp-section-risk';
    riskEl.innerHTML=`<div class="dp-s-title" style="color:#DC2626">リスク要因</div><div class="dp-text">${co.risk}</div>`;
    pane1.appendChild(riskEl);
  }

  // 展望
  if(co.outlook){
    const outEl=document.createElement('div');
    outEl.className='dp-section';
    outEl.style.background='#F0FDF4';
    outEl.innerHTML=`<div class="dp-s-title" style="color:#16A34A">今後の展望</div><div class="dp-text">${co.outlook}</div>`;
    pane1.appendChild(outEl);
  }

  body.appendChild(pane1);

  // ─ タブ2: 財務・IR ─
  const pane2=document.createElement('div');
  pane2.id='t-ir';
  pane2.className='dp-tab-pane';

  // 財務ハイライト
  if(co.revenue||co.mcap||co.stock24){
    const finEl=document.createElement('div');
    finEl.className='dp-section';
    finEl.innerHTML=`<div class="dp-s-title">財務ハイライト</div>
      <div class="dp-kv-grid">
        ${co.revenue?`<div class="dp-kv"><div class="dp-k">売上（直近）</div><div class="dp-v">${co.revenue}</div></div>`:''}
        ${co.mcap?`<div class="dp-kv"><div class="dp-k">時価総額（概算）</div><div class="dp-v">${co.mcap}</div></div>`:''}
        ${co.stock24?`<div class="dp-kv"><div class="dp-k">株価騰落</div><div class="dp-v ${co.perf==='up'?'up':co.perf==='dn'?'dn':''}">${co.stock24}</div></div>`:''}
      </div>`;
    pane2.appendChild(finEl);
  }

  // IR指標
  if(co.ir){
    const irEl=document.createElement('div');
    irEl.className='dp-section';
    irEl.innerHTML=`<div class="dp-s-title">主要IR指標（概算・参考値）</div>`;
    const grid=document.createElement('div');
    grid.className='ir-grid';
    const irItems=[
      {k:'PER（株価収益率）',v:co.ir.per||'—'},
      {k:'PBR（株価純資産倍率）',v:co.ir.pbr||'—'},
      {k:'ROE（自己資本利益率）',v:co.ir.roe||'—'},
      {k:'配当（年間）',v:co.ir.div||'—'},
    ];
    irItems.forEach(item=>{
      const d=document.createElement('div');
      d.className='ir-item';
      d.innerHTML=`<div class="ir-k">${item.k}</div><div class="ir-v">${item.v}</div>`;
      grid.appendChild(d);
    });
    irEl.appendChild(grid);
    // 業績ガイダンス・直近決算は文章が長いため全幅の読みやすい行で表示
    [{k:'📈 業績ガイダンス',v:co.ir.guidance},{k:'🗓 直近決算ハイライト',v:co.ir.latestQ}].forEach(item=>{
      if(!item.v)return;
      const r=document.createElement('div');
      r.className='ir-row';
      r.innerHTML=`<div class="ir-row-k">${item.k}</div><div class="ir-row-v">${item.v}</div>`;
      irEl.appendChild(r);
    });
    if(co.ir.irLink){
      const linkWrap=document.createElement('div');
      linkWrap.style.marginTop='10px';
      linkWrap.innerHTML=`<a href="${co.ir.irLink}" target="_blank" rel="noopener" class="ir-link">🔗 IR公式ページ →</a>`;
      irEl.appendChild(linkWrap);
    }
    pane2.appendChild(irEl);
    const disc=document.createElement('div');
    disc.style.cssText='padding:8px 10px;background:#FFFBEB;border-radius:6px;border:1px solid #F59E0B;font-size:9.5px;color:#92400E;line-height:1.6';
    disc.textContent='⚠ 上記指標は概算参考値です。投資判断には必ず最新の公式IR情報をご確認ください。';
    pane2.appendChild(disc);
  } else {
    const noIr=document.createElement('div');
    noIr.style.cssText='padding:24px;text-align:center;color:var(--t2);font-size:12px';
    noIr.innerHTML='<div style="font-size:28px;margin-bottom:8px">📊</div>この企業の詳細IR情報は準備中です。<br>公式IR情報は各社のウェブサイトでご確認ください。';
    pane2.appendChild(noIr);
  }

  body.appendChild(pane2);

  // ─ タブ3: 投資分析 ─
  const pane3=document.createElement('div');
  pane3.id='t-invest';
  pane3.className='dp-tab-pane';

  const rankData=STOCK_RANKING.find(s=>s.id===id);
  if(rankData){
    const medalClass=rankData.rank===1?'medal-1':rankData.rank===2?'medal-2':rankData.rank===3?'medal-3':'medal-n';
    const invEl=document.createElement('div');
    invEl.className='dp-section';
    invEl.style.cssText='background:linear-gradient(135deg,#EEF6FF,#E8F0FE);border:1px solid #C2D6FD';
    invEl.innerHTML=`<div class="dp-s-title" style="color:var(--blue)">📈 株価期待倍率ランキング</div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <div class="stock-rank-medal ${medalClass}">第${rankData.rank}位</div>
        <div>
          <div class="stock-multi" style="font-size:18px">${rankData.multi.toFixed(1)}x</div>
          <div style="font-size:10px;color:var(--t2)">目標 ${rankData.tgtRef}（${rankData.horizon}） ／ 現在参考 ${rankData.currRef}</div>
        </div>
      </div>
      <div class="dp-text" style="margin-bottom:8px">${rankData.rationale}</div>
      <div style="font-size:10px;font-weight:700;color:var(--t2);letter-spacing:.1em;margin-bottom:4px">主要触媒</div>
      ${rankData.catalysts.map(c=>`<div class="dp-highlight">${c}</div>`).join('')}
      <div style="margin-top:8px;padding:6px 8px;background:rgba(220,38,38,.06);border-radius:4px;font-size:10px;color:#B91C1C"><strong>リスク：</strong>${rankData.risk}</div>
      <div style="margin-top:6px;font-size:9px;color:var(--t2)">※本分析は教育目的であり、投資助言ではありません。</div>`;
    pane3.appendChild(invEl);
  } else {
    const moatEl=document.createElement('div');
    moatEl.className='dp-section';
    moatEl.innerHTML=`<div class="dp-s-title">競合優位性（Moat）分析</div>`;
    const items=[
      {lbl:'市場集中度',val:co.share?`世界${co.share}%`:co.shareLabel||'—',note:co.share>=90?'極めて高い（独占的）':co.share>=50?'高い':co.share>=20?'中程度':'相対的'},
      {lbl:'切り替えコスト',val:co.featured||co.gnt?'極めて高い':'中〜高',note:'長期採用・品質認証の積み上げ'},
      {lbl:'ニッチ深度',val:co.gnt?'グローバルニッチトップ':co.featured?'フィーチャード':'標準',note:'競合参入の困難さ'},
    ];
    const kvGrid=document.createElement('div');
    kvGrid.className='dp-kv-grid';
    items.forEach(item=>{
      const d=document.createElement('div');
      d.className='dp-kv';
      d.innerHTML=`<div class="dp-k">${item.lbl}</div><div class="dp-v">${item.val}</div><div style="font-size:9px;color:var(--t2)">${item.note}</div>`;
      kvGrid.appendChild(d);
    });
    moatEl.appendChild(kvGrid);
    pane3.appendChild(moatEl);
    const noRank=document.createElement('div');
    noRank.style.cssText='padding:16px;background:#F8FAFC;border-radius:8px;border:1px solid var(--border2);text-align:center;font-size:11px;color:var(--t2)';
    noRank.innerHTML='この企業はトップ15ランキング外ですが、<br>サプライチェーン上の重要な役割を担っています。';
    pane3.appendChild(noRank);
  }

  body.appendChild(pane3);

  overlay.classList.add('show');
  panel.classList.add('open');
}

function closeDetail(){
  document.getElementById('detailOverlay').classList.remove('show');
  document.getElementById('detailPanel').classList.remove('open');
}

/* ══════════════════════════════════════════
   SLIDE NAVIGATION
══════════════════════════════════════════ */
const SLIDE_TITLES=['概要・KPI','全体チェーンマップ','Layer01 原材料','Layer02 装置/EDA','Layer03/04 IP・ファブレス','Layer05 ファウンドリ','Layer05 メモリIDM','Layer06 後工程','Layer07 最終製品','日本企業4社深掘り','GNT グローバルニッチトップ','株価期待倍率ランキング','構造サマリー'];
const slides=document.querySelectorAll('.slide');
let cur=0;

function buildDots(){
  const dc=document.getElementById('dots');
  slides.forEach((_,i)=>{
    const d=document.createElement('div');
    d.className='dot'+(i===0?' active':'');
    d.onclick=()=>goTo(i);
    dc.appendChild(d);
  });
}

function goTo(n){
  if(n<0||n>=slides.length)return;
  closeDetail();
  slides[cur].classList.remove('active');
  slides[cur].classList.add('leaving');
  setTimeout(()=>slides[cur].classList.remove('leaving'),400);
  cur=n;
  slides[cur].classList.add('active');
  document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===cur));
  document.getElementById('slideLabel').textContent=`${cur+1} / ${slides.length}`;
  document.getElementById('topTitle').textContent=SLIDE_TITLES[cur]||'';
  document.getElementById('progressBar').style.width=`${((cur+1)/slides.length)*100}%`;
}

function navigate(dir){goTo(cur+dir);}

document.addEventListener('keydown',e=>{
  if(e.target.tagName==='INPUT')return;
  if(e.key==='ArrowRight'||e.key==='ArrowDown')navigate(1);
  if(e.key==='ArrowLeft'||e.key==='ArrowUp')navigate(-1);
  if(e.key==='Escape')closeDetail();
});

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
buildDots();
buildChainMap();
buildLayer('layer1-body',[1],3);
buildLayer('layer2-body',[2],3);
buildLayer('layer34-body',[3,4],3);
buildLayer('layer5f-body',[5],3,['ファウンドリ','IDM（製造）']);
buildLayer('layer5m-body',[5],4,'メモリIDM');
buildLayer('layer6-body',[6],3);
buildLayer('layer7-body',[7],4);
buildJapan4();
buildGNTSlide();
buildStockRanking();
buildSummary();
document.getElementById('progressBar').style.width=`${(1/slides.length)*100}%`;
document.getElementById('topTitle').textContent=SLIDE_TITLES[0];
