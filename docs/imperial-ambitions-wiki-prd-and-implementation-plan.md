# Imperial Ambitions Wiki PRD 与实施计划

更新日期：2026-07-14
项目名：`imperialambitionswiki`
站点名：Imperial Ambitions Wiki
目标域名：https://www.imperialambitions.wiki
平台：Steam / Windows / macOS
开发：aoiti
发行：aoiti、Electronic Sheep Games

## 1. 产品目标

把已批准的 Steam 模板迁移成只服务 **Imperial Ambitions** 的英文攻略站。游戏刚于 2026-07-13 发布，系统深、玩家问题多，但搜索联想与独立攻略覆盖仍薄。首发应围绕玩家现在正在卡住的决策，而不是复制官方手册或制造虚构数据库：

- 给第一次开始战役的玩家一条稳定的 tutorial → economy → exploration 顺序；
- 解释 labor、social class、town logistics、production ledger 与 40+ resources 的关系；
- 把 maize / food、luxury shortage、warehouse 与 population demand 拆成可排查步骤；
- 解释七类 agents、升级路径、books / artwork 与隐藏 tech tree；
- 给 trade、smuggling、grudge、colonization、seafaring 与 regiments 明确操作逻辑；
- 直接回答 random map、local multiplayer、无法 disband units、困在 New World 等发售期高频问题；
- 提供配置、性能边界、购买判断和官方 Steam / Demo 下载入口；
- 不提供 codes、tier list、crack、APK、脚本、debug 注入或伪造的最优 meta。

## 2. 事实基线

- 正式版 Steam：https://store.steampowered.com/app/2219390/Imperial_Ambitions/
- Steam App ID：`2219390`
- 官方 Tutorial / Demo：https://store.steampowered.com/app/2918290/
- Demo App ID：`2918290`，Steam API 描述为三个 tutorial levels。
- Steam Community：https://steamcommunity.com/app/2219390/
- Steam 关联手册：https://imperial-ambitions.fandom.com/
- 官方网站：https://www.aoiti.com/Imperial-Ambitions
- 官方 YouTube：https://www.youtube.com/@aoiti
- 官方 Discord：https://discord.gg/NU963utpEb
- 开发者：aoiti；发行商：aoiti、Electronic Sheep Games。
- 正式发售：2026-07-13；游戏不是 coming soon，也不是 Early Access。
- 类型：turn-based 4X / grand strategy，背景为 Age of Discovery 与 Renaissance。
- 核心系统：agents、social classes、traits、labor allocation、40+ resources、production chains、trade / smuggling、colonization、tactical battle、hidden technology tree。
- 平台：Windows 与 macOS；Steam API 当前不列 Linux。
- 模式：single-player、multi-player、PvP、shared/split-screen PvP；当前官方列表不应被扩写为 online co-op。
- Windows 最低配置：64-bit OS、Windows 7、8-core 3 GHz CPU、8 GB RAM、discrete graphics、DirectX 11。
- macOS 最低配置：Apple Silicon 或 Intel；操作系统字段仍为 TBD。
- 官方手册当前主命名空间约 39 页，包含 Agents、Battle、Diplomacy、Production、Social classes、Trade and Smuggling 等，但部分页面为空或不完整。

## 3. 需求与长尾采集

本轮没有可用的 Serper shell key，因此使用 Google autocomplete、普通网页搜索、Steam Store / API / Community、Fandom MediaWiki API、Reddit 与 YouTube 交叉采集。

Autocomplete 目前只稳定给出 `imperial ambitions game`、`imperial ambitions steam` 等实体词，说明游戏刚发售、长尾尚未完全沉淀。更强的需求证据来自发售后的 Steam 讨论：截至本轮抓取，General Discussions 显示约 97 个 active topics，首页问题包括：

- `Fixed or random map?`
- `Producing food from maize?`
- `Disband military units / special units?`
- `How to disband unit (stuck in new world)`
- `There are 7 agent types...`
- `How to deselect a unit?`
- `cities`
- `Performance issues`
- `Will cloud saves get added?`
- `Starting on new world`
- `Does it have multiplayer?`
- `Tooltips or more information needed...`

这些问题与官方手册现有系统页高度一致，因此用“当前问题 + 官方系统事实”决定首发路由。`Imperial Ambitions` 同时是 Noam Chomsky 书名和其他游戏名称，所有调研与正文都必须锁定 Steam App `2219390`。

## 4. 关键词矩阵

