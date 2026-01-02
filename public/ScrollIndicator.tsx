import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function ScrollIndicator() {
	const dot = useRef<HTMLDivElement>(null)

	useEffect(() => {
		gsap.fromTo(
			dot.current,
			{ y: 0 },
			{
				y: 12,
				repeat: -1,
				yoyo: true,
				duration: 1,
				ease: 'power1.inOut',
			}
		)
	}, [])

	return (
		<div className="absolute bottom-6 flex flex-col items-center text-xs text-neutral-500">
			<span>scroll</span>
			<div className="w-4 h-8 border rounded-full flex justify-center mt-1">
				<div
					ref={dot}
					className="w-1 h-1 bg-neutral-500 rounded-full mt-1"
				/>
			</div>
		</div>
	)
}
