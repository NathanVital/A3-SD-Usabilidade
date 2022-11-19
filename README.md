# A3-Usabilidade-SD
Projeto A3 referente as UCs: Sistemas Distribuídos &amp; Mobile e Usabilidade, Desenvolvimento Web, Mobile e Jogos, onde criamos uma solução computacional para uma clínica médica.

Amanda Mendes Santos RA: 820141459

Camila Gimenez Bortolotti RA: 820114759

Djalma Oliveira Costa Filho RA:820270510

Lucas Lindo de Sousa RA: 820144573

Nathan Vinicius Vital Santos RA: 820126079

Victor Sousa de Carvalho RA: 820266034

# Back-end Shopping List
#CP = Chave Primária

# Login
    -Usuário
        - Consulta (Tipos de usuário, informações de acesso)
        - Cadastro (CPF (CP), Nome, E-mail, Senha, Telefone)
        - Cadastro Médico/ Enfermeira ( CRM (CP), Nome, Senha, telefone, E-mail)
    -Token (Cookie de acesso, feito em SHA256)

# Agendamento 

# Verify

# Banco de dados

MongoExpress: p 8081:8081

URL = mongodb://localhost:27017/testdb

# env
ACCESS_TOKEN_SECRET 
REFRESH_TOKEN_SECRET 
ACCESS_TOKEN_EXPIRE_TIME 
REFRESH_TOKEN_EXPIRE_TIME 
PORT 
HOST 


nível de Usuarios:
0 = paciente

# Employee{   
    1 = funcionários (Get/ Post/ Create /Delete)
    2 = médicos (Get - consultas)
    3 = admin (Get/ Post/ Create/ Delete + users)

    {7 itens
        name:   {
                type: String
            },
            email:   {
                type: String
            },
            phone:   {
                type: String
            },
            cpf:   {
                type: String
            },
            crm:   {
                type: String
            },
            especie: (especialidade)  {
                type: String
            },
            password:   {
                type: String
            }
}

# consultas{
    data:   {
            type: Date
        },
        cpf:   {
            type: String
        },
        status:   {
            type: String
        },
        crm:   {
            type: String
        }
}

# MongoDB - usuario teste
{
"name":"Testivaldo",
  "email":"testivaldo@teste.com",
  "phone":"00123456789",
  "cpf":"123.456.789.00",
  "crm":"12345678/sp",
  "especie":"specieTeste",
  "password":"1234"
}

---
(MongoDB Format)
{
  "_id": {
    "$oid": "6366c0cee49a86eb3456fbae"
  },
  "name": "Testivaldo",
  "email": "testivaldo@teste.com",
  "phone": "00123456789",
  "cpf": "123.456.789.00",
  "crm": "12345678/sp",
  "especie": "specieTeste",
  "password": "1234"
}

}
# MongoDB - Consulta teste
{
    Status:
    0 - Pendente
    1 - Em andamento
    2 - Não Compareceu
    3 - Concluída


"data":"05/11/2022",
    "cpf":"123.456.789.00",
    "status":"pendente",
    "crm":"1234"
}

---
(MongoDB format)
{
  "_id": {
    "$oid": "6366cb7be49a86eb3456fbb9"
  },
  "data": "05/11/2022",
  "cpf": "123.456.789.00",
  "crm": "1234"
}






# Queries{

    db.consultas.find({})

}

# 

# 

# 