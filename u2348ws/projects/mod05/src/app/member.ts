export interface Member {
    userName: string;
    password: string;
    confirmPassword: string | null ;
    phone: string;
    email: string | null;
    birthday: Date | null ;
    enabled: boolean |null;
    subjects: (string | null)[];
}
