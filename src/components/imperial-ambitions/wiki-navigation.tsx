import { Badge } from '@/components/ui/badge';
import { routeLabels } from '@/data/imperial-ambitions/localized';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  Anchor,
  ArrowRight,
  BookOpen,
  ChevronDown,
  Compass,
  Download,
  Factory,
  Gamepad2,
  Landmark,
  Menu,
  Scale,
  Shield,
  Users,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import type { ReactNode } from 'react';

interface SectionLink {
  href: string;
  label: string;
}

const wikiNavRoutes = [
  {
    title: 'Start Here',
    icon: Gamepad2,
    routes: ['/', '/guides', '/guides/beginner-guide', '/review'],
  },
  {
    title: 'Economy',
    icon: Factory,
    routes: [
      '/guides/production-and-labor',
      '/guides/food-and-shortages',
      '/guides/resources-and-production-chains',
      '/guides/trade-and-smuggling',
    ],
  },
  {
    title: 'Society & Towns',
    icon: Users,
    routes: [
      '/guides/social-classes',
      '/guides/traits-unrest-and-disease',
      '/guides/towns-and-logistics',
    ],
  },
  {
    title: 'Empire',
    icon: Landmark,
    routes: [
      '/guides/agents-and-upgrades',
      '/guides/exploration-and-colonization',
      '/guides/diplomacy-and-grudge',
      '/guides/factions-maps-and-replayability',
      '/guides/research-books-and-art',
    ],
  },
  {
    title: 'Warfare & Sea',
    icon: Shield,
    routes: [
      '/guides/battles-and-regiments',
      '/guides/ships-and-seafaring',
      '/guides/disband-units-status',
    ],
  },
  {
    title: 'Play & Install',
    icon: Anchor,
    routes: [
      '/guides/multiplayer-and-platforms',
      '/system-requirements',
      '/download',
      '/disclaimer',
    ],
  },
] as const;

const routeCount = wikiNavRoutes.reduce(
  (count, group) => count + group.routes.length,
  0
);

function isCurrentPath(currentPath: string | undefined, href: string) {
  return currentPath === href;
}

function WikiLink({
  currentPath,
  href,
}: { currentPath?: string; href: string }) {
  const active = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex min-w-0 items-center justify-between gap-3 rounded-lg border px-3 py-2 text-sm leading-6 transition',
        active
          ? 'border-[#e3b95f] bg-[#e3b95f] font-semibold text-[#091318]'
          : 'border-[#31545b] bg-[#091318] text-[#a9c0bc] hover:border-[#63b7a9] hover:bg-[#17343a] hover:text-[#f6ecd2]'
      )}
    >
      <span className="min-w-0 break-words">{routeLabels[href] ?? href}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          active ? 'text-[#091318]' : 'text-[#63b7a9]'
        )}
      />
    </LocaleLink>
  );
}

function NavGroups({ currentPath }: { currentPath?: string }) {
  return wikiNavRoutes.map((group) => {
    const active = group.routes.some((route) =>
      isCurrentPath(currentPath, route)
    );

    return (
      <details
        key={group.title}
        open={active}
        className={cn(
          'group rounded-lg border p-3',
          active
            ? 'border-[#e3b95f]/70 bg-[#e3b95f]/8'
            : 'border-[#31545b] bg-[#091318]'
        )}
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#f6ecd2] [&::-webkit-details-marker]:hidden">
          <span className="flex min-w-0 items-center gap-2">
            <group.icon className="size-4 shrink-0 text-[#63b7a9]" />
            <span className="min-w-0 break-words">{group.title}</span>
            <span className="text-[#a9c0bc] text-xs">
              {group.routes.length}
            </span>
          </span>
          <ChevronDown className="size-4 shrink-0 text-[#e3b95f] transition group-open:rotate-180" />
        </summary>
        <div className="mt-3 grid gap-2">
          {group.routes.map((route) => (
            <WikiLink key={route} currentPath={currentPath} href={route} />
          ))}
        </div>
      </details>
    );
  });
}

