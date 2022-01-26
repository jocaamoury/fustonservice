'use strict'

const Route = use('Route')

Route.on('/').render('login')
Route.on('/inicio').render('inicio')
Route.post('/session', 'SessionController.login')