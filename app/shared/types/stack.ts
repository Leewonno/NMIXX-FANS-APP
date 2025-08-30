export type HomeStackParamList = {
    Home: undefined;
    Community: { name: string };
    CommunityDetail: { id: number };
    Create: { community: string };
    Profile: undefined;
}

export type RootStackParamList = {
    Login: undefined;
    SignUp: undefined;
    My: undefined;
    Main: undefined;
};