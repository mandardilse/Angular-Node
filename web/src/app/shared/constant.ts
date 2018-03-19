import { Injectable } from "@angular/core";

@Injectable()
export class Constant {
	private backEnd_BaseUrl = 'http://localhost:3200'
	private auth_BaseUrl = '/auth'
	private user_BaseUrl = '/users'
	private post_BaseUrl = '/posts'

	readonly Login_Url = this.backEnd_BaseUrl+this.auth_BaseUrl+'/login';
	readonly Register_Url = this.backEnd_BaseUrl+this.auth_BaseUrl+'/register'
	readonly Users_Url = this.backEnd_BaseUrl+this.user_BaseUrl
	readonly Users_Profile = this.backEnd_BaseUrl+this.user_BaseUrl+'/profile/'
	readonly Posts_Url = this.backEnd_BaseUrl+this.post_BaseUrl
	//readonly Posts_Single_Url = this.backEnd_BaseUrl+this.post_BaseUrl+'/'
}