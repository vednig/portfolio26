import { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import clsx from 'clsx'
import gsap from 'gsap'

import Layout from '@public/layouts'
import { initLenis } from '@/../src/lib/lenis'
import { useGsapReveal } from '@/../src/hooks/useGsapReveal'
import { Hero } from './Hero'

interface Project {
	title: string
	tagline: string
	summary: string
	impact: string
	role: string
	result: string
	status: string
	tags: string[]
	accent: string
	url?: string
	upvotes?: number
	featured?: string
}

const projects: Project[] = [
	{
		title: 'DoShare Personal Cloud',
		tagline: 'Your personal vault in the cloud',
		summary:
			'A privacy-first locker that lets you organize, encrypt, and share memories across devices with intuitive tags, smart folders, and AI-powered whispers.',
		impact:
			'Featured as a Peerlist Launchpad weekly winner and credited with making private sharing feel effortless for early adopters.',
		role: 'Founder · Product engineer',
		result: 'Featured Week 40 · 26 upvotes',
		status: 'Cloud Storage · AI',
		tags: ['Python', 'JavaScript', 'Cloud Storage', 'Security'],
		accent: 'from-cyan-500/70 via-sky-500/30 to-indigo-900/60',
		url: 'https://getcloud.doshare.me/',
		upvotes: 26,
		featured: 'Launchpad winner',
	},
	{
		title: 'shedtheshade.com',
		tagline: 'Effortless Ghost blog hosting',
		summary:
			'Affordable, performance-minded hosting that pairs Ghost CMS with support systems so independent writers can publish without infrastructure overhead.',
		impact:
			'Decreased setup friction for blogging teams and unlocked new marketing experiments for creators.',
		role: 'Technical lead',
		result: 'Live site · Open for inquiries',
		status: 'Blogging Platform',
		tags: ['Figma', 'React', 'Next.js', 'Python', 'Supabase'],
		accent: 'from-amber-500/70 via-orange-400/40 to-rose-500/30',
		url: 'https://shedtheshade.com',
	},
	{
		title: 'JoinTest',
		tagline: 'Google Form replacement turned test + tutoring platform',
		summary:
			'Includes anonymous submissions, auto grading for MCQs, and personalized report cards delivered via email to keep coaching programs accountable.',
		impact:
			'Automated assessment at the speed of conversation, no-code ready for educators who need instant insights.',
		role: 'Product engineer',
		result: 'Tutoring stacks · Private beta',
		status: 'Education · Workflows',
		tags: ['JavaScript', 'Firebase', 'PHP'],
		accent: 'from-lime-400/60 via-emerald-400/40 to-slate-900/60',
	},
	{
		title: 'Musicstream',
		tagline: 'Personalized music client inspired by major streaming services',
		summary:
			'Redis + Django backend that learns music tastes and delivers curated playlists while proxying to production through Apache for seamless playback.',
		impact: 'A taste-driven client that demonstrates how lightweight tooling can feel premium.',
		role: 'Product designer + backend engineer',
		result: 'Prototype · Redis-powered',
		status: 'Music · Experience',
		tags: ['Redis', 'Django', 'Interaction'],
		accent: 'from-purple-500/60 via-blue-500/40 to-slate-900/60',
	},
	{
		title: 'Stora',
		tagline: 'Storage-as-a-service for limitless uploads',
		summary:
			'Built on web3.storage and Django with Tailwind CSS, Stora keeps images, audio, and video safe while making sharing and discovery feel modern.',
		impact: 'Proved that web3 tooling can coexist with beautiful UI and reliable hosting.',
		role: 'Creator · System builder',
		result: 'Proof of concept',
		status: 'Storage · Web3',
		tags: ['Django', 'Tailwind', 'Web3'],
		accent: 'from-purple-500/70 via-pink-500/30 to-slate-900/60',
	},
]

function ProjectCard({ project }: { project: Project }) {
	return (
		<article className="relative min-h-[320px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(2,6,23,0.7)]">
			<div
				className={clsx(
					'absolute inset-0 bg-gradient-to-br opacity-70 blur-[2px]',
					project.accent
				)}
			/>
			<div className="relative z-10 flex h-full flex-col gap-3 p-6">
				<span className="text-[10px] uppercase tracking-[0.5em] text-white/70">
					{project.status}
				</span>
				<h3 className="text-2xl font-semibold leading-tight">{project.title}</h3>
				<p className="text-sm text-white/70 uppercase tracking-[0.3em] text-[11px]">{project.tagline}</p>
				<p className="text-sm leading-relaxed text-white/80">{project.summary}</p>
				<p className="text-sm text-lime-300">{project.impact}</p>

				<div className="flex flex-col gap-3 mt-auto">
					<div className="flex flex-wrap items-center justify-between text-[11px] uppercase tracking-[0.4em] text-white/60">
						<span>{project.role}</span>
						<span>{project.result}</span>
					</div>

					<div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] text-white/70">
						{project.tags.map((tag) => (
							<span
								key={`${project.title}-${tag}`}
								className="rounded-full border border-white/30 px-3 py-1"
							>
								{tag}
							</span>
						))}
					</div>

					<div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-white/70">
						{project.upvotes && (
							<span className="flex items-center gap-1 text-white/80">
								<span className="font-semibold">▲</span>
								{project.upvotes} upvotes
							</span>
						)}
						{project.featured && (
							<span className="rounded-full border border-white/30 px-3 py-1 text-[10px] uppercase tracking-[0.5em] text-white/60">
								{project.featured}
							</span>
						)}
						{project.url && (
							<a
								href={project.url}
								target="_blank"
								rel="noreferrer"
								className="text-[11px] font-semibold uppercase tracking-[0.4em] text-white hover:text-white/40 transition"
							>
								Live preview
							</a>
						)}
					</div>
				</div>
			</div>
		</article>
	)
}

