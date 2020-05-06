<script>
    import { scale } from 'svelte/transition'
    
    export let activity
</script>
    
    
    <div class="activity" in:scale>
        <h2>{activity.activity}</h2>
        <p>Type of activity: <b>{activity.type}</b></p>
        <p>Number of participants: <b>{activity.participants}</b></p>
        <p>Price: <b>{activity.price}</b></p>
        <p>Accessibility: <b>{activity.accessibility}</b></p>
        <p>Read more: <b>{activity.link}</b></p>
	</div>

<style>

.activity {
    width: 50vw;
    height: 50vh;
    display: grid;
    place-content: center;
    background-color:  rgb(232, 125, 42);
    opacity: 80%;
    color: whitesmoke;
    padding: 4rem;
    margin: 2rem;
    border-radius: .3rem;
    border: none;
    box-shadow: 0 0 1rem 1px rgb(153, 153, 153);
}

.activity h2 {
    padding-bottom: 1.5rem;
    text-align: center;
}

</style>