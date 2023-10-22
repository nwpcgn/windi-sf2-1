## TabControl

This component offers an easy way to create tab controls.  It consists of two parts: the TabControl itself and TabControlItems.


## The TabControl

The TabControl is the container for the TabControlItem and exposes a slot named 'tabs' that can be used to render the actual controls themselves. The _tabs_ header comes with an exported property 'tabs' that has the details for each tab.  The tabs are identified by a property _id_ that has to be unique.

**This uniqueness is not tested by the control and should be ensured by the user**

Each tab object itself comes with the following properties

| Property | Description |
| -------- | ----------- |
| active | flag indicating if this is the active tab |
| disabled | flag indicating the field is disabled |
| id | a unique identifier for this tab |
| payload | a value (can be an object) meant to be used to display the name of the tab |
| select | a function allowing this tab to be selected |

```svelte
<script>
    import { TabControl } from 'renderless-svelte'
</script>

<TabControl>
    <div slot="tabs" let:tabs>        
        {#each tabs as { active, id, payload, select }}
            <button class:active on:click="{select}">{payload}</button>
        {/each}
    </div>

    <!-- here come the TabControlItems -->
</TabControl>
```

## The TabControlItem

This component creates an item in the TabControl, it will simply wrap a slot that is conditionally rendered based on the currently selected tab.  It takes two attributes

| Property | Description |
| -------- | ----------- |
| active | a flag indicating the initial state of the tab, defaults to false |
| id | a unique identifier for this tab |
| payload | a value (can be an object) meant to be used to display the name of the tab |
| disabled | flag indicating the tab is disabled |

## Examples

```svelte
<script>
    import { TabControl, TabControlItem } from 'renderless-svelte'
</script>

<TabControl>
    <div class="tabs" slot="tabs" let:tabs>        
        {#each tabs as { active, disabled, payload, select }}
            <button class:active on:click="{select}" {disabled}>{payload}</button>
        {/each}
    </div>
    <div class="tab">
        <TabControlItem id="S" payload="Squirrel 🐿️" active>
                This is a text about Squirrels 🐿️
        </TabControlItem>
        <TabControlItem id="R" payload="Rabbit 🐇">
            This is a text about Rabbits 🐇
        </TabControlItem>
        <TabControlItem id="H" payload="Hamster 🐹">
            This is a text about Hamsters 🐹
        </TabControlItem>
        <TabControlItem id="D" payload="Dragon 🐉" disabled>
            This is a text about Dragons 🐉
        </TabControlItem>
    </div>
</TabControl>
```
