import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function AmbientBackground() {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		gsap.to(ref.current, {
			yPercent: -20,
			scrollTrigger: {
				trigger: ref.current,
				scrub: true,
			},
		})
	}, [])

	return (
		<div
			ref={ref}
			className="absolute inset-0 pointer-events-none"
		>
			<div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-black/5 rounded-full blur-3xl" />
			<div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] bg-black/10 rounded-full blur-2xl" />
		</div>
	)
}
