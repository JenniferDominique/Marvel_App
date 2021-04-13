const express = require('express')
const app = express()
const cors = require('cors')
const passport = require('passport')
const session = require('express-session')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const PORT = '3101';

//**********  Middleware ***********

app.use(express.json()) //para conversão de application/json
app.use(express.urlencoded({ extended: true })) // para conversão de application/x-www-form-urlencoded
//para aceitar requisição de outros domínios
app.use(cors({
    credentials: true, // permite o cookie de sessão do navegador
    origin: 'http://localhost:3100' //localização da aplicação React
}));

app.use(session({
    secret: 'qqSenhaUnicaPorServidor', // palavra usada para assinar o cookie de identificação da sessão
    resave: true, // força a sessão ser atualizada a cada nova request
    saveUninitialized: false
}))
app.use(passport.initialize()) //para inicializar o passport
app.use(passport.session()) //para persistir a sessão de login

//para ter suporte a sessão o Passport precisa serializar e desserializar a sessão
passport.serializeUser(function (obj, done) {
    console.log('serializar:', obj)
    done(null, obj)
});
passport.deserializeUser(function (obj, done) {
    console.log('deserializar:', obj)
    done(null, obj)
});

//**********  Subir o servidor ***********
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}...`);
});

//**********  Rotas ***********

// obtido em https://console.developers.google.com/
const GOOGLE_CLIENT_ID = '402513763248-u8916oih9412q3vkf0b9up9ke0l8dqbt.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '69Q2sE_O2X2YOkD2BsmcYftd'
// configuração da estratégia de autenticação
passport.use(new GoogleStrategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
    },
    //callback de verificação, a função done será invocada após validar o usuário no BD
    function (accessToken, refreshToken, profile, done) {
        return op.setUsuario(profile.id, profile.displayName, profile.emails[0].value, done)
    }
));
//recebe os dados do Google e faz o redirecionamento
app.all('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: 'http://localhost:3100/erro'
    }
    ),
    function (req, res) {
        res.redirect('http://localhost:3100/')
    }
);

app.all('/login',
    //será adotada a GoogleStrategy
    //diz que queremos os dados do profile (id e display name) e email do usuário no Google
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/logout', function (req, res) {
    req.logout()
    if (!req.user)
        res.send({ nome: '', mail: '' })
    else
        res.send({ nome: req.user.nome, mail: req.user.mail })
});

app.get('/currentuser', (req, res) => {
    if (req.user) {
        let { nome, mail } = req.user
        res.send({ nome, mail })
    }
    else
        res.send({ nome: '', mail: '' })
})
