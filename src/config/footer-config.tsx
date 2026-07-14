'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

export function useFooterLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Start',
      items: [
        {
          title: 'Beginner Guide',
          href: Routes.BeginnerGuide,
          external: false,
        },
        { title: 'Guide Hub', href: Routes.Guides, external: false },
        { title: 'Should You Buy?', href: Routes.Review, external: false },
      ],
    },
    {
      title: 'Economy',
      items: [
        {
          title: 'Production & Labor',
          href: Routes.ProductionLabor,
          external: false,
        },
        {
          title: 'Food & Shortages',
          href: Routes.FoodShortages,
          external: false,
        },
        {
          title: 'Trade & Smuggling',
          href: Routes.TradeSmuggling,
          external: false,
        },
      ],
    },
    {
      title: 'Empire',
      items: [
        {
          title: 'Agents & Upgrades',
          href: Routes.AgentsUpgrades,
          external: false,
        },
        {
          title: 'Exploration',
          href: Routes.ExplorationColonization,
          external: false,
        },
        { title: 'Diplomacy', href: Routes.DiplomacyGrudge, external: false },
      ],
    },
    {
      title: 'Warfare',
      items: [
        {
          title: 'Battles & Regiments',
          href: Routes.BattlesRegiments,
          external: false,
        },
        {
          title: 'Ships & Seafaring',
          href: Routes.ShipsSeafaring,
          external: false,
        },
        {
          title: 'Disband Status',
          href: Routes.DisbandUnitsStatus,
          external: false,
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        { title: 'Disclaimer', href: Routes.Disclaimer, external: false },
        { title: 'Privacy', href: Routes.PrivacyPolicy, external: false },
        { title: 'Terms', href: Routes.TermsOfService, external: false },
        { title: 'Cookies', href: Routes.CookiePolicy, external: false },
      ],
    },
  ];
}
