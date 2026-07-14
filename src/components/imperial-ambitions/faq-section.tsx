import type { GuideFaq } from '@/data/imperial-ambitions/types';
import { cn } from '@/lib/utils';

export function FaqSection({
  className,
  items,
  title = 'FAQ',
}: {
  className?: string;
  items: GuideFaq[];
  title?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-xl border border-[#31545b] bg-[#10242a] p-5 md:p-6',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#f6ecd2]">
        {title}
      </h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#31545b] bg-[#091318] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#f6ecd2] transition group-open:text-[#e3b95f]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#a9c0bc]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
