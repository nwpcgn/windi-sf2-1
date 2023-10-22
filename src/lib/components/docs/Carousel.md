## Carousel

This component takes a list of items and index and will return the current index.  It exposes functions to go the next or previous item as well as way to _jump_ to a specified index.

| Property | Description |
| -------- | ------------ |
| items | The array of items in the carousel | 
| currentIndex | The index of the currently displayed item | 
| loop | Flag indicating that the array should loop around, defaults to _false_ | 
| setIndex | a function allowing the user to move immediately to a specified index | 
| controls | an object containing a _next_ and a _previous_ function | 

## Examples

For brevity, the example code excludes styling, which is of course always done on the consumer side.

```svelte
<script>
    import { Carousel } from 'renderless-svelte'
    const items = ["Squirrel 🐿️", "Rabbit 🐇", "Hamster 🐹"]
</script>

<Carousel items="{items}" let:payload let:controls>
    <button type="button" on:click={controls.previous}>Previous</button>
    <span>{payload}</span>
    <button type="button" on:click={controls.next}>Next</button>
</Carousel>
```

```svelte
<script>
    import { Carousel } from 'renderless-svelte'
    const items = ["Squirrel 🐿️", "Rabbit 🐇", "Hamster 🐹"]
</script>

<Carousel items="{items}" let:payload let:setIndex let:currentIndex>
    <div>
        <span>{payload}</span>
        <ul>
            {#each items as _, i}
            <li>
                <button class:active={currentIndex === i} on:click={() => setIndex(i)}>{i}</button>
            </li>
            {/each}
        </ul>
    </div>
</Carousel>
```
