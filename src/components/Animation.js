export const translater = (translateLenght) => ({
    hidden: { translateX: translateLenght, opacity: 0.5 },
    visible: { translateX: "0px", opacity: 1, transition: { duration: 1.5 } }
})
export const translaterUpDown = (delay, translateLenght, opacity) => ({
    hidden: { translateY: `${translateLenght}px`, opacity: opacity },
    visible: { translateY: "0px", opacity: 1, transition: { duration: 1.5, delay: delay } }
})
export const translaterNav = (delay, translateLenght, opacity) => ({
    hidden: { translateX: `${translateLenght}px`, opacity: opacity },
    visible: { translateX: "0px", opacity: 1, transition: { duration: 1, delay: delay } }
})
