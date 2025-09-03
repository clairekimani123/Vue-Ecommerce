import { defineStore } from "pinia";
import api from "@/services/api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as null | { id: number; name: string; role?: string },
    token: localStorage.getItem("token") || "",
  }),
  actions: {
    async login(email: string, password: string) {
      const res = await api.post("/login", { email, password });
      this.token = res.data.token;
      this.user = res.data.user;
      localStorage.setItem("token", this.token);
    },
    async register(data: any) {
      const res = await api.post("/register", data);
      this.user = res.data.user;
    },
    logout() {
      this.user = null;
      this.token = "";
      localStorage.removeItem("token");
    },
  },
});
