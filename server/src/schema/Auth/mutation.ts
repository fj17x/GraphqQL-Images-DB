export const authMutation = {
  signin: (_, args, { dataSources }) => {
    return dataSources.AppAPI.signin(args)
  },
  register: (_, args, { dataSources }) => {
    return dataSources.AppAPI.register(args)
  },
  logout: (_, __, { dataSources }) => {
    return dataSources.AppAPI.logout()
  },
  updateAccountDetails: (_, { detailsToUpdate }, { dataSources }) => {
    return dataSources.AppAPI.updateAccountDetails(detailsToUpdate)
  },
  deleteAccount: (_, __, { dataSources }) => {
    return dataSources.AppAPI.deleteAccount()
  },
}
