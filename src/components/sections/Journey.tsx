'use client'

import { useState, useMemo, useCallback, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Briefcase, Calendar, ArrowUpRight } from "lucide-react"
import { timelineData } from "@/src/data/JourenyData"
import { section } from "motion/react-client"

export default function Journey() {
  const [activeTab, setActiveTab] = useState(timelineData[0]?.id ?? "")
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const activeIndex = useMemo(
    () => timelineData.findIndex((item) => item.id === activeTab),
    [activeTab]
  )

  const currentItem = timelineData[activeIndex]

  const selectTab = useCallback((id: string) => {
    setActiveTab(id)
    tabRefs.current[id]?.focus()
  }, [])

  // Arrow-key navigation between tabs
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return
      e.preventDefault()
      const dir = e.key === "ArrowDown" ? 1 : -1
      const nextIndex =
        (activeIndex + dir + timelineData.length) % timelineData.length
      selectTab(timelineData[nextIndex].id)
    },
    [activeIndex, selectTab]
  )

  return (
    <section id="journey" className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <h2 className="text-5xl font-semibold">Journey</h2>
            <p className="text-muted-foreground max-w-2xl">
              From starting my coding journey in Pakistan to continuing my
              full-stack development journey in the US.
            </p>
          </div>
          <span className="rounded-full border border-border/50 bg-card/30 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
            {activeIndex + 1} / {timelineData.length}
          </span>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left: Tabs */}
          <div className="lg:col-span-1">
            <div
              role="tablist"
              aria-label="Journey timeline"
              onKeyDown={handleKeyDown}
              className="sticky top-32 flex flex-col gap-3 rounded-2xl border border-border/50 bg-card/30 p-6 shadow-lg backdrop-blur-md"
            >
              {/* connecting line */}
              <div className="pointer-events-none absolute left-[34px] top-8 bottom-8 w-px bg-border/50" />

              {timelineData.map((item) => {
                const isActive = activeTab === item.id
                return (
                  <button
                    key={item.id}
                    ref={(el) => (tabRefs.current[item.id] = el)}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => selectTab(item.id)}
                    className={`group relative flex items-start gap-3 rounded-xl border border-border/30 bg-transparent p-4 text-left transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 ${isActive ? "border-primary bg-primary/10" : ""
                      }`}
                  >
                    <span
                      className={`mt-1 h-2 w-2 shrink-0 rounded-full transition-colors ${isActive
                        ? "bg-primary ring-4 ring-primary/20"
                        : "bg-muted-foreground/40"
                        }`}
                    />
                    <div className="flex flex-col gap-1">
                      <span
                        className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider ${isActive ? "text-primary" : "text-muted-foreground"
                          }`}
                      >
                        <Calendar className="h-3 w-3" />
                        {item.id}
                      </span>
                      <span
                        className={`text-sm font-medium transition-colors ${isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                          }`}
                      >
                        {item.role}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-2">
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem?.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="rounded-2xl border border-border/50 bg-card/30 p-8 shadow-lg backdrop-blur-md transition-shadow hover:shadow-xl"
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/50 bg-background/50">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-semibold text-foreground">
                          {currentItem?.role}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {currentItem?.id}
                        </span>
                      </div>
                    </div>

                    {currentItem?.link && (

                      <a href={currentItem.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 rounded-full border border-border/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        View <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {currentItem?.description}
                  </p>

                  {Array.isArray(currentItem?.item) &&
                    currentItem.item.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {currentItem.item.map((item: string) => (
                          <span
                            key={item}
                            className="rounded-full border border-border/40 bg-background/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}