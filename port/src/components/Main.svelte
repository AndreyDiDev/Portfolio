<script>
    import { scale } from 'svelte/transition';
    import Step from './Step.svelte';
    
    let steps = [
        {
            title: 'UKF',
            image: 'images/project1.png',
            description: 'Unscented Kalman Filter for filtering the position of our rocket, and fusing sensors (Barometer, GPS, IMU) to get a more accurate position estimate',
            link: 'https://github.com/AndreyDiDev/UnscentedKalmanFilter',
            tags: ["Machine Learning", "C++", "Sensor Fusion and Filtering", "Embedded", "Experience/Work"]
        },
        {
            title: 'Tic Tac Toe',
            image: 'images/project2.png',
            description: 'Classic Tic Tac Toe game implemented in Assembly language for the 8086 processor',
            link: 'https://github.com/AndreyDiDev/TicTacToeAssembly',
            tags: ["Low-Level coding", "Assembly"]
        },
        {
            title: 'Madgwick Filter',
            image: 'images/project3.png',
            link: 'https://github.com/AndreyDiDev/MadgwickAHRS',
            description: 'Attitude and Heading reference system using Madgwick\'s quaternion based algorithm to filter a 9 dof IMU',
            tags: ["Sensor Fusion and Filtering", "C++", "Embedded", "Experience/Work"]
        },
        {
            title: 'Portfolio Website',
            image: 'images/project3.png',
            link: 'https://github.com/AndreyDiDev/Portfolio',
            description: 'This website',
            tags: ["Web Dev", "Svelte", "JS", "CSS", "HTML", "TailwindCSS"],
        },
        {
            title: 'SPI Driver',
            image: 'images/project3.png',
            link: 'https://github.com/AndreyDiDev/SPI_Driver_Repo',
            description: 'SPI Driver for an ADC',
            tags: ["Embedded", "SPI", "C++", "STM32CubeMX", "Experience/Work"]
        },
        {
            title: 'Financial Manager Website',
            image: 'images/project3.png',
            link: 'https://github.com/Nicholasm24/calhacksWinnerPOV',
            description: '24 hour hackathon project, CalgaryHacks',
            tags: ["Web Dev", "JS", "React", "CSS", "HTML"]
        },
        {
            title: 'Schedule Helper Website',
            image: 'images/project3.png',
            link: 'https://github.com/AndreyDiDev/CalgaryHacksProjectX',
            description: '24 hour hackathon project, CalgaryHacks',
            tags: ["Web Dev", "JS", "Firebase", "CSS", "HTML"]
        },
        {
            title: 'Android App',
            image: 'images/project3.png',
            description: 'Building Android App with elegant UI and Firebase backend',
            tags: ["App Dev", "Java", "Firebase", "XML", "Kotlin"]
        },
        {
            title: 'Machine Learning and Data Science Workshop Director',
            image: 'images/project3.png',
            description: 'At the Machine Learning and Data Science club in UCalgary, I am the workshop director. I am responsible for organizing workshops and teaching students about Machine Learning and Data Science',
            tags: ["Machine Learning", "Teaching", "Data Science", "Experience/Work"]
        },
        {
            title: 'Internship @ Strato Earth',
            image: 'images/project3.png',
            link: 'https://strato.earth/',
            description: 'I am currently working as a Software Developer Intern at Strato Earth. I am working on a project that involves building a web application for managing and visualizing data from IoT devices',
            tags: ["Sensors", "Web Dev", "Data Science", "Docker", "AWS", "React", "Experience/Work"]
        },
        {
            title: 'DSML Club Website',
            image: 'images/project3.png',
            description: 'Helping build the club\'s website',
            tags: ["Web Dev", "Data Science", "Typescript", "CSS", "JS", "Experience/Work"]
        },
    ];

    let benefits = [
        {
            title: 'Passionate',
            description: 
                'I am passionate about software development and I am always looking to learn new things.',
        },
        {
            title: 'Team Player',
            description: 
                'I am a team player and I enjoy working with others to achieve a common goal.',
        },
        {
            title: 'Problem Solver',
            description: 
                'I am a problem solver and I enjoy finding creative solutions to challenging problems.'
        },
        {
            title: 'Detail Oriented',
            description: 
                'I am detail oriented and I take pride in my work.'
        },
        {
            title: 'Innovative',
            description: 
                'I strive to have a novel vision for every project I undertake.'
        },
    ];

    // changing text ----------------------------------------------------------------- <start>
    import { onMount } from 'svelte';

    let currentText = "";
    let texts = ["Software", "Web", "Machine Learning", "App", "Embedded"];
    let index = 0;
    let isDeleting = false;
    let typingSpeed = 150; // Speed of typing in milliseconds
    function typeWriter() {
        const fullText = texts[index];

        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
        }

        if (!isDeleting && currentText === fullText) {
            setTimeout(() => {
                isDeleting = true;
                typeWriter();
            }, 2000); // Pause before deleting
            return;
        } else if (isDeleting && currentText === "") {
            isDeleting = false;
            index = (index + 1) % texts.length; // Move to the next word
        }

        setTimeout(typeWriter, isDeleting ? typingSpeed / 2 : typingSpeed);
    }

    onMount(() => {
        typeWriter();
    });

    // ------------------------------------------------------------------------------ changing text <end>

    let tags = ["All", "Web Dev", "Machine Learning", "App Dev", "Embedded", "Experience/Work"];
    let selectedTags = [];

    $: filteredProjects = selectedTags.length === 0 || selectedTags.includes("All") 
        ? steps 
        : steps.filter(step => selectedTags.some(tag => step.tags.includes(tag)));

    function selectTag(tag) {
        if (selectedTags.includes(tag)) {
            selectedTags = selectedTags.filter(t => t !== tag);
        } else {
            selectedTags = [...selectedTags, tag];
        }
    }

    export let y; // pass props pass components
    let tabs=  [
        { name: 'Projects', link: '#projects' },
        { name: 'About Me', link: '#about'},
    ];

