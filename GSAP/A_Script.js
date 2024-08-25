gsap.to("#box1",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    // repeat:1
    // -1 is for infinite
    repeat:-1, 
    yoyo:true
})
// gsap.from("#box1",{
//     x:1000,
//     duration:2,
//     delay:1
// })
gsap.to("#box2",{
    x: 1000,
    duration:2,
    delay:1
})