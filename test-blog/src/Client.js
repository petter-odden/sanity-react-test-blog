import client from "@sanity/client"

export default client({
    projectId: "t69jowl7",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-12-16"
})