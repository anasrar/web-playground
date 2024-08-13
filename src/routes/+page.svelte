<script lang="ts">
	const links: { url: string; text: string }[] = [
		{
			url: './button-with-shine-border/',
			text: 'Button with shine border'
		},
		{
			url: './dot-background/',
			text: 'Dot background'
		},
		{
			url: './wavy-circle/',
			text: 'Wavy Circle'
		}
	] as const;
</script>

<svelte:head>
	<title>Web Playground</title>
	<meta name="description" content="Web Playground" />
</svelte:head>

<section>
	<ul class="list-disc list-inside">
		{#each links as link}
			<li>
				<a class="text-blue-700 hover:text-blue-900 underline" href={link.url}>{link.text}</a>
			</li>
		{/each}
	</ul>
</section>
