var tl = gsap.timeline()
tl.from(".nav img,.nav .middle,.nav .end",{
    y:-100,
    duration:1.5,
    delay:1,
    opacity:0,
    stagger:0.3
})
tl.from(".center h1",{
    y:100,
    opacity:0,
    duration:0.8,
    stagger:0.4,
})
tl.from(".center img",{
    scale:0,
    opacity:0,
    duration:0.7,
    stagger:0.2,
})
tl.from(".center h5",{
    scale:0,
    opacity:0,
})
tl.to(".center h5",{
    y:20,
    repeat:-1,
    duration:1,
    yoyo:true,
})