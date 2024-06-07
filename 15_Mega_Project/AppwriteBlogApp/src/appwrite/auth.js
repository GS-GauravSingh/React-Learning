import config from '../config/config'
import { Client, Account, ID } from 'appwrite'

// Creating User Authentication - By reading documentation.
// Quality Code for create Authentication Service for our project.
// This class will have all the logic related to user authentication.
export class AuthService {

    // Creating properties of `AuthService` class.
    client;
    account;

    // Constructor
    constructor() {
        this.client = new Client();
        this.client.setEndpoint(config.appwriteUrl);
        this.client.setProject(config.appwriteProjectID);

        this.account = new Account(this.client);
    }

    async createAccount({ name, email, password }) {

        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({email, password});
            }
            else {
                // userAccount  == null
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }


    async login({email, password})
    {
        try {
            await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            const currentUser = await this.account.get();
            return currentUser;
        } catch (error) {
            throw error;
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

// Creating Object of `AuthService` class.
const authService = new AuthService;

// Exporting Object.
export default authService;