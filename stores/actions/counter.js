export const increaseCounter = () => {
    return {
        type: "INCREASE"
    }
}

export const decreaseCounter = (data) => {
    return{
        type: "DECREASE",
        data: data
    } 
}