| Keyword | Intent | Route | Priority | Status | Evidence / Notes |
| --- | --- | --- | --- | --- | --- |
| imperial ambitions | 游戏实体与入口 | `/` | P0 | keep | Steam、autocomplete、用户需求；排除同名图书 |
| imperial ambitions game | 找到 Steam 游戏 | `/` | P0 | keep | Google autocomplete |
| imperial ambitions steam | 官方购买与状态 | `/download` | P0 | keep | autocomplete、Steam |
| imperial ambitions wiki | 结构化攻略入口 | `/` | P0 | keep | 用户需求、Fandom 现有手册 |
| imperial ambitions guide | 浏览实用攻略 | `/guides` | P0 | keep | 发售期论坛与搜索结果 |
| imperial ambitions beginner guide | 第一次稳定开局 | `/guides/beginner-guide` | P0 | keep | tutorial/demo、Nookrium 实机、评论强调复杂度 |
| imperial ambitions production and labor | 修复产能与 labor pool | `/guides/production-and-labor` | P0 | keep | 官方商店、Fandom Production |
| imperial ambitions food from maize | 玉米无法转食物 | `/guides/food-and-shortages` | P0 | keep | 2026-07-13 Steam 精确问题 |
| imperial ambitions towns logistics | 城镇、仓库与物流 | `/guides/towns-and-logistics` | P0 | keep | Fandom Towns / Logistics、当前 cities 问题 |
| imperial ambitions agents | 七类 agents 与选择 | `/guides/agents-and-upgrades` | P0 | keep | 官方商店、Fandom Agents、当前论坛标题 |
| imperial ambitions trade | 建立合法贸易路线 | `/guides/trade-and-smuggling` | P0 | keep | 官方商店、Fandom Trade and Smuggling |
| imperial ambitions smuggling | 黑市路线与风险 | `/guides/trade-and-smuggling` | P1 | keep | 官方说明与 Shadowmaster 系统 |
| imperial ambitions social classes | 教育与人口阶层 | `/guides/social-classes` | P0 | keep | 官方商店、Fandom 完整表 |
| imperial ambitions traits | traits、疾病与 unrest | `/guides/traits-unrest-and-disease` | P1 | keep | 2026-07-07 官方视频、Fandom Traits |
| imperial ambitions resources | 资源和生产链 | `/guides/resources-and-production-chains` | P1 | keep | 40+ resources、Fandom Resources |
| imperial ambitions colonization | 探索与殖民 New World | `/guides/exploration-and-colonization` | P0 | keep | 游戏核心定位、当前 Starting on new world |
| imperial ambitions battle | 战斗资格、射程与掩体 | `/guides/battles-and-regiments` | P0 | keep | Fandom Battle、官方 tactical battle |
| imperial ambitions link regiments | linking / column movement | `/guides/battles-and-regiments` | P1 | keep | 官方 Steam movie 与 YouTube tutorial |
| imperial ambitions ships | embarking / disembarking | `/guides/ships-and-seafaring` | P0 | keep | 官方 Steam movie、Fandom Seafaring |
| imperial ambitions stuck in new world | 无法返回或解散单位 | `/guides/ships-and-seafaring` | P0 | keep | 2026-07-13 Steam 精确问题 |
| imperial ambitions diplomacy | grudge 与议和 | `/guides/diplomacy-and-grudge` | P1 | keep | Fandom Diplomacy、官方商店 |
| imperial ambitions random map | 固定地图还是随机地图 | `/guides/factions-maps-and-replayability` | P0 | keep | 当前 developer-marked Steam answer |
| imperial ambitions factions | 可玩国家与重玩性 | `/guides/factions-maps-and-replayability` | P1 | keep | 当前购买前问题、官方机制 |
| imperial ambitions multiplayer | 多人模式类型 | `/guides/multiplayer-and-platforms` | P0 | keep | 当前论坛问题、Steam feature list |
| imperial ambitions research books artwork | 隐藏科技如何推进 | `/guides/research-books-and-art` | P0 | keep | 官方商店、当前开发者回复 |
| imperial ambitions disband units | 是否能解散单位 | `/guides/disband-units-status` | P0 | keep | 发售日双重论坛问题；版本敏感状态页 |
| imperial ambitions system requirements | PC / Mac 能否运行 | `/system-requirements` | P0 | keep | Steam 精确配置表 |
| imperial ambitions performance | FPS 与 pixel perfect | `/system-requirements` | P1 | keep | 当前 Steam Performance issues |
| imperial ambitions review | 是否值得买 | `/review` | P0 | keep | YouTube launch-day review、Steam reviews |
| imperial ambitions download | 官方下载入口 | `/download` | P0 | keep | Steam 正式版与 Demo |
| imperial ambitions demo | 三个 tutorial levels | `/download` | P1 | keep | Steam API App `2918290` |
| 帝国的夙愿 攻略 | 简中搜索 | `/` | P2 | localize_later | Steam 官方简中名；英语核心完成后再做 |
| imperial ambitions codes | 兑换码 | none | P3 | ignore | 非 live-service、无兑换系统 |
| imperial ambitions tier list | 排名 | none | P3 | ignore | 无稳定角色 / unit meta 证据 |
| imperial ambitions cheats / trainer | 修改器与注入 | none | P3 | ignore | 不提供危险或违规操作 |
| imperial ambitions mobile / apk | 手机安装 | `/download#platforms` | P3 | watch | 无官方移动版；只做安全说明 |
| imperial ambitions three kingdoms / chomsky | 同名实体 | none | P3 | ignore | 与 Steam App 2219390 无关 |

