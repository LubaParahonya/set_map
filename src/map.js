export default class ErrorRepository {
  constructor() {
    this.error = new Map();
  }

  setErr(code, description) {
    return this.error.set(code, description);
  }

  translate(code) {
    if (this.error.has(code)) {
      return this.error.get(code);
    }
    return 'Unknown error';
  }
}
