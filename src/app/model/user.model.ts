class User {
  userId: number;
  username: string;
  password: string;
  userStatus: number;
  userType: string;

  constructor(userId: number, username: string, password: string, userStatus: number, userType: string) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.userStatus = userStatus;
    this.userType = userType;
  }
}
