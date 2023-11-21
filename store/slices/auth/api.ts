import {instance} from "../../../api/instance"
import {ISignIn,} from "./types"

export const signIn = async (requestBody: ISignIn) => {
    try {
        const response = await instance.post("register", requestBody)

        return response.data
    } catch (error) {
        return error?.response.data
    }
}
