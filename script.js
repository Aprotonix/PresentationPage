function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor, repeat, base_delay) {
    let name_title_frame = document.getElementById("master_frame");
    let paths = document.querySelectorAll("path");
    let mode = repeat ? 'infinite' : 'forwards';

    // Applique l'animation de déplacement à la frame
    name_title_frame.style.position = "absolute";
    name_title_frame.style.animation = `${duration -1.5}s ${base_delay}s move-left ${mode} ${timingFunction}`;
    
    // Applique l'animation aux chemins SVG
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;
        path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style["animation-delay"] = `${i * delay + base_delay}s`;
    }
}

 setTextAnimation(0.1,3,2,'linear','#ffffff',false, 3);