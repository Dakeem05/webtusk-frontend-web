export default {
    TOGGLE_LOADER(state, action) {
        let loader = document.getElementById('applicationBusyPage');
        if(loader){
          action ? loader.classList.remove("d-none") : loader.classList.add("d-none");
        }
    },
    UPDATE_WINDOW_SCROLL_Y(state) {
        state.scrollY = window.scrollY;
    },
    UPDATE_WINDOW_WIDTH(state) {
        state.windowWith = window.innerWidth
    },
    SET_COUNTRY(state, country){
        state.country = {...country}
    },
    SET_TRUST_REVIEWS(state, reviews){
        state.trustReviews = [...reviews]
    },
    UPDATE_USER_INFO(state, user) {
        if(!user) return
        state.appActiveUser = {...user};
    },
}