const socialLinks = [
	{ label: 'Peerlist', url: 'https://peerlist.io/vednig' },
	{ label: 'LinkedIn', url: 'https://linkedin.com/in/vedansh-nigam' },
	{ label: 'GitHub', url: 'https://github.com/vednig' },
	{ label: 'Product Hunt', url: 'https://www.producthunt.com/@ved_nig?ref=peerlist' },
	{ label: 'Dribbble', url: 'https://dribbble.com/vednig?ref=peerlist' },
	{ label: 'Medium', url: 'https://medium.com/@vednig?ref=peerlist' },
	{ label: 'DEV', url: 'https://dev.to/vednig?ref=peerlist' },
]

const mustReadTopics = [
		{
			name: 'Systems & Infrastructure',
			description: 'Virtualization, chips, and runtime stacks I monitor every month.',
			items: [
				{
					title: 'Quickemu · VM builder',
					url: 'https://github.com/quickemu-project/quickemu',
					detail: 'Create optimized Windows, macOS, and Linux VMs with near-instant templates.'
			},
			{
				title: 'Nvidia buys Groq for $20B',
				url: 'https://www.cnbc.com/2025/12/24/nvidia-buying-ai-chip-startup-groq-for-about-20-billion-biggest-deal.html',
				detail: 'Insights into the next wave of accelerator consolidation and AI infrastructure bets.'
			},
			{
				title: 'Phoenix: modern X server in Zig',
				url: 'https://git.dec05eba.com/phoenix/about/',
				detail: 'Fresh perspective on graphics stacks built from scratch in contemporary languages.'
				},
			],
		},
		{
			name: 'Tools & Creativity',
			description: 'Showcase utilities that make screens, images, and editor flows feel thoughtful.',
			items: [
			{
				title: 'HTML2PNG · production-ready captures',
				url: 'https://html2png.dev',
				detail: 'Convert raw markup into polished imagery with minimal fuss.'
			},
			{
				title: 'WebPtoPNG · browser-native converter',
				url: 'https://webptopng.cc/',
				detail: 'Client-side WebP-to-PNG that avoids backend round-tripping.'
			},
			{
				title: 'Minimal editor living in the URL',
				url: 'https://github.com/antonmedv/textarea',
				detail: 'An instant editor that keeps state sharable via link serialization.'
				},
			],
		},
		{
			name: 'AI & Research',
			description: 'Breakthroughs that shape how I think about AI-centered experiences.',
			items: [
			{
				title: 'Google’s 2025 research year in review',
				url: 'https://blog.google/technology/ai/2025-research-breakthroughs/',
				detail: 'Wide-angle on where the company sees the next research inflection points.'
			},
			{
				title: 'Vectorize: search engine in 160 lines',
				url: 'https://blog.partykit.io/posts/using-vectorize-to-build-search/',
				detail: 'Gives practical insight into building fast vector search with simple APIs.'
			},
			{
				title: 'Local-first, reversible PII scrubber',
				url: 'https://medium.com/@tj.ruesch/a-local-first-reversible-pii-scrubber-for-ai-workflows-using-onnx-and-regex-e9850a7531fc',
				detail: 'Privacy-first tooling for AI workflows that keeps sensitive tokens editable.'
				},
			],
		},
		{
			name: 'Security & Standards',
			description: 'Standards, cryptography, and advocacy that keep platforms honest.',
			items: [
			{
				title: 'Microsoft finally killing RC4',
				url: 'https://www.schneier.com/blog/archives/2025/12/microsoft-is-finally-killing-rc4.html',
				detail: 'A reminder that long-lived crypto debt still haunts big vendors.'
			},
			{
				title: 'iOS allows alternative browser engines in Japan',
				url: 'https://developer.apple.com/support/alternative-browser-engines-jp/',
				detail: 'Regional policy shifts that unblock browser innovation on iOS.'
			},
			{
				title: 'Free Software Foundation gets private donations',
				url: 'https://www.fsf.org/news/free-software-foundation-receives-historic-private-donations',
				detail: 'Funding surges that keep commons-maintained tooling alive.'
			},
		],
	},
	{
		name: 'Culture & Community',
		description: 'Narratives that shape how I read the world beyond code.',
		items: [
			{
				title: 'Don’t Become the Machine',
				url: 'https://armeet.bearblog.dev/becoming-the-machine/',
				detail: 'An essay on staying human while living inside systems.'
			},
			{
				title: 'Your inbox is a bandit problem',
				url: 'https://parentheticallyspeaking.org/articles/bandit-inbox/',
				detail: 'Framing prioritization as a contextual multi-armed bandit helps me manage attention.'
			},
			{
				title: 'I sell onions on the Internet',
				url: 'https://www.deepsouthventures.com/i-sell-onions-on-the-internet/',
				detail: 'A delightful reminder that commerce stories still have room for humor.'
				},
			],
		},
		{
			name: 'Community & Launches',
			description: 'My submissions and community notes from Ask HN + Show HN threads.',
			items: [
				{
					title: 'Ask HN · Who wants to be hired (Jan 2026)',
					url: 'https://news.ycombinator.com/item?id=46459274',
					detail: 'Monthly hiring bulletin to help founders and operators match with the right people.'
				},
				{
					title: 'DoShare Personal Cloud · Show HN',
					url: 'https://getcloud.doshare.me/',
					detail: 'My own private-cloud project that has been shared multiple times to document progress.'
				},
				{
					title: 'Show HN · Paul Graham AI Advisor',
					url: 'https://paulgraham.resurrect.space',
					detail: 'When I built an on-demand founder advisor, HN conversations reflected the startup pulse.'
				},
			],
		},
	]

