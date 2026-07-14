import axios from 'axios';
import { get } from 'svelte/store';
import config from '../stores/config';
import lodash_get from 'lodash.get';

let LOGIN_ENABLED = false;

let authData = {
  headers: {
    authorization: localStorage.getItem("jwt"),
  },
};

const loadData = async () => {
  return new Promise(async (resolve, reject) => {

    // Run the code below if we dont' have a current user
    if (lodash_get(get(config), ".currentUser.username") == undefined) {
      try {
        const response = await Promise.all([
          axios.get(`${get(config).backendURL}/me`, authData),
          axios.get(`${get(config).backendURL}/settings`),
        ]);

        // If he was not found in the session, login first
        let currentUser = response[0].data;

        if (currentUser.error && LOGIN_ENABLED) window.location = "/login";

        config.update((prev) => ({ ...prev, currentUser, }));

        resolve({ loading: false });
      } catch (err) {
        console.log(err);
        if (LOGIN_ENABLED) window.location = "/login";
        resolve({ loading: false, loggedIn: false });
      }
    } else {
      resolve({ loading: false });
    }

    // After we have loaded the data, to avoid constant refetching
    if (!get(config).currentUser.username) {
      if (LOGIN_ENABLED) window.location = "/login";
      resolve({ loading: false, loggedIn: false });
    }
  });
}

export default loadData;