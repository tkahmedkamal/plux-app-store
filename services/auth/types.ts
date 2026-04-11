export interface SignupApiResponse extends BaseResponse {
	data: AuthData;
}

export interface LoginApiResponse extends BaseResponse {
	data: AuthData;
}