const ventures = [
	{
		name: 'DoShare Personal Cloud',
		url: 'https://getcloud.doshare.me/',
		desc: 'Encrypted personal vault & sharing layer for private data.',
	},
	{
		name: 'shedtheshade.com',
		url: 'https://shedtheshade.com',
		desc: 'Ghost hosting & support for indie writers.',
	},
	{
		name: 'JoinTest',
		desc: 'Google Forms alternative + tutoring automation (private beta).',
	},
	{
		name: 'Musicstream',
		desc: 'Redis + Django personal music client concept.',
	},
	{
		name: 'Stora',
		desc: 'Storage-as-a-service experimenting with web3.storage.',
	},
]

const linkedInProfile = {
	name: 'Vedansh Nigam',
	pronouns: 'He/Him',
	role: 'Founder of DoShare',
	location: 'Noida, Uttar Pradesh, India',
	followers: 706,
	connections: '500+ connections',
	profileUrl: 'https://linkedin.com/in/vedansh-nigam',
	openTo: 'Open to innovation, SaaS builders, and meaningful collaborations',
}

const navLinks = [
	{ label: 'Work', href: '#work' },
	{ label: 'Must Reads', href: '#must-reads' },
	{ label: 'Contact', href: 'mailto:vednig12@gmail.com' },
]

