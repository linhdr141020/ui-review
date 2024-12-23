import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Google from "next-auth/providers/google"
export const authOptions = {
    providers: [Google],
}
const {
    handlers,
    auth,
    signIn,
    signOut,
    unstable_update: update
} = NextAuth(authOptions)

export default { handlers, auth, signIn, signOut, update };