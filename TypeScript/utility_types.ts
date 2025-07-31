// typescript possui vários utility types que ajudam a transformar: partial, required, pick, omit, record.

interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

// partial - todas as propriedades opcionais
type UsuarioAtualizar = Partial<Usuario>;

// pick - selecionar propriedades específicas
type UsuarioPublico = Pick<Usuario, 'id' | 'nome' | 'email'>;

// omit - excluir propriedades específicas
type UsuarioSemSenha = Omit<Usuario, 'senha'>;

// record - criar objeto com chaves e valores específicos
type StatusUsuario = Record<string, boolean>;