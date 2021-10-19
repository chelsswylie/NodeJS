import http from "../http-common";

class RegistrantDataService {
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }
}

export default new RegistrantDataService();