export function WikiRouteSidebar({
  children,
  currentPath,
  sectionLinks = [],
}: {
  children?: ReactNode;
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  return (
    <aside className="sticky top-24 hidden w-[272px] shrink-0 self-start space-y-4 lg:block">
      <div className="rounded-xl border border-[#31545b] bg-[#10242a] p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#63b7a9]">
              Wiki Navigation
            </p>
            <h2 className="mt-1 font-display text-xl font-bold text-[#f6ecd2]">
              Imperial Ambitions
            </h2>
          </div>
          <Compass className="size-5 text-[#e3b95f]" />
        </div>
        <div className="mt-4 space-y-3">
          <NavGroups currentPath={currentPath} />
        </div>
      </div>

      {sectionLinks.length > 0 ? (
        <details className="group rounded-xl border border-[#31545b] bg-[#10242a] p-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-2 font-display text-lg font-bold text-[#f6ecd2]">
              <BookOpen className="size-4 text-[#63b7a9]" />
              On this page
            </span>
            <ChevronDown className="size-4 text-[#e3b95f] transition group-open:rotate-180" />
          </summary>
          <div className="mt-3 grid gap-2 border-[#31545b] border-t pt-3">
            {sectionLinks.slice(0, 7).map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="rounded-lg border border-[#31545b] bg-[#091318] px-3 py-2 text-sm leading-6 text-[#a9c0bc] hover:border-[#63b7a9] hover:text-[#f6ecd2]"
              >
                {section.label}
              </a>
            ))}
          </div>
        </details>
      ) : null}

      {children}
    </aside>
  );
}

export function MobileWikiNav({
  currentPath,
  sectionLinks = [],
}: {
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  return (
    <details className="group mt-5 rounded-xl border border-[#31545b] bg-[#091318] p-4 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
        <span className="flex items-center gap-2 font-display text-lg font-bold text-[#f6ecd2]">
          <Menu className="size-5 text-[#63b7a9]" />
          Wiki Menu
        </span>
        <Badge className="bg-[#e3b95f] text-[#091318]">
          {routeCount} links
        </Badge>
      </summary>

      {sectionLinks.length > 0 ? (
        <div className="mt-4 border-[#31545b] border-t pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#63b7a9]">
            On this page
          </p>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {sectionLinks.slice(0, 7).map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="shrink-0 rounded-lg border border-[#31545b] bg-[#10242a] px-3 py-2 text-sm text-[#a9c0bc]"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-4 grid gap-3 border-[#31545b] border-t pt-4">
        <NavGroups currentPath={currentPath} />
      </div>
    </details>
  );
}

export function QuickWikiLinks({ className }: { className?: string }) {
  const routes = [
    { href: '/guides/beginner-guide', label: 'Beginner', icon: BookOpen },
    {
      href: '/guides/production-and-labor',
      label: 'Production',
      icon: Factory,
    },
    { href: '/guides/agents-and-upgrades', label: 'Agents', icon: Users },
    {
      href: '/guides/exploration-and-colonization',
      label: 'Colonies',
      icon: Compass,
    },
    { href: '/guides/battles-and-regiments', label: 'Battles', icon: Shield },
    { href: '/guides/diplomacy-and-grudge', label: 'Diplomacy', icon: Scale },
    { href: '/guides/ships-and-seafaring', label: 'Ships', icon: Anchor },
    { href: '/download', label: 'Download', icon: Download },
  ];

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {routes.map((route) => (
        <LocaleLink
          key={route.href}
          href={route.href}
          className="inline-flex h-auto items-center gap-1.5 rounded-lg border border-[#31545b] bg-[#091318]/85 px-2.5 py-1.5 text-[#f6ecd2] text-xs transition hover:border-[#63b7a9] hover:bg-[#17343a] sm:text-sm"
        >
          <route.icon className="size-3.5 shrink-0 text-[#63b7a9]" />
          {route.label}
        </LocaleLink>
      ))}
    </div>
  );
}
