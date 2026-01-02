import { useEffect, RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealOptions {
	y?: number
	duration?: number
	stagger?: number
	start?: string
}

export function useGsapReveal<T extends HTMLElement>(
	ref: RefObject<T | null>,
	options: RevealOptions = {}
) {
	useEffect(() => {
		if (!ref.current) return

		const ctx = gsap.context(() => {
			gsap.from(ref.current!.children, {
				opacity: 0,
				y: options.y ?? 60,
				duration: options.duration ?? 1,
				ease: 'power3.out',
				stagger: options.stagger ?? 0.2,
				scrollTrigger: {
					trigger: ref.current,
					start: options.start ?? 'top 80%',
					toggleActions: 'play none none none',
				},
			})
		}, ref)

		return () => ctx.revert()
	}, [])
}
