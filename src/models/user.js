import { ADMIN } from "../constants/user-types";

export class User{
    constructor(uid, token, userType, userEmail, userAvatar, userName, authenticatedMethod, isAuth=false){
        this.token = token;
        this.userType = userType;
        this.authenticatedMethod = authenticatedMethod;
        this.isAuth = isAuth;

        if(userType === ADMIN){
            this.orgId = uid;
            this.email = userEmail;
            this.orgAvatar = userAvatar;
            this.orgName = userName;
        }else{
            this.userId = uid
            this.userEmail = userEmail;
            this.userAvatar = userAvatar;
            this.userName = userName;
        }

    }
}