## 5. 竞品基准

### Imperial Ambitions Fandom（Steam 直接关联手册）

- 约 39 个主命名空间页面，覆盖 Agents、Towns、Production、Trade、Battle、Diplomacy、Traits、Social classes、Seafaring 等核心系统。
- 优点：开发者参与、系统事实密度高、表格与交叉链接丰富，是当前最强资料源。
- 弱点：部分页为空或截断；页面以术语说明为主，缺少 exact-query title、answer-first 排错顺序和清晰的下一步路径；Fandom UI 噪声较高。
- 我们必须匹配核心系统覆盖，但不能复制其 prose、表格或图片；应把事实重新组织成玩家决策指南并回链原手册。

### Steam Store / Community / Discussions

- Store 是身份、平台、配置、截图、视频和 feature list 的主来源。
- Discussions 提供发售后最真实的问题与开发者当前答复，但旧 demo、社区猜测和补丁计划会混在一起。
- 我们应为每个版本敏感页面保存 `checkedAt`，优先使用当前开发者回复；补丁尚未落地的计划不能写成已经实现。

### GameFAQs / Steam Community Guides / 一般数据库页

- GameFAQs 目前只有实体、发布日期和平台摘要，没有实质攻略。
- Steam Community Guides 尚未形成系统化英文指南矩阵。
- 第三方数据库可能把旧 prerelease、Steam Deck 或 online multiplayer 状态写成确定事实，不能覆盖 Steam 当前数据。

### 我们的改进点

- 首页做信息密集 hub，把每条 P0/P1 路由显式内链，而不是只放在 footer。
- 以“症状 → 核对位置 → 决策顺序 → 何时停止”为文章结构，不复述手册词条。
- 每篇文章包含 Article + BreadcrumbList schema、FAQ 与明确 next steps。
- 对 disband、maize、performance、multiplayer 等发售期问题明确标注检查日期。
- 将 Fandom 当作官方关联手册和事实参考，不冒充游戏官方站点。

## 6. YouTube 决策表

| Video | Published / views checked 2026-07-14 | Intent | Action | Target | Reason |
| --- | --- | --- | --- | --- | --- |
| ao iti `XUSgspzJkhQ` Imperial Ambitions Trailer | 2026-06-14 / ~944 | entity / trailer | embed | `/` | 官方、当前、适合作为 hero trust media |
| Nookrium `rvHHt5_gZRk` Colonization Era Strategy Game | 2025-06-09 / ~8.7K | beginner / gameplay | embed | beginner | 当前最有 traction 的长实机；用正式版资料纠正版本差异 |
| ao iti `A-5cwhcX0h0` Trait system | 2026-07-07 / ~270 | traits / society | embed | traits | 发售前一周官方系统解释 |
| ao iti `_cVZVp-hDOA` How Society works | 2024-06-26 / ~1.1K | society / social classes | embed | social classes | 官方 visual explainer；旧视频只作视觉支持 |
| ao iti `CgrqVMNP7y4` Linking regiments | 2023-06-29 / ~346 | battle / movement | embed | battles | 与当前手册 Battle / Regiment linking 交叉核对 |
| ao iti `nr1gYC7A4gY` Disembarkment mechanics | 2023-06-27 / ~184 | ships / shore | embed | seafaring | 与当前 Steam movie / Fandom Seafaring 交叉核对 |
| Dracolich `HOdSqR942xM` Demo First Impressions and Review | 2026-07-13 / ~112 | review / buyer intent | embed | `/review` | 发售日独立评测；不替代官方事实 |

视频只作为画面和判断的交叉验证。正文不使用“this video says/shows”叙述，不转写 transcript。

## 7. 首发信息架构

22 个核心入口，加法律页：

