<script>

	import Activity from './components/Activity.svelte'

	let show = false

	let activity = {}
	let participants = ''
	let price = ''
	let type = ''

	const getActivity = () => {
		show = false 
		fetch(`https://www.boredapi.com/api/activity?participant=${participants}&activity=${activity}&price=${price}&type=${type}`)
		.then( res => res.json() )
		.then( json => {
			activity = json
			show = true
		})
	}
	
</script>

<main>

	<div class="inputs">
		<input id="inpType" type="text" bind:value={type} placeholder="Type of activity:">
		<input id="inpParticipants" type="number" bind:value={participants} placeholder="Number of participants:">
		<input id="inpPrice" type="number" bind:value={price} placeholder="Price:">
		<button on:click={getActivity}>Find activity</button>
	</div>
	
	{#if show}
		<Activity {activity} />
	{:else}
		<h2>Try again</h2>
	{/if}
	
</main>

<style>

	main {
		max-height: 100vh;
		max-width: 100vw;
		display: grid;
		place-items: center;
		grid-template-rows: 20vh 80vh;
		background-image: url("https://images.unsplash.com/photo-1499892477393-f675706cbe6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
		background-size: inherit;
		background-attachment: fixed;
	}

	.inputs {
		display: grid;
		grid-template-columns: auto auto auto auto;
		place-content: center;
		gap: 1rem;
	}

	input {
		outline: none;
		padding: .6rem;
		border: 2px solid rgb(232, 125, 42);
		border-radius: .3rem;
		background-color: whitesmoke;
		color: rgb(0, 66, 110);
	}

	button {
		outline: none;
		padding: 1rem;
		border: none;
		border-radius: .3rem;
		background-color: rgb(232, 125, 42);
		font-weight: bold;
		color: rgb(0, 66, 110);
	}

	h2 {
		text-align: center;
		 background-color:  rgb(232, 125, 42);
    	opacity: 80%;
		color: rgb(0, 66, 110);
		border-radius: .3rem;
    	border: none;
    	box-shadow: 0 0 1rem 1px rgb(153, 153, 153);
		padding: 4rem;
	}
	
</style>