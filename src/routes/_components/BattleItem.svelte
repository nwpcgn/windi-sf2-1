<script>
	import Sprite from './Sprite.svelte'
	import Slide from './Slide.svelte'
	export let actions = []
	export let animated = false
	export let element, frame
	export let frame_width = 0
	export let left = 0
	export let version = 'left'
	export let pos = {x: 200,y: 0}
	export let sprite_obj = {}
	export let top = 0
    export let dur = 500
    export let slug = 'bl_stand'
    let slide_duration = dur

	const resetAnimation = (e) => {
		sprite_obj = actions.find((el) => el.slug === slug)
		animated = false
		slide_duration = slide_duration / 2
		left = pos.x
		console.log("end animation", {pos, animated})
	}
	const resetPosDura = () => (slide_duration = dur)
	const checkIfOutside = () => {
		if (!element || !frame) return
		const rect1 = element.getBoundingClientRect()
		const rect2 = frame.getBoundingClientRect()
		let ew = Math.floor(rect1.width)
		let eh = Math.floor(rect1.height)
		let fw = Math.floor(rect2.width)
		let fh = Math.floor(rect2.height)
		let xmin = 0
		let xmax = 0
		let ymin = 0
		let ymax = 0
		xmax = fw - ew - 1
		ymax = fh - eh - 1
		if (left <= xmin) left = pos.x
		if (left >= xmax) left = xmax
		// if (top <= ymin) top = pos.y
		// if (top >= ymax) top = ymax
		if (left <= xmin || left >= xmax)
			console.log('Check Outide True!', { xmin, xmax, ymin, ymax, left, top })
	}

	const showInfo = (e, titel = 'INFO') => {
		console.log(titel, e.detail)
	}

	$: checkIfOutside(frame_width, left)

	
</script>

<Slide
	{pos}
	{version}
	bind:duration={slide_duration}
	bind:x={left}
	on:ended={resetPosDura}>
	<Sprite
		{...sprite_obj}
		bind:x={left}
		bind:element
		bind:animated
		on:ended={resetAnimation}
		on:started={(e) => showInfo(e, 'Animation Started!')} />
</Slide>
