import { defineStore } from "pinia";
import api from "@/services/api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as null | { id: number; name: string; role: string },
    token: localStorage.getItem("token") || "",
  }),
  actions: {
    async login(email: string, password: string, role: "customer" | "supplier") {
      const res = await api.post(`/${role}/login`, { email, password });
      this.token = res.data.token;
      this.user = res.data.user;
      localStorage.setItem("token", this.token);
    },
    async register(data: any, role: "customer" | "supplier") {
      const res = await api.post(`/${role}/register`, data);
      this.user = res.data.user;
    },
    logout() {
      this.user = null;
      this.token = "";
      localStorage.removeItem("token");
    }
  },
});
