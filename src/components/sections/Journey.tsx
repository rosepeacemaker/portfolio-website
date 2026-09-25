'use client'

import { useState, useMemo, useCallback, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Briefcase, Calendar, ArrowUpRight } from "lucide-react"
import { timelineData } from "@/src/data/JourenyData"


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
    <section
      id="journey"
      className="
        relative
        min-h-screen
        lg:h-screen
        lg:max-h-screen
        flex
        flex-col
        justify-center
        overflow-hidden
        bg-background
        text-foreground
        px-4
        sm:px-6
        lg:px-12
        py-12
        lg:py-8
        transition-colors
        duration-300
      "
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="journey-pattern absolute inset-0 opacity-60 dark:opacity-40" />

        {/* Enhanced pink glows for clear visibility in both light & dark themes */}
        <div
          className="
            absolute
            -left-32
            top-[-80px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-pink-500/20
            dark:bg-[#E8A6B8]/25
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-[-80px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-rose-400/20
            dark:bg-[#C78BA0]/25
            blur-[100px]
          "
        />

        {/* Ambient center pink aura */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            h-[500px]
            w-[600px]
            rounded-full
            bg-pink-400/10
            dark:bg-pink-900/15
            blur-[130px]
          "
        />
      </div>

      <div className="mx-auto w-full max-w-6xl relative z-10 flex flex-col justify-center my-auto">
        {/* Header */}
        <div className="mb-6 lg:mb-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1.5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              Journey
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl">
              From starting my coding journey in Pakistan to continuing my
              full-stack development journey in the US.
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-border/80 bg-muted/60 dark:bg-card/60 px-3.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md">
            {activeIndex + 1} / {timelineData.length}
          </span>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          {/* Left: Side details / Tab list */}
          <div className="lg:col-span-4">
            <div
              role="tablist"
              aria-label="Journey timeline"
              onKeyDown={handleKeyDown}
              className="relative flex flex-col gap-1 rounded-2xl border border-border/70 bg-card/70 dark:bg-card/40 p-3 shadow-sm backdrop-blur-md"
            >
              {/* Connecting timeline track line mathematically aligned with dot centers */}
              <div className="pointer-events-none absolute left-[36px] -translate-x-1/2 top-[24px] bottom-[24px] w-[2px] bg-border/80 dark:bg-border/60" />

              {timelineData.map((item) => {
                const isActive = activeTab === item.id
                return (
                  <button
                    key={item.id}
                    ref={(el) => { tabRefs.current[item.id] = el }}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => selectTab(item.id)}
                    className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-300 ${isActive
                        ? "bg-primary/10 text-primary font-medium dark:bg-primary/15"
                        : "hover:bg-muted/40 text-muted-foreground"
                      }`}
                  >
                    {/* Timeline node centered on track line */}
                    <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center">
                      <span
                        className={`rounded-full transition-all duration-300 ${isActive
                            ? "h-3 w-3 bg-primary ring-4 ring-primary/20 scale-100"
                            : "h-2 w-2 bg-muted-foreground/50 group-hover:bg-foreground/70"
                          }`}
                      />
                    </div>

                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span
                        className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider ${isActive ? "text-primary" : "text-muted-foreground"
                          }`}
                      >
                        <Calendar className="h-3 w-3 shrink-0" />
                        {item.id}
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-medium leading-snug truncate transition-colors ${isActive
                            ? "text-foreground font-semibold"
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

          {/* Right: Content detail card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem?.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card/70 dark:bg-card/40 p-6 sm:p-8 shadow-sm backdrop-blur-md min-h-[300px] lg:min-h-[360px]"
              >
                <div>
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary shrink-0 dark:bg-primary/20">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">
                          {currentItem?.role}
                        </h3>
                        <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                          {currentItem?.id}
                        </span>
                      </div>
                    </div>

                    {"link" in (currentItem || {}) && (currentItem as Record<string, any>).link && (
                      <a
                        href={(currentItem as Record<string, any>).link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 rounded-full border border-border/80 bg-muted/40 hover:bg-muted dark:bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        View <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-foreground/80 dark:text-muted-foreground">
                    {currentItem?.description}
                  </p>
                </div>

                {Array.isArray(currentItem?.item) &&
                  currentItem.item.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border/40">
                      {currentItem.item.map((item: string) => (
                        <span
                          key={item}
                          className="rounded-full border border-border/60 bg-muted/50 dark:bg-card/60 px-3 py-1 text-xs font-medium text-foreground/80 dark:text-muted-foreground"
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

    </section>
  )
}