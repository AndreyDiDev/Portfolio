<!-- <script>
    export let y; // pass props pass components
    import Main from "../components/Main.svelte";


    let tags = ["All", "Web Dev", "Machine Learning", "App Dev", "Embedded", "Experience/Work"];
    let selectedTags = [];

    let tabs=  [
        { name: 'Projects', link: '#projects' },
        { name: 'About Me', link: '#about'},
    ];


    function selectTag(tag) {
        if (selectedTags.includes(tag)) {
            selectedTags = selectedTags.filter(t => t !== tag);
        } else {
            selectedTags = [...selectedTags, tag];
        }


    };
</script>


<style>
    .tag-button {
        cursor: pointer;
        padding: 0.5em 1em;
        margin: 0.5em;
        border-radius: 9px;
        background-color: #ffffff;
        color: rgb(0, 0, 0);
        transition: background-color 0.3s;
    }

    .tag-button:hover {
        background-color: #001f61;
        color: rgb(123, 157, 219);
    }

    .tag-button.active {
        background-color: #4602ff;
        color: rgb(255, 255, 255);
    }
</style>

<header class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid ' + (
    y>0 ? ' py-4 bg-slate-950 border-violet-950' : 'py-6 bg-transparent border-transparent'
)}>
    <h1 class='font-medium'>
        <b class="font-bold poppins">Andrey</b> Dimanchev
    </h1>

    <section id="tags" class="py-4 flex justify-center">
        {#each selectedTags as tag}
            <button 
                class="tag-button {selectedTags.includes(tag) ? 'active' : ''}" 
                on:click={() => selectTag(tag)}>
                {tag}
            </button>
        {/each}
    </section>

    <div class="sm:flex ml-auto pr-5 items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a href={tab.link} class='duration-200 hover:text-violet-400'>
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>

    <a 

        href="#footer"
        class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white
        text-slate-950"

    >
        <div 
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20
            group-hover:translate-x-full z-0 duration-200">
        
        </div>
        <h4 class="relative z-9">Contact Me</h4>
    </a>

    <style>
        .tag {
          cursor: pointer;
          padding: 0.5em 1em;
          margin: 0.5em;
          border-radius: 5px;
          background-color: #f0f0f0;
          transition: background-color 0.3s;
        }
      
        .tag:hover {
          background-color: #ddd;
        }
      
        .tag.active {
          background-color: #007bff;
          color: white;
        }
    </style>


</header>
 -->
