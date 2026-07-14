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
  Landmark,
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
    <div className="min-h-screen bg-[#091318] text-[#f6ecd2]">
      <JsonLd data={graph} />
      <Container className="px-4 py-8 md:py-12">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_272px]">
          <main className="min-w-0 space-y-8">
            <section className="overflow-hidden rounded-2xl border border-[#31545b] bg-[#10242a]">
              <div className="grid lg:grid-cols-[1.05fr_.95fr]">
                <div className="flex flex-col justify-center p-6 md:p-9">
                  <Badge className="w-fit bg-[#e3b95f] text-[#091318]">
                    {content.badge}
                  </Badge>
                  <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] md:text-6xl">
                    Build an empire that can survive its own ambition
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#a9c0bc] md:text-lg">
                    {content.intro}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="h-auto bg-[#e3b95f] px-5 py-3 text-[#091318] hover:bg-[#63b7a9]"
                    >
                      <LocaleLink href="/guides/beginner-guide">
                        {content.primaryCta}
                        <ArrowRight className="ml-2 size-4" />
                      </LocaleLink>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="h-auto border-[#63b7a9] bg-transparent px-5 py-3 text-[#f6ecd2] hover:bg-[#17343a]"
                    >
                      <LocaleLink href="/guides/production-and-labor">
                        {content.secondaryCta}
                      </LocaleLink>
                    </Button>
                  </div>
                  <QuickWikiLinks className="mt-6" />
                </div>

                <div className="relative min-h-[300px] border-[#31545b] border-t lg:min-h-[520px] lg:border-t-0 lg:border-l">
                  <Image
                    src={siteFacts.officialHeroImage}
                    alt="Imperial Ambitions exploration map and New World coastline"
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,19,24,.72)_0%,rgba(9,19,24,.05)_65%),linear-gradient(0deg,rgba(9,19,24,.78)_0%,transparent_45%)]" />
                  <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/15 bg-[#091318]/85 p-4 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#63b7a9]">
                      Released July 13, 2026
                    </p>
                    <p className="mt-1 font-display text-xl font-bold">
                      Steam App 2219390 · Windows & macOS
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <MobileWikiNav currentPath="/" locale={locale} />

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

            <section className="grid gap-5 md:grid-cols-[1.25fr_.75fr]">
              <div className="overflow-hidden rounded-2xl border border-[#31545b] bg-[#10242a]">
                <div className="border-[#31545b] border-b p-5 md:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#63b7a9]">
                    Official trailer
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-black">
                    See the people, ledgers and campaign map in motion
                  </h2>
                </div>
                <iframe
                  className="aspect-video w-full bg-black"
                  src={`https://www.youtube-nocookie.com/embed/${siteFacts.officialTrailerId}?rel=0`}
                  title="Official Imperial Ambitions trailer"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="rounded-2xl border border-[#31545b] bg-[#10242a] p-5 md:p-6">
                <Landmark className="size-7 text-[#e3b95f]" />
                <h2 className="mt-4 font-display text-2xl font-black">
                  The game at a glance
                </h2>
                <dl className="mt-5 grid gap-4">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="border-[#31545b] border-t pt-3"
                    >
                      <dt className="font-semibold text-[#63b7a9] text-xs uppercase tracking-[0.14em]">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-[#a9c0bc]">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
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
