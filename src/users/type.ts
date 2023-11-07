export type UserListType = {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};

export interface IUserComponent {
  userList: Array<UserListType>;
}
