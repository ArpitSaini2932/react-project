import config from "../config/config"
import {Client , ID , Storage, Databases, Query} from "appwrite"

export class Services{
    client = new Client()
    databases
    bucket

    constructor(){
        this.client 
        .setEndpoint(config.appwriteURL)
        .setProject(config.appwriteProjectId)
        this.databases= new Databases(this.client)
        this.bucket= new Storage(this.client)
    }

    async CreatePost({title , slug, content , status , featuredImg , userId}){
        try {
            return  await this.databases.createDocument(slug, config.appwriteDatabaseId, config.appwriteCollectionId, {
                title,
                slug,
                content,
                userId,
                status,
                featuredImg
            })
        } catch (error) {
            console.log("Appwrite Service :: CreatePost :: error" , error)
        }
    }

    async UpdatePost(slug, {userId, content, status, featuredImg,title }){
        try {
           return await this.databases.updateDocument(
                slug,
                config.appwriteCollectionId,
                config.appwriteDatabaseId,
                {
                    title,
                    status,
                    userId,
                    featuredImg,
                    content
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: UpdataPost:; error", error)
        }
    } 

    async DeletePost(slug){
        try {
          await this.databases.deleteDocument(
                slug,
                config.appwriteCollectionId,
                config.appwriteDatabaseId
            )
            return true 


        } catch (error) {
            console.log("Appwrite Sevices :: DeletePost :: error", error)
            return false
        }
    }
    
    async GetPost(slug){
        try {
           return await this.databases.getDocument(
                slug,
                config.appwriteCollectionId,
                config.appwriteDatabaseId,
            )
        } catch (error) {
            console.log("Appwrite Services :: GetPost :: error",error)
            return false
        }
    }

    async GetPosts(){
        try {
            return await this.databases.listDocuments(
                config.appwriteCollectionId,
                config.appwriteDatabaseId,
                [
                    Query.equal("status", "active")
                ]
            )
        } catch (error) {
            console.log("Appwrite Services :: GetPosts :: error",error)
        }
    }
    async UploadFile(file){
        try {
            return await this.bucket.updateFile(
                config.appwriteBucketId,
                file,
                ID.unique()
            )
        } catch (error) {
            console.log("Appwrite Services :: UploadFile :: error",error)
        }
    }

    async DeleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite Services :: DeleteFile :: error", error)
        }
    }
    GetFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log{"Appwrite Services :: GetFilePreview :: error", error}
        }
    }

}

const services = new Services()
export default services