function App() {
	const section2Ref = useRef<HTMLDivElement>(null)
	const section3Ref = useRef<HTMLDivElement>(null)
	const parallaxRef = useRef<HTMLDivElement>(null)

	// smooth scroll
	useEffect(() => {
		initLenis()
	}, [])

	// scroll reveals
	useGsapReveal(section2Ref)
	useGsapReveal(section3Ref, { y: 80 })

	// parallax
	useEffect(() => {
		if (!parallaxRef.current) return

		gsap.to(parallaxRef.current, {
			yPercent: -30,
			ease: 'none',
			scrollTrigger: {
				trigger: parallaxRef.current,
				scrub: true,
			},
		})
	}, [])

	return (
		<>
			<header className="fixed top-4 left-1/2 z-50 hidden w-full max-w-6xl -translate-x-1/2 items-center justify-between gap-4 rounded-full border border-white/20 bg-black/50 px-6 py-2 text-[11px] uppercase tracking-[0.4em] text-white backdrop-blur lg:flex">
				<a
					href="#top"
					className="text-sm font-semibold uppercase tracking-[0.5em]"
				>
					Ved Nig
				</a>
				<nav className="flex flex-wrap gap-4">
					{navLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className="transition hover:text-white/60"
						>
							{link.label}
						</a>
					))}
				</nav>
			</header>

			<Hero />

			<section className="relative w-full bg-slate-950 text-white">
				<div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16">
					<div className="space-y-3">
						<p className="text-xs uppercase tracking-[0.5em] text-white/40">Map I’m following</p>
						<h2 className="text-3xl font-semibold">LinkedIn pulse · Noida-based</h2>
						<p className="text-sm text-white/70">
							Insights from my LinkedIn—followers, location, what I’m building at DoShare, and who I’m open to meet.
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-[2fr_1fr]">
						<div className="relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-6 py-8 shadow-[0_20px_60px_rgba(2,6,23,0.7)]">
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_40%)]" />
							<div className="relative z-10 space-y-4">
								<p className="text-xs uppercase tracking-[0.5em] text-white/60">Vedansh Nigam</p>
								<h3 className="text-2xl font-semibold">Founder · DoShare</h3>
								<div className="text-sm text-white/70">
									I’m charting a path from DoShare’s personal cloud to AI-powered workflows. Based in Noida, leading
									a remote crew, open to innovation-minded conversations and hiring/discovery posts.
								</div>
								<div className="grid gap-3 text-sm text-white/70 sm:grid-cols-3">
									<div>
										<p className="text-xs uppercase tracking-[0.4em] text-white/50">Followers</p>
										<p className="font-semibold text-white">{linkedInProfile.followers}</p>
									</div>
									<div>
										<p className="text-xs uppercase tracking-[0.4em] text-white/50">Connections</p>
										<p className="font-semibold text-white">{linkedInProfile.connections}</p>
									</div>
									<div>
										<p className="text-xs uppercase tracking-[0.4em] text-white/50">Open to</p>
										<p className="font-semibold text-white text-[13px] leading-tight">
											{linkedInProfile.openTo}
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-4 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.7)]">
							<div className="text-xs uppercase tracking-[0.4em] text-white/60">Location</div>
							<div className="rounded-3xl border border-white/20 bg-black/30 px-4 py-6 text-base font-semibold text-white">
								{linkedInProfile.location}
							</div>
							<a
								href={linkedInProfile.profileUrl}
								target="_blank"
								rel="noreferrer"
								className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/20"
							>
								View LinkedIn profile
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id="work" className="relative w-full bg-slate-950 text-white">
				<div
					ref={section2Ref}
					className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24"
				>
					<div className="space-y-4">
						<p className="text-xs uppercase tracking-[0.5em] text-white/40">
							Selected work
						</p>
						<h2 className="text-4xl font-semibold leading-tight">
							Products, prototypes, and partnerships
						</h2>
						<p className="text-sm text-white/70">
							I partner with founding teams to build polished, performant experiences
							that translate vision into measurable value.
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-2">
						{projects.map((project) => (
							<ProjectCard key={project.title} project={project} />
						))}
					</div>
				</div>

				<div
					ref={parallaxRef}
					className="pointer-events-none absolute -right-4 top-1/4 text-[140px] font-semibold uppercase tracking-[0.4em] text-white/5"
				>
					work
				</div>
			</section>

			<section id="must-reads" className="relative w-full bg-black text-white">
				<div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24">
					<div className="space-y-4">
						<p className="text-xs uppercase tracking-[0.6em] text-white/40">
							Must Reads by me · updated monthly
						</p>
						<h2 className="text-4xl font-semibold leading-tight">
							Topics I keep bookmarked
						</h2>
						<p className="text-sm text-white/70">
							Patterns distilled from recent Hacker News upvotes—systems, tooling, AI,
							security, and cultural stories that keep my thinking sharp.
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-2">
						{mustReadTopics.map((topic) => (
							<div
								key={topic.name}
								className="flex h-full flex-col gap-4 rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.7)]"
							>
								<div className="space-y-2">
									<p className="text-[10px] uppercase tracking-[0.4em] text-white/60">
										{topic.name}
									</p>
									<p className="text-sm text-white/80">{topic.description}</p>
								</div>

								<div className="flex flex-col gap-3">
									{topic.items.map((item) => (
										<a
											key={item.title}
											href={item.url}
											target="_blank"
											rel="noreferrer"
											className="group rounded-2xl border border-white/20 p-4 transition hover:border-white/40 hover:bg-white/10"
										>
											<p className="text-base font-semibold text-white">
												{item.title}
											</p>
											<p className="text-sm text-white/60 group-hover:text-white/70">
												{item.detail}
											</p>
										</a>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="relative w-full bg-white text-black">
				<div className="pointer-events-none absolute -top-16 right-10 h-48 w-48 rounded-full bg-slate-900/10 blur-[140px]" />

				<div
					ref={section3Ref}
					id="contact"
					className="relative z-10 mx-auto flex max-w-5xl flex-col gap-8 px-6 py-24"
				>
					<p className="text-xs uppercase tracking-[0.5em] text-neutral-500">
						Let’s collaborate
					</p>
					<h2 className="text-4xl font-semibold leading-tight">
						Open to meaningful projects and collaborations.
					</h2>
					<p className="text-lg text-neutral-600 leading-relaxed">
						I focus on products that balance clarity with creativity—where interaction,
						motion, and well-crafted systems uplift every touchpoint. Reach out if you
						would like a partner who can help navigate concept, delivery, and polish.
					</p>

					<div className="flex flex-wrap gap-4">
						<a
							className="rounded-full border border-black px-6 py-3 text-sm font-semibold"
							href="mailto:vednig12@gmail.com"
						>
							Email me
						</a>
						<a
							className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-900"
							href="#work"
						>
							View process
						</a>
					</div>

					<div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.4em] text-neutral-500">
						{socialLinks.map((link) => (
							<a
								key={link.label}
								href={link.url}
								target="_blank"
								rel="noreferrer"
								className="transition hover:text-neutral-900"
							>
								{link.label}
							</a>
						))}
					</div>

					<div className="space-y-3 pt-6">
						<p className="text-[10px] uppercase tracking-[0.6em] text-neutral-400">
							My ventures
						</p>
						<div className="grid gap-3 sm:grid-cols-2">
							{ventures.map((venture) =>
								venture.url ? (
									<a
										key={venture.name}
										href={venture.url}
										target="_blank"
										rel="noreferrer"
										className="rounded-2xl border border-black/10 bg-black/10 p-3 text-sm transition hover:border-black/30 hover:bg-black/5"
									>
										<p className="font-semibold">{venture.name}</p>
										<p className="text-xs text-neutral-500">{venture.desc}</p>
									</a>
								) : (
									<div
										key={venture.name}
										className="rounded-2xl border border-black/10 bg-black/10 p-3 text-sm"
									>
										<p className="font-semibold">{venture.name}</p>
										<p className="text-xs text-neutral-500">{venture.desc}</p>
									</div>
								)
							)}
						</div>
					</div>

					<div className="grid gap-6 sm:grid-cols-3 text-sm text-neutral-500">
						<div>
							<p className="text-3xl font-semibold text-black">2</p>
							<p className="uppercase tracking-[0.4em]">Projects in flight</p>
						</div>
						<div>
							<p className="text-3xl font-semibold text-black">24h</p>
							<p className="uppercase tracking-[0.4em]">Average reply time</p>
						</div>
						<div>
							<p className="text-3xl font-semibold text-black">Remote</p>
							<p className="uppercase tracking-[0.4em]">Flexible location</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

const root = createRoot(document.getElementById('elysia')!)
root.render(
	<Layout className="gap-6">
		<App />
	</Layout>
)
