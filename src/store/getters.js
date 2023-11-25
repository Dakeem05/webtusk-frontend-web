
export default {
    getCountry:(state) => {
        if(!state.country.code) return null
        return state.countries.find((con) => con.code == state.country.code);
    },
    token: (state, getters) => {
        if(!state.appActiveUser) return null
        return getters.generateToken(state.appActiveUser);
    },
    generateToken: (_) => (user) => {
        return btoa(JSON.stringify({
            email: user.email,
            app_token: user.app_token
        }));
    },
    sortReviews: (state, getters) => sortby => {
        let reviews = [...state.reviews]
        if(sortby == 'relevant'){
            reviews.sort((x,y) => {
                return y.rating - x.rating
            })
        }
        return reviews;
    },
    reviewCounter:(state, getters) => {
        let reviews = [...state.reviews]
        let total = reviews.length
        let five = reviews.filter(r => r.rating == 5).length
        let four = reviews.filter(r => r.rating == 4).length
        let three = reviews.filter(r => r.rating == 3).length
        let two = reviews.filter(r => r.rating == 2).length
        let one = reviews.filter(r => r.rating == 1).length
        return {
            total: total,
            breakdown: {
                five: five,
                four: four,
                three: three,
                two: two,
                one: one
            },
            sum_per_rate:{
                five: five*5,
                four: four*4,
                three: three*3,
                two: two*2,
                one: one*1
            },
            percentage: {
                five: (five/total)*100,
                four: (four/total)*100,
                three: (three/total)*100,
                two: (two/total)*100,
                one: (one/total)*100,
            },
            average: total ? Math.round(((five*5+four*4+three*3+two*2+one*1)/total) * 10)/10 : 0,
        }
    }
}
