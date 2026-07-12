import { useState } from 'react'
import { type TimelineItem } from '../data/home'

const COLLAPSE_BEFORE_YEAR = 2021

function getStartYear(year: string): number {
  if (year === 'Now') return 9999
  const match = year.match(/\d{4}/)
  return match ? parseInt(match[0], 10) : 0
}

function isVisibleWhenCollapsed(item: TimelineItem): boolean {
  return getStartYear(item.year) >= COLLAPSE_BEFORE_YEAR
}

type TimelineProps = {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  const [expanded, setExpanded] = useState(false)

  const hiddenCount = items.filter((item) => !isVisibleWhenCollapsed(item)).length
  const hasHidden = hiddenCount > 0

  return (
    <div className="timeline-wrap">
      <div className={`timeline${expanded ? ' is-expanded' : ''}`}>
        {items.map((item) => {
          const hidden = !expanded && !isVisibleWhenCollapsed(item)
          return (
            <div
              className={`tl-item${hidden ? ' tl-item--hidden' : ''}`}
              key={item.year + item.role}
              aria-hidden={hidden}
            >
              <div className="tl-year">{item.year}</div>
              <div>
                <p className="tl-role">{item.role}</p>
                <p className="tl-desc">{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>

      {hasHidden && (
        <button
          type="button"
          className="timeline-toggle"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show less ↑' : `See more — ${hiddenCount} earlier roles →`}
        </button>
      )}
    </div>
  )
}
