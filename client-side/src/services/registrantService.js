import http from "../http-common";

class RegistrantDataService {
  getAll() {
    return http.get(`Administration`);
  }

  postData() {
    return http.get(`Registration`);
  }

  // need post function here - had it here before - was getting 404 due to wrong url
}

export default new RegistrantDataService();