</script>

<!-- script end -------------------------------------------------------------------------------->

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
    <h1 class='font-medium pr-8 py-3'>
        <b class="font-bold poppins">Andrey</b> Dimanchev
    </h1>

    <section id="tags" class="flex justify-center flex-wrap text-sm sm:text-base">
        {#each selectedTags as tag}
            <button 
                class="tag-button {selectedTags.includes(tag) ? 'active' : ''} m-1 px-2 py-1 text-xs sm:text-sm" 
                on:click={() => selectTag(tag)}>
                {tag}
            </button>
        {/each}
    </section>

    <div class="sm:flex ml-auto pr-5 items-center gap-4 hidden pl-4">
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
            group-hover:translate-x-full z-0 duration-200 pl-4">
        </div>
        <h4 class="relative z-9 text-center ">Contact Me</h4>
    </a>


</header>

<main class="flex flex-col flex-1 p-4">
    <section 
        id="IntroPage" 
        class="grid grid-cols-1 lg:grid-cols-2 gap=10 py=8 sm:py-14"
    >
        <div 
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi, I'm <span class="poppins text-violet-400">Andrey</span> Dimanchev 
                <br/> {currentText}
                <span class="poppins text-violet-400">Engineer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                I thrive on unraveling complex problems. 
                I've invested myself in areas like <span class="font-semibold text-violet-400">Web Dev, Machine 
                Learning, Embedded Engineering, Cloud platforms...</span>   
                <br> To every project, I bring <span class="text-violet-400">passion and innovation</span>.
            </p>

            <a 
            
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins
                relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
                cursor-pointer
                href="https://www.linkedin.com/in/andreydimanchev/" target="_blank">

                <div
                    class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-300">
                </div>

                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>

        <div class="relative shadow-4xl grid place-items-center">
            <img 
                src={"images/profile3.png"} 
                alt="Profile Image" 
                class="object-cover z-[2] max-h-[70vh] "
                />
        </div>
        
        <!-- <section id="selected-tags" class="py-4 flex justify-center">
            <div>
                <h2>Selected Tags:</h2>
                <ul>
                    {#each selectedTags as tag}
                        <li>{tag}</li>
                    {/each}
                </ul>
            </div>
        </section> -->


    </section>


    <section id="projects" class="py-40 lg:py-52 flex flex-col gap-20">
        
        <section id="tags" class="py-4 flex justify-center flex-wrap text-sm sm:text-base">
            {#each tags as tag}
                <button 
                    class="tag-button {selectedTags.includes(tag) ? 'active' : ''} m-1 px-2 py-1 text-xs sm:text-sm" 
                    on:click={() => selectTag(tag)}>
                    {tag}
                </button>
            {/each}
        </section>

        <div class="flex flex-col text-center">
            <h1 class="text-lg sm:text-xl md:text-2xl">
                A few of my projects
            </h1>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {#each filteredProjects as project}
                <Step step={project}>
                    <p class="text-l font-bold">{project.description}</p>
                    <strong class="text-violet-400">Tags: {project.tags.join(', ')}</strong>
                </Step>
            {/each}
          </div>

        <div class="flex flex-col gap-2 text-center">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-violet-400">see more?</span>
            </h3>
        </div>
        <a href="https://github.com/AndreyDiDev" target="_blank" class=" mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0
            -mt-10 hover:border-violet-700 duration-200 ">
                Check out my GitHub &rarr;
        </a>
    </section>

    <section 
        id="about" 
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >

        <div 
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0
            before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute
            after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        >

            <h6 class="text-lg sm:text-xl md:text-2xl">
                Want to know more?
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">about me</span>
            </h3>

        </div>

        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am...
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">

                <p 
                    class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                >
                    0{index + 1}
                </p>
                <div class="flex flex-col gap-6 sm:gap-8">
                    <h3 class="text-2xl sm:text-3xl md:text-5xl">
                        {benefit.title}
                    </h3>
                    <p>{benefit.description}</p>
                </div>
            </div>
        {/each}

        </div>

        <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins">The <span class="text-violet-400 poppins">Complete</span> Package</h5>

        <div 
            class="flex flex-col overflow-hidden gap-10 max-w-[900px] max-h-[1000px] mx-auto w-full h-full "
        >

            <div class="overflow-x-auto custom-scrollbar">

            <table class="bg-white text-slate-700 rounded text-center rounded-2xl ">
                <thead>
                    <tr class="border-b border-solid border-slate-200">
                        <th/>
                        <th class:highlight={selectedTags.includes('Web Dev') || selectedTags.includes('All') || selectedTags.includes('Experience/Work')} class="whitespace-nowrap p-2 px-4">Web Dev</th>
                        <th class:highlight={selectedTags.includes('Embedded') || selectedTags.includes('All') || selectedTags.includes('Experience/Work')} class="whitespace-nowrap p-2 px-4">Embedded Dev</th>
                        <th class:highlight={selectedTags.includes('Web Dev') || selectedTags.includes('All') || selectedTags.includes('Experience/Work')} class="whitespace-nowrap p-2 px-4">Networks/Cloud Dev</th>
                        <th class:highlight={selectedTags.includes('App Dev') || selectedTags.includes('All')} class="whitespace-nowrap p-2 px-4">App Dev</th>
                        <th class:highlight={selectedTags.includes('Machine Learning') || selectedTags.includes('All') || selectedTags.includes('Experience/Work')} class="whitespace-nowrap p-2 px-4">Machine Learning Dev</th>
                    </tr>
                </thead>

                <!-- whitespace-nowrap bg-violet-700 text-white p-4 px-8 -->

                <tbody>
                    <tr class="border-b border-solid border-slate-200">
                        <td class="bg-violet-700 text-white"><i class="pl-4
                        pr-8 py-4 font-semibold text-sm whitespace-nowrap">Languages</i></td>
                        <td class:highlight={selectedTags.includes('Web Dev') || selectedTags.includes('All') || selectedTags.includes('Experience/Work')}  class="border border-solid border-gray p-4">JavaScript, TypeScript, HTML, CSS, CS</td>
                        <td class:highlight={selectedTags.includes('Embedded') || selectedTags.includes('All')|| selectedTags.includes('Experience/Work')} class="border border-solid border-gray p-4">C, C++, Assembly</td>
                        <td class:highlight={selectedTags.includes('Web Dev') || selectedTags.includes('All') || selectedTags.includes('Experience/Work')} class="border border-solid border-gray p-4">Java</td>
                        <td class:highlight={selectedTags.includes('App Dev') || selectedTags.includes('All')} class="border border-solid border-gray p-4">Java, Kotlin, XML</td>
                        <td class:highlight={selectedTags.includes('Machine Learning') || selectedTags.includes('All') || selectedTags.includes('Experience/Work')} class="border border-solid border-gray p-4">Matlab, Python</td>
                    </tr>

                    <tr class="border-b border-solid border-slate-200">
                        <td class="bg-violet-700 text-white"><i class="pl-4 
                        pr-8 py-4 font-semibold text-sm whitespace-nowrap">Tools</i></td>
                        <td class:highlight={selectedTags.includes('Web Dev') || selectedTags.includes('All') || selectedTags.includes('Experience/Work')}  class="border border-solid border-gray p-4">React, Svelte</td>
                        <td class:highlight={selectedTags.includes('Embedded') || selectedTags.includes('All') || selectedTags.includes('Experience/Work')} class="border border-solid border-gray p-4">Terminal</td>
                        <td class:highlight={selectedTags.includes('Web Dev') || selectedTags.includes('All') || selectedTags.includes('Experience/Work')} class="border border-solid border-gray p-4">Azure, Docker</td>
                        <td class:highlight={selectedTags.includes('App Dev') || selectedTags.includes('All')} class="border border-solid border-gray p-4">Firebase</td>
                        <td class:highlight={selectedTags.includes('Machine Learning') || selectedTags.includes('All') || selectedTags.includes('Experience/Work')} class="border border-solid border-gray p-4">Matplotlib, Numpy, Matlab, Python</td>
                    </tr>

                    <tr class="">
                        <td class="bg-violet-700 text-white "><i class=" pl-4
                        pr-8 py-4 font-semibold text-sm whitespace-nowrap ">IDEs</i></td>
                        <td class:highlight={selectedTags.includes('Web Dev') || selectedTags.includes('All') || selectedTags.includes('Experience/Work')} class="border border-solid border-gray p-4">VS Code, Docker Desktop</td>
                        <td class:highlight={selectedTags.includes('Embedded') || selectedTags.includes('All') || selectedTags.includes('Experience/Work')} class="border border-solid border-gray p-4">STM32Cube, Vim, Nano, Arduino, VS Code, Matlab</td>
                        <td class:highlight={selectedTags.includes('Web Dev') || selectedTags.includes('All') || selectedTags.includes('Experience/Work')} class="border border-solid border-gray p-4">Firebase, Azure, Docker</td>
                        <td class:highlight={selectedTags.includes('App Dev') || selectedTags.includes('All')} class="border border-solid border-gray p-4">Android Studio</td>
                        <td class:highlight={selectedTags.includes('Machine Learning') || selectedTags.includes('All') || selectedTags.includes('Experience/Work')} class="p-4">Matlab, VS Code</td>
                    </tr>

                </tbody>

            </table>
        </div>

        </div>

        <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
            <p>Scroll to see more &rarr;</p>
        </div>

        <div class="text-center poppins text-violet-400 text-slate-950 text-2xl sm:text-3xl">
            <p>Why not invest?</p>
        </div>

    </section>

    <!-- styles ------------------------------------------------------------------------------------- -->
<style>
    .scaled-image {
        transform: scale(1.1) rotateY(180deg);
    }
</style>

<style>
    .enlarge-on-hover {
        transition: transform 0.5s ease-in-out;
    }

    .enlarge-on-hover:hover {
        transform: scale(1.4);
    }
</style>

<style>
    .typing-animation {
        border-right: 2px solid;
        animation: blink-caret 0.75s step-end infinite;
    }

    @keyframes blink-caret {
        from, to {
            border-color: transparent;
        }
        50% {
            border-color: black;
        }
    }
</style>

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

<style>
    /* Custom scrollbar styles */
    .custom-scrollbar::-webkit-scrollbar {
        width: 12px;
        height: 15px;
    }

    .custom-scrollbar::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px; /* Rounded corners for the track */
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: #7c3aed; /* Violet color */
        border-radius: 10px;
        border: 3px solid #f1f1f1;
    }

    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background-color: #5b21b6; /* Darker violet color */
    }
</style>

<style>
    .highlight{
        background-color: #a9a9a9;
        text: #000;
        border-radius: 7px; /* Preserve rounded corners */
    }

    table td, table th {
        padding: 1em; /* Add padding to each cell */
        border-radius: 8px; /* Add rounded corners to all cells */
    }

    .rounded-corner {
        border-radius: 0 0 0 15px; /* Add rounded corners to the bottom left cell */
    }

    .round-corners{
        border-radius: 15px; /* Add rounded corners to all cells */
    }

</style>


    <!-- styles end -->

</main>