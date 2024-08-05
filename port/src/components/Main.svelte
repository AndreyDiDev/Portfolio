<script>
    import Step from './Step.svelte';
    
    
    let steps = [
        {
            title: 'UKF',
            image: 'images/project1.png',
            link: 'https://github.com/AndreyDiDev/UnscentedKalmanFilter'
        },
        {
            title: 'Tic Tac Toe in Assembly',
            image: 'images/project2.png',
            link: 'https://github.com/AndreyDiDev/TicTacToeAssembly'
        },
        {
            title: 'Madgwick AHRS Filter',
            image: 'images/project3.png',
            link: 'https://github.com/AndreyDiDev/MadgwickAHRS'
        },
    ];

</script>

<main class="flex flex-col flex-1 p-4">
    <section id="IntoPage" class="grid grid-cols-1 lg:grid-cols-2 gap=10 py=8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi, I'm <span class="poppins text-violet-400">Andrey</span> Dimanchev <br/> Software
                <span class="poppins text-violet-400">Engineer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                I specialize in building websites and web applications that are fast, responsive, and accessible.
                Using <span class="text-violet-400">React</span> and <span class="text-violet-400">Svelte</span> to
                create modern user interfaces that are a joy to use.
            </p>

            <a  
            
                class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins
                relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
                cursor-pointer
                href="https://www.linkedin.com/in/andreydimanchev/" target="_blank">

                <div
                    class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-300">
                </div>

                <h4 class="relative z-9">Get in touch &rarr;</h4>
        </div>

        <div class="relative shadow-2xl grid place-items-center">
            <img src={"images/profile.png"} alt="Profile Image" class="object-cover z-[2] max-h-[70vh] mirror-image"/>
        </div>
    </section>



    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my projects
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-violet-400">see more?</span>
            </h3>
        </div>
        <a href="https://github.com/AndreyDiDev" target="_blank" class=" mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0
            -mt-10 hover:border-violet-700 duration-200 ">
                Check out my GitHub &rarr;
        </a>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
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
            A bit <span class="popppins text-violet-400">about me</span>
        </h3>

        </div>

        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am...</p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">

        </div>

    </section>


    <style>
        .mirror-image {
            transform: scaleX(-1);
        }
    </style>

</main>