import config from '../config/config'
import { Client, Databases, ID, Storage, Query } from 'appwrite'

export class DatabaseService {
    // Properties of `DatabaseService` class.
    client;
    databases;
    bucket;

    // Constructor.
    constructor() {
        this.client = new Client();
        this.client.setEndpoint(config.appwriteUrl);
        this.client.setProject(config.appwriteProjectID);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userID }) {
        try {
            return await this.databases.createDocument(config.appwriteDatabaseID, config.appwriteCollectionID, slug, {
                title,
                content,
                featuredImage,
                status,
                userID
            })
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {

            await this.databases.updateDocument(config.appwriteDatabaseID, config.appwriteCollectionID, slug, {
                title, content, featuredImage, status
            })
            return true;
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseID, config.appwriteCollectionID, slug)
        } catch (error) {
            console.log("Appwrite Database Service :: Error :: updatePost()", error);
            return false;
        }
    }

    // get single post
    async getPost(slug){
        try {
            return this.databases.getDocument(config.appwriteDatabaseID, config.appwriteCollectionID, slug)
        } catch (error) {
            console.log("Appwrite Database Service :: Error :: getPost()", error);
            return false;
        }
    }

    // get all active posts
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(config.appwriteDatabaseID, config.appwriteCollectionID, queries)
        } catch (error) {
            console.log("Appwrite Database Service :: Error :: getPosts()", error);
            return false;
        }
    }

    // file upload service - Appwrite Storage
    async uploadFile(file){
        try {
            return await this.bucket.createFile(config.appwriteBucketID, ID.unique(), file);
        } catch (error) {
            console.log("Appwrite Database Service :: Error :: uploadFile()", error);
            return false;
        }
    }

    // delete file - Appwrite Storage
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(config.appwriteBucketID, fileId);
            return true;
        } catch (error) {
            console.log("Appwrite Database Service :: Error :: deleteFile()", error);
            return false;
        }
    }

    getFilePreview(fileId)
    {
        return this.bucket.getFilePreview(config.appwriteBucketID, fileId);
    }
};


const databaseService = new DatabaseService;
export default databaseService;