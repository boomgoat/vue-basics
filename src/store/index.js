import Vue from "vue";
import Vuex from "vuex";
import { todos } from "./modules/todos";
import { users } from "./modules/users";
import { albums } from "./modules/albums";
import { comments } from "./modules/comments";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todos,
    users,
    albums,
    comments,
  },
});
