<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import Main from "../components/Main.svelte";

    let y = 0;
    let innerHeight = 0;
    let innerWidth = 0;

    function goTop() {
        document.body.scrollIntoView({ behavior: "smooth" });
    }
</script>

<div class ="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm 
sm:text-base min-h-screen">

    <div class={"fixed bottom-0 w-full duration-200 fle p-10 z-[10] " + (y > 0
        ? ' opacity-full pointer-events-auto': ' pointer-events-none opacity-0'
    )}>
        <button 
        on:click={goTop} 
        class="ml-auto rounded-full aspect-square bg-slate-900
        text-violet-400 px-3 sm:px-4 hovering:bg-slate-800 cursor-pointer "
        >
            <i class="fa-solid fa-arrow-up grid place-items-center aspect-square" />
        </button>
    </div>

    <Main y={y}/>
    <!-- <slot /> -->
    <Footer/>
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth/>