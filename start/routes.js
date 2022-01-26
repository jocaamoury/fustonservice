'use strict'

const Route = use('Route')

Route.on('/login').render('login')
Route.on('/inicio').render('inicio')
Route.post('/session', 'SessionController.login')