<script>
	import Sprite from './Sprite.svelte'
	import Slide from './Slide.svelte'
	import actions from './actions'
	// prettier-ignore
	// const actions = [{"slug":"bl_stand","name":"Stand","pre":"bl_left1","loops":8,"duration":200,"position":[0,0],"sprites":{"blanka_bl_stand_0":[965,652,103,95],"blanka_bl_stand_1":[927,757,102,96],"blanka_bl_stand_2":[205,863,101,98]}},{"slug":"bl_cro_punch_l","name":"Crouch Punch L","pre":"bl_left1","loops":0,"duration":200,"position":[50,0],"sprites":{"blanka_bl_cro_punch_l_0":[5,5,122,58],"blanka_bl_cro_punch_l_1":[137,5,168,51],"blanka_bl_cro_punch_l_2":[315,5,158,53]}},{"slug":"bl_cro_punch_m","name":"Crouch Punch M","pre":"bl_left1","loops":0,"duration":200,"position":[50,0],"sprites":{"blanka_bl_cro_punch_m_0":[483,5,87,65],"blanka_bl_cro_punch_m_1":[580,5,159,63],"blanka_bl_cro_punch_m_2":[749,5,167,71],"blanka_bl_cro_punch_m_3":[5,86,161,72]}},{"slug":"bl_down","name":"Stand Down","pre":"bl_left1","loops":0,"duration":200,"position":[50,0],"sprites":{"blanka_bl_down_0":[176,86,96,100],"blanka_bl_down_1":[282,86,118,100],"blanka_bl_down_2":[410,86,127,100],"blanka_bl_down_3":[547,86,163,53],"blanka_bl_down_4":[720,86,177,39]}},{"slug":"bl_kick_h","name":"Kick H","pre":"bl_left1","loops":0,"duration":200,"position":[50,0],"sprites":{"blanka_bl_kick_h_0":[720,135,91,106],"blanka_bl_kick_h_1":[5,251,163,106],"blanka_bl_kick_h_2":[821,135,129,109],"blanka_bl_kick_h_3":[178,254,88,128],"blanka_bl_kick_h_4":[276,254,138,99],"blanka_bl_kick_h_5":[424,254,103,76],"blanka_bl_kick_h_6":[537,254,99,87]}},{"slug":"bl_kick_l","name":"Kick L","pre":"bl_left1","loops":0,"duration":200,"position":[50,0],"sprites":{"blanka_bl_kick_l_0":[646,254,87,97],"blanka_bl_kick_l_1":[743,254,105,95],"blanka_bl_kick_l_2":[424,359,146,94]}},{"slug":"bl_kick_m","name":"Kick M","pre":"bl_left1","loops":0,"duration":200,"position":[50,0],"sprites":{"blanka_bl_kick_m_0":[858,254,100,93],"blanka_bl_kick_m_1":[858,357,117,94],"blanka_bl_kick_m_2":[5,461,150,93]}},{"slug":"bl_kick_pre","name":"Kick Pre","pre":"bl_left1","loops":0,"duration":200,"position":[50,0],"sprites":{"blanka_bl_kick_pre_0":[165,461,99,87],"blanka_bl_kick_pre_1":[274,461,103,122],"blanka_bl_kick_pre_2":[580,461,66,122],"blanka_bl_kick_pre_3":[656,461,60,122],"blanka_bl_kick_pre_4":[726,461,75,122]}},{"slug":"bl_punch_h","name":"Punch Heavy","pre":"bl_left1","loops":0,"duration":200,"position":[50,0],"sprites":{"blanka_bl_punch_h_0":[811,461,105,94],"blanka_bl_punch_h_1":[5,565,144,97],"blanka_bl_punch_h_2":[387,565,119,97],"blanka_bl_punch_h_3":[811,565,144,97],"blanka_bl_punch_h_4":[159,565,105,94]}},{"slug":"bl_recover","name":"Recover","pre":"bl_left1","loops":0,"duration":200,"position":[50,0],"sprites":{"blanka_bl_recover_0":[5,672,141,67],"blanka_bl_recover_1":[156,672,104,100],"blanka_bl_recover_2":[270,672,92,107],"blanka_bl_recover_3":[372,672,125,94]}},{"slug":"bl_role_1","name":"Role 1","pre":"bl_left1","loops":0,"duration":200,"position":[50,0],"sprites":{"blanka_bl_role_1_0":[507,672,90,100],"blanka_bl_role_1_1":[607,672,90,100],"blanka_bl_role_1_2":[707,672,90,100],"blanka_bl_role_1_3":[807,672,90,100],"blanka_bl_role_1_4":[5,782,90,100],"blanka_bl_role_1_5":[105,782,90,100],"blanka_bl_role_1_6":[372,782,90,100],"blanka_bl_role_1_7":[472,782,90,100]}},{"slug":"bl_role_2","name":"Role 2","pre":"bl_left1","loops":0,"duration":200,"position":[50,0],"sprites":{"blanka_bl_role_2_0":[572,782,93,98],"blanka_bl_role_2_1":[675,782,122,100],"blanka_bl_role_2_2":[807,782,110,99],"blanka_bl_role_2_3":[926,5,122,100],"blanka_bl_role_2_4":[960,115,144,92],"blanka_bl_role_2_5":[968,217,93,98],"blanka_bl_role_2_6":[985,325,91,110],"blanka_bl_role_2_7":[985,445,106,99],"blanka_bl_role_2_8":[965,554,102,88]}},{"slug":"bl_up","name":"Up","pre":"bl_left1","loops":0,"duration":200,"position":[50,0],"sprites":{"blanka_bl_up_0":[927,863,86,113],"blanka_bl_up_1":[1114,5,105,130],"blanka_bl_up_2":[1114,145,98,151]}},{"slug":"bl_win","name":"Win","pre":"bl_left1","loops":0,"duration":200,"position":[50,0],"sprites":{"blanka_bl_win_00":[1086,306,91,63],"blanka_bl_win_01":[5,379,92,72],"blanka_bl_win_02":[1101,379,99,87],"blanka_bl_win_03":[276,379,92,72],"blanka_bl_win_04":[1101,476,99,87],"blanka_bl_win_05":[1078,573,87,121],"blanka_bl_win_06":[1078,704,95,121],"blanka_bl_win_07":[1039,835,95,121],"blanka_bl_win_08":[5,966,95,121],"blanka_bl_win_09":[316,966,95,121],"blanka_bl_win_10":[421,966,95,121],"blanka_bl_win_11":[526,966,104,81],"blanka_bl_win_12":[640,966,99,87],"blanka_bl_win_13":[580,379,92,72],"blanka_bl_win_14":[682,379,91,63],"blanka_bl_win_15":[387,476,92,72],"blanka_bl_win_16":[749,966,99,87],"blanka_bl_win_17":[1023,966,103,95]}}]
	let base_slug = 'bl_stand'
	let base_pos = {
		x: 200,
		y: 0
	}
	let base_pos_dur = 500
	let base_obj = actions.find((el) => el.slug === base_slug)
	let frame_width = 0
	let left = 0
	let top = 0
	let animated = false
	let slide_duration = 1000

	let element, frame
	const resetAnimation = (e) => {
		base_obj = actions.find((el) => el.slug === base_slug)
		animated = false
		slide_duration = slide_duration / 2
		left = base_pos.x
	}
	const resetPosDura = () => (slide_duration = base_pos_dur)
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
		if (left <= xmin) left = base_pos.x
		if (left >= xmax) left = xmax
		// if (top <= ymin) top = base_pos.y
		// if (top >= ymax) top = ymax
		if (left <= xmin || left >= xmax) console.log('Check Outide True!', { xmin, xmax, ymin, ymax, left, top })
	}
	const handleAction = (item) => {
		base_obj = item
		animated = true
		// let { slug, name, pre, loops, duration, position, sprites } = item
		// console.log("Handle Action", {slug, name, pre, loops, duration, position, sprites})
	}
	const showInfo = (e, titel = 'INFO') => {
		console.log(titel, e.detail)
	}

	$: checkIfOutside(frame_width, left)
