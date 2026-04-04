(() => {
  'use strict';

  const MODULES = [
    {
      key: 'm1',
      title: '模块一：编程基础与 AI 入门',
      weeks: 'Week 1-4',
      summary: '课程导论、环境配置、变量、字符串、列表。',
      entry: 'ai'
    },
    {
      key: 'm2',
      title: '模块二：数据结构与程序控制',
      weeks: 'Week 5-8',
      summary: '字典、循环、条件语句、函数封装。',
      entry: 'dict'
    },
    {
      key: 'm3',
      title: '模块三：文件操作与数据处理',
      weeks: 'Week 9-10',
      summary: '文件读写、CSV/Excel、JSON、Pandas。',
      entry: 'fileio'
    },
    {
      key: 'm4',
      title: '模块四：网络爬虫与文本分析',
      weeks: 'Week 11-14',
      summary: 'Requests、BeautifulSoup、GitHub、微博/微信采集、文本分析。',
      entry: 'requests'
    },
    {
      key: 'm5',
      title: '模块五：综合项目实践',
      weeks: 'Week 15-16',
      summary: '期末项目整合、汇报、反馈与课程总结。',
      entry: 'project'
    }
  ];

  const DATA = {
    categories: [
      { key: 'syntax', name: '基础语法与控制', color: '#8b5cf6' },
      { key: 'data', name: '数据结构与文件', color: '#0ea5e9' },
      { key: 'tool', name: '工具与平台', color: '#f59e0b' },
      { key: 'scenario', name: '新闻传播场景', color: '#10b981' }
    ],
    nodes: [
      {
        id: 'for',
        name: 'For 循环',
        category: 'syntax',
        size: 60,
        weeks: 'Week 6',
        module: 'm2',
        summary: '把重复动作组织成稳定流程，是批量任务最直接的控制结构。',
        programming: '逐页抓取、逐条清洗、逐个账号处理时，for 循环负责把相同动作稳定重复。',
        media: '它对应新闻传播任务里的翻页采集、批量处理和周期性统计。',
        code: 'for page in range(1, 6):\n    records.extend(fetch_page(page))',
        tags: ['循环', '批量', '翻页']
      },
      {
        id: 'dict',
        name: '字典 (Dict)',
        category: 'data',
        size: 56,
        weeks: 'Week 5',
        module: 'm2',
        summary: '把字段名和字段值绑定在一起，适合表示结构化记录。',
        programming: '接口返回值、表单数据和嵌套字段通常都先落到字典里。',
        media: '标题、时间、作者、点赞数这些平台字段最适合用字典表示。',
        code: 'post = {"title": "AIGC 观察", "likes": 1824}\nprint(post["likes"])',
        tags: ['键值', '字段', '结构化']
      },
      {
        id: 'list',
        name: '列表 (List)',
        category: 'data',
        size: 52,
        weeks: 'Week 4',
        module: 'm1',
        summary: '按顺序存放多条记录，是批量处理数据的常用容器。',
        programming: '多条文章、评论或关键词经常先放进列表，再继续筛选、遍历和转换。',
        media: '课堂上的标题集合、评论集合、账号集合都可以先建成列表。',
        code: 'titles = ["平台治理", "算法推荐", "AIGC"]\nfor title in titles:\n    print(title)',
        tags: ['集合', '顺序', '记录']
      },
      {
        id: 'string',
        name: '字符串操作',
        category: 'syntax',
        size: 52,
        weeks: 'Week 3',
        module: 'm1',
        summary: '控制文本的切分、替换、拼接和标准化，是文本处理的起点。',
        programming: 'strip()、replace()、split() 决定了原始文本能否顺利进入后续分析。',
        media: '标题、评论和标签经常混有空格、模板文案和噪声字符。',
        code: 'title = "  #热搜# AIGC 写作工具  "\nclean = title.strip().replace("#", "")',
        tags: ['文本', '清洗', '替换']
      },
      {
        id: 'regex',
        name: '正则表达式',
        category: 'syntax',
        size: 50,
        weeks: 'Week 14',
        module: 'm4',
        summary: '用模式匹配方式快速识别噪声文本、标签和特殊字符。',
        programming: '当普通 replace() 不够用时，正则适合批量删除 URL、话题标签和模板。',
        media: '它特别适合新闻标题清洗、评论去噪和平台采集数据的格式修复。',
        code: 'clean = re.sub(r"http\\S+|#.+?#", " ", text)',
        tags: ['模式匹配', '去噪', '标题']
      },
      {
        id: 'ifelse',
        name: 'If / Else 条件',
        category: 'syntax',
        size: 48,
        weeks: 'Week 7',
        module: 'm2',
        summary: '根据规则分流数据，让程序能做判断后再行动。',
        programming: '条件语句适合筛异常值、标高互动内容，或按规则判断情感倾向。',
        media: '在舆情和评论分析里，经常要区分正向、负向和中性反馈。',
        code: 'if score > 0:\n    label = "positive"\nelse:\n    label = "non-positive"',
        tags: ['判断', '规则', '极性']
      },
      {
        id: 'json',
        name: 'JSON 数据',
        category: 'data',
        size: 66,
        weeks: 'Week 9',
        module: 'm3',
        summary: '接口返回、网页嵌入数据和配置文件中最常见的结构化格式。',
        programming: 'JSON 适合嵌套字段表达，能和字典、列表自然互转。',
        media: '社交媒体标题、作者、转评赞、时间戳等字段通常都能映射到 JSON。',
        code: 'payload = response.json()\nprint(payload["data"]["title"])',
        tags: ['接口', '结构化', 'API']
      },
      {
        id: 'dataframe',
        name: 'Pandas DataFrame',
        category: 'data',
        size: 68,
        weeks: 'Week 10',
        module: 'm3',
        summary: '把多条记录整理成表格后，统计、筛选和聚合都会更高效。',
        programming: 'DataFrame 适合做排序、分组、时间序列聚合和可视化前的数据准备。',
        media: '无论是选题趋势还是情感分布，进入 DataFrame 后分析会清晰很多。',
        code: 'df = pd.DataFrame(records)\ndaily = df.groupby("date")["likes"].sum()',
        tags: ['表格', '统计', '聚合']
      },
      {
        id: 'crawl',
        name: '批量爬取微博 / 公众号',
        category: 'scenario',
        size: 74,
        weeks: 'Week 11-13',
        module: 'm4',
        summary: '把同一套采集逻辑应用到多页、多关键词或多账号上。',
        programming: '它依赖循环、请求和解析，把采集任务变成可持续运行的自动化流程。',
        media: '这是学生最容易理解的“程序如何直接服务业务”的例子之一。',
        code: 'for keyword in keywords:\n    results.extend(fetch_keyword(keyword))',
        tags: ['采集', '自动化', '翻页']
      },
      {
        id: 'metadata',
        name: '社交媒体元数据解析',
        category: 'scenario',
        size: 70,
        weeks: 'Week 12-13',
        module: 'm4',
        summary: '把平台返回的互动字段拆出来，转成后续分析能直接使用的指标。',
        programming: '你需要理解嵌套结构、提取字段并处理缺失值，才能把响应变成可用数据。',
        media: '点赞、转发、评论、发布时间和账号信息，都是传播分析里的核心变量。',
        code: 'metrics = {"likes": item["likes"], "shares": item["shares"]}',
        tags: ['互动量', '字段提取', '平台数据']
      },
      {
        id: 'clean',
        name: '新闻标题文本清洗',
        category: 'scenario',
        size: 68,
        weeks: 'Week 14',
        module: 'm4',
        summary: '把原始标题变成可比较、可统计、可分词的文本。',
        programming: '通常要先去模板、去噪声、统一格式，再决定是否切词和提关键词。',
        media: '标题清洗是做选题聚类、词频统计和语义可视化前不可省略的一步。',
        code: 'title = re.sub(r"\\s+", " ", title).strip()',
        tags: ['标题', '预处理', '规范化']
      },
      {
        id: 'sentiment',
        name: '受众情感词抽取',
        category: 'scenario',
        size: 66,
        weeks: 'Week 14',
        module: 'm4',
        summary: '把评论或帖子中的情绪线索提炼出来，形成可解释的判断。',
        programming: '无论是词典法、规则法还是模型法，前面都需要先做文本清洗和条件判断。',
        media: '它常用于课堂中的舆情观察、品牌反馈分析和事件传播评估。',
        code: 'if any(word in text for word in negative_words):\n    label = "negative"',
        tags: ['情感', '评论', '反馈']
      },
      {
        id: 'trend',
        name: '选题趋势监测',
        category: 'scenario',
        size: 64,
        weeks: 'Week 14-16',
        module: 'm5',
        summary: '从多天、多账号或多主题数据里提取时间上的变化信号。',
        programming: '它依赖表格化数据、时间分组和指标聚合，才能看出热度变化。',
        media: '这是把编程能力翻译成编辑部决策支持的典型课堂案例。',
        code: 'trend = df.groupby("day")["comments"].mean().reset_index()',
        tags: ['趋势', '时间序列', '选题']
      },
      {
        id: 'ai',
        name: 'AI 辅助编程',
        category: 'tool',
        size: 62,
        weeks: 'Week 1-2',
        module: 'm1',
        summary: '课程方法论的起点：把 AI 当成学习伙伴，而不是直接代写工具。',
        programming: '它帮助学生解释报错、理解代码、生成练习思路和调试步骤，但不替代独立思考。',
        media: '在新闻传播场景里，它更像一个“技术翻译器”，帮助学生理解数据任务和代码逻辑之间的关系。',
        code: 'prompt = "解释这段代码为什么报错，并给出可验证的修复步骤"',
        tags: ['课程导论', 'Lingma', '协作']
      },
      {
        id: 'setup',
        name: '环境配置',
        category: 'tool',
        size: 52,
        weeks: 'Week 2',
        module: 'm1',
        summary: '把 Python、编辑器和依赖装好，是后续所有课程活动的起点。',
        programming: '环境一旦配置正确，学生才能稳定运行脚本、安装库和复现实验。',
        media: '它直接决定了课堂上的采集、清洗、分析流程能不能真正落地。',
        code: 'python --version\npip install pandas requests beautifulsoup4',
        tags: ['安装', '解释器', '依赖']
      },
      {
        id: 'variables',
        name: '变量与数据类型',
        category: 'syntax',
        size: 50,
        weeks: 'Week 2-3',
        module: 'm1',
        summary: '理解值、变量名和类型，是读懂任何 Python 代码的最低门槛。',
        programming: '学生先要知道字符串、整数、浮点数和布尔值是什么，后面才能读懂条件、循环和数据结构。',
        media: '在新闻数据处理中，阅读量、标题、时间和真假状态都对应不同类型。',
        code: 'title = "AI 新闻"\nviews = 1280\nis_hot = True',
        tags: ['变量', '类型', '基础语法']
      },
      {
        id: 'function',
        name: '函数封装',
        category: 'syntax',
        size: 54,
        weeks: 'Week 8',
        module: 'm2',
        summary: '把重复动作封装成可复用模块，让代码更短、更稳、更好维护。',
        programming: '请求、解析、保存和清洗一旦被写成函数，课堂项目就更容易重构和协作。',
        media: '数据新闻项目通常由多个步骤组成，函数是把流程拆开管理的关键。',
        code: 'def parse_post(item):\n    return {"title": item["title"], "likes": item["likes"]}',
        tags: ['封装', '复用', '模块化']
      },
      {
        id: 'fileio',
        name: '文件读写',
        category: 'data',
        size: 56,
        weeks: 'Week 9',
        module: 'm3',
        summary: '让结果真正落盘，方便复查、共享和二次分析。',
        programming: '数据只在内存里跑一遍不够，写入文件后才算可复现的流程。',
        media: '课程作业和项目都需要提交原始数据、清洗结果和分析输出。',
        code: 'with open("comments.txt", "w", encoding="utf-8") as f:\n    f.write(text)',
        tags: ['保存', '归档', '复现']
      },
      {
        id: 'excel',
        name: 'CSV / Excel 数据',
        category: 'data',
        size: 56,
        weeks: 'Week 10',
        module: 'm3',
        summary: '把程序处理后的结果转换成教师和学生最容易共享的表格格式。',
        programming: 'CSV / Excel 是课堂练习和项目汇报中最常见的输入输出接口。',
        media: '选题统计、账号比较和传播指标汇总经常最终落在表格里。',
        code: 'df.to_excel("report.xlsx", index=False)',
        tags: ['表格', '输出', '共享']
      },
      {
        id: 'requests',
        name: 'Requests 请求',
        category: 'tool',
        size: 58,
        weeks: 'Week 11',
        module: 'm4',
        summary: '让 Python 主动访问网页和接口，是爬虫的起点。',
        programming: 'Requests 负责发起 HTTP 请求、拿回响应，并为后续解析准备原始内容。',
        media: '在新闻网站采集和社交媒体数据获取中，它是最常见的入口工具。',
        code: 'response = requests.get(url, headers=headers, timeout=10)',
        tags: ['HTTP', '请求', '爬虫']
      },
      {
        id: 'bs4',
        name: 'BeautifulSoup 解析',
        category: 'tool',
        size: 56,
        weeks: 'Week 11',
        module: 'm4',
        summary: '把网页源码转换成可查询的结构，方便提取标题、链接和正文。',
        programming: 'BeautifulSoup 适合解析 HTML 标签结构，快速找到目标元素。',
        media: '新闻网站列表页、详情页和栏目页的基础采集都离不开 DOM 解析。',
        code: 'soup = BeautifulSoup(html, "html.parser")\ntitles = [h.get_text(strip=True) for h in soup.select("h2")]',
        tags: ['HTML', '解析', '网页']
      },
      {
        id: 'github',
        name: 'GitHub 开源协作',
        category: 'tool',
        size: 56,
        weeks: 'Week 12',
        module: 'm4',
        summary: '课程中不只学写代码，也学会寻找、理解和复用公开项目资源。',
        programming: 'GitHub 让学生学会查 README、识别依赖、运行现成脚本，并理解开源协作方式。',
        media: '微博采集工具、数据分析模板和可视化范例往往都来自公开仓库。',
        code: 'git clone https://github.com/example/repo.git',
        tags: ['开源', '仓库', '协作']
      },
      {
        id: 'weibo',
        name: '微博数据采集',
        category: 'scenario',
        size: 72,
        weeks: 'Week 12',
        module: 'm4',
        summary: '把热点话题、评论和互动数据转成后续分析可用的记录。',
        programming: '它依赖请求、循环、字段提取和文件保存，组合起来形成一条完整流程。',
        media: '微博是课程里最适合做舆情观察和热点传播分析的平台之一。',
        code: 'for keyword in keywords:\n    results.extend(fetch_weibo(keyword))',
        tags: ['舆情', '热点', '采集']
      },
      {
        id: 'wechat',
        name: '微信公众号数据采集',
        category: 'scenario',
        size: 68,
        weeks: 'Week 13',
        module: 'm4',
        summary: '围绕主流媒体公众号构建更稳定、较正式的内容采样对象。',
        programming: '它要求学生理解栏目页结构、文章元数据和采集边界。',
        media: '适合分析主流媒体的议题设置、发文频率和栏目差异。',
        code: 'articles = parse_wechat_list(html)\nsave_json(articles, "wechat_articles.json")',
        tags: ['公众号', '主流媒体', '内容采样']
      },
      {
        id: 'segment',
        name: '中文分词与关键词',
        category: 'tool',
        size: 58,
        weeks: 'Week 14',
        module: 'm4',
        summary: '把连续中文文本拆成可统计的词语，是后续情感和主题分析的基础。',
        programming: '分词和关键词提取帮助学生把文本从句子转换成可计算的词项集合。',
        media: '这一步让新闻文本、评论文本和标题文本进入真正的数据分析阶段。',
        code: 'words = jieba.lcut(clean_text)\nkeywords = [w for w in words if len(w) > 1]',
        tags: ['分词', '关键词', '文本分析']
      },
      {
        id: 'project',
        name: '期末项目整合',
        category: 'scenario',
        size: 76,
        weeks: 'Week 15-16',
        module: 'm5',
        summary: '把采集、清洗、分析和汇报整合成一个完整的社交媒体文本数据项目。',
        programming: '它要求学生把零散知识点组合成完整流程，包括数据来源、分析方法和结果解释。',
        media: '这是课程最终的能力证明：学生不只是会写代码，而是能围绕真实传播问题组织数据工作。',
        code: 'project = {\n    "question": "某主流媒体的传播策略",\n    "data": records,\n    "analysis": report\n}',
        tags: ['综合项目', '汇报', '课程收束']
      }
    ],
    links: [
      {
        id: 'for-crawl',
        source: 'for',
        target: 'crawl',
        relation: '控制翻页与批处理',
        detail: '采集任务天然由重复动作组成，for 循环负责把页码、账号或关键词逐个送进请求流程。',
        code: 'for page in range(1, total_pages + 1):\n    crawl_page(page)'
      },
      {
        id: 'dict-json',
        source: 'dict',
        target: 'json',
        relation: '键值结构天然映射',
        detail: 'Python 字典和 JSON 的字段组织方式几乎一一对应，因此接口返回值常直接变成 dict。',
        code: 'payload = response.json()\nprint(payload["data"]["title"])'
      },
      {
        id: 'json-metadata',
        source: 'json',
        target: 'metadata',
        relation: '承载互动字段与账号信息',
        detail: '社交平台返回的标题、作者、时间戳和转评赞数据通常以 JSON 字段存在。',
        code: 'likes = payload["data"]["likes"]'
      },
      {
        id: 'dict-metadata',
        source: 'dict',
        target: 'metadata',
        relation: '按字段提取层级信息',
        detail: '先认清字典的层级，再逐级取值，是做元数据解析的基本动作。',
        code: 'author = item["user"]["screen_name"]'
      },
      {
        id: 'list-dataframe',
        source: 'list',
        target: 'dataframe',
        relation: '记录序列可直接表格化',
        detail: '把多条字典记录装进列表后，常见的下一步就是转换成 DataFrame。',
        code: 'df = pd.DataFrame(post_list)'
      },
      {
        id: 'string-clean',
        source: 'string',
        target: 'clean',
        relation: '做基础文本标准化',
        detail: '空格、模板前缀和多余符号通常先用字符串函数处理，建立后续清洗的底稿。',
        code: 'title = title.strip().replace("【快讯】", "")'
      },
      {
        id: 'regex-clean',
        source: 'regex',
        target: 'clean',
        relation: '批量过滤复杂噪声',
        detail: '正则适合一次性删掉 URL、话题标签和不规则字符。',
        code: 'title = re.sub(r"http\\S+", "", title)'
      },
      {
        id: 'string-sentiment',
        source: 'string',
        target: 'sentiment',
        relation: '先统一文本再做情感判断',
        detail: '评论文本若不先标准化，情感词典匹配很容易漏掉真正的情绪信号。',
        code: 'text = text.lower().strip()'
      },
      {
        id: 'ifelse-sentiment',
        source: 'ifelse',
        target: 'sentiment',
        relation: '按规则判定情绪极性',
        detail: '最基础的情感任务往往先从 if / else 规则开始，再逐步升级到词典或模型。',
        code: 'if "失望" in text:\n    label = "negative"'
      },
      {
        id: 'dataframe-sentiment',
        source: 'dataframe',
        target: 'sentiment',
        relation: '批量汇总情感分布',
        detail: 'DataFrame 让评论标签、时间和账号信息能一起统计，便于分析受众反馈。',
        code: 'ratio = df["label"].value_counts(normalize=True)'
      },
      {
        id: 'dataframe-trend',
        source: 'dataframe',
        target: 'trend',
        relation: '聚合时间序列指标',
        detail: '趋势监测需要先把记录做成表格，再按日期、栏目或账号分组统计。',
        code: 'daily = df.groupby("date")["views"].sum()'
      },
      {
        id: 'metadata-trend',
        source: 'metadata',
        target: 'trend',
        relation: '从互动量提炼选题信号',
        detail: '没有元数据就没有热度指标，因此趋势监测依赖前一步的字段解析质量。',
        code: 'df["engagement"] = df["likes"] + df["shares"] + df["comments"]'
      },
      {
        id: 'ai-setup',
        source: 'ai',
        target: 'setup',
        relation: '帮助解释环境报错与配置步骤',
        detail: '第 1-2 周里，AI 工具最直接的用途就是解释安装错误、给出排查路径和术语说明。',
        code: 'prompt = "解释 Python 无法识别命令的常见原因，并按顺序排查"'
      },
      {
        id: 'ai-variables',
        source: 'ai',
        target: 'variables',
        relation: '辅助理解基础语法概念',
        detail: '学生刚接触变量和类型时，AI 能帮助解释每行代码在内存和语义上做了什么。',
        code: 'prompt = "逐行解释这段变量赋值代码，不要跳步"'
      },
      {
        id: 'ai-function',
        source: 'ai',
        target: 'function',
        relation: '辅助重构重复代码',
        detail: '到函数阶段，AI 的价值从解释代码转向帮学生识别重复逻辑并给出更好的封装建议。',
        code: 'prompt = "找出这段代码里可提取成函数的重复部分"'
      },
      {
        id: 'ai-project',
        source: 'ai',
        target: 'project',
        relation: '辅助项目设计与调试',
        detail: '在期末项目中，AI 可用于调试、结构建议和报告润色，但不应替代问题意识与方法判断。',
        code: 'prompt = "检查这个项目流程是否缺少数据清洗或可视化步骤"'
      },
      {
        id: 'setup-requests',
        source: 'setup',
        target: 'requests',
        relation: '依赖安装后才能发起请求',
        detail: '学生只有先装好环境和第三方库，才能进入爬虫和数据采集阶段。',
        code: 'pip install requests'
      },
      {
        id: 'variables-string',
        source: 'variables',
        target: 'string',
        relation: '文本变量是最早接触的对象类型',
        detail: '字符串操作建立在变量和类型理解之上，是从抽象语法进入真实文本处理的第一步。',
        code: 'title = "新闻标题"\nprint(title.lower())'
      },
      {
        id: 'list-for',
        source: 'list',
        target: 'for',
        relation: '循环遍历记录集合',
        detail: '列表一旦出现，多数操作就会与 for 循环绑定，形成批量处理逻辑。',
        code: 'for post in posts:\n    print(post["title"])'
      },
      {
        id: 'function-fileio',
        source: 'function',
        target: 'fileio',
        relation: '把保存逻辑封装成稳定步骤',
        detail: '一旦保存流程封装成函数，采集脚本和分析脚本都能重复调用，减少出错。',
        code: 'def save_json(records, path):\n    ...'
      },
      {
        id: 'function-requests',
        source: 'function',
        target: 'requests',
        relation: '把请求逻辑封装成可复用模块',
        detail: '请求头、超时和重试策略适合被封成函数，降低后续脚本的复杂度。',
        code: 'def fetch(url):\n    return requests.get(url, headers=headers, timeout=10)'
      },
      {
        id: 'fileio-json',
        source: 'fileio',
        target: 'json',
        relation: '把结构化数据落盘保存',
        detail: 'JSON 是课程里最自然的中间结果格式，适合保存原始采集记录。',
        code: 'json.dump(records, f, ensure_ascii=False, indent=2)'
      },
      {
        id: 'fileio-excel',
        source: 'fileio',
        target: 'excel',
        relation: '把分析结果转成可共享表格',
        detail: '分析后的结果常常需要交给老师或同学查看，CSV / Excel 是最常见的交付形式。',
        code: 'df.to_csv("result.csv", index=False)'
      },
      {
        id: 'excel-dataframe',
        source: 'excel',
        target: 'dataframe',
        relation: '表格数据进入 Pandas 继续处理',
        detail: 'CSV / Excel 是 Pandas 的常见输入来源，也是分析结果的常见输出目标。',
        code: 'df = pd.read_excel("report.xlsx")'
      },
      {
        id: 'requests-bs4',
        source: 'requests',
        target: 'bs4',
        relation: '先请求，再解析 HTML',
        detail: '爬虫的基础链路通常是 Requests 获取网页源码，再交给 BeautifulSoup 解析。',
        code: 'html = requests.get(url).text\nsoup = BeautifulSoup(html, "html.parser")'
      },
      {
        id: 'bs4-clean',
        source: 'bs4',
        target: 'clean',
        relation: '提取标题后进入文本清洗',
        detail: '从网页里拿到原始标题后，下一步通常就是去模板、去空格和统一格式。',
        code: 'titles = [node.get_text(strip=True) for node in soup.select("h2")]'
      },
      {
        id: 'github-crawl',
        source: 'github',
        target: 'crawl',
        relation: '通过开源仓库获取采集工具',
        detail: '课程中的微博和公众号采集常常借助公开项目，学生需要学会判断 README、依赖和运行方式。',
        code: 'git clone https://github.com/example/weibo-crawler.git'
      },
      {
        id: 'crawl-weibo',
        source: 'crawl',
        target: 'weibo',
        relation: '通用采集流程在微博场景落地',
        detail: '微博采集是批量采集逻辑最典型的课堂场景之一。',
        code: 'results.extend(fetch_weibo(keyword))'
      },
      {
        id: 'crawl-wechat',
        source: 'crawl',
        target: 'wechat',
        relation: '通用采集流程在公众号场景落地',
        detail: '公众号采集让学生看到相同抓取逻辑如何迁移到不同平台。',
        code: 'articles = crawl_wechat(account_name)'
      },
      {
        id: 'weibo-metadata',
        source: 'weibo',
        target: 'metadata',
        relation: '采集结果需要进一步字段化',
        detail: '微博帖子一旦采集回来，下一步通常就是拆出点赞、评论、时间等核心指标。',
        code: 'metrics = {"likes": item["attitudes_count"], "comments": item["comments_count"]}'
      },
      {
        id: 'wechat-metadata',
        source: 'wechat',
        target: 'metadata',
        relation: '公众号文章也需要元数据整理',
        detail: '标题、发布时间、栏目和链接等字段都需要结构化后才能分析。',
        code: 'article = {"title": title, "date": pub_date, "url": link}'
      },
      {
        id: 'clean-segment',
        source: 'clean',
        target: 'segment',
        relation: '清洗后进入分词和关键词提取',
        detail: '如果标题和评论里还带着模板噪声，分词结果会被严重污染，所以清洗先于分词。',
        code: 'words = jieba.lcut(clean_text)'
      },
      {
        id: 'segment-sentiment',
        source: 'segment',
        target: 'sentiment',
        relation: '把文本变成可计算词项',
        detail: '分词和关键词提取让情感分析从“读句子”变成“统计词项与情绪线索”。',
        code: 'tokens = jieba.lcut(text)\nscore = sum(token in pos_words for token in tokens)'
      },
      {
        id: 'weibo-project',
        source: 'weibo',
        target: 'project',
        relation: '微博数据常成为期末项目样本',
        detail: '热点话题和评论数据是课程期末项目最常见的数据来源之一。',
        code: 'project["data_source"] = "weibo"'
      },
      {
        id: 'wechat-project',
        source: 'wechat',
        target: 'project',
        relation: '公众号比较也常成为期末项目主题',
        detail: '主流媒体公众号的内容差异、发文频率和栏目结构非常适合做课程项目。',
        code: 'project["data_source"] = "wechat"'
      },
      {
        id: 'trend-project',
        source: 'trend',
        target: 'project',
        relation: '趋势监测常成为项目核心分析',
        detail: '很多期末项目都会把“某主题在一段时间内如何变化”作为主要研究问题。',
        code: 'report["trend"] = trend_df'
      },
      {
        id: 'sentiment-project',
        source: 'sentiment',
        target: 'project',
        relation: '情感分析常成为项目核心结果',
        detail: '项目展示时，学生往往需要给出受众态度的分布、变化与解释。',
        code: 'report["sentiment"] = sentiment_ratio'
      }
    ]
  };

  const els = {
    navbar: document.getElementById('navbar'),
    hamburger: document.getElementById('hamburger'),
    navLinks: document.getElementById('nav-links'),
    themeToggle: document.getElementById('themeToggle'),
    themeIcon: document.getElementById('themeIcon'),
    chart: document.getElementById('echarts-graph'),
    overlay: document.getElementById('graphOverlay'),
    detail: document.getElementById('detailPanel'),
    search: document.getElementById('nodeSearch'),
    filters: document.getElementById('categoryFilters'),
    modules: document.getElementById('moduleTabs'),
    weeks: document.getElementById('weekTabs'),
    status: document.getElementById('graphStatus'),
    reset: document.getElementById('resetGraph')
  };

  const state = {
    filter: 'all',
    module: 'all',
    week: 'all',
    search: '',
    nodeId: null,
    edgeId: null
  };

  const categoryMap = new Map(DATA.categories.map((item, index) => [item.key, { ...item, index }]));
  const moduleMap = new Map(MODULES.map(item => [item.key, item]));
  const nodeMap = new Map(DATA.nodes.map(item => [item.id, item]));
  const edgeMap = new Map(DATA.links.map(item => [item.id, item]));
  const adjacency = new Map(DATA.nodes.map(item => [item.id, new Set()]));
  const weekMap = new Map();

  DATA.links.forEach(link => {
    adjacency.get(link.source).add(link.target);
    adjacency.get(link.target).add(link.source);
  });

  DATA.nodes.forEach(node => {
    weekMap.set(node.id, parseWeeks(node.weeks));
  });

  let chart = echarts.init(els.chart);

  const escapeHtml = value => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  const rgba = (hex, alpha) => {
    const clean = hex.replace('#', '');
    const full = clean.length === 3 ? clean.split('').map(ch => ch + ch).join('') : clean;
    const num = parseInt(full, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const themeName = () => document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

  const palette = () => {
    const light = themeName() === 'light';
    return {
      light,
      text: light ? '#1a2332' : '#e0eaf0',
      muted: light ? '#4a5e72' : '#8a9fb5',
      faint: light ? '#6a7e92' : '#5a7088',
      edge: light ? '#94a3b8' : '#4b6478',
      edgeDim: light ? 'rgba(148,163,184,0.18)' : 'rgba(75,100,120,0.16)',
      accent: light ? '#d97706' : '#f59e0b',
      tipBg: light ? 'rgba(255,255,255,0.96)' : 'rgba(10,17,24,0.96)',
      tipBorder: light ? '#d0d8e2' : '#264050'
    };
  };

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    els.themeIcon.textContent = theme === 'light' ? '☀️' : '🌙';
    try {
      localStorage.setItem('bp-theme', theme);
    } catch (error) {}
  }

  function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem('bp-theme');
    } catch (error) {}

    if (saved) {
      setTheme(saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    } else {
      setTheme('dark');
    }

    els.themeToggle.addEventListener('click', () => {
      setTheme(themeName() === 'light' ? 'dark' : 'light');
      render();
    });
  }

  function initNav() {
    const sync = () => els.navbar.classList.toggle('scrolled', window.scrollY > 40);
    sync();
    window.addEventListener('scroll', sync);

    els.hamburger.addEventListener('click', () => {
      const open = els.hamburger.classList.toggle('open');
      els.navLinks.classList.toggle('open');
      els.hamburger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    els.navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        els.hamburger.classList.remove('open');
        els.navLinks.classList.remove('open');
        els.hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && els.navLinks.classList.contains('open')) {
        els.hamburger.classList.remove('open');
        els.navLinks.classList.remove('open');
        els.hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        els.hamburger.focus();
      }
    });
  }

  function parseWeeks(label) {
    const match = String(label || '').match(/Week\s*(\d+)(?:\s*-\s*(\d+))?/i);
    if (!match) return [];
    const start = Number(match[1]);
    const end = Number(match[2] || match[1]);
    const weeks = [];
    for (let week = start; week <= end; week += 1) {
      weeks.push(week);
    }
    return weeks;
  }

  function matchesSeed(node) {
    const categoryOk = state.filter === 'all' || node.category === state.filter;
    const moduleOk = state.module === 'all' || node.module === state.module;
    const weekOk = state.week === 'all' || weekMap.get(node.id).includes(Number(state.week));
    return categoryOk && moduleOk && weekOk;
  }

  function getSeedNodes() {
    return DATA.nodes.filter(matchesSeed);
  }

  function buildScope() {
    if (state.filter === 'all' && state.module === 'all' && state.week === 'all') {
      return new Set(DATA.nodes.map(item => item.id));
    }

    const scope = new Set();
    getSeedNodes().forEach(item => {
      scope.add(item.id);
      adjacency.get(item.id).forEach(neighbor => scope.add(neighbor));
    });
    return scope;
  }

  function matches(node, term) {
    if (!term) return true;
    const module = moduleMap.get(node.module);
    const haystack = [
      node.name,
      node.summary,
      node.programming,
      node.media,
      node.weeks || '',
      module ? module.title : '',
      ...(node.tags || [])
    ].join(' ').toLowerCase();
    return haystack.includes(term);
  }

  function computeView() {
    const scope = buildScope();
    const term = state.search.trim().toLowerCase();
    let visibleIds = new Set(scope);
    const matched = new Set();

    if (term) {
      DATA.nodes.forEach(node => {
        if (scope.has(node.id) && matches(node, term)) {
          matched.add(node.id);
        }
      });

      if (matched.size) {
        visibleIds = new Set();
        matched.forEach(id => {
          visibleIds.add(id);
          adjacency.get(id).forEach(neighbor => {
            if (scope.has(neighbor)) visibleIds.add(neighbor);
          });
        });
      } else {
        visibleIds = new Set();
      }
    }

    const nodes = DATA.nodes.filter(node => visibleIds.has(node.id));
    const links = DATA.links.filter(link => visibleIds.has(link.source) && visibleIds.has(link.target));

    if (state.nodeId && !visibleIds.has(state.nodeId)) state.nodeId = null;
    if (state.edgeId && !links.some(link => link.id === state.edgeId)) state.edgeId = null;

    return { visibleIds, matched, nodes, links };
  }

  function selection(view) {
    const node = state.nodeId ? nodeMap.get(state.nodeId) : null;
    const edge = state.edgeId ? edgeMap.get(state.edgeId) : null;
    const focusNodes = new Set();
    const focusEdges = new Set();

    if (node && view.visibleIds.has(node.id)) {
      focusNodes.add(node.id);
      adjacency.get(node.id).forEach(neighbor => {
        if (view.visibleIds.has(neighbor)) focusNodes.add(neighbor);
      });
      view.links.forEach(link => {
        if (link.source === node.id || link.target === node.id) focusEdges.add(link.id);
      });
    } else if (edge) {
      focusNodes.add(edge.source);
      focusNodes.add(edge.target);
      focusEdges.add(edge.id);
    }

    return { node, edge, focusNodes, focusEdges };
  }

  function buildOption(view) {
    const ui = palette();
    const picked = selection(view);
    const hasNode = !!picked.node;
    const hasEdge = !hasNode && !!picked.edge;
    const hasSearch = !!state.search.trim();

    const nodes = view.nodes.map(node => {
      const category = categoryMap.get(node.category);
      const current = node.id === state.nodeId;
      const related = picked.focusNodes.has(node.id);
      const matched = view.matched.has(node.id);
      const dim = (hasNode || hasEdge) && !related;
      const searchDim = !hasNode && !hasEdge && hasSearch && !matched;
      const alpha = dim ? 0.18 : searchDim ? 0.32 : 1;

      return {
        id: node.id,
        name: node.name,
        category: category.index,
        symbolSize: current ? node.size + 8 : matched ? node.size + 4 : node.size,
        summary: node.summary,
        itemStyle: {
          color: rgba(category.color, alpha),
          borderColor: current ? '#f8fafc' : matched ? ui.accent : rgba(category.color, alpha),
          borderWidth: current ? 4 : matched ? 3 : 1.5,
          shadowBlur: current ? 28 : matched ? 18 : 10,
          shadowColor: dim ? 'transparent' : rgba(category.color, current ? 0.45 : 0.24)
        },
        label: {
          color: dim || searchDim ? ui.faint : ui.text,
          fontWeight: current ? 800 : matched ? 700 : 600
        }
      };
    });

    const links = view.links.map(link => {
      const current = link.id === state.edgeId;
      const related = picked.focusEdges.has(link.id);
      const dim = (hasNode || hasEdge) && !related;
      const searchHit = !hasNode && !hasEdge && hasSearch && (view.matched.has(link.source) || view.matched.has(link.target));

      return {
        id: link.id,
        source: link.source,
        target: link.target,
        relation: link.relation,
        detail: link.detail,
        code: link.code,
        lineStyle: {
          color: current ? ui.accent : related ? rgba(ui.accent, 0.84) : dim ? ui.edgeDim : searchHit ? rgba(ui.accent, 0.44) : rgba(ui.edge, 0.7),
          width: current ? 4 : related ? 3 : searchHit ? 2.5 : 2,
          opacity: 1,
          curveness: 0.16
        },
        label: {
          show: current || related,
          formatter: link.relation,
          color: ui.text,
          fontSize: 11,
          backgroundColor: ui.tipBg,
          borderColor: ui.tipBorder,
          borderWidth: 1,
          padding: [4, 8],
          borderRadius: 999
        }
      };
    });

    return {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        backgroundColor: ui.tipBg,
        borderColor: ui.tipBorder,
        borderWidth: 1,
        textStyle: { color: ui.text, fontSize: 12, lineHeight: 18 },
        formatter(params) {
          if (params.dataType === 'edge') {
            const source = nodeMap.get(params.data.source);
            const target = nodeMap.get(params.data.target);
            return `<strong>${escapeHtml(source.name)} → ${escapeHtml(target.name)}</strong><br>${escapeHtml(params.data.relation)}`;
          }
          return `<strong>${escapeHtml(params.data.name)}</strong><br>${escapeHtml(params.data.summary || '')}`;
        }
      },
      animationDuration: 280,
      series: [{
        type: 'graph',
        layout: 'force',
        roam: true,
        draggable: true,
        data: nodes,
        links,
        categories: DATA.categories.map(item => ({ name: item.name })),
        label: { show: true, position: 'right', formatter: '{b}', fontSize: 13 },
        labelLayout: { hideOverlap: true },
        edgeSymbol: ['none', 'arrow'],
        edgeSymbolSize: [0, 8],
        force: { edgeLength: 165, repulsion: hasNode ? 1180 : 980, gravity: 0.08 },
        scaleLimit: { min: 0.55, max: 2.3 },
        lineStyle: { opacity: 0.85 },
        emphasis: { focus: 'adjacency', scale: true }
      }]
    };
  }

  function relatedLinks(nodeId) {
    return DATA.links.filter(link => link.source === nodeId || link.target === nodeId).map(link => {
      const neighborId = link.source === nodeId ? link.target : link.source;
      return { link, node: nodeMap.get(neighborId) };
    });
  }

  function renderBrowsePanel(view) {
    const seeds = getSeedNodes();
    const module = state.module !== 'all' ? moduleMap.get(state.module) : null;
    const weekLabel = state.week !== 'all' ? `第 ${state.week} 周课程视图` : null;

    if (!seeds.length) {
      els.detail.innerHTML = `
        <div class="panel-kicker">浏览视图</div>
        <h2 class="panel-title">当前筛选下没有课程节点</h2>
        <p class="panel-summary">可以放宽模块或周次条件，或者直接点击“重置视图”返回全课程图谱。</p>
        <div class="panel-section">
          <button class="quick-btn" data-action="reset" type="button">重置视图</button>
        </div>
      `;
      return;
    }

    const title = module && weekLabel
      ? `${module.title} · ${weekLabel}`
      : module
        ? module.title
        : weekLabel;

    const summaryParts = [];
    if (module) summaryParts.push(`${module.weeks}：${module.summary}`);
    if (weekLabel) summaryParts.push(`当前高亮的是与第 ${state.week} 周直接相关的核心概念及其上下游依赖。`);

    els.detail.innerHTML = `
      <div class="panel-kicker">教学路径</div>
      <h2 class="panel-title">${escapeHtml(title || '当前课程视图')}</h2>
      <p class="panel-summary">${escapeHtml(summaryParts.join(' '))}</p>
      <div class="panel-metrics">
        <div class="panel-metric"><span>核心节点</span><strong>${seeds.length} 个</strong></div>
        <div class="panel-metric"><span>带上下文显示</span><strong>${view.nodes.length} 个</strong></div>
      </div>
      <div class="panel-section">
        <h3>建议先点这些节点</h3>
        <div class="panel-actions">
          ${seeds.map(node => `<button class="relation-btn" data-node-target="${node.id}" type="button"><strong>${escapeHtml(node.name)} · ${escapeHtml(node.weeks || '')}</strong><span>${escapeHtml(node.summary)}</span></button>`).join('')}
        </div>
      </div>
    `;
  }

  function renderDefault(view) {
    els.detail.innerHTML = `
      <div class="panel-kicker">课程全景</div>
      <h2 class="panel-title">16 周课程图谱入口</h2>
      <p class="panel-summary">这张图现在覆盖五个教学模块。你可以按模块进入，也可以直接点“期末项目整合”，再反推它依赖哪些基础能力。</p>
      <div class="panel-metrics">
        <div class="panel-metric"><span>当前节点数</span><strong>${view.nodes.length}</strong></div>
        <div class="panel-metric"><span>当前关系数</span><strong>${view.links.length}</strong></div>
      </div>
      <div class="panel-section">
        <h3>模块入口</h3>
        <div class="panel-actions">
          ${MODULES.map(module => `<button class="relation-btn" data-node-target="${module.entry}" type="button"><strong>${escapeHtml(module.title)} · ${escapeHtml(module.weeks)}</strong><span>${escapeHtml(module.summary)}</span></button>`).join('')}
        </div>
      </div>
      <div class="panel-section">
        <h3>建议探索路径</h3>
        <div class="panel-actions">
          <button class="relation-btn" data-node-target="project" type="button"><strong>从期末项目倒推</strong><span>先看课程最终汇聚点，再回看它连接了哪些采集、清洗和分析能力。</span></button>
          <button class="relation-btn" data-node-target="ai" type="button"><strong>从 AI 辅助编程正向展开</strong><span>适合第一周课程，用它串起环境配置、基础语法和后续项目实践。</span></button>
          <button class="relation-btn" data-node-target="weibo" type="button"><strong>从微博采集进入场景</strong><span>适合向学生展示“为什么这些基础语法会在新闻传播任务里派上用场”。</span></button>
        </div>
      </div>
    `;
  }

  function renderSearch(view) {
    const hits = DATA.nodes.filter(node => view.matched.has(node.id));
    if (!hits.length) {
      els.detail.innerHTML = `
        <div class="panel-kicker">搜索结果</div>
        <h2 class="panel-title">没有匹配概念</h2>
        <p class="panel-summary">试试“GitHub”“Pandas”“公众号”“情感”“文件”或“期末项目”。</p>
        <div class="panel-section">
          <button class="quick-btn" data-action="reset" type="button">重置视图</button>
        </div>
      `;
      return;
    }

    els.detail.innerHTML = `
      <div class="panel-kicker">搜索结果</div>
      <h2 class="panel-title">命中 ${hits.length} 个课程概念</h2>
      <p class="panel-summary">图谱已保留命中概念及其直接连接。继续点击下面的概念，可以查看它对应哪一周、哪一模块，以及它如何连接到新闻传播任务。</p>
      <div class="panel-section">
        <h3>命中列表</h3>
        <div class="panel-actions">
          ${hits.map(node => {
            const module = moduleMap.get(node.module);
            return `<button class="relation-btn" data-node-target="${node.id}" type="button"><strong>${escapeHtml(node.name)} · ${escapeHtml(node.weeks || '')}</strong><span>${escapeHtml(module ? module.title : '')}｜${escapeHtml(node.summary)}</span></button>`;
          }).join('')}
        </div>
      </div>
    `;
  }

  function renderNode(node) {
    const category = categoryMap.get(node.category);
    const module = moduleMap.get(node.module);
    const links = relatedLinks(node.id);
    els.detail.innerHTML = `
      <div class="panel-kicker" style="color:${category.color};background:${rgba(category.color, 0.12)};border-color:${rgba(category.color, 0.24)}">${escapeHtml(category.name)}</div>
      <h2 class="panel-title">${escapeHtml(node.name)}</h2>
      <p class="panel-summary">${escapeHtml(node.summary)}</p>
      <div class="panel-metrics">
        <div class="panel-metric"><span>对应周次</span><strong>${escapeHtml(node.weeks || '未标注')}</strong></div>
        <div class="panel-metric"><span>直接关联</span><strong>${links.length} 个</strong></div>
      </div>
      <div class="panel-section">
        <h3>课程位置</h3>
        <p>${escapeHtml(module ? `${module.title}（${module.weeks}）` : '课程模块未标注')}。${escapeHtml(module ? module.summary : '')}</p>
      </div>
      <div class="panel-section">
        <h3>编程里的作用</h3>
        <p>${escapeHtml(node.programming)}</p>
      </div>
      <div class="panel-section">
        <h3>传媒场景里的意义</h3>
        <p>${escapeHtml(node.media)}</p>
      </div>
      <div class="panel-section">
        <h3>关键词</h3>
        <div class="panel-tags">${node.tags.map(tag => `<span class="panel-tag">${escapeHtml(tag)}</span>`).join('')}</div>
      </div>
      <div class="panel-section">
        <h3>示例代码</h3>
        <pre class="panel-code"><code>${escapeHtml(node.code)}</code></pre>
      </div>
      <div class="panel-section">
        <h3>直接连接</h3>
        <div class="panel-actions">
          ${links.map(item => `<button class="relation-btn" data-node-target="${item.node.id}" type="button"><strong>${escapeHtml(item.node.name)}</strong><span>${escapeHtml(item.link.relation)}</span></button>`).join('')}
        </div>
      </div>
    `;
  }

  function renderEdge(edge) {
    const source = nodeMap.get(edge.source);
    const target = nodeMap.get(edge.target);
    const ui = palette();
    els.detail.innerHTML = `
      <div class="panel-kicker" style="color:${ui.accent};background:${rgba(ui.accent, 0.12)};border-color:${rgba(ui.accent, 0.24)}">关系映射</div>
      <h2 class="panel-title">${escapeHtml(source.name)} → ${escapeHtml(target.name)}</h2>
      <p class="panel-summary">${escapeHtml(edge.relation)}</p>
      <div class="panel-metrics">
        <div class="panel-metric"><span>起点周次</span><strong>${escapeHtml(source.weeks || source.name)}</strong></div>
        <div class="panel-metric"><span>终点周次</span><strong>${escapeHtml(target.weeks || target.name)}</strong></div>
      </div>
      <div class="panel-section">
        <h3>为什么会连在一起</h3>
        <p>${escapeHtml(edge.detail)}</p>
      </div>
      <div class="panel-section">
        <h3>课堂中的最小例子</h3>
        <pre class="panel-code"><code>${escapeHtml(edge.code)}</code></pre>
      </div>
      <div class="panel-section">
        <h3>继续查看端点</h3>
        <div class="panel-actions">
          <button class="relation-btn" data-node-target="${source.id}" type="button"><strong>${escapeHtml(source.name)}</strong><span>查看这个概念的完整解释。</span></button>
          <button class="relation-btn" data-node-target="${target.id}" type="button"><strong>${escapeHtml(target.name)}</strong><span>查看它在新闻传播业务中的落点。</span></button>
        </div>
      </div>
    `;
  }

  function renderStatus(view) {
    const parts = [`显示 ${view.nodes.length} 个节点 / ${view.links.length} 条关系`];
    if (state.filter !== 'all') parts.push(`筛选：${categoryMap.get(state.filter).name}`);
    if (state.module !== 'all') parts.push(`模块：${moduleMap.get(state.module).title}`);
    if (state.week !== 'all') parts.push(`周次：W${state.week}`);
    if (state.search.trim()) parts.push(`搜索：“${state.search.trim()}”`);
    if (state.nodeId) parts.push(`已选中：${nodeMap.get(state.nodeId).name}`);
    if (!state.nodeId && state.edgeId) parts.push(`已选中关系：${edgeMap.get(state.edgeId).relation}`);
    els.status.textContent = parts.join(' · ');
  }

  function renderFilterButtons() {
    els.filters.querySelectorAll('.kg-chip').forEach(button => {
      const active = button.dataset.filter === state.filter;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function renderModuleButtons() {
    els.modules.querySelectorAll('.kg-mini-chip').forEach(button => {
      const active = button.dataset.module === state.module;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function renderWeekButtons() {
    els.weeks.querySelectorAll('.kg-mini-chip').forEach(button => {
      const active = button.dataset.week === String(state.week);
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function renderPanel(view) {
    if (state.nodeId) {
      renderNode(nodeMap.get(state.nodeId));
      return;
    }
    if (state.edgeId) {
      renderEdge(edgeMap.get(state.edgeId));
      return;
    }
    if (state.search.trim()) {
      renderSearch(view);
      return;
    }
    if (state.module !== 'all' || state.week !== 'all') {
      renderBrowsePanel(view);
      return;
    }
    renderDefault(view);
  }

  function clearSelection() {
    state.nodeId = null;
    state.edgeId = null;
  }

  function resetState() {
    state.filter = 'all';
    state.module = 'all';
    state.week = 'all';
    state.search = '';
    els.search.value = '';
    clearSelection();
    render();
  }

  function render() {
    const view = computeView();
    chart.setOption(buildOption(view), true);
    renderStatus(view);
    renderFilterButtons();
    renderModuleButtons();
    renderWeekButtons();
    renderPanel(view);
    els.overlay.classList.toggle('visible', view.nodes.length === 0);
  }

  function bindUI() {
    els.search.addEventListener('input', event => {
      state.search = event.target.value;
      clearSelection();
      render();
    });

    els.filters.addEventListener('click', event => {
      const button = event.target.closest('.kg-chip');
      if (!button) return;
      state.filter = button.dataset.filter;
      clearSelection();
      render();
    });

    els.modules.addEventListener('click', event => {
      const button = event.target.closest('[data-module]');
      if (!button) return;
      state.module = button.dataset.module;
      clearSelection();
      render();
    });

    els.weeks.addEventListener('click', event => {
      const button = event.target.closest('[data-week]');
      if (!button) return;
      state.week = button.dataset.week;
      clearSelection();
      render();
    });

    els.reset.addEventListener('click', resetState);

    els.detail.addEventListener('click', event => {
      const target = event.target.closest('[data-node-target]');
      const action = event.target.closest('[data-action]');
      if (action && action.dataset.action === 'reset') {
        resetState();
        return;
      }
      if (!target) return;
      state.nodeId = target.dataset.nodeTarget;
      state.edgeId = null;
      render();
    });

    chart.on('click', params => {
      if (params.dataType === 'node') {
        state.nodeId = params.data.id;
        state.edgeId = null;
      } else if (params.dataType === 'edge') {
        state.nodeId = null;
        state.edgeId = params.data.id;
      }
      render();
    });

    chart.getZr().on('click', event => {
      if (!event.target && (state.nodeId || state.edgeId)) {
        clearSelection();
        render();
      }
    });

    window.addEventListener('resize', () => chart.resize());
  }

  window.__kg = {
    state,
    render,
    resetState,
    selectNode(id) {
      state.nodeId = id;
      state.edgeId = null;
      render();
    },
    setFilter(filter) {
      state.filter = filter;
      clearSelection();
      render();
    },
    setModule(module) {
      state.module = module;
      clearSelection();
      render();
    },
    setWeek(week) {
      state.week = String(week);
      clearSelection();
      render();
    }
  };

  initTheme();
  initNav();
  bindUI();
  render();
})();
