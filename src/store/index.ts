import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            listItem: [
                {
                    "id": 0,
                    "name": "Karunakaran",
                    "position": "Softwre Developer",
                    "country": "India",
                    "text": "Sharing a personal post which has shaped my career. Ishika Jain many congratulations on your graduation from University of British Columbia (UBC). Its been 25 years since I passed as",
                    "img": "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                },
                {
                    "id": 1,
                    "name": "Ravi",
                    "position": "Softwre Developer",
                    "country": "India",
                    "text": "Sharing a personal post which has shaped my career. Ishika Jain many congratulations on your graduation from University of British Columbia (UBC). Its been 25 years since I passed as",
                    "img": "https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
                },
                {
                    "id": 2,
                    "name": "Davido",
                    "position": "Developer",
                    "country": "India",
                    "text": "Sharing a personal post which has shaped my career. Ishika Jain many congratulations on your graduation from University of British Columbia (UBC). Its been 25 years since I passed as",
                    "img": "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
                },
                {
                    "id": 3,
                    "name": "Firos",
                    "position": "Developer",
                    "country": "India",
                    "text": "Sharing a personal post which has shaped my career. Ishika Jain many congratulations on your graduation from University of British Columbia (UBC). Its been 25 years since I passed as",
                    "img": "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
                }
            ]
        };
    },

    // MUTATIONS ( set the state )
    mutations: {
        addTweet: function (state, item) {
            state.listItem.push({
                id: state.listItem.length,
                ...item
            });
            alert("new tweet added");
            console.log(state.listItem);
        },
        deleteTweet: function (state, itemId) {
            state.listItem.splice(itemId, 1);
            // delete state.listItem[todoIndex];
            console.log(state.listItem);
            alert("tweet deleted "+itemId);
        },
        updateTweet: function (state, item) {
            state.listItem[item.id] = item
            console.log(state.listItem[item.id]);
            alert("tweet updated ");
        },
    },
    getters: {
        listItem: (state) => state.listItem,
    }
});
