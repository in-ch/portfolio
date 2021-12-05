

export const isFirstLoading = () => {
    if(localStorage.getItem("isFirstLoading") === 'on')  {
        return false;
    } else {
        localStorage.setItem("isFirstLoading",'on');
        return true;
    }
};