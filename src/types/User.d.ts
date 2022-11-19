export type User = {
  uid: string;
  email: string;
};

export type Authentication = {
  user: User | null;
  hasFetchedInitialAuthState: boolean;
};
