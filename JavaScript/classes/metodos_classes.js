class User {
    constructor(name, email){
        this.name = name // repassando as propriedades ao nosso objeto
        this.email = email
    }
    sendEmail(){
        console.log("E-mail enviado para", this.name, "para o endereço", this.email)
    }
}
const user = new User("Vitoria", "vitoria@email.com")
user.sendEmail()