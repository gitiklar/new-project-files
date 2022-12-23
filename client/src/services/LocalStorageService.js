class LocalStorageService {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  get(key) {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    } else {
      return "";
    }
  }
  remove(key) {
    localStorage.removeItem(key);
  }
}

export default new LocalStorageService();
