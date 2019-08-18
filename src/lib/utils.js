import Cookies from 'js-cookie'

export const setToken = (token, tokenName = 'token') => {
	Cookies.set(tokenName, token)
}

export const getToken = (tokenNmae = 'token') => {
	return Cookies.get(tokenNmae)
}
