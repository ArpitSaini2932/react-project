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

    async CreatePost({title ,  content , status , featuredimage , userId}){
        try {
            return  await this.databases.createDocument( config.appwriteDatabaseId, config.appwriteCollectionId,ID.unique(),{
                title,
                content,
                userId,
                status,
                featuredimage,
            })
        } catch (error) {
            console.log("Appwrite Service :: CreatePost :: error" , error)
            throw error
        }
    }

    async UpdatePost(documentId, {userId, content, status, featuredimage,title }){
        try {
           return await this.databases.updateDocument(
              
                
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                documentId,
                
                {
                    title,
                    status,
                    userId,
                    featuredimage,
                    content,
                    
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: UpdataPost:; error", error)
        }
    } 

    async DeletePost(documentId){
        try {
          await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                
                documentId,
            )
            return true 


        } catch (error) {
            console.log("Appwrite Sevices :: DeletePost :: error", error)
            return false
        }
    }
    
    async GetPost(documentId){
        try {
           return await this.databases.getDocument(
                 config.appwriteDatabaseId,
                config.appwriteCollectionId,
               
                documentId,
            )
        } catch (error) {
            console.log("Appwrite Services :: GetPost :: error",error)
            return false
        }
    }

    async GetPosts(){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
           
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
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
                
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
 GetFilePreview(fileId) {
  try {
    if (!fileId) return ""
    return this.bucket.getFileView(config.appwriteBucketId, fileId) // ✅ changed here
  } catch (error) {
    console.log("Appwrite Services :: GetFilePreview :: error", error)
    return ""
  }
}



}

const services = new Services()
export default services