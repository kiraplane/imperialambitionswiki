import type { Locale } from 'next-intl';
import { featuredGuides, getGuide, guides } from './guides';
import { gameFacts, keywordMatrix, siteDescription } from './sources';
import type { GameFact, Guide, GuideFaq } from './types';

export interface HomeContent {
  badge: string;
  metadataTitle: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  scopeNote: string;
  routeLabels: Record<string, string>;
  keywordRoutes: Array<{
    keyword: string;
    route: string;
    label: string;
    intent: string;
  }>;
  faq: GuideFaq[];
}

export interface GuidesIndexContent {
  badge: string;
  title: string;
  intro: string;
  readGuide: string;
  faq: GuideFaq[];
}

export interface GuideArticleUi {
  videoPrefix: string;
  videoSuffix: string;
  officialTitle: string;
  officialBody: string;
  officialLinkLabel: string;
  faqTitle: string;
  categoryLabels: Record<Guide['category'], string>;
  difficultyLabels: Record<Guide['difficulty'], string>;
}

export const routeLabels: Record<string, string> = {
  '/': 'Imperial Ambitions Wiki',
  '/guides': 'Guide Hub',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/production-and-labor': 'Production & Labor',
  '/guides/food-and-shortages': 'Food & Shortages',
  '/guides/towns-and-logistics': 'Towns & Logistics',
  '/guides/agents-and-upgrades': 'Agents & Upgrades',
  '/guides/trade-and-smuggling': 'Trade & Smuggling',
  '/guides/social-classes': 'Social Classes',
  '/guides/traits-unrest-and-disease': 'Traits, Unrest & Disease',
  '/guides/resources-and-production-chains': 'Resources & Production Chains',
  '/guides/exploration-and-colonization': 'Exploration & Colonization',
  '/guides/battles-and-regiments': 'Battles & Regiments',
  '/guides/ships-and-seafaring': 'Ships & Seafaring',
  '/guides/diplomacy-and-grudge': 'Diplomacy & Grudge',
  '/guides/factions-maps-and-replayability': 'Factions, Maps & Replayability',
  '/guides/multiplayer-and-platforms': 'Multiplayer & Platforms',
  '/guides/research-books-and-art': 'Research, Books & Art',
  '/guides/disband-units-status': 'Disband Units Status',
  '/system-requirements': 'System Requirements',
  '/review': 'Should You Buy?',
  '/download': 'Official Download',
  '/disclaimer': 'Disclaimer',
};

export function getLocalizedGuide(slug: string, _locale?: Locale | string) {
  return getGuide(slug);
}

export function getLocalizedGuides(_locale?: Locale | string) {
  return guides;
}

export function getLocalizedFeaturedGuides(_locale?: Locale | string) {
  return featuredGuides;
}

export function getLocalizedSiteDescription(_locale?: Locale | string) {
  return siteDescription;
}

export function getLocalizedGameFacts(_locale?: Locale | string): GameFact[] {
  return gameFacts;
}

export function getHomeContent(_locale?: Locale | string): HomeContent {
  const keywordRoutes = keywordMatrix
    .filter((item) => item.route !== 'none' && item.status === 'keep')
    .map((item) => ({
      keyword: item.keyword,
      route: item.route,
      label: routeLabels[item.route.split('#')[0]] ?? item.route,
      intent: item.intent,
    }));

  return {
    badge: 'Independent strategy guide hub · Updated July 14, 2026',
    metadataTitle:
      'Imperial Ambitions Wiki - Guides, Economy, Agents & Colonies',
    title: 'Imperial Ambitions Wiki',
    intro:
      'Build an empire whose people, production and politics can survive expansion. Find practical help for labor, food, agents, research, diplomacy, regiments, ships and the New World.',
    primaryCta: 'Start the beginner guide',
    secondaryCta: 'Fix production and labor',
    scopeNote:
      'Released-build facts, developer answers and older manual material are clearly separated so launch-week advice does not become a false universal rule.',
    routeLabels,
    keywordRoutes,
    faq: [
      {
        question: 'What is Imperial Ambitions?',
        answer:
          'Imperial Ambitions is a grand-strategy and social-simulation game by aoiti. You manage individual people, production chains, agents, diplomacy, research, war and colonization across the Old and New Worlds.',
      },
      {
        question: 'When did Imperial Ambitions release?',
        answer:
          'The full game released on Steam on July 13, 2026. A separate free Tutorial / Demo with three tutorial levels is also available.',
      },
      {
        question: 'Does Imperial Ambitions have online multiplayer?',
        answer:
          'Steam currently lists local shared/split-screen PvP. It does not list official online PvP or co-op.',
      },
      {
        question: 'Which guide should I read first?',
        answer:
          'Begin with the first-empire plan. If a town is already failing, jump to Food & Shortages or Production & Labor before expanding.',
      },
      {
        question: 'Is there a codes page or faction tier list?',
        answer:
          'No reliable redeem-code system or stable best-faction ranking was found. This wiki publishes pages only when the user intent and evidence are real.',
      },
    ],
  };
}

export function getGuidesIndexContent(
  _locale?: Locale | string
): GuidesIndexContent {
  return {
    badge: `${guides.length} practical guides`,
    title: 'Imperial Ambitions Guide Hub',
    intro:
      'Choose the problem in front of you: a failing food chain, missing labor, the right agent, hidden research, a risky voyage, a hostile neighbor or a regiment you can no longer support.',
    readGuide: 'Open guide',
    faq: [
      {
        question: 'Are these guides for the full release?',
        answer:
          'Yes. Current Steam information and launch-week developer answers take priority. Older manual pages and videos are used only when they still match the released game.',
      },
      {
        question: 'Why is there no complete database yet?',
        answer:
          'The full release is new and several systems are intentionally hidden. A smaller verified guide set is more useful than invented recipes, technology trees or faction rankings.',
      },
      {
        question: 'Where should I start when a save is stuck?',
        answer:
          'Open the relevant ledger, identify the first missing input, then read the focused food, production, logistics, research or seafaring guide instead of restarting blindly.',
      },
    ],
  };
}

export function getGuideArticleUi(_locale?: Locale | string): GuideArticleUi {
  return {
    videoPrefix: 'Visual companion:',
    videoSuffix:
      'Use the video to see the interface; current released-build facts in the written guide take priority.',
    officialTitle: 'Check the current build first',
    officialBody:
      'Imperial Ambitions released on July 13, 2026 and is receiving launch-week feedback. Live tooltips, official Steam notes and newer developer answers take priority over old demo behavior.',
    officialLinkLabel: 'Open Imperial Ambitions on Steam',
    faqTitle: 'Imperial Ambitions FAQ',
    categoryLabels: {
      Start: 'Start',
      Economy: 'Economy',
      Society: 'Society',
      Empire: 'Empire',
      Warfare: 'Warfare',
      Reference: 'Reference',
      Review: 'Review',
      Safety: 'Safety',
      Status: 'Current status',
    },
    difficultyLabels: {
      Beginner: 'Beginner',
      Intermediate: 'Intermediate',
      Reference: 'Reference',
      Status: 'Current status',
    },
  };
}
