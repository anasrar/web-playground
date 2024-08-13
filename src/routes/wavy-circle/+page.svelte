<script lang="ts">
	const width = 400;
	const halfWidth = width / 2;
	const height = 400;
	const halfHeight = height / 2;

	// Parameter
	const outterRadius = halfWidth * 0.9;
	const innerRadius = halfWidth * 0.82;
	const waves = 13;
	const outterHandleLength = 18;
	const innerHandleLength = 18;

	const path = generatePath();

	function perpendicular(x: number, y: number, reverse = false) {
		const r = reverse ? -1 : 1;
		return [-y * r, x * r] as const;
	}

	function handle(
		x: number,
		y: number,
		length: number,
		radius: number,
		offsetX: number,
		offsetY: number,
		reverse = false
	) {
		const [dirX, dirY] = perpendicular(x, y, reverse);
		const handleX = dirX * length;
		const handleY = dirY * length;
		return [x * radius + offsetX + handleX, y * radius + offsetY + handleY] as const;
	}

	function generatePath() {
		const startOffset = -Math.PI / 2;
		const offset = (Math.PI * 2) / waves;
		const halfOffset = offset / 2;

		let result = '';

		for (let index = 0; index < waves; index++) {
			const startAngle = startOffset + offset * index - halfOffset;
			const midAngle = startOffset + offset * index;
			const endAngle = startOffset + offset * index + halfOffset;

			const startXUnit = Math.cos(startAngle);
			const startYUnit = Math.sin(startAngle);
			const startX = startXUnit * innerRadius + halfWidth;
			const startY = startYUnit * innerRadius + halfHeight;
			const [startXHandle1, startYHandle1] = handle(
				startXUnit,
				startYUnit,
				innerHandleLength,
				innerRadius,
				halfWidth,
				halfHeight
			);

			const midXUnit = Math.cos(midAngle);
			const midYUnit = Math.sin(midAngle);
			const [midXHandle1, midYHandle1] = handle(
				midXUnit,
				midYUnit,
				outterHandleLength,
				outterRadius,
				halfWidth,
				halfHeight,
				true
			);
			const midX = midXUnit * outterRadius + halfWidth;
			const midY = midYUnit * outterRadius + halfWidth;
			const [midXHandle2, midYHandle2] = handle(
				midXUnit,
				midYUnit,
				outterHandleLength,
				outterRadius,
				halfWidth,
				halfHeight
			);

			const endXUnit = Math.cos(endAngle);
			const endYUnit = Math.sin(endAngle);
			const [endXHandle1, endYHandle1] = handle(
				endXUnit,
				endYUnit,
				innerHandleLength,
				innerRadius,
				halfWidth,
				halfHeight,
				true
			);
			const endX = endXUnit * innerRadius + halfWidth;
			const endY = endYUnit * innerRadius + halfWidth;

			if (index === 0) {
				result += `M${startX} ${startY}`;
			}
			result += `C${startXHandle1} ${startYHandle1},${midXHandle1} ${midYHandle1},${midX} ${midY}C${midXHandle2} ${midYHandle2},${endXHandle1} ${endYHandle1},${endX} ${endY}`;
		}

		return result;
	}
</script>

<svelte:head>
	<title>Wavy Circle</title>
	<meta name="description" content="Web Playground: Wavy Circle" />
</svelte:head>

<main>
	<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox={`0 0 ${width} ${height}`}>
		<path d={path} stroke="none" fill="black" />
	</svg>
</main>

<style lang="postcss">
</style>
