export interface Users {
    userId: number;
    username: string;
    userFullname: string;
    userEmail: string;
    userPassword: string;
    //createdEvents?: Event[];
    //joinedEvents?: Event[];

    createdEvents?: any;
    joinedEvents?:any;
}

