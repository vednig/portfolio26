import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import { AmbientBackground } from './AmbientBackground'
import { MagneticButton } from './MagneticButton'
import { ScrollIndicator } from './ScrollIndicator'

const roles = [
	'Frontend Developer',
	'Backend Developer',
	'UI Motion Designer',
	'Android Developer',
	'Full Stack Dev',
	'Web Developer',
	'Product Manager',


]

const heroStats = [
	{ value: '5', label: 'Products & experiments shipped' },
	{ value: '26', label: 'Peerlist upvotes for DoShare Personal Cloud' },
	{ value: '6', label: 'Active followers on Peerlist' },
]

export function Hero() {
	const roleRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const split = new SplitType('.hero-title', { types: 'chars' })

		gsap.from(split.chars, {
			opacity: 0,
			y: 50,
			stagger: 0.04,
			duration: 1,
			ease: 'power4.out',
		})

		gsap.to(roleRef.current, {
			yPercent: -100 * roles.length,
			duration: roles.length * 2,
			ease: 'none',
			repeat: -1,
		})
	}, [])

	return (
		<section
			id="top"
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
		>
			<AmbientBackground />

			<div className="z-10 flex flex-col items-center text-center gap-10 px-6 max-w-4xl">
				<p className="text-xs uppercase tracking-[0.5em] text-neutral-400">
					Portfolio · 2026
				</p>

				<div className="space-y-4">
					<h1 className="hero-title text-[46px] font-semibold leading-tight">
						<span className="yellowtail-regular">Ved Nig</span>
						<br />
						SWE 
					</h1>
					<p className="text-sm text-black/75">
						I craft systems in service of products that
						feel human, fast, and optimized.
					</p>
				</div>

				<div className="h-[32px] overflow-hidden text-neutral-400 text-[18px] font-medium">
					<div ref={roleRef} className="flex flex-col">
						{roles.map((role) => (
							<span key={role}>{role}</span>
						))}
					</div>
				</div>

				<p className="text-xs uppercase tracking-[0.3em] text-black/50">
					5+ years shipping quickly, deliberately, with intention
				</p>

				<div className="flex flex-wrap justify-center gap-4">
					<MagneticButton
						label="View Work"
						onClick={() =>
							document.getElementById('work')?.scrollIntoView({
								behavior: 'smooth',
							})
						}
					/>
					<MagneticButton
						label="Contact"
						outlined
						onClick={() =>
							document.getElementById('contact')?.scrollIntoView({
								behavior: 'smooth',
							})
						}
					/>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
					{heroStats.map((stat) => (
						<div key={stat.label} className="space-y-1 rounded-2xl border border-white/5 bg-white/5 p-4">
							<p className="text-[32px] font-semibold">{stat.value}</p>
							<p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>

			<ScrollIndicator />
		</section>
	)
}
