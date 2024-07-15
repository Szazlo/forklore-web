export interface ForkloreUserMeta {
  username: string,
  firstName?: string
  lastName?: string,
}

// TODO: Add more fields
export interface ForkloreUser extends ForkloreUserMeta{
  type?: string,
  gender?: number,
  country?: string,
  // Omitted city and pfp path as pfp path can be implied from username
}
