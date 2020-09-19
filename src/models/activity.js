
/**
 * @class
 * @summary Activity object in the progress board of the project
 * @constructor @global 
 */
export class Activity {
    constructor(activityId, activityName, activityDescription, activityLocation, activityDate){
        this.activityId = activityId;
        this.activityName = activityName;
        this.activityDescription = activityDescription;
        this.activityLocation = activityLocation;
        this.activityDate = activityDate;
    }
}