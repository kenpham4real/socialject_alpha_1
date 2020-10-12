import { ADMIN } from "../constants/user-types";

export class User{
    constructor(userId, token, userType, userEmail, userAvatar, userName, authenticatedMethod, isAuth=false){
        this.token = token;
        this.userType = userType;
        this.authenticatedMethod = authenticatedMethod;
        this.isAuth = isAuth;

        if(userType === ADMIN){
            this.orgId = userId;
            this.orgEmail = userEmail;
            this.orgAvatar = userAvatar;
            this.orgName = userName;
        }else{
            this.userId = userId
            this.userEmail = userEmail;
            this.userAvatar = userAvatar;
            this.userName = userName;
        }

    }
}