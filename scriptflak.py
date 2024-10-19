from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SECRET_KEY'] = '22C@00-10nd12-11di11-4nos18'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(50))
    email = db.Column(db.String(50), unique=True)
    senha_hash = db.Column(db.String(100))

@app.route('/cadastro', methods=['POST'])
def cadastro():
    data = request.get_json()
    nome = data.get('nome')
    email = data.get('email')
    senha = data.get('senha')

    # Verificar se o email já está cadastrado
    if Usuario.query.filter_by(email=email).first():
        return jsonify({'message': 'Email já cadastrado!'}), 409

    # Criar novo usuário com senha hasheada
    hashed_password = generate_password_hash(senha, method='sha256')
    novo_usuario = Usuario(nome=nome, email=email, senha_hash=hashed_password)
    db.session.add(novo_usuario)
    db.session.commit()

    return jsonify({'message': 'Usuário registrado com sucesso!'})

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    senha = data.get('senha')

    # Verificar se o usuário existe
    usuario = Usuario.query.filter_by(email=email).first()
    if not usuario or not check_password_hash(usuario.senha_hash, senha):
        return jsonify({'message': 'Credenciais inválidas!'}), 401

    return jsonify({'message': 'Login realizado com sucesso!', 'email': email})

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)