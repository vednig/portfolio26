import { useRef } from 'react'
import type { MouseEvent } from 'react'
import gsap from 'gsap'

export function MagneticButton({
	label,
	outlined = false,
	onClick,
}: {
	label: string
	outlined?: boolean
	onClick?: () => void
}) {
	const ref = useRef<HTMLButtonElement>(null)

	const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
		const rect = ref.current!.getBoundingClientRect()
		const x = e.clientX - rect.left - rect.width / 2
		const y = e.clientY - rect.top - rect.height / 2

		gsap.to(ref.current, {
			x: x * 0.3,
			y: y * 0.3,
			duration: 0.3,
			ease: 'power3.out',
		})
	}

	const reset = () => {
		gsap.to(ref.current, { x: 0, y: 0, duration: 0.4 })
	}

	return (
		<button
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={reset}
			onClick={onClick}
			className={`px-6 py-3 rounded-full transition-colors ${
				outlined
					? 'border border-black'
					: 'bg-black text-white'
			}`}
		>
			{label}
		</button>
	)
}
