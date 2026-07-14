import { FaqSection } from '@/components/imperial-ambitions/faq-section';
import {
  MobileWikiNav,
  QuickWikiLinks,
  WikiRouteSidebar,
} from '@/components/imperial-ambitions/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
} from '@/data/imperial-ambitions/localized';
import { siteFacts } from '@/data/imperial-ambitions/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  Anchor,
  ArrowRight,
  BookOpen,
  Compass,
  ExternalLink,
  Factory,
  Microscope,
  Scale,
  Shield,
  Users,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const problemRoutes = [
  {
    title: 'My economy is stalling',
    text: 'Trace labor, inputs and town logistics before adding another production chain.',
    href: '/guides/production-and-labor',
    icon: Factory,
  },
  {
    title: 'People are short of food',
    text: 'Separate farming, processing, transport and version-sensitive recipe questions.',
    href: '/guides/food-and-shortages',
    icon: Users,
  },
  {
    title: 'I need the right agent',
    text: 'Choose among Explorer, Builder, Merchant, Priest, Shadowmaster, General and Gentleman.',
    href: '/guides/agents-and-upgrades',
    icon: Compass,
  },
  {
    title: 'My expedition is stuck',
    text: 'Count one vessel per unit and recover a legal, protected route home.',
    href: '/guides/ships-and-seafaring',
    icon: Anchor,
  },
  {
    title: 'Research will not advance',
    text: 'Create books and artwork through upgrades, then inspect the Research ledger.',
    href: '/guides/research-books-and-art',
    icon: Microscope,
  },
  {
    title: 'A war is becoming expensive',
    text: 'Manage regiments, Grudge, peace conditions and the economy behind the front.',
    href: '/guides/diplomacy-and-grudge',
    icon: Scale,
  },
] as const;

