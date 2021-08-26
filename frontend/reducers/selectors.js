

export const allTodos = (state) => {
    debugger;
    return (
        Object.values(state.todos).map(todo => todo)
    );
};