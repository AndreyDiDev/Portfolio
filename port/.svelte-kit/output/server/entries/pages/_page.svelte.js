import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0) $$bindings.step(step);
  return `<a${add_attribute("href", step.link, 0)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.image, 0)}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(step.title)}</h3> ${slots.default ? slots.default({}) : ``} <div class="flex-1 flex justify-between gap-4 items-center" data-svelte-h="svelte-99xgr9"><div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute afer:top-0 after:h-0 after:right-full after:w-full after:h-full after:bg-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="relative z-4">Go to →</p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      title: "UKF",
      image: "images/project1.png",
      link: "https://github.com/AndreyDiDev/UnscentedKalmanFilter"
    },
    {
      title: "Tic Tac Toe in Assembly",
      image: "images/project2.png",
      link: "https://github.com/AndreyDiDev/TicTacToeAssembly"
    },
    {
      title: "Madgwick AHRS Filter",
      image: "images/project3.png",
      link: "https://github.com/AndreyDiDev/MadgwickAHRS"
    }
  ];
  let benefits = [
    {
      title: "Passionate",
      description: "I am passionate about software development and I am always looking to learn new things."
    },
    {
      title: "Team Player",
      description: "I am a team player and I enjoy working with others to achieve a common goal."
    },
    {
      title: "Problem Solver",
      description: "I am a problem solver and I enjoy finding creative solutions to challenging problems."
    },
    {
      title: "Detail Oriented",
      description: "I am detail oriented and I take pride in my work."
    }
  ];
  let currentText = "";
  return `<main class="flex flex-col flex-1 p-4"><section id="IntroPage" class="grid grid-cols-1 lg:grid-cols-2 gap=10 py=8 sm:py-14"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">Hi, I&#39;m <span class="poppins text-violet-400" data-svelte-h="svelte-foi6b9">Andrey</span> Dimanchev 
                <br> ${escape(currentText)} <span class="poppins text-violet-400" data-svelte-h="svelte-16vsfor">Engineer</span></h2> <p class="text-base sm:text-lg md:text-xl" data-svelte-h="svelte-10zv9yv">I specialize in building websites and web applications that are fast, responsive, and accessible.
                Using <span class="text-violet-400">React</span> and <span class="text-violet-400">Svelte</span> to
                create modern user interfaces that are a joy to use.</p> <a class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950" cursor-pointer href="https://www.linkedin.com/in/andreydimanchev/" target="_blank" data-svelte-h="svelte-sj0jll"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-300"></div> <h4 class="relative z-9">Get in touch →</h4></a></div> <div class="relative shadow-4xl grid place-items-center" data-svelte-h="svelte-1kq2i66"><img${add_attribute("src", "images/profile3.png", 0)} alt="Profile Image" class="object-cover z-[2] max-h-[70vh] enlarge-on-hover scaled-image"></div></section> <section id="projects" class="py-40 lg:py-52 flex flex-col gap-24"><div class="flex flex-col text-center" data-svelte-h="svelte-1q9t3ud"><h1 class="text-lg sm:text-xl md:text-2xl">A few of my projects</h1></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-112qzug">Attitude and Heading reference system using Madgwick&#39;s quaternion based algorithm to filter a 9 dof IMU
                    <strong class="text-violet-400">C++</strong></p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1mwmhhp">Classic Tic Tac Toe game implemented in Assembly language for the 8086 processor
                    <strong class="text-violet-400">Assembly</strong></p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1vjmpti">Unscented Kalman Filter for tracking a moving object using a LIDAR and RADAR sensor
                    <strong class="text-violet-400">C++</strong></p>`;
    }
  })}</div> <div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-dgiphr"><h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see more?</span></h3></div> <a href="https://github.com/AndreyDiDev" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200 " data-svelte-h="svelte-1gy6o8a">Check out my GitHub →</a></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-az88ol"><h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about me</span></h3></div> <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-1m4n8qh">I am...</p> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">${each(benefits, (benefit, index) => {
    return `<div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(benefit.title)}</h3> <p>${escape(benefit.description)}</p></div> </div>`;
  })}</div> <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins" data-svelte-h="svelte-zm7q7q">The <span class="text-violet-400 poppins">Complete</span> Package</h5> <div class="flex flex-col overflow-x-scroll overflow-hidden gap-10 max-w-[900px] max-h-[1000px] mx-auto w-full h-full" data-svelte-h="svelte-1eujmfj"><table class="bg-white text-slate-700 rounded text-center"><thead class="border-b border-solid border-slate-200"><tr class=""><th></th> <th class="whitespace-nowrap p-2 px-4">Web Dev</th> <th class="whitespace-nowrap p-2 px-4">Embedded Dev</th> <th class="whitespace-nowrap p-2 px-4">Networks/Cloud Dev</th> <th class="whitespace-nowrap p-2 px-4">App Dev</th> <th class="whitespace-nowrap bg-violet-700 text-white p-4 px-8">Machine Learning Dev</th></tr></thead> <tbody><tr class="border-b border-solid border-slate-200"><td><i class="border border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Languages</i></td> <td class="border border-solid border-gray p-4">JavaScript, TypeScript, HTML, CSS</td> <td class="border border-solid border-gray p-4">C, C++, Assembly</td> <td class="border border-solid border-gray p-4">Python, Java</td> <td class="border border-solid border-gray p-4">Python, C++</td></tr> <tr class="border-b border-solid border-slate-200"><td><i class="border border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Skills</i></td> <td class="border border-solid border-gray p-4">Networking</td> <td class="border border-solid border-gray p-4">Arduino, Raspberry Pi</td> <td class="border border-solid border-gray p-4">Django, Flask</td> <td class="border border-solid border-gray p-4">TensorFlow, PyTorch</td></tr> <tr class="border-b border-solid border-slate-200"><td><i class="border border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Tools</i></td> <td class="border border-solid border-gray p-4">React, Svelte</td> <td class="border border-solid border-gray p-4">Keil, Proteus</td> <td class="border border-solid border-gray p-4">Azure, Docker</td> <td class="border border-solid border-gray p-4">Jupyter, Colab</td></tr> <tr class="border-b border-solid border-slate-200"><td><i class="border border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">IDEs</i></td> <td class="border border-solid border-gray p-4">VS Code, Docker Desktop</td> <td class="border border-solid border-gray p-4">STM32Cube, Arduino, VS Code, Matlab</td> <td class="border border-solid border-gray p-4">Firebase, AWS</td> <td class="border border-solid border-gray p-4">Keras, Scikit-learn</td></tr> <tr class="border-b border-solid border-slate-200"><td><i class="border border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Projects</i></td></tr></tbody></table></div> <div class="mx-auto -mt-12 italic sm:hidden opacity-50" data-svelte-h="svelte-zp0ubu"><p>Scroll to see more →</p></div> <div class="text-center poppins text-violet-400 text-slate-950 text-2xl sm:text-3xl" data-svelte-h="svelte-tibuku"><p>Why not invest?</p></div></section> <style data-svelte-h="svelte-1yasr7g">.scaled-image {
            transform: scale(1.1) rotateY(180deg);
        }</style> <style data-svelte-h="svelte-1i68x8m">.enlarge-on-hover {
            transition: transform 0.5s ease-in-out;
        }

        .enlarge-on-hover:hover {
            transform: scale(1.4);
        }</style> <style data-svelte-h="svelte-1s80y8i">.typing-animation {
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
    }</style></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};