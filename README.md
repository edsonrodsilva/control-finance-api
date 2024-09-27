## Sistema de controle financeiro pessoal

## Requisitos funcionais (RF)

# Módulo de Usuários
RF01: O sistema deve permitir o cadastro de novos usuários.
RF02: O sistema deve permitir a autenticação de usuários cadastrados.
RF03: O sistema deve permitir a recuperação de senha por e-mail.
RF04: O sistema deve permitir a exclusão da conta do usuário.
RF05: O sistema deve permitir a visualização do perfil do usuário.
RF06: O sistema deve permitir a edição do perfil do usuário.
RF07: O sistema deve permitir a alteração da senha do usuário.
RF08: O sistema deve permitir a alteração do e-mail do usuário.
RF09: O sistema deve permitir a Autenticação de dois fatores usando Google Authenticator.

# Módulo de Aplicações
RF01: O sistema deve permitir ao usuário cadastrar, editar e remover aplicações financeiras.
RF02: O sistema deve permitir ao usuário consultar detalhes de cada aplicação (nome, valor, rendimento, data de aplicação, etc.).
RF03: O sistema deve calcular automaticamente o rendimento acumulado das aplicações.

# Módulo de Patrimônio
RF04: O sistema deve permitir ao usuário cadastrar, editar e remover bens patrimoniais (imóveis, veículos, etc.).
RF05: O sistema deve exibir o valor total do patrimônio com base no valor dos bens cadastrados.
RF06: O sistema deve permitir a atualização do valor de mercado dos bens patrimoniais.

# Módulo de Dívidas
RF07: O sistema deve permitir ao usuário cadastrar, editar e remover dívidas (empréstimos, financiamentos, etc.).
RF08: O sistema deve calcular automaticamente o saldo devedor com base nas parcelas pagas e a pagar.
RF09: O sistema deve exibir um cronograma de pagamento das dívidas com suas respectivas datas de vencimento.

# Módulo de Projetos
RF10: O sistema deve permitir ao usuário cadastrar, editar e remover projetos financeiros (viagens, reformas, etc.).
RF11: O sistema deve permitir definir metas financeiras para cada projeto.
RF12: O sistema deve exibir o progresso financeiro de cada projeto em relação à meta.

# Módulo de Reserva Financeira
RF13: O sistema deve permitir ao usuário cadastrar, editar e remover reservas financeiras.
RF14: O sistema deve calcular automaticamente o valor total das reservas financeiras.

# Módulo de Aposentadoria
RF15: O sistema deve permitir ao usuário cadastrar, editar e remover informações sobre sua aposentadoria planejada.
RF16: O sistema deve calcular o valor estimado para a aposentadoria com base em simulações de contribuições e rendimentos.

# Módulo de Movimentações de Caixa
RF17: O sistema deve permitir o registro de entradas e saídas de dinheiro.
RF18: O sistema deve categorizar as movimentações financeiras (salário, compras, investimentos, etc.).
RF19: O sistema deve exibir o saldo de caixa atualizado em tempo real.

# Módulo de Orçamento
RF20: O sistema deve permitir ao usuário definir orçamentos mensais para diferentes categorias de despesas.
RF21: O sistema deve exibir um alerta quando o orçamento definido for ultrapassado.
RF22: O sistema deve permitir a visualização de relatórios mensais de despesas em comparação com o orçamento.

# Módulo de Dashboard
RF23: O sistema deve exibir um painel de controle consolidado com informações resumidas de todas as finanças do usuário.
RF24: O sistema deve exibir gráficos de desempenho financeiro (patrimônio, dívidas, aplicações, etc.).
RF25: O sistema deve fornecer relatórios detalhados para cada módulo financeiro.

# Regras de negócio (RN)
RN01: O sistema deve permitir apenas um cadastro por CPF, e o usuário deve ser autenticado para acessar as funcionalidades.
RN02: O valor total do patrimônio do usuário deve ser recalculado sempre que um novo bem é adicionado, removido ou seu valor é atualizado.
RN03: O sistema deve permitir ao usuário planejar o pagamento de dívidas e notificar 2 dias antes do vencimento de cada parcela.
RN04: O usuário deve ser notificado quando alcançar 90% do orçamento estabelecido em uma categoria de despesa.
RN05: O sistema deve permitir ao usuário exportar relatórios financeiros em formato PDF, CSV e XLSX entre um intervalo de datas.

# Requisitos não funcionais (RNF) 
RNF01: O sistema deve ser desenvolvido utilizando TypeScript e Node.js para o backend.
RNF02: O sistema deve ser desenvolvido utilizando React.js TypeScript e Node.js para o frontend.
RNF04: O sistema deve utilizar PostgreSQL como banco de dados relacional.
RNF05: O sistema deve suportar até 10.000 usuários simultâneos.
RNF06: O tempo de resposta do sistema para operações de consulta deve ser inferior a 2 segundos.
RNF07: O sistema deve ser responsivo e acessível de dispositivos móveis e desktops.
RNF08: O sistema deve implementar autenticação e autorização utilizando JWT (JSON Web Token).
RNF09: O sistema deve seguir as melhores práticas de segurança, incluindo encriptação de dados sensíveis.
RNF10: O sistema deve garantir alta disponibilidade com uma taxa de uptime de 99.9%.
RNF11: O sistema deve ser escalável horizontalmente para lidar com aumento de carga de usuários e dados.
RNF12: Todas as operações financeiras e transações devem ser auditáveis com histórico de mudanças.
