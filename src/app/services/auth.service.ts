export class AuthService {
  private authToken = '';

  takeTime(time: number) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(
        () => {
          resolve();
        },
        time ? time : 500
      );
    });
  }

  isAuthenticated() {
    return this.takeTime(300).then(() => {
      return this.authToken;
    });
  }

  authenticate() {
    this.takeTime(500);
    this.authToken = 'token';
  }

  unauthenticate() {
    this.takeTime(100);
    this.authToken = '';
  }
}
