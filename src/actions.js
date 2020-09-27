

export const toggleModal = () => {
    return { 
        type: 'TOGGLE_MODAL'
    }
};

export const changeDate = (date) => {
    return {
        type: 'CHANGE_DATE',
        date
    }
}