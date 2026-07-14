import type { Guide, GuideVideo } from './types';

const publishedAt = '2026-07-14';
const updatedAt = '2026-07-14';

const videos: Record<string, GuideVideo> = {
  trailer: {
    id: 'XUSgspzJkhQ',
    title: 'Imperial Ambitions Trailer',
    channel: 'ao iti',
    url: 'https://www.youtube.com/watch?v=XUSgspzJkhQ',
    thumbnailUrl: '/imperial-ambitions/guides/trailer.jpg',
    publishedAt: '2026-06-14',
    viewCountLabel: '944 views when checked',
    checkedAt: updatedAt,
  },
  beginner: {
    id: 'rvHHt5_gZRk',
    title: 'Imperial Ambitions - Colonization Era Strategy Game',
    channel: 'Nookrium',
    url: 'https://www.youtube.com/watch?v=rvHHt5_gZRk',
    thumbnailUrl: '/imperial-ambitions/guides/beginner-guide.jpg',
    publishedAt: '2025-06-09',
    viewCountLabel: '8.7K views when checked',
    checkedAt: updatedAt,
  },
  traits: {
    id: 'A-5cwhcX0h0',
    title: 'Trait system in Imperial Ambitions',
    channel: 'ao iti',
    url: 'https://www.youtube.com/watch?v=A-5cwhcX0h0',
    thumbnailUrl: '/imperial-ambitions/guides/traits.jpg',
    publishedAt: '2026-07-07',
    viewCountLabel: '270 views when checked',
    checkedAt: updatedAt,
  },
  society: {
    id: '_cVZVp-hDOA',
    title: 'How Society works in Imperial Ambitions',
    channel: 'ao iti',
    url: 'https://www.youtube.com/watch?v=_cVZVp-hDOA',
    thumbnailUrl: '/imperial-ambitions/guides/social-classes.jpg',
    publishedAt: '2024-06-26',
    viewCountLabel: '1.1K views when checked',
    checkedAt: updatedAt,
  },
  battles: {
    id: 'CgrqVMNP7y4',
    title: 'Linking regiments and column movement mechanics',
    channel: 'ao iti',
    url: 'https://www.youtube.com/watch?v=CgrqVMNP7y4',
    thumbnailUrl: '/imperial-ambitions/guides/battles.jpg',
    publishedAt: '2023-06-29',
    viewCountLabel: '346 views when checked',
    checkedAt: updatedAt,
  },
  ships: {
    id: 'nr1gYC7A4gY',
    title: 'Disembarkment mechanics at shores - Imperial Ambitions',
    channel: 'ao iti',
    url: 'https://www.youtube.com/watch?v=nr1gYC7A4gY',
    thumbnailUrl: '/imperial-ambitions/guides/ships.jpg',
    publishedAt: '2023-06-27',
    viewCountLabel: '184 views when checked',
    checkedAt: updatedAt,
  },
  review: {
    id: 'HOdSqR942xM',
    title: 'Imperial Ambitions Demo First Impressions and Review',
    channel: 'Dracolich',
    url: 'https://www.youtube.com/watch?v=HOdSqR942xM',
    thumbnailUrl: '/imperial-ambitions/guides/review.jpg',
    publishedAt: '2026-07-13',
    viewCountLabel: '112 views when checked',
    checkedAt: updatedAt,
  },
};

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    path: '/guides/beginner-guide',
    title: 'Imperial Ambitions Beginner Guide: Build a Stable First Empire',
    seoTitle: 'Imperial Ambitions Beginner Guide - First Empire Plan',
    seoDescription:
      'Start Imperial Ambitions with a stable labor pool, food chain, useful agents and a safe route into the New World before expanding too far.',
    summary:
      'Finish the tutorials, stabilize food and labor in the capital, recruit only the agent your current bottleneck needs, then scout before committing ships and settlers.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: '/imperial-ambitions/guides/beginner-guide.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'popular_youtube',
    sourceNotes:
      'Built from the released Steam store, the Steam-linked manual and a high-traction long gameplay video. The video predates release, so current official systems take priority.',
    videoSearchQueries: [
      'Imperial Ambitions beginner guide',
      'Imperial Ambitions gameplay first hour',
      'Imperial Ambitions tutorial',
    ],
    video: videos.beginner,
    tags: ['First game', 'Labor', 'Exploration'],
    relatedRoutes: [
      '/guides/production-and-labor',
      '/guides/agents-and-upgrades',
      '/guides/exploration-and-colonization',
      '/guides/food-and-shortages',
    ],
    body: [
      {
        heading:
          'Use the tutorials to learn the ledgers, not to memorize a build',
        paragraphs: [
          'Begin with the in-game tutorials or the separate free Tutorial / Demo on Steam. Imperial Ambitions hides important decisions inside ledgers: production, trade, research and population all interact, and the interface makes more sense after you have seen each one in context. The demo contains three tutorial levels, but it is a separate app. If a recipe, button or trigger differs from the released game, trust the current full build rather than assuming your save is broken.',
          'Your first objective is not rapid conquest. It is a capital that can keep people fed, maintain a usable labor pool and replace the goods consumed by training. Pause at the start of a turn and read the production ledger before moving agents. Identify which raw goods already arrive, which processed goods are being consumed and which shortage will stop growth first. This turns the opening from guesswork into a queue of small, testable decisions.',
        ],
        bullets: [
          'Confirm whether you are playing Steam App 2219390 or the separate Tutorial / Demo.',
          'Open the production ledger before changing labor allocation.',
          'Leave some labor uncommitted until food and basic goods remain positive for several turns.',
        ],
      },
      {
        heading: 'Stabilize food before promoting the population',
        paragraphs: [
          'Higher social classes can unlock stronger production and specialist recruitment, but they also create more demanding consumption. Do not promote every peasant simply because education is available. Watch food and luxury supply across a full turn, then promote only the number of citizens needed for the next agent, unit or process. An empire with advanced citizens and no goods to satisfy them produces unrest instead of momentum.',
          'When a resource is abundant but the finished good is missing, trace the entire chain. The raw material must reach the capital or relevant warehouse, the recipe must be visible in the current build, labor must be assigned and the output must not be consumed immediately by another process. If any link is absent, adding more workers to the last step will not help. Repair the earliest missing link and check the ledger again next turn.',
        ],
      },
      {
        heading: 'Recruit an agent to solve a named bottleneck',
        paragraphs: [
          'There is no universal best first agent. Explorers reveal land and resources; builders create roads and productive infrastructure; merchants establish trade; priests shape religion and can develop research-related upgrades; generals support armies and occupation; gentlemen handle administrative or scholarly roles; shadowmasters use crime and subversion. Pick the role that removes the limit visible in your ledgers or on the map.',
          'Avoid recruiting specialists without a job. Training removes citizens from ordinary work and consumes goods, while the current release did not include a normal disband command when checked. A spare agent may become useful later, but several idle recruits can permanently tighten food and luxury demand. Before training, write the next action in plain language: find ore, connect a town, open a trade route, calm unrest or prepare a regiment. If you cannot name the action, wait.',
        ],
      },
      {
        heading: 'Scout the New World before paying the full transport cost',
        paragraphs: [
          'Send exploration ahead of settlement. Fog hides coastlines, resources and safe approaches, while vessels are required to move units across water. A discovered resource is not automatically useful: the planned town still needs food, population, logistics and a route that brings output back to your economy. Mark a site because it closes a production gap, not because it is the first empty coast you can reach.',
          'Treat the first voyage as a round trip. Keep enough vessels for every unit, remember where ships will remain after shore disembarkation and protect the return path. If an expedition cannot come home, do not assume disbanding will solve it; the current unit system may not offer that command. A slower expedition with a planned dock, settlement and supply chain is safer than a large group stranded beyond your logistics.',
        ],
      },
      {
        heading: 'End each turn with a five-part empire check',
        paragraphs: [
          'Before ending a turn, check food, available labor, the single most important missing good, agent assignments and diplomatic Grudge. This catches the failure while it is still local. Hunger can reduce efficiency and push unrest; a training queue can temporarily remove too much labor; a trespassing unit can turn a neutral border into an avoidable war. The systems feel complex because they are connected, but the same short audit works at every scale.',
          'Expand only after the capital survives this check without emergency changes. Then add one new dependency at a time: one promoted class, one agent, one production chain, one route or one colony. When a problem appears, roll back the newest dependency mentally and inspect it first. Imperial Ambitions rewards adaptation more than a rigid build order, so a stable process for finding the bottleneck is more valuable than copying another player’s exact opening.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should I play the Imperial Ambitions demo first?',
        answer:
          'Yes if you want a free interface introduction. The separate Steam demo contains three tutorial levels, but recipes and behavior can differ from the released build.',
      },
      {
        question: 'What is the best first agent?',
        answer:
          'Choose by bottleneck. Use an Explorer for unknown resources, a Builder for infrastructure, a Merchant for trade, or another specialist only when you can name its immediate job.',
      },
      {
        question: 'When should I colonize the New World?',
        answer:
          'After food and labor are stable, the coast has been scouted, every transported unit has a vessel and the new town has a reason to exist in your production plan.',
      },
    ],
  },
  {
    slug: 'production-and-labor',
    path: '/guides/production-and-labor',
    title: 'Imperial Ambitions Production and Labor: Fix the Ledger First',
    seoTitle: 'Imperial Ambitions Production & Labor Guide',
    seoDescription:
      'Understand the labor pool, town logistics and production ledger in Imperial Ambitions, then trace shortages from raw resource to finished good.',
    summary:
      'Production works when citizens are available, goods reach the capital, the recipe is unlocked and labor is assigned without starving a more important chain.',
    category: 'Economy',
    difficulty: 'Beginner',
    coverImageUrl: '/imperial-ambitions/screenshots/5.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Based on the released Steam description plus the Steam-linked Manufacturing, Logistics, Towns and Social classes manual pages.',
    videoSearchQueries: [
      'Imperial Ambitions production guide',
      'Imperial Ambitions labor allocation',
    ],
    tags: ['Production ledger', 'Labor pool', 'Logistics'],
    relatedRoutes: [
      '/guides/food-and-shortages',
      '/guides/resources-and-production-chains',
      '/guides/towns-and-logistics',
      '/guides/social-classes',
    ],
    body: [
      {
        heading: 'Read production as a chain of permissions',
        paragraphs: [
          'A production row is not a promise that output will appear. It represents a chain of permissions: the process must be available, its inputs must be in the usable warehouse, enough labor must be free and the result must have somewhere to go. When output is zero, start at the left side of that chain. Check availability and transport before changing the labor slider, because a fully staffed process with no input simply hides the real problem.',
          'Separate raw collection from processing. Towns work local resource sites, but much of the empire’s manufacturing is organized through the capital and its ledgers. The manual describes town logistics as the bridge that determines how much resource and labor contribution can reach the wider empire. A remote tile full of maize, iron or timber is only strategic after logistics make it usable where the consuming process runs.',
        ],
      },
      {
        heading: 'Treat available labor as a budget, not a target to spend',
        paragraphs: [
          'Citizens contribute labor according to class and condition. Training, hunger, illness, crime and unrest can temporarily or persistently reduce what the ledger receives. If every point is allocated during a healthy turn, the whole plan may fail when one citizen begins training or a town loses logistics. Keep a reserve so the economy absorbs normal variation without stopping food or other essential output.',
          'Allocate labor by consequence. Food and goods that prevent a population crisis come first. Next are inputs that keep critical production running. Expansion goods, luxury stockpiles and speculative exports follow after the core remains positive. The automated allocation controls can reduce repetitive work, but automation still needs boundaries: review which chains are allowed to consume scarce inputs and disable an export that empties a resource needed at home.',
        ],
        bullets: [
          'Protect food and minimum luxury production before export chains.',
          'Keep a labor reserve for training, disease and sudden military needs.',
          'Use automation as a guardrail, then inspect the ledger after every major population change.',
        ],
      },
      {
        heading: 'Find the first missing input, not the loudest warning',
        paragraphs: [
          'A warning about fabric may begin with missing cotton or sheep, insufficient town logistics, no assigned transport, a full storage path or labor committed elsewhere. Follow the chain backward until you find the first point that has zero flow. That point deserves the fix. Building another fabric process or promoting more workers at the end of the chain increases demand while the original upstream block remains.',
          'Use one-turn tests. Change a single allocation, route or import toggle, end the turn and compare the ledger. Multiple simultaneous changes make it impossible to know which action worked and can create a new shortage that looks like the old one. Once a chain runs for several turns with a small positive balance, record it mentally as stable and move to the next bottleneck.',
        ],
      },
      {
        heading: 'Connect town logistics to capital manufacturing',
        paragraphs: [
          'A new town begins as a local population and resource site, not a fully integrated factory. Roads, docks and logistics investment determine what it contributes. Prioritize a town whose resource closes a current gap, then improve the connection enough for that resource to reach the capital consistently. A distant settlement producing a duplicate surplus is less valuable than a nearby one that supplies the only missing input for food, fabric or gunpowder.',
          'Do not raise every town to the same level by habit. Give each settlement a role: food support, strategic ore, colonial crop, staging port or population center. Upgrade logistics where the next level releases a real bottleneck. If a town is starving locally, repair its food access before extracting more output; otherwise the resulting illness, migration or unrest can reduce the labor you were trying to gain.',
        ],
      },
      {
        heading: 'Know when the economy is ready to expand',
        paragraphs: [
          'A stable economy has positive essentials, a small labor reserve, at least one alternative for a critical input and no route that depends on a single exposed unit. It does not need a huge stockpile of everything. Imperial Ambitions offers trade, replantation, colonization and smuggling precisely because not every empire can produce every good domestically. Expansion should solve a named vulnerability rather than add another region to manage.',
          'Before training an army or founding a colony, temporarily add its expected demand to your mental budget. If the current chain barely supports civilians, military recruitment will create hunger or luxury shortages. Improve the upstream supply first. This makes production planning slower for one turn and much faster over the next ten because the new unit or settlement enters an economy designed to support it.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why is a production process showing zero output?',
        answer:
          'Check whether the recipe exists in the current build, inputs reached the usable warehouse, labor is free and the output is not immediately consumed elsewhere.',
      },
      {
        question: 'Should I allocate all available labor?',
        answer:
          'No. Keep a reserve for training, illness, unrest and unexpected shortages so essential chains do not collapse after one change.',
      },
      {
        question: 'Do town resources automatically reach the capital?',
        answer:
          'No. Town logistics and transport connections determine how much local output and labor contribution can support the wider empire.',
      },
    ],
  },
  {
    slug: 'food-and-shortages',
    path: '/guides/food-and-shortages',
    title: 'Imperial Ambitions Food Guide: Maize, Hunger and Missing Recipes',
    seoTitle: 'Imperial Ambitions Food & Maize Guide - Fix Shortages',
    seoDescription:
      'Diagnose food shortages and missing maize recipes in Imperial Ambitions by checking build version, logistics, warehouse inputs, labor and consumption.',
    summary:
      'If maize exists but food does not, first confirm the recipe appears in your current build, then trace transport, labor and immediate consumption instead of guessing an unlock.',
    category: 'Economy',
    difficulty: 'Intermediate',
    coverImageUrl: '/imperial-ambitions/screenshots/3.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Responds to a July 13 Steam question that did not yet have a complete developer resolution. The guide separates confirmed troubleshooting from unverified recipe conditions.',
    videoSearchQueries: [
      'Imperial Ambitions food from maize',
      'Imperial Ambitions food shortage',
    ],
    tags: ['Maize', 'Food', 'Troubleshooting'],
    relatedRoutes: [
      '/guides/production-and-labor',
      '/guides/towns-and-logistics',
      '/guides/resources-and-production-chains',
      '/guides/social-classes',
    ],
    body: [
      {
        heading: 'Do not assume every visible raw food has an active recipe',
        paragraphs: [
          'A launch-day Steam report described maize accumulating in a New World city while the production ledger only offered food processes tied to Old World supplies. The developer’s immediate question was whether the player was in the demo, not a confirmed unlock rule. That means the safe answer is diagnostic: a missing maize recipe may depend on build, scenario, technology or a bug, and no single condition should be presented as fact until the current game or developer confirms it.',
          'Open the production ledger and look for the process before moving labor. If the maize-to-food row is absent, extra maize and extra workers cannot activate a process the interface does not expose. Confirm that Steam has updated the full game, note whether the save began in the demo or release build, and compare a new tutorial or campaign only if you can do so without sacrificing the current save. Keep the symptom and the missing row separate from speculation about why it is missing.',
        ],
      },
      {
        heading:
          'When the recipe exists, trace maize all the way to the process',
        paragraphs: [
          'A resource icon in a town is not the same as usable stock in the capital. Check that the resource site is worked, the town has enough logistics, the route is connected and the warehouse serving the process actually receives maize. Then confirm labor is assigned to food. The correct sequence is site, town output, logistics, warehouse input, process labor and finished stock. Stop at the first stage that reports zero.',
          'Watch the next turn rather than the current snapshot. Food may be produced and consumed immediately by citizens, training or a growing settlement, leaving the stock counter unchanged. Compare production and demand values instead of asking only whether the warehouse total rose. A small positive balance proves the chain works; a negative balance means the recipe is active but capacity or population demand still needs adjustment.',
        ],
        bullets: [
          'Recipe absent: document build and scenario; do not add labor blindly.',
          'Recipe present but no input: inspect town logistics and the receiving warehouse.',
          'Output appears but stock stays flat: compare per-turn consumption and exports.',
        ],
      },
      {
        heading: 'Reduce demand before chasing a distant replacement',
        paragraphs: [
          'Food emergencies worsen when new citizens, recruits or colonies are added during the shortage. Pause promotions and training, stop food exports and delay another settlement until the existing population is stable. If the game offers automated import or export toggles, confirm that food or a required input is not leaving the capital by default. The fastest solution may be protecting supply rather than producing more.',
          'Use alternate confirmed food sources already visible in your ledger. The manual groups maize, potato, wheat, cattle, fish and sheep among raw resources associated with the food economy, but the active processes available to your faction and save are what matter. Choose the shortest functioning chain now. A theoretically efficient colonial crop is not useful if the capital can already convert a local resource into food this turn.',
        ],
      },
      {
        heading: 'Stop hunger before it becomes a society problem',
        paragraphs: [
          'Hunger is more than a red resource number. The official trait description links food shortage to lower efficiency, unrest and starvation, while hungry soldiers can begin with fewer action points. Once citizens become unreliable, the labor loss reduces the very production needed to recover. Protect food with spare capacity instead of running at exactly zero balance.',
          'Prioritize the towns that feed the most people or supply the most labor. If a remote colony repeatedly starves, reduce its extraction burden and improve local food or logistics before expanding it. Moving more citizens into a broken town multiplies consumption and disease risk. A smaller settlement with stable supply contributes more over time than a large population cycling through hunger, migration and unrest.',
        ],
      },
      {
        heading: 'Report a reproducible missing recipe cleanly',
        paragraphs: [
          'If the process remains absent in the current full build, prepare a useful report: game app and version, faction, map type, save age, technology state, town and capital screenshots, whether maize reaches the warehouse and whether the tutorial displays the recipe under the same conditions. This gives the developer a difference to test instead of a general claim that food is broken.',
          'Keep a save from before the recipe should appear and avoid destructive experiments. The game had an urgent first-patch thread at launch, so behavior may change quickly. This page records the checked date and will treat a future patch note or developer answer as the new baseline. Until then, the troubleshooting steps are reliable; a hidden unlock condition is not.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why can I not turn maize into food?',
        answer:
          'First check whether the process appears in your current full-build production ledger. If it is absent, the exact unlock or bug status was not confirmed when checked; document build, scenario and technology state.',
      },
      {
        question:
          'Why does food stock stay at zero even when workers are assigned?',
        answer:
          'The input may not reach the warehouse, or food may be consumed immediately. Compare per-turn production and demand, not only the final stock number.',
      },
      {
        question: 'Should I promote citizens during a food shortage?',
        answer:
          'Usually no. Pause promotions, training and expansion until food has a reliable positive balance and the population is no longer losing efficiency.',
      },
    ],
  },
  {
    slug: 'towns-and-logistics',
    path: '/guides/towns-and-logistics',
    title: 'Imperial Ambitions Towns and Logistics: Make Colonies Contribute',
    seoTitle: 'Imperial Ambitions Towns & Logistics Guide',
    seoDescription:
      'Grow useful towns in Imperial Ambitions by stabilizing food, population and logistics before extracting resources or expanding the empire.',
    summary:
      'A town becomes valuable when its people remain stable and its logistics move local resources and labor toward the capital without creating a permanent shortage.',
    category: 'Empire',
    difficulty: 'Intermediate',
    coverImageUrl: '/imperial-ambitions/screenshots/8.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Uses the Steam-linked Towns, Logistics, Migration and Manufacturing pages plus current launch questions about cities and New World starts.',
    videoSearchQueries: [
      'Imperial Ambitions towns guide',
      'Imperial Ambitions logistics',
    ],
    tags: ['Towns', 'Population', 'Logistics'],
    relatedRoutes: [
      '/guides/production-and-labor',
      '/guides/exploration-and-colonization',
      '/guides/food-and-shortages',
      '/guides/trade-and-smuggling',
    ],
    body: [
      {
        heading: 'Give each town one strategic job',
        paragraphs: [
          'A town should enter your plan because it supplies a missing resource, supports a route, protects a coastline or provides population in a useful location. Founding or annexing a town without a job adds food demand, social tension and another logistics problem. Before investing, name the output that must reach the capital or the local function the settlement will perform.',
          'Specialization makes failures visible. If a crop town stops contributing, inspect its fields, population and route. If a port town fails, inspect vessels and docks. A settlement that attempts every process at once can consume its own inputs before the empire receives them. Keep early local production focused on survival and the one export that justifies the town.',
        ],
      },
      {
        heading: 'Stabilize people before raising extraction',
        paragraphs: [
          'Population provides both workers and consumers. Food shortage, disease, crime, discrimination and war can reduce growth or push migration. Do not treat a rising headcount as free labor: more citizens need food and class-specific goods, while a sick or angry population may contribute less. A town that exports heavily while starving locally is borrowing production from its own future.',
          'Check local food, luxury access, health and unrest before assigning another resource tile. If conditions are deteriorating, reduce extraction and repair supply. Supporting agents can help, but they should solve a visible cause rather than mask it. A merchant may improve access to goods; a builder may improve infrastructure; a priest, gentleman or general may address a different social or security problem.',
        ],
        bullets: [
          'Keep enough local supply to prevent hunger and class demand from collapsing labor.',
          'Use agents according to the cause of instability, not as generic town buffs.',
          'Delay another population transfer until the town remains stable for several turns.',
        ],
      },
      {
        heading: 'Raise logistics where it releases a real bottleneck',
        paragraphs: [
          'The manual describes town logistics as the limit on resource transfer, labor contribution and the number of citizens that can be supplied. New settlements begin with weak integration. Improve roads, docks or related infrastructure when the next investment moves a resource the empire actually needs, not simply because every town can be upgraded.',
          'Measure the connection from both ends. The town must produce surplus, and the capital must be able to receive and use it. If the capital warehouse is full or the consuming process is idle for another reason, more logistics will not improve the empire. If the town has surplus but the capital sees none, the connection is the likely bottleneck. Solve only the stage that is limiting flow.',
        ],
      },
      {
        heading: 'Plan migration and settlement as supply decisions',
        paragraphs: [
          'People can reach towns through growth, migration, refugees and settlement actions. Each new resident changes demand, culture, religion and the available labor mix. Move population because a specific process or agent requires it. Sending everyone possible to a new colony can create food shortage and social friction before roads, docks and storage exist.',
          'Keep a recovery path. If a colony loses supply, it should be able to reduce production, import essentials or receive an agent without waiting for a long emergency voyage. The first successful town network is usually compact: one capital, one supporting resource town and one route that can be inspected quickly. Add distant nodes only after the compact network remains reliable.',
        ],
      },
      {
        heading: 'Audit the town as a loop, not a score',
        paragraphs: [
          'At the end of a turn, ask whether the town fed its people, maintained order, produced its intended surplus and transferred that surplus. A high population or logistics level is not success if the export never reaches a process. Likewise, a small town can be strategically excellent if it reliably provides the one rare input your empire lacks.',
          'When the loop fails, change one element and observe a turn. Repair food before growth, local output before transfer, and transfer before capital processing. This order prevents investment from outrunning the population. Towns become easier to manage when every upgrade is justified by the next broken link rather than by a general desire to maximize the settlement.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why is my town not sending resources to the capital?',
        answer:
          'Confirm the resource site has workers and surplus, then inspect town logistics and the capital receiving path. More extraction will not help if transfer is the bottleneck.',
      },
      {
        question: 'What should I build first in a new town?',
        answer:
          'Secure food and the minimum infrastructure needed for the town’s specific job. Do not begin several export chains before the population is stable.',
      },
      {
        question: 'Should every town have maximum logistics?',
        answer:
          'No. Upgrade where additional transfer or labor contribution solves a current empire bottleneck.',
      },
    ],
  },
  {
    slug: 'agents-and-upgrades',
    path: '/guides/agents-and-upgrades',
    title: 'Imperial Ambitions Agents Guide: Pick the Right Specialist',
    seoTitle: 'Imperial Ambitions Agents & Upgrades Guide',
    seoDescription:
      'Compare all seven Imperial Ambitions agent roles, choose upgrades by empire bottleneck and avoid recruiting specialists with no immediate job.',
    summary:
      'Explorer, Builder, Merchant, Priest, Shadowmaster, General and Gentleman are tools for different problems; train the role that changes your next decision.',
    category: 'Empire',
    difficulty: 'Beginner',
    coverImageUrl: '/imperial-ambitions/screenshots/4.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'Agent identities and upgrade examples come from the released Steam page and Steam-linked Agents / Training manual pages. No universal agent ranking is claimed.',
    videoSearchQueries: [
      'Imperial Ambitions agents guide',
      'Imperial Ambitions agent upgrades',
    ],
    tags: ['Agents', 'Upgrades', 'Training'],
    relatedRoutes: [
      '/guides/research-books-and-art',
      '/guides/trade-and-smuggling',
      '/guides/exploration-and-colonization',
      '/guides/disband-units-status',
    ],
    body: [
      {
        heading: 'Choose agents by the decision they unlock',
        paragraphs: [
          'Agents are not a combat roster that needs a tier list. They are the actions through which the empire explores, constructs, trades, converts, governs, negotiates and subverts. The best agent is the one that unlocks an action your current position needs. An Explorer is excellent before the map is known and less urgent when the real problem is a starving capital. A Merchant is powerful when another market can close a shortage and useless without a route worth running.',
          'Before training, identify the blocked decision. If you cannot reach a resource, explore or build. If goods exist elsewhere, trade. If unrest is social or religious, use the appropriate administrative or religious specialist. If an army lacks direction, bring a General. Training consumes population and goods, and the current release did not provide a routine disband option when checked, so idle specialists are an expensive habit.',
        ],
      },
      {
        heading: 'Match the seven roles to empire problems',
        paragraphs: [
          'Explorers reveal territory, discover resources and branch into roles such as Geologist, Cartographer, Surveyor or Diplomat. Builders create infrastructure including roads, farms, mines, plantations and forts. Merchants connect markets, establish trade routes and can develop economic specializations. Priests influence religion and can become missionaries, inquisitors or scholarly figures. Shadowmasters work through crime, sabotage and smuggling.',
          'Generals command armies and can influence discipline, occupation and order. Gentlemen cover a broad administrative and intellectual space, with upgrades such as diplomat, linguist, physician, professor or patron depending on the current build. The list matters because several problems have nonmilitary solutions. A tense town might be stabilized through trade, faith, medicine, language or force; the correct tool depends on the cause shown by traits and local conditions.',
        ],
        bullets: [
          'Map or resource unknown: Explorer path.',
          'Infrastructure missing: Builder path.',
          'Goods unavailable but markets accessible: Merchant path.',
          'Religious, cultural, health or governance pressure: Priest or Gentleman path.',
          'War, discipline or occupation: General path.',
          'Black market, sabotage or engineered unrest: Shadowmaster path.',
        ],
      },
      {
        heading: 'Upgrade for a job, not for a brighter icon',
        paragraphs: [
          'An upgrade changes what the agent can do and may also produce intellectual goods such as books or artwork. Read the action unlocked and decide where it will be used next. A Surveyor without a viable colony, a Diplomat with no peace plan or a specialist doctor in a healthy capital may represent opportunity cost while a basic Builder or Merchant would solve the current bottleneck.',
          'Experience is valuable, but do not keep an agent busy with harmful actions just to reach another upgrade. Trade routes, religious actions, occupation and subversion alter towns and relationships. The upgrade path should support the empire plan without creating a second crisis. If the desired branch is not available, adapt to the offered choice rather than assuming a fixed tech tree or perfect build is guaranteed.',
        ],
      },
      {
        heading: 'Keep specialists supported by the class economy',
        paragraphs: [
          'Recruitment draws from citizens of particular education levels, and training temporarily removes people from normal labor. Prepare the required class and goods before opening the queue. If food or luxury supply is already at the limit, the new agent can reduce production and increase demand at the same time. Stabilize the supporting population first.',
          'Protect the social ladder that produces future specialists. Do not promote the entire workforce, but do not consume every educated citizen in one military wave either. Maintain enough peasants for the base economy and enough higher classes for the next important agent or unit. This balanced reserve is more flexible than maximizing one class and discovering later that another process cannot be staffed.',
        ],
      },
      {
        heading: 'Retire the idea of disposable agents',
        paragraphs: [
          'At launch, the developer explained that units were intentionally not disbandable, while considering a future change after player feedback. Plan as if every recruit is persistent. Reassign an outdated or idle specialist to scouting, garrison support, research-producing upgrades or a secondary town instead of training a duplicate for every local task.',
          'Check current patch notes before relying on a workaround. Deliberately starving agents until they leave is not a sound strategy: hunger reduces efficiency, harms towns and can create migration or unrest. The better answer is recruitment discipline. One agent with a defined route, target and upgrade plan usually contributes more than several specialists waiting for a purpose.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many agent types are in Imperial Ambitions?',
        answer:
          'The current official material describes seven: Explorer, Builder, Merchant, Priest, Shadowmaster, General and Gentleman.',
      },
      {
        question: 'Which Imperial Ambitions agent is best?',
        answer:
          'There is no universal best. Choose the role that solves the current bottleneck in exploration, infrastructure, trade, society, war or subversion.',
      },
      {
        question: 'Can agents help research?',
        answer:
          'Yes. Agent upgrades can create books or artwork used in the research ledger, and specific branches such as Friar are connected to book production.',
      },
    ],
  },
  {
    slug: 'trade-and-smuggling',
    path: '/guides/trade-and-smuggling',
    title:
      'Imperial Ambitions Trade and Smuggling: Build Routes With a Purpose',
    seoTitle: 'Imperial Ambitions Trade & Smuggling Guide',
    seoDescription:
      'Create useful trade routes, configure capital imports and exports, and use smuggling only when its corruption cost solves a strategic shortage.',
    summary:
      'Use Merchants for legal multi-stop trade and Shadowmasters for hostile black-market access; choose the route by shortage, politics and social cost.',
    category: 'Economy',
    difficulty: 'Intermediate',
    coverImageUrl: '/imperial-ambitions/screenshots/9.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Uses the released Steam economy description and the Steam-linked Trade and Smuggling, Merchant and Shadowmaster manual pages.',
    videoSearchQueries: [
      'Imperial Ambitions trade guide',
      'Imperial Ambitions smuggling',
    ],
    tags: ['Trade', 'Smuggling', 'Markets'],
    relatedRoutes: [
      '/guides/resources-and-production-chains',
      '/guides/diplomacy-and-grudge',
      '/guides/agents-and-upgrades',
      '/guides/towns-and-logistics',
    ],
    body: [
      {
        heading: 'Start a route because one good has a destination',
        paragraphs: [
          'A Merchant route should answer two questions: what is being bought, and where will it be sold or delivered? Do not draw a long loop through every visible town and hope profit appears. Markets value goods differently, tariffs reduce returns and hostile or boycotting factions can block legal access. Begin with one shortage at home or one obvious external demand, then build the shortest route that tests the idea.',
          'The Merchant physically travels, so distance and safety matter. A nominally profitable route that takes too long or crosses a war zone may fail the empire when the capital needs the imported good now. Use a small route first, inspect the trade ledger after a complete cycle and add waypoints only when each stop has a clear purpose.',
        ],
      },
      {
        heading: 'Configure the capital before blaming the merchant',
        paragraphs: [
          'Capital imports and exports depend on the Trade tab and its toggles. A Merchant can reach the capital and still fail to exchange the expected good if import or export is disabled. Conversely, an enabled export can remove a scarce input required by domestic production. Review the capital policy before changing the route itself.',
          'Separate profit from resilience. Export a true surplus, not a resource that only looks abundant before the next training or production cycle. Import the specific bottleneck rather than buying every luxury. The best route can be one that earns little but keeps fabric, gunpowder, food or another critical chain operating when local geography cannot supply it.',
        ],
        bullets: [
          'Confirm the good is enabled for the intended capital import or export.',
          'Check the selling town actually demands the item instead of producing its own surplus.',
          'Include tariffs, travel time and diplomatic access in the route decision.',
        ],
      },
      {
        heading: 'Use smuggling when diplomacy closes the legal market',
        paragraphs: [
          'Smuggling is the alternative when normal trade is blocked by hostility, boycott or the need to access a black market. Shadowmasters can create or exploit criminal networks and connect a hostile town to the capital without ordinary agreement. That access is strategically powerful because it can obtain a missing good without winning a war or repairing relations first.',
          'The cost is not merely price. Crime and corruption affect towns, create social pressure and may require governors, inquisitors or other responses later. Use smuggling for a resource whose strategic value exceeds those consequences. Running black-market routes for ordinary goods can turn a temporary shortage into a permanent governance problem.',
        ],
      },
      {
        heading: 'Diagnose a route from the first failed exchange',
        paragraphs: [
          'When a route produces nothing, inspect it in order: the agent exists and can act, the first town has the good, the next town accepts or demands it, diplomatic access allows the transaction, the path is reachable, and the capital policy permits the final import or export. Stop at the first failed condition. Rebuilding the route before identifying that condition often reproduces the same failure.',
          'Watch actual inventory and ledger changes over more than one turn. A route may spend its first cycle traveling, or a purchased input may be consumed immediately by domestic production. Confirm that the expected good entered the correct warehouse and that another process did not use it. The route is working if it changes the intended bottleneck, even when the final stock number remains low.',
        ],
      },
      {
        heading: 'Choose production, trade or smuggling deliberately',
        paragraphs: [
          'Produce locally when the raw inputs, labor and logistics are reliable. Trade when another faction can supply the gap at acceptable cost and relations are stable. Smuggle when the resource is strategically important and legal access is unavailable. Colonize or replant when the demand is permanent enough to justify a new town and long-term logistics. These are alternatives, not a progression in which one always replaces the others.',
          'Revisit the choice after the map or diplomacy changes. A wartime smuggling route may become unnecessary after peace, while a once-profitable trade route may be dangerous when Grudge rises. The economy is strongest when routes can be cancelled or redirected without collapsing civilian supply. Build redundancy around essential goods and let speculative commerce remain optional.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why is my Merchant not trading at the capital?',
        answer:
          'Check the Trade tab import and export toggles, the route’s goods, market demand, tariffs, diplomatic access and whether the Merchant has completed a travel cycle.',
      },
      {
        question: 'What is the difference between trade and smuggling?',
        answer:
          'Trade uses a Merchant, normal market access and tariffs. Smuggling uses a Shadowmaster and criminal access when legal trade is blocked, but increases corruption and social risk.',
      },
      {
        question: 'Should I export every surplus resource?',
        answer:
          'No. Keep reserves for food, training and production chains. Export only after the next domestic demand is covered.',
      },
    ],
  },
  {
    slug: 'social-classes',
    path: '/guides/social-classes',
    title: 'Imperial Ambitions Social Classes: Promote Without Breaking Supply',
    seoTitle: 'Imperial Ambitions Social Classes Guide',
    seoDescription:
      'Balance slaves, peasants, apprentices, artisans and masters in Imperial Ambitions while protecting labor, food and class-specific luxury supply.',
    summary:
      'Promote only for a required process, agent or unit; every higher class changes labor and consumption, so education must follow a supply plan.',
    category: 'Society',
    difficulty: 'Intermediate',
    coverImageUrl: '/imperial-ambitions/guides/social-classes.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'Current class names and promotion logic are anchored to the Steam-linked Social classes and Training pages; the older official society video is visual support.',
    videoSearchQueries: [
      'Imperial Ambitions social classes',
      'Imperial Ambitions society guide',
    ],
    video: videos.society,
    tags: ['Social classes', 'Education', 'Population'],
    relatedRoutes: [
      '/guides/production-and-labor',
      '/guides/traits-unrest-and-disease',
      '/guides/agents-and-upgrades',
      '/guides/food-and-shortages',
    ],
    body: [
      {
        heading: 'Treat class promotion as an economic conversion',
        paragraphs: [
          'Imperial Ambitions models five classes: slaves, peasants, apprentices, artisans and masters. The free-class education path rises from Peasant to Apprentice to Artisan to Master. Promotion is not a free upgrade to a better citizen. It consumes goods, changes the citizen’s role and adds class-specific luxury demand. The right question is not whether promotion is available, but which new process, agent or unit will repay the cost.',
          'Keep the base of the economy broad enough to work raw production and ordinary needs. Promote a small number for the next specialist task, then observe food, luxury and labor changes over a turn. If essential output falls, the promotion happened before its supporting chain was ready. Repair supply before creating another higher-class citizen.',
        ],
      },
      {
        heading: 'Build a class mix around jobs, not percentages',
        paragraphs: [
          'There is no universal ideal ratio because factions, maps and shortages differ. Count the jobs that require each class: active processes, planned agents, military recruitment and a small reserve. The remaining population should stay in the classes that keep food and raw goods flowing. A percentage copied from another campaign can be wrong when your geography, trade access or technology differs.',
          'Higher education can improve or unlock labor contributions, but advanced citizens also require more specialized goods. A Master with no supported role may consume scarce luxury while contributing less to the immediate food crisis than the Peasant who was promoted. Use the production and training ledgers together so every class change has a destination.',
        ],
        bullets: [
          'List the exact agents, units or processes that require promotion.',
          'Promote the smallest group that fills those jobs.',
          'Keep at least one replacement path for an important specialist class.',
        ],
      },
      {
        heading: 'Prepare luxury supply before the classroom opens',
        paragraphs: [
          'Class demand escalates through different luxury categories. If those goods are missing, education can produce unrest and reduced efficiency instead of progress. Inspect local production, imports and town logistics before promoting. The required luxury does not need a massive stockpile, but the empire needs a repeatable way to obtain it.',
          'Use trade when geography makes a good difficult to produce, and colonization or replantation when the shortage is permanent enough to justify infrastructure. Do not export a class luxury while promoting citizens who will consume it next turn. Production, trade and education are one plan even though they occupy different ledgers.',
        ],
      },
      {
        heading: 'Account for training downtime',
        paragraphs: [
          'The manual notes that citizens stop contributing normal labor while training and that standard training takes a turn. That temporary loss can close a process that was running at the exact labor limit. Begin training only after essential production has spare capacity, or reduce a noncritical process first so the economy fails gracefully.',
          'Stagger promotions and recruitment. Training several specialists at once feels efficient but can remove a large part of the workforce and then add several new consumers simultaneously. One promotion cycle at a time makes the consequence visible and preserves an emergency response if food, disease or war changes the plan.',
        ],
      },
      {
        heading: 'Judge the ladder by stability, not maximum education',
        paragraphs: [
          'A successful class system can keep citizens fed, supply their required goods and fill essential jobs without depending on one fragile import. It may include many peasants for a long time. Imperial Ambitions is not a race to turn the entire population into Masters; the different classes form a production and recruitment structure.',
          'When unrest or labor loss appears after promotion, do not promote again to compensate. Check the new class demand, training downtime, town logistics and the traits of affected citizens. Reverse the economic pressure by improving supply or pausing advanced recruitment. The education ladder is strongest when every step has both a job and a supported standard of living.',
        ],
      },
    ],
    faq: [
      {
        question: 'What are the five social classes in Imperial Ambitions?',
        answer:
          'The official material lists slaves, peasants, apprentices, artisans and masters.',
      },
      {
        question: 'What is the normal promotion path?',
        answer:
          'The free-class path is Peasant to Apprentice to Artisan to Master. Promote for a required job and prepare the next class’s goods first.',
      },
      {
        question: 'Why did labor fall after training citizens?',
        answer:
          'Citizens temporarily stop ordinary work while training, and the new class may change demand. Keep spare labor and stagger promotions.',
      },
    ],
  },
  {
    slug: 'traits-unrest-and-disease',
    path: '/guides/traits-unrest-and-disease',
    title:
      'Imperial Ambitions Traits, Unrest and Disease: Read the Warning Chain',
    seoTitle: 'Imperial Ambitions Traits, Unrest & Disease Guide',
    seoDescription:
      'Understand how hunger, disease, culture, religion, wealth and experience shape traits, labor, migration, unrest and military behavior.',
    summary:
      'Traits turn economic and social pressure into behavior; fix the cause—food, health, crime, inequality or discrimination—before suppressing the final symptom.',
    category: 'Society',
    difficulty: 'Intermediate',
    coverImageUrl: '/imperial-ambitions/guides/traits.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Anchored to the released Steam trait description and Steam-linked Traits / Towns pages, with a July 7 official explainer as visual support.',
    videoSearchQueries: [
      'Imperial Ambitions traits',
      'Imperial Ambitions unrest disease',
    ],
    video: videos.traits,
    tags: ['Traits', 'Unrest', 'Disease'],
    relatedRoutes: [
      '/guides/social-classes',
      '/guides/towns-and-logistics',
      '/guides/diplomacy-and-grudge',
      '/guides/food-and-shortages',
    ],
    body: [
      {
        heading: 'Read traits as history attached to a person',
        paragraphs: [
          'Traits describe identity, personality, experience and current condition. Culture and religion shape social relationships; hunger, illness, trauma and wealth reflect what has happened; military experience can affect performance; personality can influence spontaneous actions. A trait is therefore not merely a buff to collect or a penalty to reroll. It is evidence about the pressure acting on a citizen, agent or regiment.',
          'Open the individual and local town information before choosing a response. If several citizens share hunger or disease, the cause is probably systemic. If one agent has a risky personality trait, reassignment may be enough. The scale of the trait tells you whether to change empire policy, town supply or one unit’s job.',
        ],
      },
      {
        heading: 'Follow hunger from warehouse to protest',
        paragraphs: [
          'The official description connects food shortage to lower efficiency, unrest and starvation. Hungry soldiers can begin with fewer action points, while starving workers make the food economy weaker. This is a feedback loop: shortage creates traits, traits reduce output, reduced output deepens shortage. Break it at the earliest point by protecting food and reducing demand.',
          'Do not answer a food-driven protest only with force. A General may restore order temporarily, but the hunger trait remains until supply changes. Pause training and exports, improve local logistics and move food before expanding. Once the cause is removed, social pressure has a chance to decline without creating additional trauma or resentment.',
        ],
        bullets: [
          'Shared hunger or illness across a town usually indicates a supply or health-system problem.',
          'A single risky agent trait may be handled by role choice or supervision.',
          'Use force only when immediate safety requires it; then repair the original pressure.',
        ],
      },
      {
        heading: 'Contain disease before trade carries it farther',
        paragraphs: [
          'Disease removes labor and can spread through connected populations, routes or nearby units. A productive trade hub can therefore become an efficient transmission point. When illness appears, inspect food, crowding, movement and available medical specialists. A physician, herbalist, plague doctor or other health-related upgrade may help, but reducing exposure and keeping the town supplied are equally important.',
          'Avoid sending an affected regiment through multiple towns while diagnosing the problem. The military cost of waiting one turn can be smaller than the labor cost of a regional epidemic. Keep a healthy reserve of workers and food so isolation does not immediately collapse production.',
        ],
      },
      {
        heading: 'Distinguish inequality, crime and discrimination',
        paragraphs: [
          'Unrest can come from different social mechanisms. Wealth gaps can encourage crime and banditry. Cultural or religious differences can create discrimination and migration. A criminal network may enable smuggling but also spread corruption. These problems may look similar in the final protest number, yet the correct agents and policies differ.',
          'Use a linguist or diplomatic path for cultural friction, religious specialists for faith conflict, governors or investigators for crime, trade and supply for poverty, and military control for an immediate security threat. The goal is not to erase every difference. It is to prevent pressure from becoming a self-reinforcing cycle of fear, violence, migration and lower production.',
        ],
      },
      {
        heading: 'Let consequences guide the next policy',
        paragraphs: [
          'Imperial Ambitions is designed so expansion choices leave human effects. Occupation, plunder, forced movement and religious pressure can create traits that persist after the immediate strategic benefit. Before taking an action, decide whether the empire can manage the resulting town, refugees and diplomatic reaction. A profitable conquest can become a long-term labor and security cost.',
          'Review traits after major events, not only when a crisis appears. The new conditions tell you which town needs food, medicine, language support, policing or a lighter occupation. This turns the trait system into an early warning network. Acting while the signal is small is usually cheaper than waiting for riots, disease or migration to remove the population you intended to control.',
        ],
      },
    ],
    faq: [
      {
        question: 'What do traits affect in Imperial Ambitions?',
        answer:
          'Traits can affect behavior, loyalty, action points, migration, labor and combat performance, and may cause spontaneous actions.',
      },
      {
        question: 'How do I reduce unrest?',
        answer:
          'Identify the cause first: hunger, disease, crime, inequality, discrimination, religion or occupation. Use supply, health, social or military tools that match that cause.',
      },
      {
        question: 'Can trade spread disease?',
        answer:
          'The town manual warns that disease can spread through trade routes or nearby units, so limit movement and stabilize the affected population before resuming heavy traffic.',
      },
    ],
  },
  {
    slug: 'resources-and-production-chains',
    path: '/guides/resources-and-production-chains',
    title: 'Imperial Ambitions Resources: Build Only the Chains You Need',
    seoTitle: 'Imperial Ambitions Resources & Production Chains',
    seoDescription:
      'Organize raw, processed, transport and intellectual goods in Imperial Ambitions, then choose production, trade, replantation or colonization.',
    summary:
      'Map every essential finished good to its raw inputs and one backup source; do not attempt to manufacture all 40+ resources in every campaign.',
    category: 'Economy',
    difficulty: 'Reference',
    coverImageUrl: '/imperial-ambitions/screenshots/5.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Resource categories come from the released Steam description and Steam-linked Resources / Manufacturing pages. Exact active recipes remain build-dependent.',
    videoSearchQueries: [
      'Imperial Ambitions resources',
      'Imperial Ambitions production chains',
    ],
    tags: ['Resources', 'Production chains', 'Warehouse'],
    relatedRoutes: [
      '/guides/production-and-labor',
      '/guides/trade-and-smuggling',
      '/guides/exploration-and-colonization',
      '/guides/research-books-and-art',
    ],
    body: [
      {
        heading: 'Sort resources by the decision they support',
        paragraphs: [
          'The game contains more than forty goods, but the useful mental model is smaller. Raw resources come from worked sites. Processed goods turn raw inputs and labor into food, class luxuries, construction or military materials. Transport goods such as wagons and vessels enable logistics. Intellectual goods—books and artwork—support technology. Grouping the warehouse this way makes a shortage point to a system instead of a wall of icons.',
          'Choose a few finished goods that define the current plan. Early priorities usually include food and the materials required for the next promotion, agent or route. Military and colonial goods become critical only when those actions are scheduled. A resource with no planned consumer is inventory, not progress.',
        ],
      },
      {
        heading: 'Draw the shortest chain from raw tile to finished use',
        paragraphs: [
          'For every important output, trace raw source, town, logistics, warehouse, process, labor and consumer. If the chain crosses the sea, include vessels and a dock. If it crosses a border, include trade access and tariffs. This reveals whether the problem is production, movement or policy before you spend another turn.',
          'Prefer short chains while the empire is small. A good that requires two local inputs and stable labor is safer than one depending on a distant colony, a hostile market and a single Merchant. Complexity is justified when the output unlocks a strategic action; it is wasteful when it only increases an already comfortable stockpile.',
        ],
        bullets: [
          'Raw examples include grains, livestock, plantation crops, timber and ores.',
          'Processed categories include food, luxury goods, fabric, paper, metals and gunpowder.',
          'Transport goods move units or cargo; intellectual goods support research.',
        ],
      },
      {
        heading: 'Use geography as a reason to trade, not a failure',
        paragraphs: [
          'Some campaigns will not offer every input nearby. The game supports trade, smuggling, replantation and colonization so the player can respond to geography. Compare the duration and consequences of each option. A Merchant route may close an immediate shortage; a colony may take longer but produce a permanent strategic resource; smuggling may work during hostility at the cost of corruption.',
          'Avoid founding a colony for a resource that can be imported cheaply and safely. Likewise, do not make an essential military chain depend forever on one hostile market. The correct choice changes with war, Grudge, population and technology. Maintain a backup for the good whose loss would stop food, movement or defense.',
        ],
      },
      {
        heading: 'Protect scarce inputs from automatic consumption',
        paragraphs: [
          'Automation can assign labor and enable import or export, but it cannot know your next strategic decision. A scarce input may disappear into a low-priority luxury or export while the intended agent, vessel or weapon remains unavailable. Review policies whenever a new process unlocks or a promotion changes demand.',
          'Keep deliberate reserves. Decide the minimum stock for the next training batch or voyage, then allow surplus to feed other chains. If the reserve repeatedly vanishes, identify every consumer rather than increasing extraction by default. One disabled export or paused secondary process can solve a shortage faster than building another town.',
        ],
      },
      {
        heading: 'Expand the chain only after it survives disruption',
        paragraphs: [
          'Test how the economy behaves when a Merchant is delayed, a town loses labor or an army consumes extra supply. If one event stops the entire chain, add stock, an alternate route or another source before scaling demand. Resilience matters because war and social conditions can interrupt the flow even when the production math is correct.',
          'A mature empire does not maximize every number. It knows which goods must never reach zero, which can be imported temporarily and which are optional. Keep this hierarchy visible in your labor and trade choices. The result is a smaller set of stable chains that support exploration, research and war without turning every new resource into another obligation.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many resources are in Imperial Ambitions?',
        answer:
          'The official Steam page describes more than 40 unique resources and goods across raw, processed, transport and intellectual uses.',
      },
      {
        question: 'Do I need to produce every resource?',
        answer:
          'No. Produce essential local chains and use trade, smuggling, replantation or colonization for important geographic gaps.',
      },
      {
        question: 'What are intellectual goods?',
        answer:
          'Books and artwork are intellectual resources associated with agent upgrades and technology research.',
      },
    ],
  },
  {
    slug: 'exploration-and-colonization',
    path: '/guides/exploration-and-colonization',
    title:
      'Imperial Ambitions Exploration and Colonization: Plan the Return Trip',
    seoTitle: 'Imperial Ambitions Exploration & Colonization Guide',
    seoDescription:
      'Scout resources, choose Explorer upgrades, carry enough vessels and found New World towns that can feed themselves and support the capital.',
    summary:
      'Explore to answer a resource question, colonize only after confirming food and transport, and keep enough vessels and logistics for every unit to return.',
    category: 'Empire',
    difficulty: 'Intermediate',
    coverImageUrl: '/imperial-ambitions/screenshots/6.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'Uses the released Steam colonization description and Steam-linked Explorer, Expanding borders, Seafaring and Towns pages.',
    videoSearchQueries: [
      'Imperial Ambitions colonization guide',
      'Imperial Ambitions New World exploration',
    ],
    tags: ['Explorer', 'New World', 'Colonies'],
    relatedRoutes: [
      '/guides/ships-and-seafaring',
      '/guides/towns-and-logistics',
      '/guides/resources-and-production-chains',
      '/guides/factions-maps-and-replayability',
    ],
    body: [
      {
        heading: 'Explore with a question, not a direction',
        paragraphs: [
          'Send an Explorer to find something the empire needs: a coastline, a missing crop, ore, a safe route or contact with another faction. Moving into fog without a question creates map knowledge but not necessarily a decision. The resource ledger should tell you what discovery would change the economy, and that priority should determine where the expedition goes first.',
          'Explorer upgrades specialize the answer. Geologist, Cartographer, Surveyor, Diplomat and other paths can support resource discovery, mapping, settlement or contact. Choose the branch that fits the current unknown. Do not take a colonization path merely because land is visible if the real bottleneck is ore or diplomatic access.',
        ],
      },
      {
        heading: 'Price the colony before embarking',
        paragraphs: [
          'A colony costs more than the settler or agent that founds it. Count vessels for every transported unit, food during the opening, the population and class mix, local infrastructure, town logistics, a way to send output home and a return route. If the target resource is not valuable enough to repay those dependencies, trade may be the better answer.',
          'Choose a landing site that can survive before it exports. Nearby food and a defensible shore matter more in the first turns than maximum long-term resource density. A town that immediately requires several imports can trap vessels in permanent emergency supply and delay the reason the colony was founded.',
        ],
        bullets: [
          'Scout the coastline and intended resource tile before moving the full group.',
          'Carry one vessel per unit and decide where those vessels will remain after landing.',
          'Confirm a local food plan and the first logistics upgrade before adding population.',
        ],
      },
      {
        heading:
          'Use settlement, subversion or conquest for different outcomes',
        paragraphs: [
          'Expansion can come through founding a settlement, taking territory by force or destabilizing a town before annexation. Settlement gives more control over location but requires population and logistics from the ground up. Conquest is faster but can produce casualties, Grudge and hostile residents. Subversion may reduce direct battle cost while increasing crime, religious conflict or social damage.',
          'Pick the method based on what the empire can manage after ownership changes. If food, agents and garrison capacity are limited, a hostile conquered city can cost more than an empty settlement. If a critical port already exists, occupation may still be worthwhile. The acquisition method is only the first turn of the town’s story.',
        ],
      },
      {
        heading: 'Make the first colonial export boring and reliable',
        paragraphs: [
          'Start with the single resource that justified the colony. Work the site, stabilize the town, raise logistics and confirm the good reaches the capital. Do not begin multiple plantation or manufacturing chains before this loop works. A reliable trickle closes a strategic gap; several half-built chains consume labor and leave the colony unable to feed itself.',
          'Protect the route with spare vessels or a dock plan. Ships left on a shore can be used by other players, so a return fleet is not guaranteed merely because it arrived. If the route crosses hostile water or depends on one agent, keep a reserve and avoid exporting all local food.',
        ],
      },
      {
        heading: 'Know when to stop expanding',
        paragraphs: [
          'Pause when the capital loses food or labor, the colony cannot maintain local supply, vessels are trapped, or Grudge creates a war you cannot support. The New World is not a score that must be filled immediately. Randomized geography and hidden technology reward scouting and adaptation more than a fixed land rush.',
          'A successful first colony has a stable population, one working export, a protected connection and enough flexibility to survive a delayed ship. Once those conditions hold for several turns, the settlement can support a second chain or another expedition. Until then, improve the existing loop instead of creating a second remote crisis.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I look for before founding a colony?',
        answer:
          'Confirm the target resource, local food, safe landing, vessels for every unit and a realistic logistics route back to the capital.',
      },
      {
        question: 'Which Explorer upgrade should I choose?',
        answer:
          'Choose by the unknown you need to resolve: resources, mapping, settlement or diplomacy. There is no universal best branch.',
      },
      {
        question: 'Can I expand without direct conquest?',
        answer:
          'Yes. The game supports settlement and subversion-based expansion as alternatives, each with different economic and social costs.',
      },
    ],
  },
  {
    slug: 'battles-and-regiments',
    path: '/guides/battles-and-regiments',
    title: 'Imperial Ambitions Battles and Regiments Guide',
    seoTitle: 'Imperial Ambitions Battle Guide - Regiments & Terrain',
    seoDescription:
      'Prepare Imperial Ambitions regiments, link columns, preserve action points and use range, cover and terrain before committing to battle.',
    summary:
      'Enter war with supplied regiments, approach as a linked column, then separate into useful firing lines only when terrain and action points support the attack.',
    category: 'Warfare',
    difficulty: 'Intermediate',
    coverImageUrl: '/imperial-ambitions/screenshots/1.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Cross-checked against the Steam-linked Battle, Regiment and Regiment linking manual pages and the developer regiment-linking video.',
    videoSearchQueries: [
      'Imperial Ambitions battle guide',
      'Imperial Ambitions regiment linking',
    ],
    video: videos.battles,
    tags: ['Battle', 'Regiments', 'Action points'],
    relatedRoutes: [
      '/guides/diplomacy-and-grudge',
      '/guides/traits-unrest-and-disease',
      '/guides/ships-and-seafaring',
      '/guides/disband-units-status',
    ],
    body: [
      {
        heading: 'Win the preparation turn before the battle turn',
        paragraphs: [
          'A regiment should arrive with food, ammunition, useful traits and enough action points to react after contact. Check the route and supply chain before declaring war. An army that spends its last action points reaching the enemy has fewer options to take cover, adjust its formation or exploit a weak flank.',
          'Choose a concrete objective such as opening a road, defending a town or taking a port. Battle creates casualties and Grudge, so a fight without a strategic result is usually a poor exchange. If the same objective can be reached through diplomacy, trade or a different route, price those options before committing troops.',
        ],
      },
      {
        heading: 'Use linked regiments for movement, not as a permanent shape',
        paragraphs: [
          'Regiment linking lets several formations move as a column and reduces the repeated orders needed on the campaign map. Build the column before the march, put its slowest or most vulnerable element where it can be protected, and keep the route clear. Linking is a coordination tool; it does not make every regiment equally suitable for the same terrain.',
          'Break or reposition the column before the firing line becomes congested. Ranged units need line of sight and range, while close units need an approach that does not block friendly fire. Leaving every formation stacked on the road gives the opponent one obvious target and wastes the width of the battlefield.',
        ],
      },
      {
        heading: 'Treat action points as a combat reserve',
        paragraphs: [
          'Movement, formation changes and attacks compete for action points. Preserve a reserve when approaching possible contact. The current manual describes a minimum action-point condition for initiating battle and additional blocking rules, but exact values can change with patches or unit state. Read the live interface before relying on a memorized threshold.',
          'A useful turn ends with options. If one regiment fires, another should still be able to cover an approach or close a gap. Avoid spending every unit to maximum distance simply because the path is available. Shorter moves that retain cover and mutual support are often stronger than the most aggressive legal move.',
        ],
        bullets: [
          'Check range and line of sight before issuing the first attack.',
          'Keep a reserve regiment or action-point buffer for an unexpected direction.',
          'Use terrain and cover to reduce exposure rather than concentrating on damage alone.',
        ],
      },
      {
        heading: 'Match formation and traits to the ground',
        paragraphs: [
          'Open ground, settlements, forests and shore approaches create different problems. Long firing lines can control open routes, while restricted ground rewards compact positioning and deliberate movement. Inspect unit traits before deciding who leads: the best formation on paper can underperform when a trait, illness or supply problem reduces its reliability.',
          'Do not let a damaged regiment become the permanent front merely because it is already selected. Rotate depleted units, protect experience that is expensive to replace and keep the town behind the army able to feed survivors. The campaign continues after the engagement, so preservation is part of victory.',
        ],
      },
      {
        heading: 'Stabilize the political result after winning',
        paragraphs: [
          'A captured or defended tile is only useful when the surrounding economy can support it. Reconnect logistics, treat disease, replace losses and review Grudge with every affected faction. Repeated victories can still produce an unsustainable frontier if they trigger new wars faster than the empire can supply regiments.',
          'Before advancing again, ask whether the first objective is secure without the whole army standing on it. If not, improve the road, town, port or diplomatic situation. A stable gain lets the next campaign begin from strength; an isolated gain turns the next battle into an evacuation.',
        ],
      },
    ],
    faq: [
      {
        question: 'What does linking regiments do?',
        answer:
          'It coordinates several regiments as a moving column. Use it for the march, then arrange formations for range, cover and terrain before combat.',
      },
      {
        question: 'Why can I not start a battle?',
        answer:
          'Check war state, distance, action points and whether another unit or rule is blocking contact. Read the live tooltip because thresholds can change.',
      },
      {
        question: 'Should I use every action point before ending a turn?',
        answer:
          'Usually no. A reserve preserves reactions, cover adjustments and safer positioning when the enemy changes the situation.',
      },
    ],
  },
  {
    slug: 'ships-and-seafaring',
    path: '/guides/ships-and-seafaring',
    title: 'Imperial Ambitions Ships and Seafaring Guide',
    seoTitle: 'Imperial Ambitions Ships Guide - Transport & Return',
    seoDescription:
      'Move units across water in Imperial Ambitions, manage one vessel per unit, use docks safely and avoid stranding an expedition in the New World.',
    summary:
      'Count one vessel for every unit, decide between dock and shore disembarkation before sailing, and protect enough transport for the return trip.',
    category: 'Warfare',
    difficulty: 'Intermediate',
    coverImageUrl: '/imperial-ambitions/screenshots/9.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Uses the Steam-linked Seafaring manual page and the developer video demonstrating shore disembarkation.',
    videoSearchQueries: [
      'Imperial Ambitions ships guide',
      'Imperial Ambitions disembark New World',
    ],
    video: videos.ships,
    tags: ['Ships', 'Transport', 'New World'],
    relatedRoutes: [
      '/guides/exploration-and-colonization',
      '/guides/towns-and-logistics',
      '/guides/battles-and-regiments',
      '/guides/disband-units-status',
    ],
    body: [
      {
        heading: 'Count vessels by units, not by expedition',
        paragraphs: [
          'Imperial Ambitions associates one vessel with each transported unit. A group of agents, regiments and settlers therefore needs enough individual transport capacity for every member. Count the passengers before leaving port and repeat the count before the return. Do not assume one visible fleet marker means unlimited space.',
          'Include contingency capacity when the expedition may recruit, rescue or reorganize overseas. A voyage that can just carry the outbound group has no room for a new unit or an emergency evacuation. If spare vessels are too expensive, reduce the expedition rather than gambling every unit on a perfect route.',
        ],
      },
      {
        heading: 'Choose dock or shore disembarkation deliberately',
        paragraphs: [
          'A dock provides the safer logistics loop: vessels can return to storage and be used again through established infrastructure. A shore landing is more flexible for exploration or invasion, but the vessels remain on the shore. The manual warns that other players can take vessels left there, so the beach is not secure storage.',
          'Before clicking disembark, decide who protects the landing and how the fleet will be recovered. If no town, dock or friendly unit can hold the shore, keep the most important passengers aboard or select a different landing. The fastest beach can become the slowest route home.',
        ],
        bullets: [
          'Use a dock when repeat transport and reliable storage matter most.',
          'Use a shore only when flexibility is worth the risk of exposed vessels.',
          'Leave enough protection and food for the landing site to survive a delayed return.',
        ],
      },
      {
        heading: 'Separate transport, supply and exploration jobs',
        paragraphs: [
          'The vessel that discovers a coast, the vessel that carries settlers and the vessel that keeps a colony supplied do not need to be the same asset. Splitting these jobs creates a reserve when one route is interrupted. It also prevents a scouting decision from accidentally committing the entire colonial supply chain.',
          'Use a small scouting group to reveal safe approaches, then schedule the settlement group after the site is understood. Keep routine supply predictable: one working route carrying food or export goods is more useful than several ships moving without a ledger-based purpose.',
        ],
      },
      {
        heading: 'Recover a group that seems stuck overseas',
        paragraphs: [
          'First inspect the coast for vessels left on a previous shore, then count the units that need transport. Check whether a dock holds vessels, whether another player took exposed ships and whether movement or action points are the immediate blocker. Move the group to a legal embarkation point rather than repeatedly ordering a direct path across water.',
          'If transport is genuinely short, send additional vessels from a safe port and stabilize local food while waiting. Do not intentionally underfeed units to make them disappear; the released design does not offer normal military disbanding, and starvation is a damaging emergency state rather than a transport solution.',
        ],
      },
      {
        heading: 'Design every voyage with a return condition',
        paragraphs: [
          'Write the return condition in practical terms: a dock completed, a protected shore, a spare vessel at home or a permanent colony that no longer needs the original group. If none of those conditions is credible, the expedition is too large or too early.',
          'Review this condition whenever war, Grudge or ownership changes along the coast. A route that was safe when the fleet sailed may be unusable on the return. The best maritime plan has at least one alternative port and enough reserve to wait without collapsing the local economy.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many vessels do I need?',
        answer:
          'Plan for one vessel per transported unit, plus a reserve if the group may grow or require an emergency evacuation.',
      },
      {
        question: 'What happens to ships after a shore landing?',
        answer:
          'They remain at the shore and may be taken by other players. Protect the landing or use a dock when reliable storage matters.',
      },
      {
        question: 'How do I return from the New World?',
        answer:
          'Find or send enough vessels, gather at a legal embarkation point and preserve food and action points while the route is restored.',
      },
    ],
  },
  {
    slug: 'diplomacy-and-grudge',
    path: '/guides/diplomacy-and-grudge',
    title: 'Imperial Ambitions Diplomacy and Grudge Guide',
    seoTitle: 'Imperial Ambitions Diplomacy Guide - Grudge & Peace',
    seoDescription:
      'Understand directional Grudge, the war threshold, Diplomat peace conditions and the economic consequences of hostile actions in Imperial Ambitions.',
    summary:
      'Track how each faction feels about the other, keep both Grudge values below the peace threshold and treat every hostile action as a future economic cost.',
    category: 'Empire',
    difficulty: 'Intermediate',
    coverImageUrl: '/imperial-ambitions/screenshots/3.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Based on the current Steam-linked Diplomacy manual, including directional Grudge and Diplomat peace conditions.',
    videoSearchQueries: [
      'Imperial Ambitions diplomacy guide',
      'Imperial Ambitions Grudge peace',
    ],
    tags: ['Diplomacy', 'Grudge', 'War'],
    relatedRoutes: [
      '/guides/trade-and-smuggling',
      '/guides/battles-and-regiments',
      '/guides/agents-and-upgrades',
      '/guides/exploration-and-colonization',
    ],
    body: [
      {
        heading: 'Read Grudge as two relationships, not one score',
        paragraphs: [
          'Grudge runs from 0 to 100 and is directional. Your faction can resent another faction more or less than it resents you. Read both values before planning peace, trade or a provocation. A calm value on one side does not cancel hostility on the other.',
          'The current manual uses 50 as the important war threshold. Because a relationship can move after actions and patches may adjust details, inspect the diplomacy ledger immediately before a major decision. Treat a value close to the threshold as unstable rather than safely peaceful.',
        ],
      },
      {
        heading: 'Price hostile actions before taking them',
        paragraphs: [
          'Plundering, massacre, conquest, subversion and other hostile actions can solve a short-term military or economic problem while creating long-term Grudge. The real cost is not only the action points or casualties. It can also remove trade access, force a garrison, expose shipping and create a second front.',
          'Ask what the action secures and how many turns it will take to repay the political cost. Taking a port that completes an essential route may be defensible. Raiding a low-value town because troops happen to be nearby often is not. Use the diplomacy ledger as part of the production plan, not as a separate minigame.',
        ],
      },
      {
        heading: 'Prepare peace on both sides',
        paragraphs: [
          'The manual says a Diplomat can establish peace when both sides have Grudge below 50. That makes peace a two-sided preparation problem. Reduce provocations, stop actions that keep hostility rising and position the appropriate agent before the economy is exhausted.',
          'Do not wait until the last supplied regiment is trapped. A peace plan needs travel time and a usable diplomatic path. If one side remains above the threshold, stabilize the frontier and use the interval to restore food, trade and population rather than repeatedly testing an unavailable action.',
        ],
        bullets: [
          'Check both directional values.',
          'Stop new hostile actions before trying to reduce the relationship.',
          'Have a Diplomat available and verify the live action requirements.',
        ],
      },
      {
        heading: 'Use trade to make peace materially valuable',
        paragraphs: [
          'A peaceful border is strongest when both sides benefit from it. Identify goods that can resume moving, a port that can reopen or labor that can return from the army. This gives the empire a measurable reason not to restart a low-value conflict.',
          'Trade is not a guarantee of friendship, and smuggling or shortages can still create tension. Maintain alternative suppliers and watch market prices. Diplomacy should reduce risk, not concentrate the entire economy on one neighbor whose Grudge is already close to war.',
        ],
      },
      {
        heading: 'End wars with a postwar plan',
        paragraphs: [
          'After peace, reconnect logistics, move surplus regiments away from sensitive borders and repair towns that carried the supply burden. Review religious, class and faction tensions in occupied areas. A treaty does not automatically resolve the social effects of the conflict.',
          'Set a trigger for re-evaluating the relationship: a Grudge increase, blocked route, hostile agent or lost market. Regular review catches deterioration before it becomes another emergency war. The aim is not permanent trust; it is enough predictability to make the next economic decision confidently.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is Grudge?',
        answer:
          'It is a directional 0–100 measure of hostility between factions. Always check how each faction feels about the other.',
      },
      {
        question: 'When does war begin?',
        answer:
          'The current manual identifies 50 as the key Grudge threshold. Verify the live diplomacy ledger before acting.',
      },
      {
        question: 'How do I make peace?',
        answer:
          'Bring both directional Grudge values below 50, then use the appropriate Diplomat action if its live requirements are met.',
      },
    ],
  },
  {
    slug: 'factions-maps-and-replayability',
    path: '/guides/factions-maps-and-replayability',
    title: 'Imperial Ambitions Factions, Maps and Replayability',
    seoTitle: 'Imperial Ambitions Factions & Random Maps Explained',
    seoDescription:
      'Choose an Imperial Ambitions faction, verify fixed or random map settings and adapt to hidden technology, geography and society each campaign.',
    summary:
      'Choose by starting position and constraints shown in your current build, verify map-generation controls on the new-game screen and adapt instead of following one fixed build order.',
    category: 'Empire',
    difficulty: 'Reference',
    coverImageUrl: '/imperial-ambitions/screenshots/6.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Combines official replayability claims, current manual topics and a developer-marked Steam discussion answer about random-map options. New-game settings remain the final authority.',
    videoSearchQueries: [
      'Imperial Ambitions factions',
      'Imperial Ambitions random map',
    ],
    tags: ['Factions', 'Maps', 'Replayability'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/exploration-and-colonization',
      '/guides/social-classes',
      '/guides/research-books-and-art',
    ],
    body: [
      {
        heading: 'Choose a faction from the live start screen',
        paragraphs: [
          'The playable-faction roster and its starting details belong to the current game build, not to an old preview list. Read the new-game panel for territory, resources, population and special constraints, then choose the position whose first problems you want to solve. This guide does not invent a permanent best-faction ranking.',
          'For a first campaign, favor a start whose food and transport situation is easy to read. For a later campaign, choose a faction that changes the labor, diplomacy or colonial problem. The faction is most interesting when it changes your decisions, not when it supplies a small numerical advantage to the same opening.',
        ],
      },
      {
        heading: 'Verify fixed and random geography before starting',
        paragraphs: [
          'A current developer-marked Steam discussion answer says both the Old World and New World can be random if desired. An official June update also describes regeneration of the Western Hemisphere. Because settings and labels can change around launch, confirm the exact controls in the new-game panel before relying on this statement.',
          'Use a fixed or familiar map to learn interface and production relationships. Use randomized geography when you are ready to scout for food, ores, coastlines and neighbors instead of repeating coordinates. Random does not remove planning; it moves planning from memorization to observation.',
        ],
      },
      {
        heading: 'Build from constraints, not a universal sequence',
        paragraphs: [
          'Start by locating the resource or social constraint that can stop the faction in the next several turns. It may be food, labor class, logistics, access to ore, a hostile border or a missing agent specialty. Address that constraint first and delay upgrades that do not change it.',
          'The same building or upgrade can be excellent in one geography and wasteful in another. Keep a small reserve of labor, goods and action points until the map reveals its real pressure. A flexible first phase survives random placement better than a long queue copied from a different faction.',
        ],
      },
      {
        heading: 'Expect technology and society to change the run',
        paragraphs: [
          'Imperial Ambitions uses a hidden technology structure rather than presenting every future answer at the opening. Books, artwork, agents and discoveries shape which research paths become practical. Social classes, traits, religion, discrimination and disease add another layer that cannot be reduced to a map seed.',
          'Record what became available and why, then use that knowledge as a question in the next run rather than a rigid recipe. If a technology appeared after a particular book or upgrade, try to reproduce the prerequisite while remaining ready for a different discovery order.',
        ],
      },
      {
        heading: 'Define a campaign experiment before turn one',
        paragraphs: [
          'Replayability becomes easier to appreciate when each campaign tests something specific: a trade-first economy, a different class structure, early colonization, defensive diplomacy or a randomized New World. One experiment gives the run direction without forcing every decision.',
          'Stop comparing runs only by expansion speed. Stability, route resilience, social cohesion and the cost of war are equally meaningful results. A slower empire that reveals a reliable system can teach more than a larger empire held together by one fragile supply line.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Imperial Ambitions have random maps?',
        answer:
          'Current developer-marked discussion guidance says both major regions can be randomized if desired. Verify the available settings in your new-game screen.',
      },
      {
        question: 'Which faction is best for beginners?',
        answer:
          'Choose the current start with the clearest food, transport and border situation. There is not enough stable evidence for a universal tier list.',
      },
      {
        question: 'Why do campaigns play differently?',
        answer:
          'Geography, resources, neighbors, hidden technology and the population simulation change which bottleneck matters first.',
      },
    ],
  },
  {
    slug: 'multiplayer-and-platforms',
    path: '/guides/multiplayer-and-platforms',
    title: 'Imperial Ambitions Multiplayer and Platforms',
    seoTitle: 'Imperial Ambitions Multiplayer, Mac & Steam Deck Status',
    seoDescription:
      'Check Imperial Ambitions local multiplayer, Windows and macOS support, Linux and Steam Deck status, accessibility features and save expectations.',
    summary:
      'Steam currently lists local shared/split-screen PvP on Windows and macOS; it does not list official online multiplayer, co-op or Linux support.',
    category: 'Reference',
    difficulty: 'Status',
    coverImageUrl: '/imperial-ambitions/hero.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Platform and feature claims are limited to the current official Steam categories and system requirements checked on July 14, 2026.',
    videoSearchQueries: [
      'Imperial Ambitions multiplayer',
      'Imperial Ambitions macOS',
    ],
    tags: ['Multiplayer', 'macOS', 'Steam Deck'],
    relatedRoutes: [
      '/system-requirements',
      '/download',
      '/guides/factions-maps-and-replayability',
      '/review',
    ],
    body: [
      {
        heading: 'Multiplayer means local PvP in the current listing',
        paragraphs: [
          'The official Steam page lists Multi-player, PvP, Shared/Split Screen PvP and Shared/Split Screen. It does not currently list Online PvP, online co-op or local co-op. Plan for players sharing one device and display unless the developer adds and documents another mode later.',
          'Store tags and community wording can be looser than feature categories. When deciding whether to buy for a group, use the Steam feature panel and the current in-game multiplayer menu. Do not assume Remote Play or third-party streaming changes what the game officially supports.',
        ],
      },
      {
        heading: 'Windows and macOS are the official desktop platforms',
        paragraphs: [
          'Steam currently provides Windows and macOS builds. The Windows minimum calls for a 64-bit operating system and lists Windows 7, an eight-core 3 GHz processor, 8 GB RAM, discrete graphics and DirectX 11. The macOS section supports Apple Silicon and Intel but leaves the minimum OS as TBD.',
          'There is no official Linux build in the current platform listing. Compatibility layers may work for some users, but that would be an unsupported experiment rather than a purchase guarantee. Keep playtime and refund limits in mind when testing an unofficial configuration.',
        ],
      },
      {
        heading: 'Treat Steam Deck status as unverified',
        paragraphs: [
          'The current store data does not provide a Steam Deck Verified or Playable result that this guide can rely on. The game is mouse-driven and Steam lists mouse-only gameplay support, so controls and interface scale deserve a hands-on check even if the Windows build launches through Proton.',
          'Until Valve or the developer publishes a clear result, do not buy solely for Deck play. If you already own it, test the tutorial, ledger readability, save behavior and a large late-game map before considering the setup reliable.',
        ],
      },
      {
        heading: 'Know the listed accessibility and save features',
        paragraphs: [
          'Steam lists adjustable text size, custom volume controls, mouse-only gameplay and the ability to save at any time. These categories are useful for initial screening, but they do not describe every menu, font size or local multiplayer setup. Use the demo to test your specific requirement when possible.',
          'Family Sharing is also listed. Steam Cloud is not among the official categories captured for this page, so do not assume saves automatically move between devices. Back up important campaigns according to the current Steam and operating-system behavior.',
        ],
      },
      {
        heading: 'Re-check status after launch patches',
        paragraphs: [
          'Imperial Ambitions released on July 13, 2026, so platform behavior and feature labels may move quickly. Check the store page and official announcements before organizing a multiplayer session or purchasing hardware around the game.',
          'This page separates official status from community experiments. Reports about Proton, performance or streaming can help diagnose an owned copy, but they do not replace a supported-platform statement from the developer or Valve.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Imperial Ambitions have online multiplayer?',
        answer:
          'The current Steam listing does not advertise online PvP or online co-op. It lists local shared/split-screen PvP.',
      },
      {
        question: 'Is Imperial Ambitions on Mac?',
        answer:
          'Yes. Steam lists macOS support for Apple Silicon and Intel, though the minimum OS field is currently TBD.',
      },
      {
        question: 'Does Imperial Ambitions work on Steam Deck?',
        answer:
          'No reliable official Deck rating is available here yet. Treat it as unverified and test an owned copy cautiously.',
      },
    ],
  },
  {
    slug: 'research-books-and-art',
    path: '/guides/research-books-and-art',
    title: 'Imperial Ambitions Research, Books and Art Guide',
    seoTitle: 'Imperial Ambitions Research Guide - Books & Upgrades',
    seoDescription:
      'Use agent upgrades, books and artwork to reveal Imperial Ambitions research choices, open the Research ledger and adapt to a hidden technology tree.',
    summary:
      'Upgrade people to create intellectual goods, open the Research ledger with R, and choose discoveries that solve the empire’s current bottleneck.',
    category: 'Empire',
    difficulty: 'Intermediate',
    coverImageUrl: '/imperial-ambitions/screenshots/7.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'Uses Steam’s hidden-technology description, current manual resource rules and a July 2026 developer answer about Friars, books and the R-key Research ledger.',
    videoSearchQueries: [
      'Imperial Ambitions research guide',
      'Imperial Ambitions books Friar',
    ],
    tags: ['Research', 'Books', 'Artwork'],
    relatedRoutes: [
      '/guides/agents-and-upgrades',
      '/guides/resources-and-production-chains',
      '/guides/social-classes',
      '/guides/factions-maps-and-replayability',
    ],
    body: [
      {
        heading: 'Expect discovery, not a fully visible tech tree',
        paragraphs: [
          'The official description presents technology as hidden and revealed through play. Do not wait for a conventional tree that explains every future unlock at the beginning. Research grows out of people, upgrades and intellectual goods, so production and society are part of technological progress.',
          'Begin with a question: which shortage, route or military problem needs a new capability? This keeps research tied to the empire. Unlocking a branch because it appeared can consume scarce books without changing the decision that is currently losing the campaign.',
        ],
      },
      {
        heading: 'Create intellectual goods through upgraded people',
        paragraphs: [
          'The manual classifies books and artwork as intellectual goods. A current developer reply explains that, after becoming a Friar, a Priest can create books with every upgrade. The same principle makes agent development a production choice: the person gains a role while the empire gains material for research.',
          'Plan the labor, money and prerequisites for the upgrade before depending on the resulting book. If the person is needed for conversion, diplomacy or another urgent job, replacing that service may matter more than accelerating research by one turn.',
        ],
      },
      {
        heading: 'Open the Research ledger and inspect what the book enables',
        paragraphs: [
          'The developer points players to the Research ledger with the R key. Open it after producing books, artwork or completing relevant upgrades, then compare available discoveries with current shortages. If nothing useful appears, confirm that the intellectual good exists and that you are in the full current build rather than the separate demo.',
          'Treat tooltips in the current ledger as the authority for costs and effects. Launch patches can change names or prerequisites, and the hidden structure makes a static list especially vulnerable to becoming misleading.',
        ],
        bullets: [
          'Produce the relevant intellectual good through an upgrade.',
          'Press R and inspect the current Research ledger.',
          'Choose a discovery that changes an active economic, social or military constraint.',
        ],
      },
      {
        heading: 'Balance research against the society that creates it',
        paragraphs: [
          'Books are not free progress points. They emerge from a population with food, class paths, traits and other responsibilities. An empire that upgrades every suitable person for research can weaken production or leave towns without needed agents.',
          'Keep one stable intellectual-goods loop before expanding it. Record how long each book takes and what service the upgraded person no longer provides. A slower sustainable loop is stronger than a burst of research followed by food, conversion or labor failure.',
        ],
      },
      {
        heading: 'Adapt the research order to geography and faction',
        paragraphs: [
          'A resource-rich start, isolated island, hostile border and diverse city do not need the same discovery order. Use exploration and diplomacy to learn the map before committing every book. A technology that solves a future possibility is weaker than one that secures a route already carrying the empire.',
          'Keep notes by prerequisite and result, but avoid turning one campaign into a universal tree. The hidden system is designed to reward different paths. Reproduce confirmed relationships and leave room for the next map to reveal a better answer.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I open research?',
        answer:
          'Press R to open the Research ledger, then inspect discoveries made available by your current books, artwork and upgrades.',
      },
      {
        question: 'How do I make books?',
        answer:
          'A current developer answer says a Priest who becomes a Friar can create books with every upgrade.',
      },
      {
        question: 'Is there a fixed technology tree?',
        answer:
          'Technology is intentionally hidden and revealed through play. Use current ledger tooltips instead of assuming a single fixed public order.',
      },
    ],
  },
  {
    slug: 'disband-units-status',
    path: '/guides/disband-units-status',
    title: 'Can You Disband Units in Imperial Ambitions?',
    seoTitle: 'Imperial Ambitions Disband Units - Current Status',
    seoDescription:
      'The current Imperial Ambitions release has no normal military disband command. See safe alternatives and the developer’s launch-week status.',
    summary:
      'There is no normal disband command in the current design. Reuse, reposition and support surplus regiments instead of intentionally starving them.',
    category: 'Status',
    difficulty: 'Status',
    coverImageUrl: '/imperial-ambitions/screenshots/2.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'Based on a launch-week Steam discussion answer from the developer. The answer may change if a disband action is added after feedback.',
    videoSearchQueries: [
      'Imperial Ambitions disband units',
      'Imperial Ambitions military upkeep',
    ],
    tags: ['Disband', 'Regiments', 'Current status'],
    relatedRoutes: [
      '/guides/battles-and-regiments',
      '/guides/production-and-labor',
      '/guides/towns-and-logistics',
      '/guides/ships-and-seafaring',
    ],
    body: [
      {
        heading: 'Current answer: there is no normal disband command',
        paragraphs: [
          'In a launch-week Steam discussion, the developer said the current design does not allow military units to be disbanded. The developer is considering an explicit disband option after player feedback, so this is a status page rather than a permanent mechanic claim.',
          'Check the unit menu and recent patch notes before using this answer in a later version. If a proper action appears, use its live tooltip for population, equipment and settlement effects. Until then, plan recruitment as a long commitment.',
        ],
      },
      {
        heading: 'Do not use starvation as a disband strategy',
        paragraphs: [
          'The developer explained that underfed military units can eventually quit and settle in the nearest town. That describes a consequence of failed supply, not a recommended control. Intentionally starving troops damages the route, risks disorder and gives you less control over where the population ends up.',
          'Restore food first when a unit is underfed. If the regiment is no longer useful on the front, move it toward a stable town while preserving the supply needed for the trip. A safe surplus unit is easier to repurpose than a collapsing unit inside a wider shortage.',
        ],
      },
      {
        heading: 'Repurpose surplus regiments',
        paragraphs: [
          'Use an extra regiment to hold a port, protect exposed shore vessels, escort an agent or cover a trade and logistics route. These roles can release a more specialized force for the next campaign. Rotate damaged or poorly matched units away from the decisive front instead of treating them as disposable.',
          'If every useful position is already covered, concentrate the surplus near the food and transport network rather than at a remote frontier. Shorter supply lines reduce the cost of waiting for a patch or future war.',
        ],
        bullets: [
          'Guard a dock, town or colony route.',
          'Escort a vulnerable agent or maritime landing.',
          'Keep a reserve near reliable food instead of marching without an objective.',
        ],
      },
      {
        heading: 'Prevent the problem at recruitment',
        paragraphs: [
          'Before creating another regiment, identify its objective, food source, transport and postwar role. If one of those is missing, delay recruitment and improve the town or route. The inability to disband makes speculative armies especially expensive.',
          'Keep a small reserve rather than duplicating every formation. Traits, terrain and logistics determine whether a unit is useful, so solve those constraints before assuming the answer is more troops.',
        ],
      },
      {
        heading: 'Watch the patch notes for an explicit change',
        paragraphs: [
          'Because the developer specifically mentioned considering a disband option, this feature is likely to attract update discussion. Verify an official patch note or an in-game action before repeating a community claim that it has arrived.',
          'This page will keep the date visible so readers can distinguish the July 14, 2026 status from a later build. The safest current decision remains conservative recruitment and supported reuse.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I disband a military unit?',
        answer:
          'Not through a normal disband command in the current launch build, according to the developer.',
      },
      {
        question: 'Should I stop feeding an unwanted regiment?',
        answer:
          'No. Underfeeding can make units quit and settle nearby, but it is a harmful supply failure rather than a safe disband method.',
      },
      {
        question: 'Will a disband button be added?',
        answer:
          'The developer said it is being considered after feedback, but no confirmed implementation should be assumed until an official update appears.',
      },
    ],
  },
  {
    slug: 'system-requirements',
    path: '/system-requirements',
    title: 'Imperial Ambitions System Requirements',
    seoTitle: 'Imperial Ambitions System Requirements - PC & Mac',
    seoDescription:
      'Check official Imperial Ambitions Windows and macOS requirements, DirectX and memory details, plus unverified storage and Steam Deck status.',
    summary:
      'The official Windows minimum lists 64-bit Windows 7, an eight-core 3 GHz CPU, 8 GB RAM, discrete graphics and DirectX 11; macOS supports Apple Silicon and Intel.',
    category: 'Reference',
    difficulty: 'Reference',
    coverImageUrl: '/imperial-ambitions/screenshots/5.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Requirements are transcribed from the official Steam app data checked July 14, 2026. Unlisted fields are left unclaimed.',
    videoSearchQueries: [
      'Imperial Ambitions performance',
      'Imperial Ambitions system requirements',
    ],
    tags: ['Requirements', 'Windows', 'macOS'],
    relatedRoutes: [
      '/guides/multiplayer-and-platforms',
      '/download',
      '/review',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Official Windows minimum requirements',
        paragraphs: [
          'Steam currently requires a 64-bit Windows operating system and lists Windows 7 as the minimum. The processor field asks for an eight-core CPU at 3 GHz, memory is 8 GB RAM, graphics should be discrete and the DirectX requirement is version 11.',
          'The store does not provide a specific GPU model or a storage amount in the captured requirements. Do not translate “discrete graphics” into an invented card recommendation. Check available disk space during Steam installation and keep room for saves and updates.',
        ],
        bullets: [
          'OS: 64-bit Windows 7 or later',
          'Processor: eight cores at 3 GHz',
          'Memory: 8 GB RAM',
          'Graphics: discrete graphics',
          'DirectX: version 11',
        ],
      },
      {
        heading: 'Official Windows recommended field is incomplete',
        paragraphs: [
          'The current recommended section only confirms that a 64-bit processor and operating system are required. It does not list a recommended CPU, memory amount or GPU. Any precise “recommended build” published elsewhere is therefore an estimate unless the developer updates the store page.',
          'For a purchase decision, compare your system with the minimum and use the free Tutorial / Demo as the practical test. A demo cannot reproduce every large late-game map, but it can reveal launch failure, interface scaling and obvious hardware limitations.',
        ],
      },
      {
        heading: 'macOS supports Apple Silicon and Intel',
        paragraphs: [
          'Steam lists a macOS build with Apple Silicon and Intel processor support. The minimum operating-system field is currently TBD, and no detailed memory or graphics line is provided in the captured store data.',
          'Update macOS and Steam, then test the demo on the exact machine when possible. Do not infer compatibility for an older macOS release from the presence of an Intel build alone.',
        ],
      },
      {
        heading: 'Performance depends on more than launch success',
        paragraphs: [
          'A strategy game can run acceptably in a tutorial and slow down when population, routes and units multiply. Test ledger responsiveness, map movement and saving in addition to frame rate. Close heavy background tasks and use current drivers before diagnosing the game itself.',
          'Community reports can identify patterns, but they are not official requirements. Compare only reports with similar hardware, operating system and campaign scale, and keep launch-week patches in mind.',
        ],
      },
      {
        heading: 'Linux and Steam Deck are not confirmed targets here',
        paragraphs: [
          'Steam does not list a native Linux build for Imperial Ambitions. This page also has no reliable official Steam Deck rating to report. Proton results may vary and should be treated as unsupported testing, not as a guaranteed requirement match.',
          'If Linux or Deck is essential, wait for an official platform statement or test an owned copy within Steam’s current refund rules. Back up saves before switching compatibility versions.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much RAM does Imperial Ambitions need?',
        answer: 'The official Windows minimum lists 8 GB RAM.',
      },
      {
        question: 'How much storage does it need?',
        answer:
          'The captured official requirements do not list a storage amount. Use the live Steam install prompt instead of an unofficial estimate.',
      },
      {
        question: 'Does it support macOS?',
        answer:
          'Yes. Steam lists Apple Silicon and Intel support, while the minimum macOS version is currently marked TBD.',
      },
    ],
  },
  {
    slug: 'review',
    path: '/review',
    title: 'Imperial Ambitions Review: Is It for You?',
    seoTitle: 'Imperial Ambitions Review - Who Should Play It?',
    seoDescription:
      'A decision-first Imperial Ambitions review covering its economy, social simulation, hidden technology, interface demands and launch-week caveats.',
    summary:
      'Choose Imperial Ambitions for its connected economy, individual population and adaptive colonization—not for a lightweight conquest game or verified online multiplayer.',
    category: 'Review',
    difficulty: 'Reference',
    coverImageUrl: '/imperial-ambitions/guides/review.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Combines official released-build features with a launch-date independent video for perspective. The verdict avoids a numeric score while patches and review volume are immature.',
    videoSearchQueries: [
      'Imperial Ambitions review',
      'Imperial Ambitions gameplay 2026',
    ],
    video: videos.review,
    tags: ['Review', 'Buying advice', 'Simulation'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/multiplayer-and-platforms',
      '/system-requirements',
      '/download',
    ],
    body: [
      {
        heading: 'Buy for connected systems, not constant conquest',
        paragraphs: [
          'Imperial Ambitions is most distinctive when production, labor, social classes, individual traits, agents, research, diplomacy and colonization collide. A shortage is rarely just a missing building: the resource may need the right worker, route, town logistics, market and political access. Players who enjoy tracing that chain have a deep problem to solve.',
          'Players seeking rapid battles with minimal administration may find the ledgers and population simulation demanding. War matters, but it sits inside the economic and social model rather than replacing it. The best purchase signal is whether diagnosing a town sounds rewarding rather than like paperwork.',
        ],
      },
      {
        heading: 'The population makes decisions feel personal',
        paragraphs: [
          'People move through class paths, gain traits, become agents and react to religion, discrimination, disease and supply. That turns an upgrade into more than a stat: promoting one person can change labor availability, intellectual production or a town’s social balance.',
          'The same detail increases interface load. You need to inspect individuals and ledgers instead of relying on one city score. If you dislike pausing to understand why a chain failed, the simulation can feel opaque. If you enjoy causal puzzles, the opacity becomes a reason to learn.',
        ],
      },
      {
        heading: 'Exploration and hidden research reward adaptation',
        paragraphs: [
          'The Old World, New World options, resource discovery and hidden technology prevent one public build order from answering every campaign. Explorers and intellectual goods reveal possibilities, while the map determines whether trade, settlement or conquest is the efficient route.',
          'That design is strongest when you accept incomplete information. A player who wants every faction, technology and optimal sequence visible before turn one may be frustrated. The game asks you to investigate first and commit later.',
        ],
      },
      {
        heading: 'Launch-week caveats are real',
        paragraphs: [
          'The full game released on July 13, 2026. Steam discussions already contain questions about recipes, controls, performance, saves, maps and unit management. Some answers reflect intended complexity; others may lead to interface improvements or patches. A definitive balance review would be premature.',
          'There is also no normal military disband command in the current design, and the developer is considering feedback. Official multiplayer categories describe local shared/split-screen PvP rather than online play. Check these specifics before buying for a particular expectation.',
        ],
      },
      {
        heading: 'Use the free tutorial/demo as the deciding test',
        paragraphs: [
          'Steam offers a separate free Tutorial / Demo with three tutorial levels. Use it to test ledger readability, pacing, controls and hardware compatibility. Then compare the demo with current full-release information because a tutorial build may not expose every released feature or value.',
          'The safest verdict is conditional: Imperial Ambitions is promising for patient grand-strategy and economic-simulation players who want people and production to matter. Wait or test carefully if you need a polished lightweight interface, verified Deck support, native Linux or online multiplayer.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Imperial Ambitions worth buying?',
        answer:
          'It is a strong fit if you enjoy connected economic and social systems. Use the free demo first if interface density or performance could be a deal-breaker.',
      },
      {
        question: 'Is it mainly a war game?',
        answer:
          'No. Battles are one layer inside production, population, diplomacy, research, exploration and colonization.',
      },
      {
        question: 'Is the review final?',
        answer:
          'No numeric final score is claimed during launch week. Patches and a larger body of player experience may materially change the assessment.',
      },
    ],
  },
  {
    slug: 'download',
    path: '/download',
    title: 'Imperial Ambitions Download: Official Steam Links',
    seoTitle: 'Imperial Ambitions Download - Official Game & Demo',
    seoDescription:
      'Download Imperial Ambitions safely from the official Steam App 2219390 or try the separate Tutorial / Demo App 2918290 for Windows and macOS.',
    summary:
      'Use Steam App 2219390 for the full game or the separate free Tutorial / Demo App 2918290. Avoid APK, crack and unofficial download pages.',
    category: 'Safety',
    difficulty: 'Reference',
    coverImageUrl: '/imperial-ambitions/hero.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'App IDs, platforms and demo description are taken from official Steam app data checked July 14, 2026.',
    videoSearchQueries: [
      'Imperial Ambitions Steam',
      'Imperial Ambitions tutorial demo',
    ],
    tags: ['Download', 'Steam', 'Demo'],
    relatedRoutes: [
      '/system-requirements',
      '/guides/multiplayer-and-platforms',
      '/guides/beginner-guide',
      '/review',
    ],
    body: [
      {
        heading: 'Get the full game from Steam App 2219390',
        paragraphs: [
          'The official full release is Imperial Ambitions on Steam, App 2219390. Confirm the title, developer aoiti and publishers aoiti and Electronic Sheep Games before purchasing. The full game released July 13, 2026 for Windows and macOS.',
          'Use the Steam client or the official store page. This independent wiki does not host installers, game files or mirrors, and it does not sell keys.',
        ],
      },
      {
        heading: 'Try the separate Tutorial / Demo App 2918290',
        paragraphs: [
          'Imperial Ambitions - Tutorial/Demo is a separate free Steam app, 2918290. Its official description says it contains three tutorial levels and it supports Windows and macOS. It is useful for learning ledgers, controls and the opening systems before buying.',
          'Because it is a separate app originally released April 5, 2024, a recipe, interface label or trigger may differ from the current full release. Diagnose the full game with current patch notes and released-build tooltips, not solely from the demo.',
        ],
      },
      {
        heading: 'Avoid APK, crack and unofficial installer claims',
        paragraphs: [
          'The official release is a desktop Steam game. There is no official Android APK, iPhone version or browser installer in the current platform listing. A page offering those files is not an official Imperial Ambitions download source.',
          'Cracked or repackaged downloads can carry malware, altered files and broken saves. They also make support and patch diagnosis unreliable. Use the free official demo when you need a no-cost compatibility test.',
        ],
        bullets: [
          'Full game: Steam App 2219390',
          'Free tutorial/demo: Steam App 2918290',
          'Official platforms: Windows and macOS',
        ],
      },
      {
        heading: 'Verify the platform before installing',
        paragraphs: [
          'Windows and macOS are listed. Native Linux is not. The Windows minimum includes a 64-bit OS, eight-core 3 GHz CPU, 8 GB RAM, discrete graphics and DirectX 11. macOS supports Apple Silicon and Intel while the minimum OS line remains TBD.',
          'Steam Deck status is not confirmed here. If an unsupported environment is essential, test an owned copy carefully and consult current Steam refund rules before exceeding their limits.',
        ],
      },
      {
        heading: 'Keep the game current through Steam',
        paragraphs: [
          'Launch-week updates can change balance, controls and missing actions. Let Steam apply official patches and read the developer announcements when a save behaves differently after an update. Back up important campaigns before experimenting with compatibility tools.',
          'If a guide conflicts with the current interface, the live build and official notes take priority. This wiki dates status-sensitive pages so you can see when their advice was checked.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I download Imperial Ambitions?',
        answer:
          'Use the official Steam page for App 2219390. The separate free Tutorial / Demo is App 2918290.',
      },
      {
        question: 'Is there an Imperial Ambitions APK?',
        answer:
          'No official Android version or APK is listed. Avoid sites claiming to offer an official mobile installer.',
      },
      {
        question: 'Is the demo the same as the full game?',
        answer:
          'No. It is a separate three-tutorial app and may differ from the current released build.',
      },
    ],
  },
];

const featuredSlugs = new Set([
  'beginner-guide',
  'production-and-labor',
  'agents-and-upgrades',
  'exploration-and-colonization',
  'battles-and-regiments',
  'research-books-and-art',
]);

export const featuredGuides = guides.filter((guide) =>
  featuredSlugs.has(guide.slug)
);

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
