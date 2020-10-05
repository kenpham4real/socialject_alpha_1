import { ADMIN } from "../constants/user-types";

export class User{
    constructor(uid, token, userType, userEmail, userAvatar, userName, authenticatedMethod, isAuth=false){
        this.uid = uid;
        this.token = token;
        this.userType = userType;
        this.authenticatedMethod = authenticatedMethod;
        this.isAuth = isAuth;

        if(userType === ADMIN){
            this.email = userEmail;
            this.orgAvatar = userAvatar;
            this.orgName = userName;
        }else{
            this.userEmail = userEmail;
            this.userAvatar = userAvatar;
            this.userName = userName;
        }

    }
}