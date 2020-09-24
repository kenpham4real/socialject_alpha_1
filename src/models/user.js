export class User{
    constructor(uid, token, userType, userEmail, userAvatar, userName, authenticatedMethod, isAuth=false){
        this.uid = uid;
        this.token = token;
        this.userType = userType;
        this.userEmail = userEmail;
        this.userAvatar = userAvatar;
        this.userName = userName;
        this.authenticatedMethod = authenticatedMethod;
        this.isAuth = isAuth;
    }
}