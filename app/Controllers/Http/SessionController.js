'use strict'

class SessionController {
    async login ({request, response, auth, session}){
        const {email, password} = request.all()
        try{
            await auth.attempt(email , password)
            return response.redirect('/inicio')
        }catch(error){
            session.flash({
                message: 'Autenticação não pode ser efetuada',
                type: 'danger'
            })
            return response.redirect('/')
        }
        console.log(email,password)
    }
}

module.exports = SessionController