</script>

<article
	bind:clientWidth={frame_width}
	bind:this={frame}
	class:animated
	class="battle-bar">
	<Slide
		{base_pos}
		bind:duration={slide_duration}
		bind:x={left}
		on:ended={resetPosDura}>
		<Sprite
			{...base_obj}
			bind:x={left}
			bind:element
			bind:animated
			on:ended={resetAnimation}
			on:started={(e) => showInfo(e, 'Animation Started!')} />
	</Slide>
</article>
<footer class="flex flex-wrap gap-1 py-4">
	{#each actions as item, i}
		<!-- slug, name, pre, loops, duration, position, sprites -->
		<button on:click={() => handleAction(item)} class="btn">{item.name}</button>
	{/each}
</footer>

<style>
	.battle-bar {
		--opc: 0.9;
		width: 100%;
		height: 200px;
		position: relative;
		display: flex;
		border-width: 2px;
		border-style: solid;
		border-color: var(--sky-500, transparent);
		border-radius: 0.25rem;
	}
	.battle-bar.animated {
		--opc: 0.3;
		border-color: rgba(239, 68, 68, 0.9);
	}
	.battle-bar::before {
		content: 'Blanka Sprite Animation';
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		left: 0;
		color: rgba(239, 68, 68, 0.9);
		background-image: url('/img/arena/blanka.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: bottom;
		opacity: var(--opc);
		transition: all 0.5s ease-in-out;
		border-radius: 0.25rem;
	}
</style>
