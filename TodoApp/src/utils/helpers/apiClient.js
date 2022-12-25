import axios from "axios";
import _ from "lodash";
import { useMainStore } from "../../stores/mainStore";
axios.interceptors.request.use((x) => {
  x.meta = x.meta || {};
  x.meta.requestStartedAt = new Date().getTime();
  return x;
});
axios.interceptors.response.use((x) => {
  x.config.requestTotalTime =
    new Date().getTime() - x.config.meta.requestStartedAt;
  return x;
});
export default {
  get(endpoint, customConfig = {}) {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "x-tenant": this.getTenantHeader(),
      },
    };
    if (Object.keys(customConfig).length > 0) {
      _.merge(config, customConfig);
    }
    return new Promise((resolve, reject) => {
      let url = "";
      try {
        url = this.getUrl(endpoint);
      } catch (err) {
        console.log(err);
      }
      axios
        .get(url, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          const response = error.response;
          if (axios.isCancel(error)) {
            reject(response);
          }
          if (response?.status == 401) {
            //unauthorized
            const mainStore = useMainStore();
            mainStore.router.push({
              path: "/login",
            });
          } else {
            reject(response);
          }
        });
    });
  },
  login(data) {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };
    return new Promise((resolve, reject) => {
      axios
        .post(this.getUrl("auth/login"), data, config)
        .then((response) => {
          this.setTenantHeader(response.headers["x-tenant"]);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  logout() {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "x-tenant": this.getTenantHeader(),
      },
    };
    return new Promise((resolve, reject) => {
      axios
        .get(this.getUrl("auth/logout"), config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  post(endpoint, data, customConfig = {}) {
    const client = this;
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "x-tenant": this.getTenantHeader(),
      },
    };
    if (Object.keys(customConfig).length > 0) {
      _.merge(config, customConfig);
    }
    return new Promise((resolve, reject) => {
      axios
        .post(this.getUrl(endpoint), data, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          const response = error.response;
          if (response.status == 401) {
            //unauthorized
            const mainStore = useMainStore();
            mainStore.router.push({ path: "/login" });
          } else {
            reject(error.response);
          }
        });
    });
  },
  patch(endpoint, data, customConfig = {}) {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "x-tenant": this.getTenantHeader(),
      },
    };
    if (Object.keys(customConfig).length > 0) {
      _.merge(config, customConfig);
    }
    return new Promise((resolve, reject) => {
      axios
        .patch(this.getUrl(endpoint), data, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          const response = error.response;
          if (response.status == 401) {
            //unauthorized
          } else {
            reject(response);
          }
        });
    });
  },
  delete(endpoint, customConfig = {}) {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "x-tenant": this.getTenantHeader(),
      },
    };
    if (Object.keys(customConfig).length > 0) {
      _.merge(config, customConfig);
    }
    return new Promise((resolve, reject) => {
      axios
        .delete(this.getUrl(endpoint), config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          const response = error.response;
          if (response.status == 401) {
            //unauthorized
          } else {
            reject(response);
          }
        });
    });
  },
  getUrl(url) {
    return window._rdapp.node_config.backendUrl + url;
  },
  getTenantHeader() {
    return window._rdapp.node_config.tenant;
  },
  setTenantHeader(value) {
    window._rdapp.node_config.tenant = value;
  },
};
