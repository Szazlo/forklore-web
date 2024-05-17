// TODO: Add more fields
export interface ForkloreUser {
  username: string,
  type?: string,
  firstName?: string
  lastName?: string,
  gender?: number,
  country?: string,
  // Omitted city and pfp path as pfp path can be implied from username
}