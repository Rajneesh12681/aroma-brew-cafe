'use client'

import { motion, useReducedMotion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const particles = [
  { left: '8%', top: '18%', size: 'h-1 w-1', delay: 0, duration: 7 },
  { left: '18%', top: '72%', size: 'h-1.5 w-1.5', delay: 1.2, duration: 9 },
  { left: '28%', top: '30%', size: 'h-1 w-1', delay: 0.8, duration: 8 },
  { left: '41%', top: '16%', size: 'h-2 w-2', delay: 2.1, duration: 10 },
  { left: '52%', top: '80%', size: 'h-1 w-1', delay: 1.6, duration: 7.5 },
  { left: '64%', top: '24%', size: 'h-1.5 w-1.5', delay: 0.4, duration: 8.5 },
  { left: '78%', top: '65%', size: 'h-1 w-1', delay: 1.9, duration: 9.5 },
  { left: '91%', top: '34%', size: 'h-2 w-2', delay: 0.7, duration: 11 },
]

export function TeaStoryHero() {
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement | null>(null)
  const stageRef = useRef<HTMLDivElement | null>(null)
  const copyRef = useRef<HTMLDivElement | null>(null)
  const sceneRef = useRef<SVGSVGElement | null>(null)
  const kettleRef = useRef<SVGGElement | null>(null)
  const cupRef = useRef<SVGGElement | null>(null)
  const plateRef = useRef<SVGGElement | null>(null)
  const teaRef = useRef<SVGPathElement | null>(null)
  const pourRef = useRef<SVGPathElement | null>(null)
  const steamRef = useRef<SVGGElement | null>(null)
  const glowRef = useRef<SVGEllipseElement | null>(null)
  const menuCueRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const stage = stageRef.current
    const copy = copyRef.current
    const scene = sceneRef.current
    const kettle = kettleRef.current
    const cup = cupRef.current
    const plate = plateRef.current
    const tea = teaRef.current
    const pour = pourRef.current
    const steam = steamRef.current
    const glow = glowRef.current
    const menuCue = menuCueRef.current

    if (
      !section ||
      !stage ||
      !copy ||
      !scene ||
      !kettle ||
      !cup ||
      !plate ||
      !tea ||
      !pour ||
      !steam ||
      !glow ||
      !menuCue
    ) {
      return
    }

    const context = gsap.context(() => {
      gsap.set([kettle, cup], {
        autoAlpha: 1,
        transformOrigin: '50% 50%',
        svgOrigin: '255 405',
      })
      gsap.set(kettle, { x: -64, y: 10, rotate: -9, autoAlpha: 0 })
      gsap.set(cup, { scale: 0.94, y: 16, autoAlpha: 0 })
      gsap.set(plate, { y: 118, autoAlpha: 0, transformOrigin: '50% 50%' })
      gsap.set(tea, {
        scaleY: prefersReducedMotion ? 1 : 0,
        autoAlpha: prefersReducedMotion ? 1 : 0,
        transformOrigin: '50% 100%',
      })
      gsap.set(pour, {
        strokeDasharray: 190,
        strokeDashoffset: 190,
        autoAlpha: 0,
      })
      gsap.set(steam, { autoAlpha: prefersReducedMotion ? 0.82 : 0, y: 8 })
      gsap.set(glow, {
        autoAlpha: 0.55,
        scale: 0.92,
        transformOrigin: '50% 50%',
      })
      gsap.set(menuCue, { autoAlpha: 0, y: 22 })

      if (prefersReducedMotion) {
        gsap.set([kettle, cup, plate, scene, copy], {
          autoAlpha: 1,
          clearProps: 'transform',
        })
        gsap.set(kettle, { rotate: 8, x: 0, y: 0 })
        gsap.set(plate, { y: 0 })
        gsap.set(cup, { y: 8 })
        gsap.set(menuCue, { autoAlpha: 1, y: 0 })
        return
      }

      const timeline = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=320%',
          scrub: 0.75,
          pin: stage,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      timeline
        .to(kettle, { autoAlpha: 1, x: 0, y: 0, duration: 0.1 }, 0)
        .to(cup, { autoAlpha: 1, scale: 1, y: 0, duration: 0.1 }, 0.03)
        .to(glow, { autoAlpha: 0.95, scale: 1.08, duration: 0.28 }, 0)
        .to(kettle, { rotate: 13, x: 18, y: -8, duration: 0.3 }, 0)
        .to(copy, { y: -16, autoAlpha: 0.78, duration: 0.16 }, 0.16)
        .to(
          pour,
          {
            autoAlpha: 0.98,
            strokeDashoffset: 0,
            duration: 0.28,
            ease: 'none',
          },
          0.3,
        )
        .to(
          tea,
          {
            autoAlpha: 1,
            scaleY: 1,
            duration: 0.3,
            ease: 'none',
          },
          0.3,
        )
        .to(steam, { autoAlpha: 0.86, y: 0, duration: 0.16 }, 0.44)
        .to(pour, { autoAlpha: 0, duration: 0.06 }, 0.6)
        .to(kettle, { rotate: -4, x: -18, y: 8, duration: 0.2 }, 0.6)
        .to(
          plate,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.2,
            ease: 'power3.out',
          },
          0.6,
        )
        .to(
          cup,
          {
            y: 18,
            duration: 0.16,
            ease: 'back.out(2.2)',
          },
          0.66,
        )
        .to(glow, { autoAlpha: 0.75, scale: 1.2, duration: 0.18 }, 0.66)
        .to(scene, { scale: 0.98, y: -4, duration: 0.12 }, 0.8)
        .to(menuCue, { autoAlpha: 1, y: 0, duration: 0.12 }, 0.8)
        .to(scene, { scale: 0.92, y: -84, autoAlpha: 0, duration: 0.1 }, 0.92)
        .to(copy, { y: -58, autoAlpha: 0, duration: 0.1 }, 0.9)
    }, section)

    return () => context.revert()
  }, [prefersReducedMotion])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[340vh] overflow-clip bg-[#120d0a] text-latte"
      aria-label="Aroma Brew Cafe scroll story"
    >
      <div
        ref={stageRef}
        className="relative flex min-h-screen items-center overflow-hidden px-4 pt-20 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(217,179,130,0.24),transparent_32%),radial-gradient(circle_at_18%_22%,rgba(255,245,214,0.12),transparent_26%),linear-gradient(140deg,#100a07_0%,#21130d_44%,#090706_100%)]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0b0705] to-transparent" />

        <div className="pointer-events-none absolute inset-0">
          {particles.map((particle) => (
            <motion.span
              key={`${particle.left}-${particle.top}`}
              className={`absolute rounded-full bg-caramel/60 shadow-[0_0_20px_rgba(217,179,130,0.7)] ${particle.size}`}
              style={{ left: particle.left, top: particle.top }}
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [-8, 18, -8], opacity: [0.25, 0.8, 0.25] }
              }
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8">
          <motion.div
            ref={copyRef}
            className="max-w-3xl text-center"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-caramel/90">
              Aroma Brew Cafe
            </p>
            <h1 className="mt-4 font-heading text-5xl font-bold leading-[0.95] text-warmwhite sm:text-6xl lg:text-7xl">
              A Pour Worth Slowing Down For
            </h1>
            <p className="text-latte/76 mx-auto mt-5 max-w-xl text-sm leading-7 sm:text-base">
              Scroll through a quiet tea ritual, then step into the menu.
            </p>
          </motion.div>

          <div className="relative w-full">
            <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-caramel/10 blur-3xl" />
            <svg
              ref={sceneRef}
              viewBox="0 0 1200 760"
              role="img"
              aria-labelledby="tea-story-title"
              className="relative mx-auto h-[58vh] min-h-[390px] w-full max-w-6xl overflow-visible will-change-transform sm:h-[62vh]"
            >
              <title id="tea-story-title">
                Brass kettle pouring tea into a ceramic cup
              </title>
              <defs>
                <linearGradient id="brass" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#f6df9b" />
                  <stop offset="42%" stopColor="#b78334" />
                  <stop offset="100%" stopColor="#684018" />
                </linearGradient>
                <linearGradient
                  id="brassDark"
                  x1="0%"
                  x2="100%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#c99c50" />
                  <stop offset="100%" stopColor="#3c210f" />
                </linearGradient>
                <linearGradient
                  id="porcelain"
                  x1="0%"
                  x2="100%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#fffaf0" />
                  <stop offset="55%" stopColor="#e9d4b8" />
                  <stop offset="100%" stopColor="#9b7a55" />
                </linearGradient>
                <linearGradient id="tea" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#e6a84c" />
                  <stop offset="100%" stopColor="#5f2b12" />
                </linearGradient>
                <filter
                  id="softShadow"
                  x="-40%"
                  y="-40%"
                  width="180%"
                  height="180%"
                >
                  <feDropShadow
                    dx="0"
                    dy="24"
                    floodColor="#000000"
                    floodOpacity="0.42"
                    stdDeviation="18"
                  />
                </filter>
                <filter
                  id="steamBlur"
                  x="-80%"
                  y="-80%"
                  width="260%"
                  height="260%"
                >
                  <feGaussianBlur stdDeviation="2.5" />
                </filter>
                <clipPath id="cupBowlClip">
                  <path d="M533 374c4 77 31 122 67 122s63-45 67-122z" />
                </clipPath>
              </defs>

              <ellipse
                ref={glowRef}
                cx="608"
                cy="610"
                rx="276"
                ry="54"
                fill="#d9b382"
                opacity="0.45"
                filter="url(#steamBlur)"
              />

              <g
                ref={plateRef}
                filter="url(#softShadow)"
                className="will-change-transform"
              >
                <ellipse
                  cx="600"
                  cy="596"
                  rx="210"
                  ry="48"
                  fill="#1c100b"
                  opacity="0.7"
                />
                <ellipse
                  cx="600"
                  cy="572"
                  rx="214"
                  ry="54"
                  fill="url(#porcelain)"
                />
                <ellipse
                  cx="600"
                  cy="565"
                  rx="158"
                  ry="31"
                  fill="#fff7e8"
                  opacity="0.85"
                />
                <ellipse
                  cx="600"
                  cy="566"
                  rx="106"
                  ry="18"
                  fill="#9b7040"
                  opacity="0.18"
                />
              </g>

              <g
                ref={kettleRef}
                filter="url(#softShadow)"
                className="will-change-transform"
              >
                <path
                  d="M185 336c-14-62 29-121 105-127 77-5 133 40 132 105-2 75-55 128-124 129-61 1-100-37-113-107z"
                  fill="url(#brass)"
                />
                <path
                  d="M235 214c9-45 91-45 101 0"
                  fill="none"
                  stroke="url(#brass)"
                  strokeLinecap="round"
                  strokeWidth="24"
                />
                <path
                  d="M412 293c68 1 112 19 143 63-55-13-99-10-141 12z"
                  fill="url(#brassDark)"
                />
                <path
                  d="M169 315c-78-6-91 98-17 105"
                  fill="none"
                  stroke="url(#brassDark)"
                  strokeLinecap="round"
                  strokeWidth="30"
                />
                <ellipse
                  cx="292"
                  cy="257"
                  rx="64"
                  ry="20"
                  fill="#ffecad"
                  opacity="0.52"
                />
                <circle cx="292" cy="204" r="18" fill="#f8d579" />
                <path
                  d="M227 335c32 32 105 31 143-8"
                  fill="none"
                  stroke="#fff4c2"
                  strokeLinecap="round"
                  strokeOpacity="0.36"
                  strokeWidth="9"
                />
              </g>

              <path
                ref={pourRef}
                d="M548 374c35 34 54 82 54 132"
                fill="none"
                stroke="url(#tea)"
                strokeLinecap="round"
                strokeWidth="18"
                filter="url(#steamBlur)"
              />

              <g
                ref={cupRef}
                filter="url(#softShadow)"
                className="will-change-transform"
              >
                <ellipse cx="600" cy="376" rx="88" ry="26" fill="#fff7ea" />
                <path
                  d="M514 376c5 93 39 145 86 145s81-52 86-145z"
                  fill="url(#porcelain)"
                />
                <path
                  ref={teaRef}
                  d="M533 403c8 58 31 88 67 88s59-30 67-88z"
                  clipPath="url(#cupBowlClip)"
                  fill="url(#tea)"
                />
                <ellipse
                  cx="600"
                  cy="402"
                  rx="67"
                  ry="18"
                  fill="#b86724"
                  opacity="0.9"
                />
                <path
                  d="M686 404c70-6 80 83 14 91"
                  fill="none"
                  stroke="#e1c59e"
                  strokeLinecap="round"
                  strokeWidth="19"
                />
                <path
                  d="M531 413c17 15 126 15 144 0"
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeOpacity="0.55"
                  strokeWidth="8"
                />
                <ellipse
                  cx="600"
                  cy="376"
                  rx="76"
                  ry="18"
                  fill="#241109"
                  opacity="0.24"
                />
                <ellipse
                  cx="600"
                  cy="371"
                  rx="62"
                  ry="12"
                  fill="#d58a38"
                  opacity="0.72"
                />
              </g>

              <g
                ref={steamRef}
                className="motion-safe:animate-steam2"
                filter="url(#steamBlur)"
                opacity="0"
              >
                <path
                  d="M566 338c-26-32 24-48 0-82"
                  fill="none"
                  stroke="#f6e8d4"
                  strokeLinecap="round"
                  strokeOpacity="0.58"
                  strokeWidth="9"
                />
                <path
                  d="M608 334c-31-42 35-52 4-96"
                  fill="none"
                  stroke="#fff5df"
                  strokeLinecap="round"
                  strokeOpacity="0.72"
                  strokeWidth="10"
                />
                <path
                  d="M646 342c-20-31 26-45 2-76"
                  fill="none"
                  stroke="#f8e5c7"
                  strokeLinecap="round"
                  strokeOpacity="0.5"
                  strokeWidth="8"
                />
              </g>
            </svg>
          </div>

          <div
            ref={menuCueRef}
            className="pointer-events-none absolute bottom-8 left-1/2 z-20 w-full max-w-sm -translate-x-1/2 px-4 text-center"
          >
            <p className="rounded-full border border-caramel/25 bg-black/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-caramel/90 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur">
              Enter the Menu
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