1. `/`
2. `/guides`
3. `/guides/beginner-guide`
4. `/guides/production-and-labor`
5. `/guides/food-and-shortages`
6. `/guides/towns-and-logistics`
7. `/guides/agents-and-upgrades`
8. `/guides/trade-and-smuggling`
9. `/guides/social-classes`
10. `/guides/traits-unrest-and-disease`
11. `/guides/resources-and-production-chains`
12. `/guides/exploration-and-colonization`
13. `/guides/battles-and-regiments`
14. `/guides/ships-and-seafaring`
15. `/guides/diplomacy-and-grudge`
16. `/guides/factions-maps-and-replayability`
17. `/guides/multiplayer-and-platforms`
18. `/guides/research-books-and-art`
19. `/guides/disband-units-status`
20. `/system-requirements`
21. `/review`
22. `/download`

法律与站点说明：`/disclaimer`、`/privacy`、`/terms`、`/cookie`。

暂不开发：codes、tier list、entity database、interactive map、calculator、cheats、mods、多语言正文。

## 8. 数据与组件

```text
src/data/imperial-ambitions/
  types.ts
  sources.ts
  guides.ts
  localized.ts

src/components/imperial-ambitions/
  home-page.tsx
  guide-article.tsx
  wiki-navigation.tsx
  faq-section.tsx

src/app/[locale]/(imperial-ambitions)/
  (home)/page.tsx
  guides/page.tsx
  guides/[slug]/page.tsx
  system-requirements/page.tsx
  review/page.tsx
  download/page.tsx
  disclaimer/page.tsx
```

## 9. 视觉方向

从官方 Steam header 与 pixel-art 地图、海洋、旗帜、生产 UI 提取“航海图 + 黄铜 + 深海”配色：

- page background：`#091318`
- panel：`#10242a`
- elevated panel：`#17343a`
- border：`#31545b`
- text：`#f6ecd2`
- muted：`#a9c0bc`
- primary brass：`#e3b95f`
- secondary sea：`#63b7a9`
- alert red：`#d96b5f`

首页 hero 必须紧凑：左侧定位、CTA 与短 quick links，右侧官方 trailer；首屏可看到下一内容带。桌面 sticky sidebar 分组默认折叠、active group 自动打开；移动端使用 expandable wiki menu。

## 10. 素材映射

- `/imperial-ambitions/hero.jpg`：Steam official header，metadata 与 hero。
- `/imperial-ambitions/screenshots/1..9.jpg`：Steam official screenshots，按 economy / map / battle / colonization / society 分配。
- `/imperial-ambitions/guides/*.jpg`：所选 YouTube thumbnail 的本地副本；无直接视频的 safety/status 页面使用 official screenshot 或 site cover。
- `/logo.svg`：以 IA、航海罗盘与黄铜边框构成的站点标志，不复用 Machinefall 图形。

## 11. SEO 与 Schema

- 首页：WebSite、Organization、VideoGame、VideoObject。
- Guide hub：ItemList + BreadcrumbList。
- Article：Article + BreadcrumbList；带视频页面增加 VideoObject。
- 每页使用 `constructMetadata`、canonical、OpenGraph 与 Twitter card。
- 首页 description 控制在 150–160 characters，并同步 messages、manifest。
- sitemap 覆盖 22 个核心入口与法律页。
- 每个高价值长路由都有显式短 label；sidebar 和 related buttons 允许换行。
- 英文核心先完成；简中等本地化只作为后续 GSC / search evidence 驱动项。

## 12. 内容标准

- 每篇实质攻略目标 600–1,000 English words；status / safety 页面可略短但必须完整回答意图。
- 开头先给玩家结论，正文再说明系统。
- 当前版本优先级：Steam 当前 Store / API / developer answer > Steam 关联 Fandom > official YouTube > community cross-check > prerelease archive。
- Fandom 页面只作事实来源，不能复制全文或近似改写。
- `disband units` 当前答案是尚不能主动解散；开发者表示会评估实现，这不是已经上线的功能。
- `food from maize` 当前论坛问题尚未得到完整修复答案，正文以 production ledger 排查和 demo/full-build 区分为主，不虚构 unlock 条件。
- review 不伪造站点评分；早期 Steam review 数量与价格不写死进 metadata。
- download 只链接 Steam 正式版与 Steam Tutorial / Demo，不提供 APK、torrent、crack 或 trainer。

## 13. 验证与上线

本地：

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm next:build
pnpm build
```

浏览器检查：desktop / mobile 首页、guide hub、至少三篇长文章、视频缩略图、长相关链接换行、sidebar active group、sitemap、robots、manifest、404，以及 Machinefall 名称、域名、IDs、素材和路径残留。

上线：

- GitHub repository：`imperialambitionswiki`
- Cloudflare Worker：`imperialambitionswiki`
- domains：`imperialambitions.wiki`、`www.imperialambitions.wiki`
- canonical：https://www.imperialambitions.wiki
- GA4 property：`imperialambitions.wiki`
- Shipmanager：siteType `game_guide`、priority `P0`、coreKeyword `imperial ambitions`、exactly two core links。
