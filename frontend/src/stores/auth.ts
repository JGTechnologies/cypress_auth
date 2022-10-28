import { defineStore } from "pinia";
import { computed, ref } from "vue";

const idName = "user-id";
const accessTokenName = "access-token";

export default defineStore("authStore", () => {
  // state
  const accessToken = ref("");
  const id = ref(-1);

  // getters
  const getAccessToken = computed(() => {
    if (accessToken.value.length > 0) {
      return accessToken.value;
    }

    return localStorage.getItem(accessTokenName);
  });
  const getId = computed(() => {
    if (id.value > -1) {
      return id.value;
    }

    return +(localStorage.getItem(idName) ?? -1);
  });
  const getIsAuthenticated = computed(
    () => getAccessToken.value !== "" && getId.value > -1
  );

  // actions
  const setId = (value: number) => {
    localStorage.setItem(idName, value.toString());
    id.value = value;
  };
  const setAccessToken = (value: string) => {
    localStorage.setItem(accessTokenName, value);
    accessToken.value = value;
  };

  return { getAccessToken, getId, getIsAuthenticated, setAccessToken, setId };
});
