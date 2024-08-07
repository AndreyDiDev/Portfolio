<script>
    import { scale } from 'svelte/transition';
    import Step from './Step.svelte';
    
    
    let steps = [
        {
            title: 'UKF',
            image: 'images/project1.png',
            link: 'https://github.com/AndreyDiDev/UnscentedKalmanFilter',
            tags: ["Machine Learning"]
        },
        {
            title: 'Tic Tac Toe in Assembly',
            image: 'images/project2.png',
            link: 'https://github.com/AndreyDiDev/TicTacToeAssembly',
            tags: ["Low-Level coding", "Assembly"]
        },
        {
            title: 'Madgwick AHRS Filter',
            image: 'images/project3.png',
            link: 'https://github.com/AndreyDiDev/MadgwickAHRS',
            tags: ["Sensor Fusion and Filtering", "C++"]
        },
        {
            title: 'Portfolio Website',
            image: 'images/project3.png',
            link: 'https://github.com/AndreyDiDev/Portfolio',
            tags: ["Web Dev", "Svelte"]
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
    ];

    // changing text ----------------------------------------------------------------- <start>
    import { onMount } from 'svelte';

    let currentText = "";
    let texts = ["Software", "Web", "Machine Learning", "Cloud/Network"];
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
            setTimeout(() => isDeleting = true, 2000); // Pause before deleting
        } else if (isDeleting && currentText === "") {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }

        setTimeout(typeWriter, isDeleting ? typingSpeed / 2 : typingSpeed);
    }

    onMount(() => {
        typeWriter();
    });

    // ------------------------------------------------------------------------------ changing text <end>

        let tags = ["All", "Web Dev", "Machine Learning", "Cloud/Network"];
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
                I specialize in building websites and web applications that are fast, responsive, and accessible.
                Using <span class="text-violet-400">React</span> and <span class="text-violet-400">Svelte</span> to
                create modern user interfaces that are a pleasure to use.
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

        <section id="tags" class="py-4 flex justify-center">
            {#each tags as tag}
                <button 
                    class="tag-button {selectedTags.includes(tag) ? 'active' : ''}" 
                    on:click={() => selectTag(tag)}>
                    {tag}
                </button>
            {/each}
        </section>
        
        <section id="selected-tags" class="py-4 flex justify-center">
            <div>
                <h2>Selected Tags:</h2>
                <ul>
                    {#each selectedTags as tag}
                        <li>{tag}</li>
                    {/each}
                </ul>
            </div>
        </section>


    </section>


    <section id="projects" class="py-40 lg:py-52 flex flex-col gap-24">

        <div class="flex flex-col text-center">
            <h1 class="text-lg sm:text-xl md:text-2xl">
                A few of my projects
            </h1>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10">
            <Step step={steps[0]}>
                <p>Attitude and Heading reference system using Madgwick's quaternion based algorithm to filter a 9 dof IMU
                    <strong class="text-violet-400">C++</strong>
                </p>
            </Step>

            <Step step={steps[1]}>
                <p>Classic Tic Tac Toe game implemented in Assembly language for the 8086 processor
                    <strong class="text-violet-400">Assembly</strong>
                </p>
            </Step>

            <Step step={steps[2]}>
                <p>Unscented Kalman Filter for tracking a moving object using a LIDAR and RADAR sensor
                    <strong class="text-violet-400">C++</strong>
                </p>
            </Step>

        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {#each filteredProjects as project}
              <div class="project-card p-4 border rounded shadow">
                <h2 class="text-xl font-bold">{project.title}</h2>
                <p class="text-sm">Tags: {project.tags.join(', ')}</p>
              </div>
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
            class="flex flex-col overflow-x-scroll overflow-hidden gap-10 max-w-[900px] max-h-[1000px] mx-auto w-full h-full"
        >

            <table class="bg-white text-slate-700 rounded text-center">
                <thead class="border-b border-solid border-slate-200">
                    <tr class="">
                        <th/>
                        <th class="whitespace-nowrap p-2 px-4">Web Dev</th>
                        <th class="whitespace-nowrap p-2 px-4">Embedded Dev</th>
                        <th class="whitespace-nowrap p-2 px-4">Networks/Cloud Dev</th>
                        <th class="whitespace-nowrap p-2 px-4">App Dev</th>
                        <th class="whitespace-nowrap bg-violet-700 text-white p-4 px-8">Machine Learning Dev</th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="border-b border-solid border-slate-200">
                        <td><i class="border border-solid border-white pl-4
                        pr-8 py-4 font-semibold text-sm whitespace-nowrap">Languages</i></td>
                        <td class="border border-solid border-gray p-4">JavaScript, TypeScript, HTML, CSS</td>
                        <td class="border border-solid border-gray p-4">C, C++, Assembly</td>
                        <td class="border border-solid border-gray p-4">Python, Java</td>
                        <td class="border border-solid border-gray p-4">Python, C++</td>
                    </tr>

                    <tr class="border-b border-solid border-slate-200">
                        <td><i class="border border-solid border-white pl-4 
                        pr-8 py-4 font-semibold text-sm whitespace-nowrap">Skills</i></td>
                        <td class="border border-solid border-gray p-4">Networking</td>
                        <td class="border border-solid border-gray p-4">Arduino, Raspberry Pi</td>
                        <td class="border border-solid border-gray p-4">Django, Flask</td>
                        <td class="border border-solid border-gray p-4">TensorFlow, PyTorch</td>
                    </tr>

                    <tr class="border-b border-solid border-slate-200">
                        <td><i class="border border-solid border-white pl-4 
                        pr-8 py-4 font-semibold text-sm whitespace-nowrap">Tools</i></td>
                        <td class="border border-solid border-gray p-4">React, Svelte</td>
                        <td class="border border-solid border-gray p-4">Keil, Proteus</td>
                        <td class="border border-solid border-gray p-4">Azure, Docker</td>
                        <td class="border border-solid border-gray p-4">Jupyter, Colab</td>
                    </tr>

                    <tr class="border-b border-solid border-slate-200">
                        <td><i class="border border-solid border-white pl-4
                        pr-8 py-4 font-semibold text-sm whitespace-nowrap">IDEs</i></td>
                        <td class="border border-solid border-gray p-4">VS Code, Docker Desktop</td>
                        <td class="border border-solid border-gray p-4">STM32Cube, Arduino, VS Code, Matlab</td>
                        <td class="border border-solid border-gray p-4">Firebase, AWS</td>
                        <td class="border border-solid border-gray p-4">Keras, Scikit-learn</td>
                    </tr>

                    <tr class="border-b border-solid border-slate-200">
                        <td><i class="border border-solid border-white pl-4
                        pr-8 py-4 font-semibold text-sm whitespace-nowrap">Projects</i></td>
                    </tr>

                </tbody>

            </table>

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

    <!-- styles end -->
</main>