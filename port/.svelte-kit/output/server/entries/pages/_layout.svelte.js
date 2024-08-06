import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  let tabs = [{ name: "Projects", link: "#projects" }, { name: "About Me", link: "#about" }];
  if ($$props.y === void 0 && $$bindings.y && y !== void 0) $$bindings.y(y);
  return `<header${add_attribute(
    "class",
    "sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " + (y > 0 ? " py-4 bg-slate-950 border-violet-950" : "py-6 bg-transparent border-transparent"),
    0
  )}><h1 class="font-medium" data-svelte-h="svelte-18959v6"><b class="font-bold poppins">Andrey</b> Dimanchev</h1> <div class="sm:flex ml-auto pr-5 items-center gap-4 hidden">${each(tabs, (tab, index) => {
    return `<a${add_attribute("href", tab.link, 0)} class="duration-200 hover:text-violet-400"><p>${escape(tab.name)}</p> </a>`;
  })}</div> <a href="#footer" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950" data-svelte-h="svelte-5sygbg"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Contact Me</h4></a></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer id="footer" class="py-20 sm:py-32 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items0center" data-svelte-h="svelte-xdm5zn"><h2 class="text-center poppins text-violet-400 text-slate-950 text-2xl sm:text-3xl">Get in touch ↓</h2> <div class="flex flex-col gap-4 items-center justify-center"><p><b class="pr-2">Email</b> <i class="hover:text-violet-400">andreydimanchev@gmail.com</i></p> <p><b class="pr-2">GitHub</b> <a href="https://github.com/AndreyDiDev" target="_blank" class="hover:text-violet-400">AndreyDiDev
                <sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p><b class="pr-2">LinkedIn</b> <a href="https://www.linkedin.com/in/andreydimanchev/" target="_blank" class="hover:text-violet-400">Andrey Dimanchev
                <sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p></div> <p class="text-center poppins text-violet-400 text-slate-950 py-40">Made with <i class="fa-solid fa-heart text-violet-400"></i> <b class="text-center poppins text-violet-400 text-slate-950">by Andrey Dimanchev</b></p></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y = 0;
  return `<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"><div${add_attribute(
    "class",
    "fixed bottom-0 w-full duration-200 fle p-10 z-[10]  pointer-events-none opacity-0",
    0
  )}><button class="ml-auto rounded-full aspect-square bg-slate-900 text-violet-400 px-3 sm:px-4 hovering:bg-slate-800 cursor-pointer " data-svelte-h="svelte-1hquu3v"><i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i></button></div> ${validate_component(Header, "Header").$$render($$result, { y }, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
