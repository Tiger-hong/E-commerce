import { useIntersectionObserver } from "@vueuse/core";

export const lazyPugin = {
  install(app) {
    app.directive("img-lazy", {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{isIntersecting}]) => {
          console.log(isIntersecting);
          if (isIntersecting) {
            console.log(el,binding)
            el.src = binding.value;
          }
        });
      },
    });
  },
};
