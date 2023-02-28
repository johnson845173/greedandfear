async function on_load(){const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
  });

const hiddenelement = document.querySelectorAll('.hidden');

hiddenelement.forEach((el)=>observer.observe(el));
}