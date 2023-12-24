
const request={
    fetchTrednding:'https://api.themoviedb.org/3/trending/movie/week?api_key=7e4b705a95f358607892cc1d77b0f98c',
    Netflix_origionals:"https://api.themoviedb.org/3/search/movie?query=Netflix&include_adult=false&api_key=7e4b705a95f358607892cc1d77b0f98c",
    Toprated_move:"https://api.themoviedb.org/3/movie/top_rated?api_key=7e4b705a95f358607892cc1d77b0f98c",
    Action_move:"https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=7e4b705a95f358607892cc1d77b0f98c",
    Commedy_move:"https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=7e4b705a95f358607892cc1d77b0f98c",
    Horror_move:"https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=7e4b705a95f358607892cc1d77b0f98c",
    Romancy_Move:"https://api.themoviedb.org/3/discover/movie?with_genres=10749&api_key=7e4b705a95f358607892cc1d77b0f98c",
    Documentaries:"https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=7e4b705a95f358607892cc1d77b0f98c"
}
export default request;