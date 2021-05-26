export const increment = nr => {
    return {
        type: "INCREMENT",
        payload: nr
    };
};
export const decrement = nr => {
    return {
        type: "DECREMENT",
        payload: nr
    };
}
export const lotaliss = nr => {
        return {
            type: "lotaliss",
            payload: nr
        };
};
export const lotsatiss = nr => {
            return {
                type: "lotsatiss",
                payload: nr
            };
};