export function ImperialAmbitionsHomePage({ locale }: { locale?: Locale }) {
  const content = getHomeContent(locale);
  const featured = getLocalizedFeaturedGuides(locale);
  const facts = getLocalizedGameFacts(locale);
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: siteFacts.siteName,
        url: siteFacts.domain,
        description: content.intro,
        inLanguage: 'en',
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        url: siteFacts.officialSteamUrl,
        image: `${siteFacts.domain}${siteFacts.officialCoverImage}`,
        datePublished: '2026-07-13',
        gamePlatform: ['Windows', 'macOS'],
        author: { '@type': 'Organization', name: siteFacts.creator },
      },
      {
        '@type': 'FAQPage',
        mainEntity: content.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#091318] text-[#f6ecd2]">
      <JsonLd data={graph} />
      <section className="relative overflow-hidden border-[#31545b] border-b">
        <Image
          src={siteFacts.officialHeroImage}
          alt="Imperial Ambitions exploration map and New World coastline"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,19,24,.98)_0%,rgba(9,19,24,.84)_48%,rgba(9,19,24,.58)_100%)]" />
        <Container className="relative px-4 py-8 lg:py-10">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(380px,.78fr)]">
            <div className="min-w-0">
              <Badge className="w-fit bg-[#e3b95f] text-[#091318]">
                {content.badge}
              </Badge>
              <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-[1.03] md:text-6xl">
                {content.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#a9c0bc] md:text-lg">
                {content.intro}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-auto whitespace-normal bg-[#e3b95f] px-4 py-3 text-[#091318] hover:bg-[#63b7a9]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    {content.primaryCta}
                    <ArrowRight className="size-4 shrink-0" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto whitespace-normal border-[#63b7a9] bg-[#091318]/60 px-4 py-3 text-[#f6ecd2] hover:bg-[#17343a]"
                >
                  <LocaleLink href="/guides/production-and-labor">
                    {content.secondaryCta}
                  </LocaleLink>
                </Button>
              </div>
              <QuickWikiLinks className="mt-5" />
              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#8fa9a5]">
                {content.scopeNote}
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#31545b] bg-black shadow-2xl shadow-black/40">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube-nocookie.com/embed/${siteFacts.officialTrailerId}?rel=0`}
                title="Official Imperial Ambitions trailer"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <p className="bg-[#10242a] px-4 py-3 text-sm text-[#a9c0bc]">
                Official trailer from {siteFacts.creator}, the Steam-linked
                developer channel.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8 lg:py-10">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_272px]">
          <main className="min-w-0 space-y-8">
            <MobileWikiNav currentPath="/" locale={locale} />

            <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-[#31545b] bg-[#10242a] p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#63b7a9]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#a9c0bc]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </section>

            <section className="rounded-2xl border border-[#31545b] bg-[#10242a] p-5 md:p-7">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#63b7a9]">
                    Solve the current bottleneck
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    What is going wrong in your campaign?
                  </h2>
                </div>
                <LocaleLink
                  href="/guides"
                  className="inline-flex items-center gap-2 text-[#e3b95f] text-sm underline underline-offset-4"
                >
                  Browse all guides <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {problemRoutes.map((item) => (
                  <LocaleLink
                    key={item.href}
                    href={item.href}
                    className="group rounded-xl border border-[#31545b] bg-[#091318] p-5 transition hover:-translate-y-0.5 hover:border-[#63b7a9] hover:bg-[#17343a]"
                  >
                    <item.icon className="size-6 text-[#e3b95f]" />
                    <h3 className="mt-4 font-display text-xl font-bold group-hover:text-[#e3b95f]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#a9c0bc]">
                      {item.text}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[#31545b] bg-[#10242a] p-5 md:p-7">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#63b7a9]">
                    Essential reading
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Six guides for the complete campaign loop
                  </h2>
                </div>
                <BookOpen className="size-7 text-[#e3b95f]" />
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {featured.map((guide) => (
                  <article
                    key={guide.slug}
                    className="overflow-hidden rounded-xl border border-[#31545b] bg-[#091318]"
                  >
                    <div className="relative aspect-video border-[#31545b] border-b">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 1280px) 320px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#091318]/80 to-transparent" />
                      <Badge className="absolute bottom-3 left-3 bg-[#e3b95f] text-[#091318]">
                        {guide.category}
                      </Badge>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl font-bold">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#a9c0bc]">
                        {guide.summary}
                      </p>
                      <LocaleLink
                        href={guide.path}
                        className="mt-4 inline-flex items-center gap-2 text-[#63b7a9] text-sm font-semibold"
                      >
                        Open guide <ArrowRight className="size-4" />
                      </LocaleLink>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-[#31545b] bg-[#10242a] p-6">
                <Shield className="size-7 text-[#d96b5f]" />
                <h2 className="mt-4 font-display text-2xl font-black">
                  Launch-week answers stay dated
                </h2>
                <p className="mt-3 leading-7 text-[#a9c0bc]">
                  Disbanding, maize processing, random-map controls and platform
                  behavior can change quickly. Status pages show what is
                  confirmed, what is only a developer reply and what still needs
                  a patch.
                </p>
                <LocaleLink
                  href="/guides/disband-units-status"
                  className="mt-4 inline-flex items-center gap-2 text-[#e3b95f] text-sm font-semibold"
                >
                  Read the disband status <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="rounded-2xl border border-[#31545b] bg-[#10242a] p-6">
                <Compass className="size-7 text-[#63b7a9]" />
                <h2 className="mt-4 font-display text-2xl font-black">
                  Official and community destinations
                </h2>
                <div className="mt-4 grid gap-3 text-sm">
                  {[
                    ['Steam store', siteFacts.officialSteamUrl],
                    ['Free tutorial / demo', siteFacts.officialDemoUrl],
                    ['Official website', siteFacts.officialWebsiteUrl],
                    ['Steam discussions', siteFacts.officialCommunityUrl],
                    ['Official YouTube', siteFacts.officialYouTubeUrl],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-lg border border-[#31545b] bg-[#091318] px-4 py-3 text-[#f6ecd2] hover:border-[#63b7a9]"
                    >
                      {label} <ExternalLink className="size-4 text-[#63b7a9]" />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[#31545b] bg-[#10242a] p-5 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#63b7a9]">
                Search routes covered at launch
              </p>
              <h2 className="mt-2 font-display text-3xl font-black">
                One focused answer for each real question
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {content.keywordRoutes.slice(0, 24).map((item) => (
                  <LocaleLink
                    key={`${item.keyword}-${item.route}`}
                    href={item.route}
                    title={item.intent}
                    className="rounded-full border border-[#31545b] bg-[#091318] px-3 py-2 text-[#a9c0bc] text-xs hover:border-[#63b7a9] hover:text-[#f6ecd2]"
                  >
                    {item.keyword}
                  </LocaleLink>
                ))}
              </div>
              <p className="mt-5 border-[#31545b] border-t pt-4 text-sm leading-7 text-[#a9c0bc]">
                {content.scopeNote}
              </p>
            </section>

            <FaqSection items={content.faq} title="Imperial Ambitions FAQ" />
          </main>

          <WikiRouteSidebar currentPath="/" locale={locale} />
        </div>
      </Container>
    </div>
  );
}
