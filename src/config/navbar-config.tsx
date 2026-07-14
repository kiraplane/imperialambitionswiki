'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  Anchor,
  BookOpen,
  Compass,
  Download,
  Factory,
  Shield,
  Users,
} from 'lucide-react';

export function useNavbarLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Guides',
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'Guide hub',
          description: 'Every current Imperial Ambitions guide in one index.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner guide',
          description: 'Build a stable first empire before expanding.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Compass className="size-4" />,
        },
        {
          title: 'Agents & upgrades',
          description: 'Choose the role that solves the current bottleneck.',
          href: Routes.AgentsUpgrades,
          external: false,
          icon: <Users className="size-4" />,
        },
      ],
    },
    {
      title: 'Economy',
      href: Routes.ProductionLabor,
      external: false,
      icon: <Factory className="size-4" />,
      items: [
        {
          title: 'Production & labor',
          description: 'Trace inputs, workers and output through the ledger.',
          href: Routes.ProductionLabor,
          external: false,
          icon: <Factory className="size-4" />,
        },
        {
          title: 'Food & shortages',
          description: 'Fix farming, processing and town delivery failures.',
          href: Routes.FoodShortages,
          external: false,
          icon: <Factory className="size-4" />,
        },
        {
          title: 'Trade & smuggling',
          description: 'Price routes, merchants and black-market risk.',
          href: Routes.TradeSmuggling,
          external: false,
          icon: <Anchor className="size-4" />,
        },
      ],
    },
    {
      title: 'Empire',
      href: Routes.ExplorationColonization,
      external: false,
      icon: <Compass className="size-4" />,
      items: [
        {
          title: 'Exploration & colonies',
          description: 'Scout, settle and keep a protected return route.',
          href: Routes.ExplorationColonization,
          external: false,
          icon: <Compass className="size-4" />,
        },
        {
          title: 'Social classes',
          description: 'Balance class paths, education and demand.',
          href: Routes.SocialClasses,
          external: false,
          icon: <Users className="size-4" />,
        },
        {
          title: 'Research, books & art',
          description: 'Reveal useful discoveries through intellectual goods.',
          href: Routes.ResearchBooksArt,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
      ],
    },
    {
      title: 'Warfare',
      href: Routes.BattlesRegiments,
      external: false,
      icon: <Shield className="size-4" />,
      items: [
        {
          title: 'Battles & regiments',
          description: 'Use linked columns, action points and terrain.',
          href: Routes.BattlesRegiments,
          external: false,
          icon: <Shield className="size-4" />,
        },
        {
          title: 'Ships & seafaring',
          description: 'Transport units and protect the route home.',
          href: Routes.ShipsSeafaring,
          external: false,
          icon: <Anchor className="size-4" />,
        },
        {
          title: 'Official download',
          description: 'Use the official Steam game or free tutorial demo.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
      ],
    },
  ];
}
