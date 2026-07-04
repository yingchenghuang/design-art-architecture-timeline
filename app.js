const START = 1400;
    const END = 2026;
    const ticks = [1400, 1500, 1600, 1700, 1800, 1900, 2000, 2026];
    const lanes = [
      {
        id: "global",
        title: "全球脈絡",
        color: "var(--teal)",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>'
      },
      {
        id: "art",
        title: "藝術",
        color: "var(--copper)",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="8" cy="8" r="2"/><circle cx="15" cy="7" r="2"/><circle cx="17" cy="14" r="2"/><path d="M12 22c-5 0-9-4-9-9s4-9 9-9c5 0 9 3 9 7 0 2-1 3-3 3h-2c-2 0-3 1-3 3 0 1 1 2 2 2 .5 0 .7.6.3 1C14.6 21.3 13.4 22 12 22Z"/></svg>'
      },
      {
        id: "design",
        title: "設計",
        color: "var(--red)",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 5h16v14H4z"/><path d="M8 5v14M4 10h16M13 14h4"/></svg>'
      },
      {
        id: "architecture",
        title: "建築與城市",
        color: "var(--blue)",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 21V8l6-3v16M10 21V3l10 5v13"/><path d="M7 11h1M7 15h1M14 11h2M14 15h2"/></svg>'
      }
    ];

    const events = [
      { id: "perspective", year: 1420, lane: "architecture", category: "architecture", title: "布魯內列斯基與線性透視", place: "佛羅倫斯", tags: ["透視", "工程", "城市"], summary: "透視法與穹頂工程讓空間成為可計算、可投射、可建造的秩序。藝術與建築不再只是技藝，也變成理解世界的幾何工具。", impact: "開啟文藝復興空間觀：繪畫、城市廣場與建築立面共享同一套比例想像。", wikiTitle: "Filippo Brunelleschi" },
      { id: "printing", year: 1450, lane: "global", category: "global", title: "活字印刷在歐洲擴散", place: "美因茲與歐洲城市", tags: ["媒體", "知識傳播"], summary: "印刷術讓圖像、書籍、建築論著與樣式範本更快流通，知識從少數手稿網絡擴張到更廣的讀者群。", impact: "設計史中的字體、排版、出版與圖像複製，都在此取得關鍵媒介基礎。", wikiTitle: "Gutenberg Bible" },
      { id: "columbus", year: 1492, lane: "global", category: "global", title: "哥倫布航行與殖民擴張", place: "大西洋世界", tags: ["殖民", "貿易", "全球交換"], summary: "歐洲遠洋航行連結美洲、非洲與亞洲，也帶來殖民暴力、物種交換與全球商品網絡。", impact: "材料、圖像、收藏與博物館制度的全球流動，都需放在不平等權力關係中理解。", wikiTitle: "Voyages of Christopher Columbus" },
      { id: "renaissance-high", year: 1508, lane: "art", category: "art", title: "盛期文藝復興高峰", place: "羅馬、佛羅倫斯、威尼斯", tags: ["人文主義", "比例", "贊助"], summary: "達文西、米開朗基羅、拉斐爾等人的作品把人體、透視、宗教敘事與古典比例推向高度整合。", impact: "形成後世學院、美術館與藝術史書寫長期引用的典範。", wikiTitle: "Sistine Chapel ceiling" },
      { id: "baroque", year: 1600, lane: "art", category: "art", title: "巴洛克的戲劇性空間", place: "羅馬、安特衛普、馬德里", tags: ["光影", "反宗教改革", "劇場性"], summary: "巴洛克藝術與建築以強烈光影、動勢與沉浸式空間召喚觀看者，將信仰、權力與情感組織成劇場。", impact: "影響教堂、宮殿、城市軸線與後來展示空間的敘事方法。", wikiTitle: "Baroque" },
      { id: "versailles", year: 1682, lane: "architecture", category: "architecture", title: "凡爾賽宮成為權力舞台", place: "法國凡爾賽", tags: ["宮廷", "軸線", "景觀"], summary: "宮殿、花園與儀式被整合成絕對王權的空間機器，建築與景觀共同編排觀看和行動。", impact: "國家形象、城市軸線、景觀設計與展示政治在此高度合流。", wikiTitle: "Palace of Versailles" },
      { id: "enlightenment", year: 1751, lane: "global", category: "global", title: "《百科全書》出版", place: "巴黎", tags: ["啟蒙", "分類", "技藝"], summary: "狄德羅與達朗貝爾主編的《百科全書》收錄工藝、機械、藝術與知識分類，呈現啟蒙時代對理性秩序的追求。", impact: "設計與工藝被納入知識系統，技術圖解成為現代設計教育的重要前史。", wikiTitle: "Encyclopedie" },
      { id: "neoclassicism", year: 1760, lane: "architecture", category: "architecture", title: "新古典主義興起", place: "歐洲與北美", tags: ["考古", "公民性", "古典"], summary: "龐貝等考古發現、啟蒙政治與公共建築需求，使古希臘羅馬形式被重新詮釋為理性與公民秩序。", impact: "博物館、法院、國會與學院建築以古典語彙建立現代公共形象。", wikiTitle: "Neoclassical architecture" },
      { id: "revolution", year: 1789, lane: "global", category: "global", title: "法國大革命", place: "法國", tags: ["革命", "公民", "公共空間"], summary: "革命改寫階級、政治象徵與公共空間想像，也改變藝術家、設計者與國家之間的關係。", impact: "紀念碑、公共圖像、宣傳與國族風格在十九世紀持續擴張。", wikiTitle: "French Revolution" },
      { id: "great-exhibition", year: 1851, lane: "design", category: "design", title: "倫敦萬國博覽會", place: "倫敦水晶宮", tags: ["工業", "展覽", "商品"], summary: "水晶宮展示工業生產、帝國商品與新材料，也讓設計品質、標準化與大眾品味成為公共辯論。", impact: "設計改革、博物館教育與國際展覽制度在此取得重要推力。", wikiTitle: "The Crystal Palace" },
      { id: "impressionism", year: 1874, lane: "art", category: "art", title: "第一屆印象派展", place: "巴黎", tags: ["現代生活", "攝影", "市場"], summary: "印象派離開學院沙龍的評審制度，以光、速度、城市休閒和現代視覺經驗挑戰傳統完成度。", impact: "藝術市場、展覽制度與前衛團體策略出現新的模型。", wikiTitle: "Impressionism" },
      { id: "arts-crafts", year: 1888, lane: "design", category: "design", title: "Arts and Crafts 展覽協會", place: "英國", tags: ["工藝", "反工業化", "社會改革"], summary: "Arts and Crafts 運動批判粗糙機械製造，主張材料誠實、手工倫理與生活美學。", impact: "影響新藝術、現代設計教育與二十世紀對工業化的反思。", wikiTitle: "Arts and Crafts movement" },
      { id: "art-nouveau", year: 1895, lane: "design", category: "design", title: "新藝術運動擴散", place: "布魯塞爾、巴黎、維也納", tags: ["曲線", "海報", "整體設計"], summary: "新藝術把植物曲線、鐵與玻璃、平面海報和室內設計整合，追求藝術進入日常生活。", impact: "平面設計、品牌圖像、建築裝飾與生活風格開始更緊密連動。", wikiTitle: "Art Nouveau" },
      { id: "cubism", year: 1907, lane: "art", category: "art", title: "立體派打碎單一視點", place: "巴黎", tags: ["現代主義", "多視點", "非洲藝術"], summary: "畢卡索、布拉克等人以多視點、拼貼與幾何分解重新組織物體，並受到非歐洲物件與殖民收藏的複雜影響。", impact: "成為抽象藝術、平面構成、字體實驗與現代設計語言的重要轉折。", wikiTitle: "Cubism" },
      { id: "ww1", year: 1914, lane: "global", category: "global", title: "第一次世界大戰", place: "歐洲與全球戰場", tags: ["戰爭", "工業化", "政治"], summary: "總體戰暴露工業現代性的暴力，也瓦解許多十九世紀秩序。前衛藝術轉向反戰、機械、碎片與新社會想像。", impact: "達達、構成主義、Bauhaus 等實驗都與戰後重建和制度危機密切相關。", wikiTitle: "World War I" },
      { id: "bauhaus", year: 1919, lane: "design", category: "design", title: "Bauhaus 創校", place: "德國威瑪", tags: ["設計教育", "工藝", "現代生活"], summary: "Walter Gropius 創立 Bauhaus，試圖整合藝術、工藝與技術，讓設計回應住宅、產品、平面與社會改革。", impact: "其教育模型、字體和平面觀念、家具與建築語言深刻影響全球現代設計。", wikiTitle: "Bauhaus" },
      { id: "modern-architecture", year: 1927, lane: "architecture", category: "architecture", title: "魏森霍夫住宅展", place: "斯圖加特", tags: ["住宅", "國際式", "現代主義"], summary: "Mies van der Rohe 主持的住宅展匯集多位現代建築師，展示白牆、平屋頂、開放平面與標準化住宅理想。", impact: "成為國際式建築與現代住宅論述的重要節點。", wikiTitle: "Weissenhof Estate" },
      { id: "moma-style", year: 1932, lane: "architecture", category: "architecture", title: "國際式建築展", place: "紐約 MoMA", tags: ["展覽", "現代建築", "全球傳播"], summary: "MoMA 展覽與出版將歐洲現代建築包裝成「International Style」，強調體量、規則性與避免裝飾。", impact: "現代建築透過博物館、出版與教育制度在全球被命名和傳播。", wikiTitle: "International Style (architecture)" },
      { id: "ww2", year: 1939, lane: "global", category: "global", title: "第二次世界大戰", place: "全球", tags: ["戰爭", "流亡", "重建"], summary: "戰爭、流亡與工業動員重塑藝術家與建築師的移動路徑，戰後重建則推動住宅、規劃與國際制度。", impact: "歐洲前衛移入美國，現代主義也成為戰後重建與冷戰文化競爭的一部分。", wikiTitle: "World War II" },
      { id: "un", year: 1945, lane: "global", category: "global", title: "聯合國成立", place: "舊金山、紐約", tags: ["國際秩序", "戰後", "文化政策"], summary: "戰後國際組織試圖建立新的和平與合作框架，文化遺產、教育與城市重建逐漸成為全球議題。", impact: "現代建築、公共藝術、展覽與文化外交進入新的制度環境。", wikiTitle: "United Nations" },
      { id: "abstract-expressionism", year: 1949, lane: "art", category: "art", title: "抽象表現主義崛起", place: "紐約", tags: ["冷戰", "抽象", "行動繪畫"], summary: "大型畫布、身體動作與抽象語言使紐約成為戰後藝術中心之一，也與冷戰文化政治交織。", impact: "改變美術館展示尺度與藝術市場重心。", wikiTitle: "Abstract expressionism" },
      { id: "brasilia", year: 1960, lane: "architecture", category: "architecture", title: "巴西利亞啟用", place: "巴西", tags: ["新首都", "規劃", "現代主義"], summary: "Lucio Costa 與 Oscar Niemeyer 的新首都計畫以現代主義形式表達國家未來想像。", impact: "展示現代城市規劃的雄心，也引發對尺度、社會隔離與日常生活的批評。", wikiTitle: "Brasilia" },
      { id: "pop-art", year: 1962, lane: "art", category: "art", title: "普普藝術擴散", place: "倫敦、紐約", tags: ["消費文化", "大眾媒體", "圖像"], summary: "普普藝術把廣告、漫畫、商品包裝與明星圖像帶入藝術，消解高低文化邊界。", impact: "品牌、媒體影像與藝術市場的關係變得更加直接。", wikiTitle: "Pop art" },
      { id: "tokyo-olympics", year: 1964, lane: "design", category: "design", title: "東京奧運視覺系統", place: "東京", tags: ["標誌", "資訊設計", "國際活動"], summary: "東京奧運以標誌、色彩、攝影和象形符號建立清楚的國際活動識別系統。", impact: "大型活動視覺識別、導視與跨語言圖像設計成為現代設計典範。", wikiTitle: "1964 Summer Olympics" },
      { id: "postmodern", year: 1972, lane: "architecture", category: "architecture", title: "Pruitt-Igoe 拆除成為後現代論點", place: "聖路易", tags: ["後現代", "住宅", "批判"], summary: "公共住宅 Pruitt-Igoe 的拆除常被引用為現代主義規劃失敗的象徵，雖然其原因遠比形式問題複雜。", impact: "建築討論轉向社會政策、符號、歷史引用與使用者經驗。", wikiTitle: "Pruitt-Igoe" },
      { id: "memphis", year: 1981, lane: "design", category: "design", title: "Memphis Group 發表", place: "米蘭", tags: ["後現代設計", "色彩", "反功能主義"], summary: "Memphis 以鮮明色彩、圖案、塑料與玩笑感挑戰現代主義的功能與理性敘事。", impact: "產品、室內與平面設計更自由地使用引用、諷刺與流行文化。", wikiTitle: "Memphis Group (design)" },
      { id: "berlin-wall", year: 1989, lane: "global", category: "global", title: "柏林圍牆倒塌", place: "柏林", tags: ["冷戰結束", "全球化", "城市"], summary: "冷戰秩序瓦解，資本、媒體與人口流動加速，城市文化與建築投資進入新的全球競爭。", impact: "雙年展、明星建築師、全球城市更新與創意產業快速擴張。", wikiTitle: "Fall of the Berlin Wall" },
      { id: "web", year: 1991, lane: "design", category: "design", title: "World Wide Web 公開", place: "歐洲核子研究組織", tags: ["網路", "互動", "介面"], summary: "網頁讓設計從印刷和平面延伸到互動系統，資訊架構、可用性與螢幕字體成為核心課題。", impact: "UI/UX、服務設計與平台經濟改寫設計職能。", wikiTitle: "World Wide Web" },
      { id: "bilbao", year: 1997, lane: "architecture", category: "architecture", title: "畢爾包古根漢美術館開館", place: "西班牙畢爾包", tags: ["數位建模", "城市品牌", "博物館"], summary: "Frank Gehry 的美術館以鈦金屬曲面與數位建模聞名，也成為城市再生與文化地標經濟的代表案例。", impact: "建築、旅遊、城市品牌與文化投資形成新的互相推動模式。", wikiTitle: "Guggenheim Museum Bilbao" },
      { id: "9-11", year: 2001, lane: "global", category: "global", title: "九一一事件與安全城市", place: "紐約與全球", tags: ["安全", "公共空間", "政治"], summary: "恐攻改變全球安全政策，也影響機場、公共建築、廣場與都市監控設計。", impact: "公共空間的開放性、記憶、安檢與監控成為設計與建築的重要議題。", wikiTitle: "September 11 attacks" },
      { id: "financial-crisis", year: 2008, lane: "global", category: "global", title: "全球金融危機", place: "全球", tags: ["經濟", "城市", "不平等"], summary: "金融危機暴露全球資本與住宅市場的脆弱性，促使建築與設計界重新關注社會住宅、共享資源與韌性。", impact: "參與式設計、社會設計與城市公平討論更受重視。", wikiTitle: "2007-2008 financial crisis" },
      { id: "parametric", year: 2010, lane: "architecture", category: "architecture", title: "參數化與數位製造普及", place: "全球設計學院與事務所", tags: ["演算法", "製造", "曲面"], summary: "參數化建模、CNC、3D 列印和環境模擬進入建築與產品設計流程，形式和性能開始被同步計算。", impact: "設計者從繪製單一物件轉向設定關係、規則、材料行為和系統回饋。", wikiTitle: "Parametric design" },
      { id: "social-media", year: 2012, lane: "design", category: "design", title: "行動平台重塑視覺文化", place: "全球", tags: ["手機", "社群媒體", "介面"], summary: "智慧手機與社群平台讓影像製作、發布與觀看轉向即時、垂直、演算法排序的環境。", impact: "品牌、展覽、攝影、排版與公共溝通都被平台介面重新塑形。", wikiTitle: "Smartphone" },
      { id: "climate", year: 2015, lane: "global", category: "global", title: "巴黎氣候協定", place: "巴黎與全球", tags: ["氣候", "永續", "政策"], summary: "氣候危機成為全球治理核心議題，建築與設計必須面對碳排、材料循環、能源與環境正義。", impact: "永續不再是風格，而是從材料、供應鏈、維修到生命週期的系統問題。", wikiTitle: "Paris Agreement" },
      { id: "decolonize", year: 2017, lane: "art", category: "art", title: "去殖民美術館討論升溫", place: "全球博物館與雙年展", tags: ["去殖民", "策展", "典藏"], summary: "藝術機構面對典藏來源、代表性、勞動與殖民史，重新檢視誰被展示、誰被命名、誰被排除。", impact: "藝術史從中心敘事轉向多聲部、地方知識、返還與制度批判。", wikiTitle: "Benin Bronzes" },
      { id: "covid", year: 2020, lane: "global", category: "global", title: "COVID-19 全球大流行", place: "全球", tags: ["疫情", "遠距", "公共健康"], summary: "疫情讓遠距工作、線上展覽、公共健康、住宅彈性與城市密度成為設計和建築急迫議題。", impact: "數位參觀、混合工作、醫療空間與社區韌性重新定義日常環境。", wikiTitle: "COVID-19 pandemic" },
      { id: "ai", year: 2023, lane: "design", category: "design", title: "生成式 AI 進入創作流程", place: "全球", tags: ["人工智慧", "版權", "工具"], summary: "文字生成圖像、影片、介面與程式碼的工具快速普及，設計流程從單一作者轉向提示、篩選、編輯與治理。", impact: "創意勞動、資料授權、原創性與教育方法成為新的核心討論。", wikiTitle: "Generative artificial intelligence" },
      { id: "biennial", year: 2024, lane: "art", category: "art", title: "全球南方與原住民敘事更受重視", place: "威尼斯與國際展覽網絡", tags: ["全球南方", "身份", "策展"], summary: "近年的大型展覽愈加重視被邊緣化的地方知識、移民、原住民與跨文化創作。", impact: "藝術史教學需要從歐美中心時間線轉向互相交織的全球脈絡。", wikiTitle: "Venice Biennale" },
      { id: "carbon", year: 2026, lane: "architecture", category: "architecture", title: "低碳改造與再利用成為主流命題", place: "全球城市", tags: ["低碳", "再利用", "韌性"], summary: "面對氣候風險與建築碳排，拆除重建不再是唯一想像；既有建築更新、材料護照與循環設計成為核心策略。", impact: "建築史的當代章節從標誌性新建物，轉向維護、改造、減碳與照護城市。", wikiTitle: "Adaptive reuse" }
    ];

    const ranges = {
      all: [1400, 2026],
      renaissance: [1400, 1700],
      industrial: [1700, 1850],
      modern: [1850, 1970],
      contemporary: [1970, 2026]
    };

    const timelineGrid = document.querySelector("#timelineGrid");
    const ticksEl = document.querySelector("#ticks");
    const detailPanel = document.querySelector("#detailPanel");
    const searchInput = document.querySelector("#searchInput");
    const rangeSelect = document.querySelector("#rangeSelect");
    const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
    const emptyState = document.querySelector("#emptyState");
    const imageGrid = document.querySelector("#imageGrid");
    const imageCache = new Map();

    let activeFilter = "all";
    let activeRange = "all";
    let activeId = "bauhaus";

    const fallbackImage = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 560">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop stop-color="#062f3c"/>
            <stop offset="1" stop-color="#176265"/>
          </linearGradient>
          <pattern id="grid" width="54" height="54" patternUnits="userSpaceOnUse">
            <path d="M54 0H0v54" fill="none" stroke="rgba(244,239,228,.16)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="900" height="560" fill="url(#g)"/>
        <rect width="900" height="560" fill="url(#grid)"/>
        <circle cx="680" cy="150" r="92" fill="none" stroke="#b18a45" stroke-width="8"/>
        <path d="M120 410C250 120 430 110 780 210" fill="none" stroke="#a65332" stroke-width="8"/>
        <path d="M155 120h180v180H155zM190 120v180M155 250h180" fill="none" stroke="rgba(244,239,228,.58)" stroke-width="5"/>
      </svg>
    `)}`;

    function positionFor(year) {
      const [start, end] = ranges[activeRange];
      return ((year - start) / (end - start)) * 100;
    }

    function isInRange(event) {
      const [start, end] = ranges[activeRange];
      return event.year >= start && event.year <= end;
    }

    function matchesSearch(event) {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) return true;
      const haystack = [event.year, event.title, event.place, event.summary, event.impact, event.wikiTitle, event.tags.join(" ")].join(" ").toLowerCase();
      return haystack.includes(query);
    }

    function wikiPageUrl(title) {
      return `https://en.wikipedia.org/wiki/${encodeURIComponent(title).replace(/%20/g, "_")}`;
    }

    async function resolveImage(event) {
      if (imageCache.has(event.id)) return imageCache.get(event.id);
      const fallback = {
        src: fallbackImage,
        sourceUrl: wikiPageUrl(event.wikiTitle),
        credit: "Wikipedia / Wikimedia Commons",
        isFallback: true
      };

      try {
        const endpoint = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(event.wikiTitle)}`;
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`Image lookup failed: ${response.status}`);
        const data = await response.json();
        const src = data.originalimage?.source || data.thumbnail?.source;
        const result = src ? {
          src,
          sourceUrl: data.content_urls?.desktop?.page || wikiPageUrl(event.wikiTitle),
          credit: "Wikipedia / Wikimedia Commons",
          isFallback: false
        } : fallback;
        imageCache.set(event.id, result);
        return result;
      } catch {
        imageCache.set(event.id, fallback);
        return fallback;
      }
    }

    function matchesFilter(event) {
      return activeFilter === "all" || event.category === activeFilter;
    }

    function visibleEvents() {
      return events.filter(event => isInRange(event) && matchesFilter(event) && matchesSearch(event));
    }

    function renderTicks() {
      const [start, end] = ranges[activeRange];
      const localTicks = ticks.filter(tick => tick >= start && tick <= end);
      if (!localTicks.includes(start)) localTicks.unshift(start);
      if (!localTicks.includes(end)) localTicks.push(end);
      ticksEl.innerHTML = localTicks.map(tick => {
        const left = ((tick - start) / (end - start)) * 100;
        const label = tick === 2026 ? "目前" : tick;
        return `<div class="tick" style="left:${left}%"><span>${label}</span></div>`;
      }).join("");
    }

    function renderTimeline() {
      const visible = visibleEvents();
      const visibleIds = new Set(visible.map(event => event.id));
      emptyState.hidden = visible.length > 0;
      timelineGrid.innerHTML = lanes.map(lane => {
        const laneEvents = events.filter(event => event.lane === lane.id && isInRange(event));
        const eventHtml = laneEvents.map(event => {
          const left = positionFor(event.year);
          const hidden = !matchesFilter(event) || !matchesSearch(event);
          const selected = event.id === activeId;
          return `
            <button
              class="event ${hidden ? "is-muted" : ""}"
              style="left:${left}%; color:${lane.color}"
              type="button"
              aria-label="${event.year} ${event.title}"
              aria-selected="${selected}"
              data-id="${event.id}">
              <span class="event-label"><strong>${event.year}</strong>${event.title}</span>
            </button>
          `;
        }).join("");
        return `
          <div class="lane" data-lane="${lane.id}">
            <div class="lane-title">${lane.icon}<span>${lane.title}</span></div>
            <div class="rail" style="color:${lane.color}">${eventHtml}</div>
          </div>
        `;
      }).join("");

      if (!visibleIds.has(activeId) && visible.length) {
        activeId = visible[Math.min(2, visible.length - 1)].id;
      }
      renderDetail();
    }

    function renderDetail() {
      const event = events.find(item => item.id === activeId) || visibleEvents()[0] || events[0];
      if (!event) return;
      activeId = event.id;
      detailPanel.innerHTML = `
        <div class="detail-top">
          <div>
            <div class="detail-year">${event.year}年</div>
            <h2>${event.title}</h2>
          </div>
          <button class="icon-button" type="button" aria-label="清除選取" id="clearSelection">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="tags">${event.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
        <div class="where">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"><path d="M12 21s7-5 7-11a7 7 0 0 0-14 0c0 6 7 11 7 11Z"/><circle cx="12" cy="10" r="2"/></svg>
          <span>${event.place}</span>
        </div>
        <div class="detail-visual" role="img" aria-label="${event.title} 的歷史圖片" data-detail-image="${event.id}">
          <span class="image-loading">載入歷史圖片</span>
        </div>
        <p class="image-credit" id="detailImageCredit">圖片來源：Wikipedia / Wikimedia Commons</p>
        <p>${event.summary}</p>
        <div class="impact"><strong>關鍵影響</strong><span>${event.impact}</span></div>
        <div class="detail-actions">
          <button class="link-button" type="button" id="prevEvent">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"><path d="m15 18-6-6 6-6"/></svg>
            上一個
          </button>
          <button class="link-button" type="button" id="nextEvent">
            探索下一個
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      `;
      document.querySelectorAll(".event").forEach(node => {
        node.setAttribute("aria-selected", String(node.dataset.id === activeId));
      });
      hydrateDetailImage(event);
    }

    async function hydrateDetailImage(event) {
      const visual = detailPanel.querySelector(`[data-detail-image="${event.id}"]`);
      const credit = detailPanel.querySelector("#detailImageCredit");
      if (!visual || !credit) return;
      const image = await resolveImage(event);
      if (activeId !== event.id) return;
      visual.innerHTML = `<img src="${image.src}" alt="${event.title} 相關歷史圖片" loading="lazy">`;
      credit.innerHTML = `圖片來源：<a href="${image.sourceUrl}" target="_blank" rel="noreferrer">${image.credit}</a>${image.isFallback ? "；未取得條目縮圖時使用站內歷史底圖。" : ""}`;
    }

    function renderImageGrid() {
      if (!imageGrid) return;
      imageGrid.innerHTML = events.map(event => `
        <article class="image-card" data-image-card="${event.id}">
          <div class="image-card-visual"><span class="image-loading">載入圖片</span></div>
          <div class="image-card-body">
            <time>${event.year}年</time>
            <h3>${event.title}</h3>
            <a href="${wikiPageUrl(event.wikiTitle)}" target="_blank" rel="noreferrer">查看圖片來源</a>
          </div>
        </article>
      `).join("");

      events.forEach(async event => {
        const card = imageGrid.querySelector(`[data-image-card="${event.id}"] .image-card-visual`);
        if (!card) return;
        const image = await resolveImage(event);
        card.innerHTML = `<img src="${image.src}" alt="${event.title} 相關歷史圖片" loading="lazy">`;
      });
    }

    function moveSelection(direction) {
      const visible = visibleEvents();
      if (!visible.length) return;
      const index = visible.findIndex(event => event.id === activeId);
      const nextIndex = index === -1 ? 0 : (index + direction + visible.length) % visible.length;
      activeId = visible[nextIndex].id;
      renderTimeline();
    }

    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        filterButtons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
        renderTimeline();
      });
    });

    timelineGrid.addEventListener("click", event => {
      const button = event.target.closest(".event");
      if (!button || button.classList.contains("is-muted")) return;
      activeId = button.dataset.id;
      renderDetail();
    });

    detailPanel.addEventListener("click", event => {
      if (event.target.closest("#nextEvent")) moveSelection(1);
      if (event.target.closest("#prevEvent")) moveSelection(-1);
      if (event.target.closest("#clearSelection")) {
        activeFilter = "all";
        searchInput.value = "";
        rangeSelect.value = "all";
        activeRange = "all";
        filterButtons.forEach(item => item.setAttribute("aria-pressed", String(item.dataset.filter === "all")));
        render();
      }
    });

    searchInput.addEventListener("input", renderTimeline);
    rangeSelect.addEventListener("change", () => {
      activeRange = rangeSelect.value;
      render();
    });

    function render() {
      renderTicks();
      renderTimeline();
    }

    render();
    renderImageGrid();
