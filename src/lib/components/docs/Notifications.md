## Notifications

This is a straightforward Notification component consisting of two parts:

- a shared notification queue
- a wrapper for the actual notification

## The queue

The queue is a readonly svelte store that exposes two additional functions:

| Function | Description |
| -------- | ----------- |
| pop | removes the first item on the queue |
| push | adds an item to the end of the queue |

```js
import { notifications } from 'renderless-svelte'

notifications.push("Something happened")
```

## The notification component

This component reacts to elements being added a queue and can be initialized with a timer to specify how long a notification should stay visible.

| Property | Description |
| -------- | ------------ |
| payload | will be the current item from the queue, this can be any kind of object, allowing for great flexibility in how the notifications will look like. |
| duration | determines how long a notification should remain visible, default is 1000 (corresponding to one second) |
| on:notify | fires if a new notification is being sent, `event.detail` will hold the same payload as _payload_ |

```svelte
<script>
    import { Notification } from 'renderless-svelte'
</script>

<Notification let:payload duration="200">
    <span>{payload}</span>
</Notification>
```

## Example

```svelte
<script>
    import { Notification, notifications } from 'renderless-svelte'
</script>

<button on:click={() => notifications.push("Squirrel 🐿️")}>Squirrel 🐿️</button>
<button on:click={() => notifications.push("Rabbit 🐇")}>Rabbit 🐇</button>
<button on:click={() => notifications.push("Hamster 🐹")}>Hamster 🐹</button>

<Notification let:payload duration={10000}>
    <span>{payload}</span>
</Notification>

```
