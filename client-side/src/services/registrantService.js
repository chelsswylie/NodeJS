import http from "../http-common";

class RegistrantDataService {
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }

  // need post function here - had it here before - was getting 404 due to wrong url
}

export default new RegistrantDataService();
